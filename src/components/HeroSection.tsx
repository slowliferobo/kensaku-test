import React from 'react';
import { Button } from './ui/Button';
import { ChevronDown } from 'lucide-react';

const HeroSection: React.FC = () => {
  const scrollToAnimals = () => {
    const animalsSection = document.getElementById('animals');
    if (animalsSection) {
      animalsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="動物園の背景"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1D3557]/80 to-[#2D6A4F]/60"></div>
      </div>

      <div className="container mx-auto px-4 z-10 text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fadeIn">
            テストへようこそ
          </h1>
          <p className="text-xl mb-8 opacity-90 animate-fadeInUp delay-300">
            最先端の動物園を建設し、絶滅危惧種を保護し、
            動物たちのための理想的な生息地を作り上げましょう。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp delay-500">
            <Button size="lg" onClick={scrollToAnimals}>
              動物を探索
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-[#1D3557]">
              ルールを学ぶ
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;