import React from 'react';
import { HabitatCard } from './HabitatCard';
import { habitats } from '../data/habitats';

const HabitatsSection: React.FC = () => {
  return (
    <section id="habitats" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1D3557] mb-4">生息地エリア</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            動物たちにぴったりの生息地を作りましょう。各エリアには独自の利点があり、
            動物の要件に応じて異なる種を収容することができます。
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {habitats.map((habitat) => (
            <HabitatCard key={habitat.id} habitat={habitat} />
          ))}
        </div>

        <div className="mt-16 bg-gray-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-[#1D3557] mb-6">生息地の管理</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold text-[#1D3557] mb-3">動物園の計画</h4>
              <p className="text-gray-600 mb-4">
                戦略的な生息地の配置は、動物園の成功に不可欠です。以下の要素を考慮しましょう：
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>隣接する生息地は、特定の動物の組み合わせにボーナスを提供</li>
                <li>一部の種は、繁栄するために特定の生息地タイプが必要</li>
                <li>大きな生息地はより多くの動物を収容できますが、維持費も高くなります</li>
                <li>生息地間の来場者の流れは、動物園の魅力度に影響します</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold text-[#1D3557] mb-3">拡張オプション</h4>
              <p className="text-gray-600 mb-4">
                動物園の成長に伴い、生息地を拡張する必要があります。以下のオプションを検討しましょう：
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>既存の生息地をアップグレードして収容力を増加</li>
                <li>新しい生息地エリア用の土地を購入</li>
                <li>研究ボーナスのために特定の生息地タイプに特化</li>
                <li>互換性のある種のための混合生息地を作成</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HabitatsSection;