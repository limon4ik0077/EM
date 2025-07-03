import React from 'react';
import { Shield, Clock, Award, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Профессиональный ремонт
              <span className="text-orange-400"> электроники</span>
            </h1>
            <p className="text-xl mb-8 text-blue-100 leading-relaxed">
              Сеть сервисных центров EM Digital предоставляет качественные услуги по ремонту 
              электроники и бытовой техники с гарантией и доступными ценами.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105">
                Заказать ремонт
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all">
                Узнать стоимость
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8" />
                  </div>
                  <h3 className="font-semibold mb-2">Гарантия качества</h3>
                  <p className="text-sm text-blue-100">До 12 месяцев гарантии на все виды работ</p>
                </div>
                <div className="text-center">
                  <div className="bg-turquoise-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8" />
                  </div>
                  <h3 className="font-semibold mb-2">Быстрый ремонт</h3>
                  <p className="text-sm text-blue-100">Большинство ремонтов за 1-3 дня</p>
                </div>
                <div className="text-center">
                  <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8" />
                  </div>
                  <h3 className="font-semibold mb-2">Опытные мастера</h3>
                  <p className="text-sm text-blue-100">Сертифицированные специалисты</p>
                </div>
                <div className="text-center">
                  <div className="bg-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8" />
                  </div>
                  <h3 className="font-semibold mb-2">10000+ клиентов</h3>
                  <p className="text-sm text-blue-100">Довольных клиентов по всей стране</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;