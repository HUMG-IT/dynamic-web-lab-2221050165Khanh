// controllers/bmiController.js

const { calculateBMI, classifyBMI } = require("../models/bmi"); // Đảm bảo nhập đúng hàm

const getBMI = (req, res) => {
  const { height, weight } = req.body;

  // Kiểm tra dữ liệu đầu vào
  if (!height || !weight || isNaN(height) || isNaN(weight)) {
    return res
      .status(400)
      .json({ error: "Vui lòng nhập chiều cao và cân nặng hợp lệ." });
  }

  // Tính chỉ số BMI
  const bmi = calculateBMI(weight, height); // Sử dụng height đã nhập
  const classification = classifyBMI(bmi);

  // Trả về JSON chứa chỉ số BMI và phân loại
  res.json({ bmi, classification });
};

module.exports = { getBMI };
