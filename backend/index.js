import dotenv from 'dotenv';  // загрузка .env
import path from "path";

// загружаем .env сразу
dotenv.config({ path: path.resolve('./.env') });

import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express();
app.use(cors());
app.use(express.json());


// Проверка переменных окружения
console.log("MONGO_URI:", process.env.MONGO_URI);
console.log("PORT:", process.env.PORT);

// Подключаем MongoDB Atlas
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ MongoDB Atlas подключена!");
  } catch (error) {
    console.error("❌ Сервак на MONGO ATLAS не работает:", error.message);
    process.exit(1);
  }
};

connectDB();

app.get("/", (req, res) => {
  res.send("Сервак работает 🚀");
});

app.listen(process.env.PORT, () => {
  console.log(`Сервак запущен на порту ${process.env.PORT}`);
});
