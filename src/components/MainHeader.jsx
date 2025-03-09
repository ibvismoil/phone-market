import React from "react";
import { Search, ShoppingCart, Heart, Mail, User, List } from "lucide-react" 
import { useNavigate } from "react-router-dom";


export default function Header() {
    const navigate = useNavigate();

  return (
    <header className="bg-white shadow-sm px-6 py-3">
      <div className="max-w-[1250px] mx-auto flex items-center justify-between">

        <div className="flex items-center space-x-2">
          <img src="../src/assets/MainHeader/logo.svg" alt="Logo" className="" />
          <span className="font-roboto font-black text-[36px] leading-[100%] tracking-[0%] text-blue-700">Ashyo</span>
        </div>

        <div className="flex items-center flex-1 mx-6">
          <button className="bg-blue-700 mr-4 text-white px-4 py-2 rounded-md flex items-center space-x-1 cursor-pointer">
            <List size={16} />
            <span>Kategoriya</span>
          </button>
          <input
            type="text"
            placeholder="What are you looking for?"
            className="flex-1 px-4 py-2 border rounded-md border-none bg-gray-100 focus:outline-none"
          />
          <button className="bg-blue-700 text-white px-4 py-2 rounded-md cursor-pointer">
            <Search width="20px" height="26px" />
          </button>
        </div>

        <div className="flex items-center space-x-4 cursor-pointer">
          <div className="relative">
            <ShoppingCart className="text-gray-600" size={20} />
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-1 rounded-full">2</span>
          </div>
          <div className="relative">
            <Heart className="text-gray-600" size={20} />
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-1 rounded-full">11</span>
          </div>
          <div className="relative">
            <Mail className="text-gray-600" size={20} />
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-1 rounded-full">7</span>
          </div>
          <button onClick={() => navigate("/login")} className="p-2 cursor-pointer">
            <User className="text-gray-600" size={20} />
         </button>
        </div>
      </div>
      
      <nav className="max-w-[1250px] mx-auto mt-4 flex gap-[13px] items-center justify-center space-x-10 text-gray-600 text-sm">
        <a href="#" className="hover:text-black">Aksiyalar</a>
        <a href="#" className="hover:text-black">Smartfonlar</a>
        <a href="#" className="hover:text-black">Noutbooklar</a>
        <a href="#" className="hover:text-black">Kondetsionerlar</a>
        <a href="#" className="hover:text-black">Telivizorlar</a>
        <a href="#" className="hover:text-black">Muzlatgichlar</a>
        <a href="#" className="hover:text-black">Kiryuvish mashinalari</a>
        <a href="#" className="hover:text-black">Telivizorlar</a>
        <a href="#" className="hover:text-black">Kiryuvish mashinalari</a>
      </nav>

    </header>
  );
}
