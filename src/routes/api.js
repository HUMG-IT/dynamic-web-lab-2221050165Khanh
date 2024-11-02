/**
 * Module định nghĩa các route của ứng dụng
 * 
 * Module này định nghĩa các route liên quan đến:
 * - Lưu tên của người dùng.
 * - Tính và phân loại chỉ số BMI từ dữ liệu người dùng.
 */

const express = require('express');
const router = express.Router();
const { submitName } = require('../controllers/nameController');
const { getBMI } = require('../controllers/bmiController'); // Thêm dòng này để import getBMI

// Route cho endpoint `/submit`
router.post('/submit', submitName);

// Route cho endpoint `/bmi`
router.post('/bmi', getBMI); // Định nghĩa route POST cho `/bmi`

module.exports = router;
