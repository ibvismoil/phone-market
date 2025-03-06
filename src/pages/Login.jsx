import React, { useState } from "react";
import { notification } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); 

  const handleLogin = async () => {
    if (!email || !password) {
      notification.warning({
        message: "Заполните все поля",
        description: "Введите email и пароль.",
      });
      return;
    }

    try {
      const response = await axios.post(
        "https://api.ashyo.fullstackdev.uz/auth/login",
        { email, password },
        { headers: { "Content-Type": "application/json" } }
      );

      notification.success({
        message: "Успешный вход",
        description: "Вы успешно вошли в систему!",
      });

      console.log("Login success:", response.data);

      // Сохраняем токен в localStorage (если сервер его отправляет)
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
      }

      // ✅ Перенаправляем пользователя в профиль
      navigate("/profile");

    } catch (error) {
      console.error("Ошибка входа:", error.response);

      notification.error({
        message: "Ошибка входа",
        description:
          error.response?.data?.message || "Неправильные данные или ошибка сервера!",
      });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Login Page</h2>
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
        onClick={handleLogin}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Войти
      </button>
    </div>
  );
};

export default Login;
