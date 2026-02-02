import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useChurchStore } from '@/store/churchStore';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export function HeroSlider() {
  const { announcements, currentSlide, setCurrentSlide } = useChurchStore();
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % announcements.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide, announcements.length, setCurrentSlide, isAutoPlaying]);

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentSlide(index);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    goToSlide((currentSlide + 1) % announcements.length);
  };

  const prevSlide = () => {
    goToSlide((currentSlide - 1 + announcements.length) % announcements.length);
  };

  return (
    <section className="relative h-[80vh] min-h-[600px] overflow-hidden">
      {/* Slides */}
      {announcements.map((announcement, index) => (
        <div
          key={announcement.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${announcement.image})` }}
          />
          {/* Overlay */}
          <div className="absolute inset-0 hero-overlay" />
          
          {/* Content */}
          <div className="relative h-full container-church flex items-center">
            <div className={`max-w-2xl ${index === currentSlide ? 'animate-fade-in-up' : ''}`}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
                {announcement.title}
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
                {announcement.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-8 py-6 text-lg">
                  <Link to="/services">Join Us</Link>
                </Button>
                <Button asChild variant="outline" className="border-white text-secondary-foreground hover:bg-white hover:text-primary px-8 py-6 text-lg">
                  <Link to="/live">Watch Live</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {announcements.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? 'bg-secondary w-8'
                : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
