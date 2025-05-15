import React, { useState, useEffect } from 'react';
import { PawPrint as Paw, Menu, X, Home, BookOpen, Map, Users, Info } from 'lucide-react';
import { Link } from '../ui/Link';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#1D3557] shadow-lg py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Paw className="h-8 w-8 text-amber-400 mr-2" />
            <h1 className="text-2xl font-bold text-white">テスト</h1>
          </div>

          <nav className="hidden md:flex space-x-8">
            <Link href="#home" className="text-white hover:text-amber-300 transition-colors flex items-center">
              <Home className="h-4 w-4 mr-1" />
              ホーム
            </Link>
            <Link href="#animals" className="text-white hover:text-amber-300 transition-colors flex items-center">
              <Paw className="h-4 w-4 mr-1" />
              動物
            </Link>
            <Link href="#habitats" className="text-white hover:text-amber-300 transition-colors flex items-center">
              <Map className="h-4 w-4 mr-1" />
              生息地
            </Link>
            <Link href="#rules" className="text-white hover:text-amber-300 transition-colors flex items-center">
              <BookOpen className="h-4 w-4 mr-1" />
              ルール
            </Link>
            <Link href="#players" className="text-white hover:text-amber-300 transition-colors flex items-center">
              <Users className="h-4 w-4 mr-1" />
              プレイヤー
            </Link>
            <Link href="#about" className="text-white hover:text-amber-300 transition-colors flex items-center">
              <Info className="h-4 w-4 mr-1" />
              概要
            </Link>
          </nav>

          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
            aria-label="メニューを切り替える"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fadeIn">
            <nav className="flex flex-col space-y-4">
              <Link href="#home" className="text-white hover:text-amber-300 transition-colors flex items-center" onClick={toggleMenu}>
                <Home className="h-4 w-4 mr-2" />
                ホーム
              </Link>
              <Link href="#animals" className="text-white hover:text-amber-300 transition-colors flex items-center" onClick={toggleMenu}>
                <Paw className="h-4 w-4 mr-2" />
                動物
              </Link>
              <Link href="#habitats" className="text-white hover:text-amber-300 transition-colors flex items-center" onClick={toggleMenu}>
                <Map className="h-4 w-4 mr-2" />
                生息地
              </Link>
              <Link href="#rules" className="text-white hover:text-amber-300 transition-colors flex items-center" onClick={toggleMenu}>
                <BookOpen className="h-4 w-4 mr-2" />
                ルール
              </Link>
              <Link href="#players" className="text-white hover:text-amber-300 transition-colors flex items-center" onClick={toggleMenu}>
                <Users className="h-4 w-4 mr-2" />
                プレイヤー
              </Link>
              <Link href="#about" className="text-white hover:text-amber-300 transition-colors flex items-center" onClick={toggleMenu}>
                <Info className="h-4 w-4 mr-2" />
                概要
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;