import React from 'react';
import { Smartphone, Laptop, Monitor, Refrigerator, Wifi, Building } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: "Ремонт смартфонов и планшетов",
      description: "Замена экранов, батарей, камер, динамиков. Восстановление после попадания влаги. Прошивка и разблокировка.",
      image: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=400",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Laptop className="w-12 h-12" />,
      title: "Ремонт ноутбуков и ПК",
      description: "Диагностика и ремонт материнских плат, замена компонентов, чистка от пыли, установка ПО.",
      image: "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=400",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Monitor className="w-12 h-12" />,
      title: "Ремонт телевизоров и мониторов",
      description: "Ремонт LCD, LED, OLED экранов. Замена матриц, блоков питания, инверторов и других компонентов.",
      image: "https://images.pexels.com/photos/1201996/pexels-photo-1201996.jpeg?auto=compress&cs=tinysrgb&w=400",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Refrigerator className="w-12 h-12" />,
      title: "Ремонт бытовой техники",
      description: "Холодильники, стиральные машины, микроволновки, пылесосы и другая бытовая техника.",
      image: "https://images.pexels.com/photos/4107120/pexels-photo-4107120.jpeg?auto=compress&cs=tinysrgb&w=400",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: <Wifi className="w-12 h-12" />,
      title: "Сетевое оборудование",
      description: "Настройка и ремонт роутеров, коммутаторов, точек доступа. Построение сетевой инфраструктуры.",
      image: "https://images.pexels.com/photos/159304/network-cable-ethernet-computer-159304.jpeg?auto=compress&cs=tinysrgb&w=400",
      color: "from-turquoise-500 to-turquoise-600"
    },
    {
      icon: <Building className="w-12 h-12" />,
      title: "Корпоративное обслуживание",
      description: "Комплексное IT-обслуживание офисов, настройка оборудования, техническая поддержка.",
      image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400",
      color: "from-red-500 to-red-600"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Наши услуги
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Мы предоставляем полный спектр услуг по ремонту и обслуживанию электроники 
            с использованием современного оборудования и оригинальных запчастей
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-80`}></div>
                <div className="absolute top-4 left-4 text-white">
                  {service.icon}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-lg font-semibold transition-all transform hover:scale-105">
                  Подробнее
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105">
            Посмотреть все услуги
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;