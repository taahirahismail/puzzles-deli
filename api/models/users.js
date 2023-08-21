const db = require('../config');
const {hash, compare, hashSync} = require('bcrypt');
const {createToken} = require('../middleware/authenticateUser');

class Users {
    fetchUsers(req, res) {
        const query = `SELECT userID, firstName, lastName, emailAdd, userPass, contactNum FROM Users;`

        db.query(query, (err, results) => {
            if (err) throw err
            res.json({
                status: res.statusCode,
                results
            });
        });
    }

    fetchUser(req, res) {
        const query = `SELECT userID, firstName, lastName, emailAdd, userPass, contactNum FROM Users WHERE userID = ${req.params.id};`

        db.query(query, (err, result) => {
            if (err) throw err
            res.json({
                status: res.statusCode,
                result
            });
        });
    }

    async register(req, res) {
        const data = req.body 

        // encrypt password
        data.userPass = await hash(data.userPass, 15);

        // payload
        const user = {
            emailAdd: data.emailAdd,
            userPass: data.userPass
        }

        // query
        const query = `INSERT INTO Users SET ?;`

        db.query(query,
            [data],
            (err) => {
                if (err) throw err

                // create token
                let token = createToken(user)
                res.cookie("LegitUser", token, {
                    maxAge: 3600000,
                    httpOnly: true
                });

                res.json({
                    status: res.statusCode,
                    message: "Ayyye, you're registered!"
                });
            });
    }

    login(req, res) {
        const {emailAdd, userPass} = req.body

        // query
        const query = `SELECT firstName, lastName, emailAdd, userPass, contactNum FROM Users WHERE emailAdd = '${emailAdd}';`

        db.query(query, async (err, result) => {
            if (err) throw err

            if (!result?.length) {
                res.json({
                    status: res.statusCode,
                    message: "Don't you know your own email, dude?"
                });
            } else {
                await compare(userPass,
                    result[0].userPass,
                    (cErr, cResult) => {
                        if (cErr) throw cErr

                        // create token
                        const token = createToken({
                            emailAdd,
                            userPass
                        });

                        // save token
                        res.cookie("LegitUser",
                        token, {
                            maxAge: 3600000,
                            httpOnly: true
                        });

                        if (cResult) {
                            res.json({
                                message: "Welcome back to Puzzles Deli!",
                                token,
                                result: result[0]
                            });
                        } else {
                            res.json({
                                status: res.statusCode,
                                message: "Check your password or register yourself, bru."
                            });
                        }
                    });
            }
        });
    }

    updateUser(req, res) {
        const query = `UPDATE Users SET ? WHERE userID = ?`

        db.query(query,
            [req.body, req.params.id],
            (err) => {
                if (err) throw err
                res.json({
                    status: res.statusCode,
                    message: "You've just updated yourself. We love to see it."
                });
            });
    }

    deleteUser(req, res) {
        const query = `DELETE FROM Users WHERE userID = ${req.params.id};`

        db.query(query, (err) => {
            if (err) throw err
            
            res.json({
                status: res.statusCode,
                message: "You'll be back. We'll wait."
            });
        });
    }
}

module.exports = Users;