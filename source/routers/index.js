const express= require('express');
const app = express();
const router = express.Router();

const generalController = require ('../controllers/generalController')

router.get('/', generalController.home);


module.exports = router;













