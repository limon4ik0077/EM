import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

const News = () => {
  const news = [
    {
      title: "Открытие нового сервисного центра в Москве",
      excerpt: "Мы рады сообщить об открытии нашего нового сервисного центра в центре Москвы. Теперь жители столицы могут воспользоваться нашими услугами еще удобнее.",
      date: "15 января 2025",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Новости компании"
    },
    {
      title: "Скидки на ремонт смартфонов до 30%",
      excerpt: "Специальное предложение на ремонт смартфонов всех популярных брендов. Акция действует до конца месяца во всех наших сервисных центрах.",
      date: "10 января 2025",
      image: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Акции"
    },
    {
      title: "Новые услуги по ремонту игровых консолей",
      excerpt: "Теперь мы предоставляем профессиональный ремонт PlayStation, Xbox, Nintendo Switch и других игровых консолей с гарантией качества.",
      date: "5 января 2025",
      image: "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Услуги"
    }
  ];

  return (
    <section id="news" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Новости и акции
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Следите за последними новостями нашей компании, специальными предложениями 
            и полезными советами по уходу за техникой
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <article
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {item.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  {item.date}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">
                  {item.excerpt}
                </p>
                
                <button className="flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors group">
                  Читать далее
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105">
            Все новости
          </button>
        </div>
      </div>
    </section>
  );
};

export default News;