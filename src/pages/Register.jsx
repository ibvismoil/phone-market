import React, { useState } from "react";
import { notification } from "antd";
import axios from "axios";

const Register = () => {
  const [fullname, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    if (!fullname || !email || !password) {
      notification.warning({
        message: "Заполните все поля",
        description: "Пожалуйста, введите имя, email и пароль.",
      });
      return;
    }

    try {
      const response = await axios.post("https://api.ashyo.fullstackdev.uz/auth/register", {
        fullname,
        email,
        password,
      });

      notification.success({
        message: "Успешная регистрация",
        description: "Теперь вы можете войти в систему!",
      });

      console.log("Register success:", response.data);
    } catch (error) {
      notification.error({
        message: "Ошибка регистрации",
        description: error.response?.data?.message || "Что-то пошло не так!",
      });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Register Page</h2>
      <input
        type="text"
        placeholder="Имя"
        value={fullname}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 mb-2 w-64"
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 mb-2 w-64"
      />
      <input
        type="password"
        placeholder="Пароль"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border p-2 mb-4 w-64"
      />
      <button
        onClick={handleRegister}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Зарегистрироваться
      </button>
    </div>
  );
};

export default Register;
