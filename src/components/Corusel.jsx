import React from "react";
import "../App.css";
import { Carousel } from "antd";

const slides = [
  {
    title: "Siz kutgan Xiaomi 12 Mi Laite",
    description:
      "Orginalik va qulay narxni o‘zida jamlagan Xiaomi 12 Mi Laite siz uchun eng yaxshi arziydigan takliflarimizdan biridir.",
    image: "  ../src/assets/slider/xiaomi.png",
    buttonText: "Batafsil",
    buttonLink: "#",
  },
  {
    title: "iPhone 15 Pro Max",
    description:
      "Yangi iPhone 15 Pro Max — yuqori sifat va kuchli texnologiyalar birlashtirilgan.",
    image: "  ../src/assets/slider/apple.png",
    buttonText: "Ko‘proq ma’lumot",
    buttonLink: "#",
  },
  {
    title: "Samsung S25 Ultra",
    description:
      "Yangi Samsung S25 Ultra — yuqori sifat va eng zor kuchli texnologiyalar birlashtirilgan.",
    image: "  ../src/assets/slider/samsung",
    buttonText: "Ko‘proq ma’lumot",
    buttonLink: "#",
  },
  {
    title: "Honor H6",
    description:
      "Yangi Honor H6 — yuqori sifat va kuchli экран, eng zor texnologiyalar birlashtirilgan va arzon narxda.",
    image: "../src/assets/slider/honor.png",
    buttonText: "Ko‘proq ma’lumot",
    buttonLink: "#",
  },
];
const CustomCarousel = () => {
  return (
    <Carousel autoplay dots={{ className: "custom-dots" }}>
      {slides.map((slide, index) => (
        <div
          key={index}
          className="flex items-center justify-between px-10 py-10 bg-gray-100"
        >
          <div className="w-1/2">
            <h2 className="text-4xl font-bold text-gray-900">{slide.title}</h2>
            <p className="text-gray-600 my-4">{slide.description}</p>
            <a
              href={slide.buttonLink}
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
            >
              {slide.buttonText}
            </a>
          </div>

          {/* Используем background-image вместо <img> */}
          <div
            className="w-1/2 h-96 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          ></div>
        </div>
      ))}
    </Carousel>
  );
};

export default CustomCarousel;
