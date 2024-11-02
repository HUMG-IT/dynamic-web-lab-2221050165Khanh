// utils/bmi.js

/**
 * Tính chỉ số BMI
 * @param {number} weight - Cân nặng (kg)
 * @param {number} height - Chiều cao (cm)
 * @returns {number} - Chỉ số BMI
 */
const calculateBMI = (weight, height) => {
    return (weight / (height * height)).toFixed(2); // Chỉnh sửa ở đây, chiều cao cần là m
};

/**
 * Phân loại chỉ số BMI
 * @param {number} bmi - Chỉ số BMI
 * @returns {string} - Phân loại BMI
 */
const classifyBMI = (bmi) => {
    if (bmi < 18.5) return "Gầy";
    else if (bmi < 25) return "Bình thường";
    else if (bmi < 30) return "Thừa cân";
    else return "Béo phì";
};

module.exports = { calculateBMI, classifyBMI };