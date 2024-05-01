const db = require('../config/database');

exports.deleteOrderByIdController = async (req, res) => {
    const order_id = parseInt(req.params.id);
    const { rows } = await db.query(
        `DELETE FROM "${process.env.DB_TABLE}" WHERE id=$1`,
        [order_id]
    );

    res.status(201).send({
        message: "Pedido removido com sucesso",
        body: {
            order: order_id
        },
    });
};