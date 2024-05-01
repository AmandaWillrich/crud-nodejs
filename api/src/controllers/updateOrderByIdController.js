const db = require('../config/database');

exports.updateOrderByIdController = async (req, res) => {
    const order_id = parseInt(req.params.id);
    const { product, quantity, price, delivery_date } = req.body;
    const { rows } = await db.query(
        `UPDATE "${process.env.DB_TABLE}" SET product=$1, quantity=$2, price=$3, delivery_date=$4 WHERE id=$5`,
        [product, quantity, price, delivery_date, order_id]
    );

    res.status(201).send({
        message: "Pedido atualizado com sucesso",
        body: {
            order: { product, quantity, price, delivery_date }
        },
    });
};