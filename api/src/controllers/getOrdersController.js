const db = require('../config/database');

exports.getOrdersController = async (req, res) => {
    const { rows } = await db.query(
        `SELECT * FROM "${process.env.DB_TABLE}" ORDER BY delivery_date ASC`
    );

    res.status(200).send({
        body: {
            orders: rows
        },
    });
};