<template>
    <form>
        <label for="userID">ID: </label>
        <input type="number" name="userID" id="userID" required>
        <label for="firstName">First Name:  </label>
        <input type="text" name="firstName" id="firstName" required>
        <label for="lastName">Last Name: </label>
        <input type="text" name="lastName" id="lastName" required>
        <label for="email">Email: </label>
        <input type="email" name="email" id="email" required>
        <label for="password">Password: </label>
        <input type="text" name="password" id="password" required>
        <label for="contactnumber">Contact Number: </label>
        <input type="number" name="contactnumber" id="contactnumber" required>
        <input id="btnAction" type="submit" value="Submit" /><br />
        <input id="btnAction" type="reset" value="Reset" />
    </form>
</template>