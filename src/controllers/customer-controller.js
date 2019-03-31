'use strict'

const ValidationContract = require('../validators/fluent-validator');
const repository = require('../repositories/customer-repository');

exports.post = async (req, res, next) => {

    let contract = new ValidationContract();
    contract.hasMinLen(req.body.name, 3, 'o nome deve conter pelo menos 3 caracteres');
    contract.isEmail(req.body.email, 'E-mail inválido');
    contract.hasMinLen(req.body.password, 6, 'O password deve conter pelo menos 6 caracteres');

    if (!contract.isValid()) {
        res.status(400).send(contract.errors()).end();
        return;
    }
    
    try {
        await repository.create(req.body)
        res.status(201).send({ message: 'Cliente cadastrado com sucesso!' });
    } catch (err) {
        res.status(400).send({
            message: 'Falha ao processar sua requisição',
            data: err
        });
    }
};