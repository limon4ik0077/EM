import React, { useState } from 'react';
import { Search, Phone, MapPin, ChevronDown, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg">
      {/* Top Bar */}
      <div className="bg-blue-900 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+7 (990) 232 86 91</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>г. Мелитополь, ул. Богдана Хмельницкого, 40, оф. 2</span>
              </div>
            </div>
            <div className="text-xs">
              <span>ИНН 787878787878 | ОГРН 8787878787878</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              {/* Geometric Logo Symbol */}
              <div className="w-12 h-12 relative">
                <div className="absolute inset-0 border-4 border-gray-800 transform rotate-45"></div>
                <div className="absolute inset-2 border-2 border-gray-800 rounded-full"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-3 h-3 bg-gray-800 transform rotate-45"></div>
                </div>
              </div>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-blue-600">EM Digital</h1>
              <p className="text-sm text-gray-600">Сервисные центры</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Главная
            </a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              О нас
            </a>
            <div className="relative">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                <span>Услуги</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border z-50">
                  <div className="py-2">
                    <a href="#services" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                      Ремонт смартфонов и планшетов
                    </a>
                    <a href="#services" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                      Ремонт ноутбуков и ПК
                    </a>
                    <a href="#services" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                      Ремонт телевизоров и мониторов
                    </a>
                    <a href="#services" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                      Ремонт бытовой техники
                    </a>
                    <a href="#services" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                      Сетевое оборудование
                    </a>
                    <a href="#services" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                      Корпоративное обслуживание
                    </a>
                  </div>
                </div>
              )}
            </div>
            <a href="#news" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Новости
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Контакты
            </a>
          </nav>

          {/* Search and CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Поиск..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-medium transition-colors">
              Заказать звонок
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-gray-700"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4 mt-4">
              <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium">
                Главная
              </a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium">
                О нас
              </a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium">
                Услуги
              </a>
              <a href="#news" className="text-gray-700 hover:text-blue-600 font-medium">
                Новости
              </a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium">
                Контакты
              </a>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-medium transition-colors w-full">
                Заказать звонок
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;




