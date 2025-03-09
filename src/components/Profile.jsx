import React, { useEffect, useState } from "react";
import axios from "axios";

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get("https://api.ashyo.fullstackdev.uz/users/me", { 
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`, 
          },
        });

        setUser(response.data); 
      } catch (error) {
        console.error("Ошибка загрузки профиля:", error);
      }
    };

    fetchUser();
  }, []);

  if (!user) return <p>Загрузка...</p>;

  return (
    <div>
      <h2>Профиль</h2>
      <p><strong>Имя:</strong> {user.fullname}</p>
      <p><strong>Email:</strong> {user.email}</p>
    </div>
  );
};

export default Profile;
