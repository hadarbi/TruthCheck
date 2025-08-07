# 🕵️‍♀️ TruthCheck: AI-Powered Misinformation Detection Tool  
**Author:** Hadar Biton  

TruthCheck is a powerful, user-friendly tool that uses AI to analyze short-form social media content (like tweets, headlines, or posts). It helps detect **misinformation**, **bias**, and **questionable sources**, empowering users to think critically and spot red flags in the information they consume.

---

## ✨ Features  
- 🧠 **AI-Powered Analysis** – Detects misleading information, bias, and lack of sources  
- 📱 **Simple Input** – Paste any tweet, post, or headline for instant insights  
- 🚨 **Flag Highlights** – Clear visual feedback on potential issues  
- ⚡ **Fast & Responsive UI** – Built with React + MUI  

---

## 🛠️ Technologies  
- **Frontend:** React.js + Material UI  
- **Backend:** Node.js (Express, Axios)  
- **AI Integration:** OpenAI API (ChatGPT)  

---

## 🚀 Getting Started

### 🔐 Step 1: Set Up Your API Key  
Create a `.env` file in the `backend/` folder, based on the provided `.env.example`:

```env
OPEN_AI_KEY=<your-openai-api-key>
MODEL=gpt-3.5-turbo
PORT=3001
```

You can get an OpenAI key from [https://platform.openai.com/account/api-keys](https://platform.openai.com/account/api-keys).

---

### 🧱 Step 2: Install and Run the Backend
```
bash
cd backend
npm install
node server.js
```

> 🔁 This starts the Express server on `http://localhost:3001`

---

### 🎨 Step 3: Install and Run the Frontend

```bash
cd frontend
npm install
npm start
```

> 🌐 Opens the React app at `http://localhost:3000`

---

## 🧪 How to Use

1. ✏️ Paste any short-form text (e.g. tweet, post, or headline) into the input box
2. 🚀 Click **"Analyze"**
3. 🔍 Get results highlighting:

   * Misinformation flags
   * Potential bias
   * Lack of verifiable sources
   * Metadata and summary
4. 📋 Review the results and use them to critically evaluate the original content

> 🧠 Tip: Try testing it with controversial or viral posts to see how it responds!

---

## 📌 Notes

* Make sure your API key is valid and within usage limits
* The analysis is intended as an aid — always verify important claims independently
* Works best with real social media content (English only for now)

---

## 💡 Contributing

This is a proof of concept — suggestions and ideas are welcome!
Feel free to fork, star, and submit pull requests.

---

## 🛡️ License

MIT License — free to use, modify, and distribute with attribution.

