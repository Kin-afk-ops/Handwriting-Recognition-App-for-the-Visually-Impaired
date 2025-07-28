# 📱 Handwriting Recognition App for the Visually Impaired

Ứng dụng di động hỗ trợ người khiếm thị nhận dạng chữ viết tay hoặc in qua camera điện thoại, sử dụng công nghệ AI và phản hồi bằng giọng nói.

---

## 📦 Dự án bao gồm 4 phần:

1. **AI Service (Python notebook trên Google Colab + ngrok)**
2. **Database (PostgreSQL chạy bằng Docker)**
3. **Server Backend (Flask + PostgreSQL)**
4. **Client (React Native với Expo)**

---

## 🚀 Hướng dẫn chạy

### 🧠 1. AI Service (Chạy trên Google Colab)

- Mở file notebook AI (Handwriting_Recognition_App_AI.ipynb) trên Google Colab.
- Kết nối với GPU (T4 nếu có).
- Chạy toàn bộ cell.
- **Lưu ý:** Cần đăng ký dịch vụ của [ngrok](https://ngrok.com/) và thêm Token tên miền để sử dụng.

📺 Xem hướng dẫn chi tiết tại video [YouTube](https://youtu.be/7v4of1TlBBY?si=soQdoHxlg0d6TmiJ) (phút 17 trở đi).

---

### 🗃️ 2. Database PostgreSQL (chạy bằng Docker)

- Yêu cầu đã cài **Docker** trên máy.
- Mở terminal tại thư mục `db2/`:

```bash
docker compose up -d

```

### 🔧 3. Server Backend (Flask)

#### ⚙️Yêu cầu:

- Python 3.10+
- Docker (để chạy PostgreSQL)
- Virtual Environment (venv)

#### 🔐 Tạo file .env và thêm các biến sau:

    DB_HOST=localhost
    DB_PORT=5432
    DB_NAME=postgres
    DB_USER=postgres
    DB_PASS=admin
    JWT_SECRET_KEY=your_jwt_secret
    CLOUD_NAME=your_cloudinary_cloud
    CLOUD_API_KEY=your_api_key
    CLOUD_API_SECRET=your_api_secret
    NGROK_TOKEN=your_token  # (tùy chọn)
    NGROK_DOMAIN=your_domain.ngrok-free.app  # (tùy chọn)

#### 🔧 Các bước chạy:

```bash
# Tạo và kích hoạt môi trường ảo
python -m venv venv
source venv/bin/activate  # (Linux/macOS)
venv\Scripts\activate     # (Windows)

# Cài đặt thư viện
pip install -r requirements.txt

# Chạy Flask Server
python run.py
```

### 📱 4. Client (React Native với Expo)

#### ⚙️ Yêu cầu:

- Node.js 18+
- Yarn hoặc npm
- Expo CLI:

```bash
npm install -g expo-cli
```

#### 🔐 Tạo file .env trong thư mục client/ với nội dung:

    SERVER_DOMAIN=(Địa chỉ ip hoặc domain ngrok néu ở trên dùng ngrok)
    AI_DOMAIN=Domain của ngrok chạy trên colab AI

#### ⚠️ Lưu ý: Đảm bảo các dịch vụ ngrok đang chạy và đúng domain.

#### 🔧 Các bước chạy:

```bash
cd client
yarn install          # hoặc npm install
expo start
```

## 📱 Gợi ý: Dùng ứng dụng Expo Go trên điện thoại để quét mã QR và chạy ứng dụng nhanh chóng.
