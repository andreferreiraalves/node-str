'use strict'

const guid = require('guid');
const repository = require('../repositories/order-repository');

exports.get = async (req, res, next) => {
    try {
        var data = await repository.get();
        res.status(200).send(data);
    } catch (err) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
};

exports.post = async (req, res, next) => {
    try {
        await repository.create(
            {
                customer: req.body.customer,
                number: guid.raw().substring(0, 6),
                items: req.body.items
            })
        res.status(201).send({ message: 'Pedido cadastrado com sucesso!' });
    } catch (err) {
        res.status(400).send({
            message: 'Falha ao processar sua requisição',
            data: err
        });
    }
};
