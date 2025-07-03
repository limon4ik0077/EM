import React from 'react';
import { CheckCircle, Users, MapPin, Clock } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: <Users className="w-8 h-8" />, number: "10,000+", label: "Довольных клиентов" },
    { icon: <MapPin className="w-8 h-8" />, number: "25+", label: "Городов присутствия" },
    { icon: <Clock className="w-8 h-8" />, number: "5+", label: "Лет на рынке" },
    { icon: <CheckCircle className="w-8 h-8" />, number: "98%", label: "Успешных ремонтов" }
  ];

  const advantages = [
    "Сертифицированные мастера с многолетним опытом",
    "Использование оригинальных запчастей и комплектующих",
    "Современное диагностическое оборудование",
    "Гарантия на все виды выполненных работ",
    "Прозрачное ценообразование без скрытых платежей",
    "Быстрые сроки выполнения работ",
    "Бесплатная диагностика при ремонте",
    "Удобное расположение сервисных центров"
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              О компании
              <span className="text-blue-600"> EM Digital</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              EM Digital — это сеть профессиональных сервисных центров, специализирующихся 
              на ремонте электроники и бытовой техники. Мы работаем с 2019 года и за это время 
              завоевали доверие тысяч клиентов по всей стране.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Наша миссия — предоставлять качественные услуги ремонта с использованием 
              современных технологий и оригинальных запчастей, обеспечивая максимальное 
              удобство для наших клиентов.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-blue-600 flex justify-center mb-2">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Наши преимущества
            </h3>
            <div className="space-y-4">
              {advantages.map((advantage, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{advantage}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-turquoise-50 rounded-lg border border-blue-100">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Почему выбирают нас?
              </h4>
              <p className="text-gray-600">
                Мы не просто ремонтируем технику — мы возвращаем к жизни ваши любимые устройства, 
                обеспечивая их надежную работу на долгие годы.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;