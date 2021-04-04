const { check, body } = require('express-validator');

module.exports = [
    check('name')
    .notEmpty().withMessage("Debés ingresar un nombre"), 
    check('description')
    .notEmpty().withMessage("Debés ingresar una descripcion"),
    check('price')
    .notEmpty().withMessage("Debés ingresar un precio"),
    check('quantity')
    .notEmpty().withMessage("Debés ingresar una cantidad"),
]


AAAAA
