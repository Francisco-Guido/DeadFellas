const { check, body } = require('express-validator');

module.exports = [
    check('email')
      .isEmail().trim().escape().normalizeEmail().withMessage("Debés ingresar un email válido. No te olvides del @").not().isEmpty(),
     check('password')
      .isLength({min: 6, max:12}).withMessage("El mínimo de caracteres es 6 y el máximo es 12").not().isEmpty()
      /*.matches('[0-9]').withMessage('debe contener un numero')
      .matches('[A-Z]').withMessage('debe contener una letra mayuscula'),
     /* check('repassword').custom(async (pass,{req}) => {
        if(req.body.password != pass){
          throw new Error('Las contraseñas no coinciden');
        }
      }),  */
]
