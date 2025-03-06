import { useState } from "react";
import { MapPin } from "lucide-react";

export default function Header() {
  const [lang, setLang] = useState("Uz");
  const [open, setOpen] = useState(false);

  return (
    <header className="flex justify-center px-6 py-2 bg-[#EBEFF3] shadow-sm text-gray-700 text-sm">
      <div className="w-[1250px] flex justify-between items-center">
        {/* Левая часть */}
        <div className="flex items-center space-x-4">
          <span className="flex items-center space-x-1">
            <MapPin width="16px" height="16px" />
            <span>Tashkent</span>
          </span>
          <nav className="flex space-x-4">
            <a href="#" className="hover:text-black">About Us</a>
            <a href="#" className="hover:text-black">Products</a>
            <a href="#" className="hover:text-black">Contacts</a>
          </nav>
        </div>

        {/* Правая часть */}
        <div className="flex items-center space-x-4">
          <span className="text-gray-500">+998 (71) 123-45-67</span>

          {/* Выбор языка */}
          <div className="relative">
            <button onClick={() => setOpen(!open)} className="flex items-center space-x-1">
              <span>{lang}</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {open && (
              <div className="absolute right-0 mt-2 w-20 bg-white border rounded shadow-md">
                <button onClick={() => { setLang("Uz"); setOpen(false); }} className="block w-full px-3 py-1 hover:bg-gray-100">
                  Uz
                </button>
                <button onClick={() => { setLang("Ru"); setOpen(false); }} className="block w-full px-3 py-1 hover:bg-gray-100">
                  Ru
                </button>
                <button onClick={() => { setLang("En"); setOpen(false); }} className="block w-full px-3 py-1 hover:bg-gray-100">
                  En
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
