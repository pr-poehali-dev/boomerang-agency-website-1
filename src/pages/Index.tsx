import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    {
      icon: 'Megaphone',
      title: 'Наружная реклама',
      description: 'Биллборды, вывески, баннеры — ваш бренд будет замечен',
    },
    {
      icon: 'Tv',
      title: 'ТВ и радио реклама',
      description: 'Создаём запоминающиеся ролики и джинглы',
    },
    {
      icon: 'Globe',
      title: 'Интернет-маркетинг',
      description: 'SMM, контекстная реклама, SEO продвижение',
    },
    {
      icon: 'Palette',
      title: 'Брендинг и дизайн',
      description: 'Логотипы, фирменный стиль, упаковка',
    },
    {
      icon: 'Camera',
      title: 'Фото и видеопродакшн',
      description: 'Профессиональная съёмка для любых задач',
    },
    {
      icon: 'Users',
      title: 'Event-маркетинг',
      description: 'Организация и продвижение мероприятий',
    },
  ];

  const clients = [
    {
      name: 'Аэропорт Кольцово',
      description: 'Комплексное рекламное сопровождение',
      image: 'https://cdn.poehali.dev/projects/7cb34359-c421-4312-a426-2b73b7ac97e7/files/66f77bde-07e9-4258-aad0-42b69e634ab6.jpg',
    },
    {
      name: 'Аквапарк Лимпопо',
      description: 'Креативные рекламные кампании',
      image: 'https://cdn.poehali.dev/projects/7cb34359-c421-4312-a426-2b73b7ac97e7/files/8ddd1b5f-6a63-48f8-901a-6a86ea6af721.jpg',
    },
  ];

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center">
                <span className="text-white font-bold text-xl">B</span>
              </div>
              <span className="text-2xl font-bold gradient-text">boomerang</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection('home')}
                className={`font-semibold transition-colors hover:text-primary ${
                  activeSection === 'home' ? 'text-primary' : 'text-foreground'
                }`}
              >
                Главная
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className={`font-semibold transition-colors hover:text-primary ${
                  activeSection === 'about' ? 'text-primary' : 'text-foreground'
                }`}
              >
                О нас
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className={`font-semibold transition-colors hover:text-primary ${
                  activeSection === 'services' ? 'text-primary' : 'text-foreground'
                }`}
              >
                Услуги
              </button>
              <button
                onClick={() => scrollToSection('clients')}
                className={`font-semibold transition-colors hover:text-primary ${
                  activeSection === 'clients' ? 'text-primary' : 'text-foreground'
                }`}
              >
                Клиенты
              </button>
              <button
                onClick={() => scrollToSection('contacts')}
                className={`font-semibold transition-colors hover:text-primary ${
                  activeSection === 'contacts' ? 'text-primary' : 'text-foreground'
                }`}
              >
                Контакты
              </button>
            </div>
            <Button
              onClick={() => scrollToSection('contacts')}
              className="gradient-bg text-white font-semibold hover:opacity-90"
            >
              Связаться
            </Button>
          </div>
        </nav>
      </header>

      <section
        id="home"
        className="pt-32 pb-20 px-6 min-h-screen flex items-center relative overflow-hidden"
      >
        <div className="absolute inset-0 -z-10 opacity-10">
          <img
            src="https://cdn.poehali.dev/projects/7cb34359-c421-4312-a426-2b73b7ac97e7/files/bfd4fcf5-f47e-4980-8955-791f5ba6d9b9.jpg"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Ваша реклама
              <br />
              <span className="gradient-text">возвращается</span>
              <br />
              результатом
            </h1>
            <p className="text-xl text-muted-foreground">
              Рекламное агентство полного цикла. Работаем с 2002 года — создаём эффективные решения
              для вашего бизнеса
            </p>
            <div className="flex gap-4">
              <Button
                size="lg"
                className="gradient-bg text-white font-semibold hover:opacity-90"
                onClick={() => scrollToSection('contacts')}
              >
                Обсудить проект
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="font-semibold"
                onClick={() => scrollToSection('services')}
              >
                Наши услуги
              </Button>
            </div>
          </div>
          <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://cdn.poehali.dev/projects/7cb34359-c421-4312-a426-2b73b7ac97e7/files/bfd4fcf5-f47e-4980-8955-791f5ba6d9b9.jpg"
                alt="Boomerang Agency"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 gradient-bg opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text">О нас</h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                Рекламное агентство <span className="font-bold text-foreground">Boomerang</span> —
                это команда креативных профессионалов с 23-летним опытом на рынке рекламных услуг.
              </p>
              <p>
                С 2002 года мы помогаем брендам быть заметными, запоминающимися и успешными. Наша
                философия проста: качественная реклама всегда возвращается результатом — как
                бумеранг.
              </p>
              <Card className="border-2 border-primary/20 bg-white">
                <CardContent className="p-8">
                  <div className="flex items-center gap-6">
                    <div className="w-20 h-20 rounded-full gradient-bg flex items-center justify-center shrink-0">
                      <Icon name="User" size={40} className="text-white" />
                    </div>
                    <div className="text-left">
                      <p className="text-sm text-muted-foreground mb-1">Генеральный директор</p>
                      <p className="text-2xl font-bold gradient-text">Воробьёва Ольга</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <p className="text-5xl font-bold gradient-text mb-2">23+</p>
                  <p className="text-sm text-muted-foreground">года на рынке</p>
                </div>
                <div className="text-center">
                  <p className="text-5xl font-bold gradient-text mb-2">500+</p>
                  <p className="text-sm text-muted-foreground">проектов</p>
                </div>
                <div className="text-center">
                  <p className="text-5xl font-bold gradient-text mb-2">200+</p>
                  <p className="text-sm text-muted-foreground">клиентов</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Наши услуги</h2>
            <p className="text-xl text-muted-foreground">
              Полный спектр рекламных решений для вашего бизнеса
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon name={service.icon} size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="clients" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Наши клиенты</h2>
            <p className="text-xl text-muted-foreground">Нам доверяют лидеры рынка</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {clients.map((client, index) => (
              <Card
                key={index}
                className="overflow-hidden group hover:shadow-2xl transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={client.image}
                    alt={client.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 gradient-bg opacity-40 group-hover:opacity-50 transition-opacity"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{client.name}</h3>
                  <p className="text-muted-foreground">{client.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-muted-foreground text-lg">
              и более 200 других компаний из разных отраслей
            </p>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Свяжитесь с нами</h2>
            <p className="text-xl text-muted-foreground">
              Обсудим ваш проект и предложим лучшее решение
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center shrink-0">
                  <Icon name="MapPin" size={24} className="text-white" />
                </div>
                <div>
                  <p className="font-semibold mb-1">Адрес</p>
                  <p className="text-muted-foreground">г. Екатеринбург</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center shrink-0">
                  <Icon name="Phone" size={24} className="text-white" />
                </div>
                <div>
                  <p className="font-semibold mb-1">Телефон</p>
                  <p className="text-muted-foreground">+7 (343) 000-00-00</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center shrink-0">
                  <Icon name="Mail" size={24} className="text-white" />
                </div>
                <div>
                  <p className="font-semibold mb-1">Email</p>
                  <p className="text-muted-foreground">info@boomerang-ads.ru</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center shrink-0">
                  <Icon name="Clock" size={24} className="text-white" />
                </div>
                <div>
                  <p className="font-semibold mb-1">Время работы</p>
                  <p className="text-muted-foreground">Пн-Пт: 9:00 - 18:00</p>
                </div>
              </div>
            </div>
            <Card>
              <CardContent className="p-6">
                <form className="space-y-4">
                  <div>
                    <Input placeholder="Ваше имя" />
                  </div>
                  <div>
                    <Input type="tel" placeholder="Телефон" />
                  </div>
                  <div>
                    <Input type="email" placeholder="Email" />
                  </div>
                  <div>
                    <Textarea placeholder="Расскажите о вашем проекте" rows={4} />
                  </div>
                  <Button className="w-full gradient-bg text-white font-semibold hover:opacity-90">
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 bg-foreground text-white">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center">
                <span className="text-white font-bold text-xl">B</span>
              </div>
              <span className="text-2xl font-bold">boomerang</span>
            </div>
            <p className="text-white/70">© 2002-2025 Boomerang. Все права защищены.</p>
            <p className="text-white/70">Директор: Воробьёва Ольга</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
