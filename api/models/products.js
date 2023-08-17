const db = require('../config');

class Products {
    fetchProducts(req, res) {
        const query = `SELECT productID, productName, productDesc, price, img FROM Products;`

        db.query(query, (err, results) => {
            if (err) throw err

            res.json({
                status: res.statusCode,
                results
            });
        });
    }

    fetchProduct(req, res) {
        const query = `SELECT productID, productName, productDesc, price, img FROM Products WHERE productID = ${req.params.id}`

        db.query(query, (err, result) => {
            if (err) throw err
            res.json({
                status: res.statusCode,
                result
            });
        });
    }

    addProduct(req, res) {
        const query = `INSERT INTO Products SET ?;`

        db.query(query,
            req.body,
            (err) => {
                if (err) throw err

                res.json({
                    status: res.statusCode,
                    message: "A new product has been added!"
                });
            });
    }

    updateProduct(req, res) {
        const query = `UPDATE Products SET ? WHERE productID = ?`

        db.query(query,
            [req.body, req.params.id],
            (err) => {
                if (err) throw err

                res.json({
                    status: res.statusCode,
                    message: "Hoyaa, product improvements you wys?"
                });
            });
    }

    deleteProduct(req, res) {
        const query = `DELETE FROM Products WHERE productID = ${req.params.id};`

        db.query(query, (err) => {
            if (err) throw err

            res.json({
                status: res.statusCode,
                message: "Aww, I liked that one :(."
            });
        });
    }
}

module.exports = Products;