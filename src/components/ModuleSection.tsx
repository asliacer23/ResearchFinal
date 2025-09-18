import { useState, useRef, useEffect } from 'react';
import { Smartphone, Monitor, Play, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface ModuleSectionProps {
  id: string;
  title: string;
  description: string;
  features: string[];
  phoneImages: string[];
  webImages: string[];
  videoUrl?: string;
}

const ModuleSection = ({ 
  id, 
  title, 
  description, 
  features, 
  phoneImages, 
  webImages, 
  videoUrl 
}: ModuleSectionProps) => {
  const [currentPhoneImage, setCurrentPhoneImage] = useState(0);
  const [currentWebImage, setCurrentWebImage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Auto-slide images
  useEffect(() => {
    const phoneInterval = setInterval(() => {
      setCurrentPhoneImage((prev) => (prev + 1) % phoneImages.length);
    }, 4000);

    const webInterval = setInterval(() => {
      setCurrentWebImage((prev) => (prev + 1) % webImages.length);
    }, 5000);

    return () => {
      clearInterval(phoneInterval);
      clearInterval(webInterval);
    };
  }, [phoneImages.length, webImages.length]);

  const nextPhoneImage = () => {
    setCurrentPhoneImage((prev) => (prev + 1) % phoneImages.length);
  };

  const prevPhoneImage = () => {
    setCurrentPhoneImage((prev) => (prev - 1 + phoneImages.length) % phoneImages.length);
  };

  const nextWebImage = () => {
    setCurrentWebImage((prev) => (prev + 1) % webImages.length);
  };

  const prevWebImage = () => {
    setCurrentWebImage((prev) => (prev - 1 + webImages.length) % webImages.length);
  };

  return (
    <section 
      ref={sectionRef}
      id={id} 
      className="min-h-screen flex items-center py-20 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-muted/20 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          
          {/* Module Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {title}
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              {description}
            </p>
            
            {/* Features */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {features.map((feature, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-muted rounded-full text-sm font-medium text-muted-foreground"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>

          {/* UI Demos */}
          <div className="max-w-7xl mx-auto">
            <Tabs defaultValue="phone" className="w-full">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
                <TabsTrigger value="phone" className="flex items-center gap-2">
                  <Smartphone className="w-4 h-4" />
                  Mobile UI
                </TabsTrigger>
                <TabsTrigger value="web" className="flex items-center gap-2">
                  <Monitor className="w-4 h-4" />
                  Web UI
                </TabsTrigger>
              </TabsList>

              {/* Phone UI Tab */}
              <TabsContent value="phone">
                <Card className="border-0 shadow-strong bg-card">
                  <CardContent className="p-8">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      
                      {/* Phone Mockup */}
                      <div className="relative">
                        <div className="mx-auto w-64 h-[480px] bg-slate-900 rounded-3xl p-2 shadow-strong">
                          <div className="w-full h-full bg-white rounded-2xl overflow-hidden relative">
                            
                            {/* Phone Images Carousel */}
                            <div className="relative w-full h-full">
                              {phoneImages.map((image, index) => (
                                <div
                                  key={index}
                                  className={`absolute inset-0 transition-opacity duration-500 ${
                                    index === currentPhoneImage ? 'opacity-100' : 'opacity-0'
                                  }`}
                                >
                                  <img 
                                    src={image} 
                                    alt={`Phone Demo ${index + 1}`} 
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                              ))}
                            </div>

                            {/* Phone Navigation */}
                            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                              <Button
                                size="sm"
                                variant="ghost"
                                onClick={prevPhoneImage}
                                className="w-8 h-8 p-0 bg-black/20 hover:bg-black/40 text-white"
                              >
                                <ChevronLeft className="w-4 h-4" />
                              </Button>
                              <Button
                                size="sm"
                                variant="ghost"
                                onClick={nextPhoneImage}
                                className="w-8 h-8 p-0 bg-black/20 hover:bg-black/40 text-white"
                              >
                                <ChevronRight className="w-4 h-4" />
                              </Button>
                            </div>

                            {/* Dots Indicator */}
                            <div className="absolute top-4 left-0 right-0 flex justify-center gap-1">
                              {phoneImages.map((_, index) => (
                                <div
                                  key={index}
                                  className={`w-2 h-2 rounded-full transition-all ${
                                    index === currentPhoneImage ? 'bg-primary' : 'bg-muted-foreground/30'
                                  }`}
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Phone Features */}
                      <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">Mobile Experience</h3>
                        <ul className="space-y-3">
                          <li className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            <span className="text-muted-foreground">Responsive touch interface</span>
                          </li>
                          <li className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-accent rounded-full"></div>
                            <span className="text-muted-foreground">Offline capability</span>
                          </li>
                          <li className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-success rounded-full"></div>
                            <span className="text-muted-foreground">Real-time notifications</span>
                          </li>
                          <li className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            <span className="text-muted-foreground">Secure authentication</span>
                          </li>
                        </ul>
                        
                        {videoUrl && (
                          <Button 
                            onClick={() => setShowModal(true)}
                            className="w-full group"
                          >
                            <Play className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                            Watch Demo Video
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Web UI Tab */}
              <TabsContent value="web">
                <Card className="border-0 shadow-strong bg-card">
                  <CardContent className="p-8">
                    
                    {/* Web Browser Mockup */}
                    <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-4 shadow-medium">
                      
                      {/* Browser Chrome */}
                      <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border">
                        <div className="flex gap-2">
                          <div className="w-3 h-3 rounded-full bg-red-500"></div>
                          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                          <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <div className="flex-1 mx-4">
                          <div className="bg-white dark:bg-slate-700 rounded px-3 py-1 text-xs text-muted-foreground">
                            https://corehms.netlify.app/
                          </div>
                        </div>
                      </div>

                      {/* Web Content Area */}
                        <div className="relative w-full max-w-6xl mx-auto aspect-video bg-white dark:bg-slate-900 rounded overflow-hidden">
                          {/* Web Images Carousel */}
                          <div className="relative w-full h-full">
                            {webImages.map((image, index) => (
                              <div
                                key={index}
                                className={`absolute inset-0 transition-opacity duration-500 ${
                                  index === currentWebImage ? "opacity-100" : "opacity-0"
                                }`}
                              >
                                <img
                                  src={image}
                                  alt={`Web Interface ${index + 1}`}
                                  className="w-full h-full object-contain"
                                />
                              </div>
                            ))}
                          </div>

                        {/* Web Navigation */}
                        <div className="absolute bottom-4 right-4 flex gap-2">
                          <Button
                            size="sm"
                            variant="secondary"
                            onClick={prevWebImage}
                            className="w-8 h-8 p-0"
                          >
                            <ChevronLeft className="w-4 h-4" />
                          </Button>
                          <Button
                            size="sm"
                            variant="secondary"
                            onClick={nextWebImage}
                            className="w-8 h-8 p-0"
                          >
                            <ChevronRight className="w-4 h-4" />
                          </Button>
                        </div>

                        {/* Web Dots Indicator */}
                        <div className="absolute bottom-4 left-4 flex gap-2">
                          {webImages.map((_, index) => (
                            <div
                              key={index}
                              className={`w-2 h-2 rounded-full transition-all ${
                                index === currentWebImage ? 'bg-primary' : 'bg-muted-foreground/30'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Web Features */}
                    <div className="grid md:grid-cols-3 gap-6 mt-8">
                      <div className="text-center">
                        <h4 className="font-semibold mb-2">Dashboard Analytics</h4>
                        <p className="text-sm text-muted-foreground">Real-time insights and reporting</p>
                      </div>
                      <div className="text-center">
                        <h4 className="font-semibold mb-2">Multi-user Support</h4>
                        <p className="text-sm text-muted-foreground">Role-based access control</p>
                      </div>
                      <div className="text-center">
                        <h4 className="font-semibold mb-2">Integration Ready</h4>
                        <p className="text-sm text-muted-foreground">Connect with existing systems</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-background rounded-lg p-6 max-w-4xl w-full">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">{title} Demo</h3>
              <Button variant="ghost" onClick={() => setShowModal(false)}>
                ×
              </Button>
            </div>
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center text-muted-foreground">
              <video 
                src={videoUrl} 
                controls 
                autoPlay
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ModuleSection;