import React from 'react';
import { Github, Twitter, Facebook, Instagram, Heart } from 'lucide-react';
import { Link } from '../ui/Link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1D3557] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">テスト</h3>
            <p className="text-gray-300 mb-4">
              世界で最も成功した、科学的に進んだ動物園を建設しながら、
              保護プロジェクトをサポートし、動物たちのための理想的な生息地を作り上げましょう。
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-300 hover:text-amber-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-amber-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-amber-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-amber-400 transition-colors">
                <Github className="h-5 w-5" />
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">クイックリンク</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#home" className="text-gray-300 hover:text-amber-400 transition-colors">ホーム</Link>
              </li>
              <li>
                <Link href="#animals" className="text-gray-300 hover:text-amber-400 transition-colors">動物</Link>
              </li>
              <li>
                <Link href="#habitats" className="text-gray-300 hover:text-amber-400 transition-colors">生息地</Link>
              </li>
              <li>
                <Link href="#rules" className="text-gray-300 hover:text-amber-400 transition-colors">ルール</Link>
              </li>
              <li>
                <Link href="#players" className="text-gray-300 hover:text-amber-400 transition-colors">プレイヤー</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">お問い合わせ</h3>
            <p className="text-gray-300 mb-2">メール: info@arknova.com</p>
            <p className="text-gray-300 mb-2">電話: 03-1234-5678</p>
            <p className="text-gray-300">住所: 〒</p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-gray-400 flex items-center justify-center">
            Made with <Heart className="h-4 w-4 mx-1 text-red-500" /> in 2025
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;