import React, { useState } from "react";
import { notification } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!email || !password) {
      notification.warning({
        message: "Заполните все поля",
        description: "Введите email и пароль.",
      });
      return;
    }

    setLoading(true);

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

      if (response.data.token) {
        // Сохраняем токен в sessionStorage или localStorage
        if (rememberMe) {
          localStorage.setItem("token", response.data.token);
        } else {
          sessionStorage.setItem("token", response.data.token);
        }
      }

      navigate("/profile");
    } catch (error) {
      console.error("Ошибка входа:", error);

      let errorMessage = "Ошибка сети. Попробуйте снова.";
      if (error.response) {
        if (error.response.status === 401) {
          errorMessage = "Неверный email или пароль!";
        } else {
          errorMessage = error.response.data?.message || errorMessage;
        }
      }

      notification.error({
        message: "Ошибка входа",
        description: errorMessage,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80">
        <h2 className="text-2xl font-bold mb-4 text-center">Вход</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 mb-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          autoFocus
        />
        <input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 mb-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          onKeyDown={(e) => e.key === "Enter" && handleLogin()}
        />
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            id="rememberMe"
            checked={rememberMe}
            onChange={() => setRememberMe(!rememberMe)}
            className="mr-2"
          />
          <label htmlFor="rememberMe" className="text-sm">Запомнить меня</label>
        </div>
        <button
          onClick={handleLogin}
          disabled={loading}
          className={`w-full px-4 py-2 rounded text-white ${
            loading ? "bg-gray-400" : "bg-green-500 hover:bg-green-600"
          } transition`}
        >
          {loading ? "Вход..." : "Войти"}
        </button>
      </div>
    </div>
  );
};

export default Login;
