# 📸 Instagram-style Login Page with CORS and Node.js Backend

This project is a front-end clone of Instagram's login UI that sends login credentials to a simple Node.js Express backend. It is **for educational and ethical cybersecurity testing purposes only** (such as learning how phishing attacks can be simulated and detected in secure environments).

---

## ⚙️ Stack Used

### Frontend
- **HTML5** – Markup for the Instagram-style login page
- **CSS3** – Responsive design mimicking the Instagram UI
- **JavaScript (Vanilla)** – Handles form submission and sends a POST request to the backend

### Backend
- **Node.js** – JavaScript runtime used to run the server
- **Express.js** – Lightweight web framework to handle POST requests
- **CORS** – Cross-Origin Resource Sharing configuration to allow frontend-backend communication
- **File System (fs)** – Built-in Node module used to write received data to a `log.txt` file

---

## 🚀 How It Works

1. User inputs a username and password on the frontend form.
2. JavaScript intercepts the form submission and sends the data to the backend via `fetch`.
3. Express backend logs the credentials into a `log.txt` file.
4. CORS is configured to allow requests from the specific front-end origin (`http://127.0.0.1:5500`).

---

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/instagram-login-clone.git
cd instagram-login-clone/backend

# Install dependencies
npm install

# Run the server
node server.js
