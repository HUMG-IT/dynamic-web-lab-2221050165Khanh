// Form lưu tên
document.getElementById('nameForm').addEventListener('submit', async function (e) {
    // Ngăn hành vi mặc định của form (ngăn tải lại trang)
    e.preventDefault();

    // Lấy giá trị nhập từ trường input có id là 'name'
    const name = document.getElementById('name').value;

    // Gửi yêu cầu POST đến server tại route '/submit' với dữ liệu JSON
    const response = await fetch('/api/v1/submit', {
        method: 'POST',  // Sử dụng phương thức POST để gửi dữ liệu
        headers: {
            'Content-Type': 'application/json',  // Định nghĩa kiểu nội dung gửi là JSON
        },
        body: JSON.stringify({ name: name }),  // Chuyển đổi đối tượng { name: name } thành chuỗi JSON
    });

    // Chờ phản hồi từ server và chuyển đổi phản hồi từ JSON thành đối tượng JavaScript
    const data = await response.json();

    // Hiển thị thông điệp trả về từ server trong phần tử có id là 'nameResponse'
    document.getElementById('nameResponse').textContent = `${data.message}. Danh sách tên: ${data.names.join(', ')}`;
});

// Form tính BMI
document.getElementById('bmiForm').addEventListener('submit', async function (e) {
    e.preventDefault();  // Ngăn hành vi mặc định của form

    // Lấy giá trị chiều cao và cân nặng nhập từ form
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);

    // Kiểm tra dữ liệu đầu vào
    if (isNaN(height) || isNaN(weight)) {
        document.getElementById('bmiResult').textContent = "Vui lòng nhập chiều cao và cân nặng hợp lệ.";
        return;
    }

    // Gửi yêu cầu POST đến server
    const response = await fetch('/api/v1/bmi', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ height, weight }),  // Chuyển đổi đối tượng thành chuỗi JSON
    });

    // Kiểm tra phản hồi từ server
    if (response.ok) {
        const data = await response.json();  // Chuyển đổi phản hồi từ JSON thành đối tượng JavaScript
        // Hiển thị thông điệp trả về từ server
        document.getElementById('bmiResult').textContent = `BMI của bạn là: ${data.bmi}, Phân loại: ${data.classification}`;
    } else {
        document.getElementById('bmiResult').textContent = "Lỗi khi tính toán BMI. Vui lòng thử lại.";
    }
});
