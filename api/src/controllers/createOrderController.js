const db = require('../config/database');

exports.createOrderController = async (req, res) => {
    const {
        product,
        quantity,
        price,
        delivery_date
     } = req.body;
    
    const { rows } = await db.query(
        `INSERT INTO "${process.env.DB_TABLE}" (product, quantity, price, delivery_date) VALUES ($1, $2, $3, $4) RETURNING *`,
        [product, quantity, price, delivery_date]
    );

    res.status(201).send({
        message: "Pedido adicionado com sucesso!",
        body: {
            order: rows[0]
        },
    });
};