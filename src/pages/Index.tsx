import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const liveMatches = [
    {
      id: 1,
      sport: 'Футбол',
      league: 'Премьер-лига',
      homeTeam: 'Манчестер Сити',
      awayTeam: 'Арсенал',
      homeScore: 2,
      awayScore: 1,
      time: "67'",
      prediction: 'Победа хозяев',
      confidence: 87,
      status: 'live'
    },
    {
      id: 2,
      sport: 'Баскетбол',
      league: 'NBA',
      homeTeam: 'Lakers',
      awayTeam: 'Warriors',
      homeScore: 98,
      awayScore: 95,
      time: 'Q3 5:24',
      prediction: 'Тотал больше 215.5',
      confidence: 92,
      status: 'live'
    },
    {
      id: 3,
      sport: 'Теннис',
      league: 'ATP Tour',
      homeTeam: 'Медведев Д.',
      awayTeam: 'Джокович Н.',
      homeScore: 2,
      awayScore: 1,
      time: 'Сет 3',
      prediction: 'Победа Медведева',
      confidence: 78,
      status: 'live'
    }
  ];

  const upcomingPredictions = [
    {
      id: 4,
      sport: 'Футбол',
      league: 'Лига Чампионов',
      homeTeam: 'Бавария',
      awayTeam: 'ПСЖ',
      date: '05.11.2024',
      time: '22:00',
      prediction: 'Обе забьют',
      odds: 1.75,
      confidence: 85
    },
    {
      id: 5,
      sport: 'Хоккей',
      league: 'КХЛ',
      homeTeam: 'ЦСКА',
      awayTeam: 'СКА',
      date: '05.11.2024',
      time: '19:30',
      prediction: 'Победа ЦСКА',
      odds: 2.10,
      confidence: 73
    }
  ];

  const stats = {
    totalPredictions: 1247,
    successRate: 76.3,
    avgOdds: 1.85,
    profit: '+24.8%'
  };

  const news = [
    {
      id: 1,
      title: 'Мбаппе травмировался перед матчем с Баварией',
      category: 'Футбол',
      time: '2 часа назад',
      image: '⚽'
    },
    {
      id: 2,
      title: 'Джокович снялся с турнира в Париже',
      category: 'Теннис',
      time: '5 часов назад',
      image: '🎾'
    },
    {
      id: 3,
      title: 'Карри установил новый рекорд по трёхочковым',
      category: 'Баскетбол',
      time: '8 часов назад',
      image: '🏀'
    }
  ];

  const renderHome = () => (
    <div className="space-y-8 animate-fade-in">
      <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-green-600 to-emerald-700 p-8 md:p-12">
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Точные прогнозы<br />на спорт
          </h1>
          <p className="text-xl text-white/90 mb-6 max-w-2xl">
            Профессиональная аналитика и статистика для успешных ставок
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" variant="secondary" className="font-semibold">
              <Icon name="TrendingUp" size={20} className="mr-2" />
              Все прогнозы
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/20 hover:bg-white/20">
              <Icon name="BarChart3" size={20} className="mr-2" />
              Статистика
            </Button>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
      </section>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Прогнозов', value: stats.totalPredictions, icon: 'Target' },
          { label: 'Проходимость', value: `${stats.successRate}%`, icon: 'TrendingUp', color: 'text-green-500' },
          { label: 'Ср. коэффициент', value: stats.avgOdds, icon: 'Activity' },
          { label: 'Прибыль', value: stats.profit, icon: 'DollarSign', color: 'text-green-500' }
        ].map((stat, idx) => (
          <Card key={idx} className="bg-card border-border hover:border-primary/50 transition-all duration-300">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-2">
                <Icon name={stat.icon} size={24} className={stat.color || 'text-muted-foreground'} />
              </div>
              <div className={`text-2xl md:text-3xl font-bold ${stat.color || ''}`}>{stat.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
            Матчи в прямом эфире
          </h2>
        </div>
        <div className="grid gap-4">
          {liveMatches.map((match) => (
            <Card key={match.id} className="bg-card border-border hover:border-primary/50 transition-all duration-300 overflow-hidden">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="destructive" className="animate-pulse">LIVE</Badge>
                      <Badge variant="outline">{match.sport}</Badge>
                      <span className="text-sm text-muted-foreground">{match.league}</span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-lg">{match.homeTeam}</span>
                        <span className="text-2xl font-bold text-green-500">{match.homeScore}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-lg">{match.awayTeam}</span>
                        <span className="text-2xl font-bold">{match.awayScore}</span>
                      </div>
                    </div>
                    <div className="text-sm text-muted-foreground mt-2">{match.time}</div>
                  </div>
                  <div className="border-l border-border pl-6">
                    <div className="text-sm text-muted-foreground mb-1">Прогноз</div>
                    <div className="font-semibold mb-2">{match.prediction}</div>
                    <div className="flex items-center gap-2">
                      <div className="text-sm">Уверенность:</div>
                      <Badge variant="secondary" className="bg-green-500/20 text-green-500">
                        {match.confidence}%
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );

  const renderPredictions = () => (
    <div className="space-y-6 animate-fade-in">
      <h2 className="text-3xl font-bold">Прогнозы на спорт</h2>
      
      <Tabs defaultValue="upcoming" className="w-full">
        <TabsList className="grid w-full max-w-md grid-cols-2">
          <TabsTrigger value="upcoming">Предстоящие</TabsTrigger>
          <TabsTrigger value="archive">Архив</TabsTrigger>
        </TabsList>
        
        <TabsContent value="upcoming" className="space-y-4 mt-6">
          {upcomingPredictions.map((match) => (
            <Card key={match.id} className="bg-card border-border hover:border-primary/50 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="outline">{match.sport}</Badge>
                      <span className="text-sm text-muted-foreground">{match.league}</span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <span className="font-semibold text-lg">{match.homeTeam}</span>
                        <span className="text-muted-foreground">vs</span>
                        <span className="font-semibold text-lg">{match.awayTeam}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Icon name="Calendar" size={16} />
                        {match.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Icon name="Clock" size={16} />
                        {match.time}
                      </span>
                    </div>
                  </div>
                  <div className="border-l border-border pl-6 space-y-2">
                    <div className="text-sm text-muted-foreground">Прогноз</div>
                    <div className="font-bold text-lg text-green-500">{match.prediction}</div>
                    <div className="flex items-center gap-4">
                      <div className="text-sm">
                        Коэф: <span className="font-semibold">{match.odds}</span>
                      </div>
                      <Badge variant="secondary" className="bg-green-500/20 text-green-500">
                        {match.confidence}%
                      </Badge>
                    </div>
                    <Button size="sm" className="w-full mt-2">
                      Подробнее
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
        
        <TabsContent value="archive" className="mt-6">
          <Card className="bg-card border-border">
            <CardContent className="p-12 text-center">
              <Icon name="Archive" size={48} className="mx-auto mb-4 text-muted-foreground" />
              <p className="text-muted-foreground">Архив прогнозов скоро будет доступен</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );

  const renderStats = () => (
    <div className="space-y-6 animate-fade-in">
      <h2 className="text-3xl font-bold">Статистика и аналитика</h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle>Проходимость по видам спорта</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { sport: 'Футбол', rate: 78, total: 456 },
              { sport: 'Баскетбол', rate: 82, total: 312 },
              { sport: 'Теннис', rate: 74, total: 278 },
              { sport: 'Хоккей', rate: 71, total: 201 }
            ].map((item) => (
              <div key={item.sport} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium">{item.sport}</span>
                  <span className="text-green-500 font-semibold">{item.rate}%</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-green-500 to-emerald-600 transition-all duration-500"
                    style={{ width: `${item.rate}%` }}
                  ></div>
                </div>
                <div className="text-xs text-muted-foreground">{item.total} прогнозов</div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle>Динамика прибыли</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { month: 'Октябрь', profit: '+18.5%', color: 'text-green-500' },
                { month: 'Сентябрь', profit: '+22.3%', color: 'text-green-500' },
                { month: 'Август', profit: '+15.7%', color: 'text-green-500' },
                { month: 'Июль', profit: '-3.2%', color: 'text-red-500' }
              ].map((item) => (
                <div key={item.month} className="flex items-center justify-between p-3 rounded-lg bg-secondary/50">
                  <span className="font-medium">{item.month}</span>
                  <span className={`font-bold text-lg ${item.color}`}>{item.profit}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card border-border md:col-span-2">
          <CardHeader>
            <CardTitle>Топ аналитики месяца</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { name: 'Александр П.', sport: 'Футбол', rate: 89, predictions: 45 },
                { name: 'Мария К.', sport: 'Теннис', rate: 86, predictions: 38 },
                { name: 'Дмитрий В.', sport: 'Баскетбол', rate: 84, predictions: 52 }
              ].map((analyst, idx) => (
                <div key={idx} className="p-4 rounded-lg bg-secondary/30 border border-border">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white font-bold text-lg">
                      {analyst.name[0]}
                    </div>
                    <div>
                      <div className="font-semibold">{analyst.name}</div>
                      <div className="text-sm text-muted-foreground">{analyst.sport}</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-muted-foreground">{analyst.predictions} прогнозов</div>
                    <Badge variant="secondary" className="bg-green-500/20 text-green-500">
                      {analyst.rate}%
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const renderNews = () => (
    <div className="space-y-6 animate-fade-in">
      <h2 className="text-3xl font-bold">Новости спорта</h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {news.map((item) => (
          <Card key={item.id} className="bg-card border-border hover:border-primary/50 transition-all duration-300 cursor-pointer group">
            <CardContent className="p-0">
              <div className="aspect-video bg-gradient-to-br from-green-600 to-emerald-700 flex items-center justify-center text-6xl">
                {item.image}
              </div>
              <div className="p-6">
                <Badge variant="outline" className="mb-3">{item.category}</Badge>
                <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Icon name="Clock" size={14} />
                  {item.time}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderContacts = () => (
    <div className="space-y-6 animate-fade-in">
      <h2 className="text-3xl font-bold">Контакты</h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle>Связаться с нами</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { icon: 'Mail', label: 'Email', value: 'info@sportpredict.ru' },
              { icon: 'Phone', label: 'Телефон', value: '+7 (495) 123-45-67' },
              { icon: 'MessageCircle', label: 'Telegram', value: '@sportpredict' },
              { icon: 'MapPin', label: 'Адрес', value: 'Москва, ул. Спортивная, 1' }
            ].map((contact) => (
              <div key={contact.label} className="flex items-start gap-4 p-4 rounded-lg bg-secondary/30">
                <Icon name={contact.icon} size={24} className="text-primary mt-1" />
                <div>
                  <div className="text-sm text-muted-foreground mb-1">{contact.label}</div>
                  <div className="font-semibold">{contact.value}</div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle>Написать сообщение</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Ваше имя</label>
              <input 
                type="text" 
                className="w-full px-4 py-2 rounded-lg bg-secondary border border-border focus:border-primary outline-none transition-colors"
                placeholder="Иван Иванов"
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Email</label>
              <input 
                type="email" 
                className="w-full px-4 py-2 rounded-lg bg-secondary border border-border focus:border-primary outline-none transition-colors"
                placeholder="example@mail.ru"
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Сообщение</label>
              <textarea 
                className="w-full px-4 py-2 rounded-lg bg-secondary border border-border focus:border-primary outline-none transition-colors h-32 resize-none"
                placeholder="Ваше сообщение..."
              ></textarea>
            </div>
            <Button className="w-full">
              <Icon name="Send" size={18} className="mr-2" />
              Отправить
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <nav className="sticky top-0 z-50 bg-card border-b border-border backdrop-blur-lg bg-opacity-90">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                <Icon name="TrendingUp" size={24} className="text-white" />
              </div>
              <span className="text-xl font-bold">SportPredict</span>
            </div>
            
            <div className="hidden md:flex items-center gap-1">
              {[
                { id: 'home', label: 'Главная', icon: 'Home' },
                { id: 'predictions', label: 'Прогнозы', icon: 'Target' },
                { id: 'stats', label: 'Статистика', icon: 'BarChart3' },
                { id: 'news', label: 'Новости', icon: 'Newspaper' },
                { id: 'contacts', label: 'Контакты', icon: 'Mail' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
                    activeSection === item.id
                      ? 'bg-primary text-primary-foreground'
                      : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
                  }`}
                >
                  <Icon name={item.icon} size={18} />
                  {item.label}
                </button>
              ))}
            </div>

            <Button className="hidden md:flex">
              <Icon name="LogIn" size={18} className="mr-2" />
              Войти
            </Button>

            <Button variant="ghost" size="icon" className="md:hidden">
              <Icon name="Menu" size={24} />
            </Button>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        {activeSection === 'home' && renderHome()}
        {activeSection === 'predictions' && renderPredictions()}
        {activeSection === 'stats' && renderStats()}
        {activeSection === 'news' && renderNews()}
        {activeSection === 'contacts' && renderContacts()}
      </main>

      <footer className="bg-card border-t border-border mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                  <Icon name="TrendingUp" size={24} className="text-white" />
                </div>
                <span className="text-xl font-bold">SportPredict</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Профессиональные прогнозы и аналитика для успешных ставок на спорт
              </p>
            </div>
            {[
              {
                title: 'Разделы',
                links: ['Главная', 'Прогнозы', 'Статистика', 'Новости']
              },
              {
                title: 'Информация',
                links: ['О нас', 'Правила', 'FAQ', 'Блог']
              },
              {
                title: 'Соцсети',
                links: ['Telegram', 'VK', 'Instagram', 'YouTube']
              }
            ].map((col, idx) => (
              <div key={idx}>
                <h3 className="font-semibold mb-4">{col.title}</h3>
                <ul className="space-y-2">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            © 2024 SportPredict. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
