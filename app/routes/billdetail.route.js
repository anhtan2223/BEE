const router = require('express').Router();
const detail = require('../controllers/billdetail.controller')

router.route('/:id')
        .get(detail.findBillDetail)
        .delete(detail.deleteBillDetail)

router.route('/').post(detail.creatBillDetail)

module.exports = router