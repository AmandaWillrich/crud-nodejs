const db = require("../config/database");

exports.testController = async (req, res) => {
    const { teststring } = req.body;
    const { rows } = await db.query(
        "INSERT INTO testing (testString) VALUES ($1)",
        [teststring]
    );

    res.status(201).send({
        message: "Product added successfully!",
        body: {
            testKey: { teststring }
        },
    });
};