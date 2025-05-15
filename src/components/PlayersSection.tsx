import React from 'react';
import { Card, CardContent } from './ui/Card';
import { Leaf, Droplet, Palmtree, Mountain, Heart, Award, Users, Coins } from 'lucide-react';

const PlayersSection: React.FC = () => {
  return (
    <section id="players" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1D3557] mb-4">プレイヤーダッシュボード</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            直感的なプレイヤーダッシュボードで進捗を追跡し、リソースを管理し、戦略を立てましょう。
          </p>
        </div>

        <div className="bg-[#E9F5DB] rounded-xl p-6 md:p-8 shadow-md max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Left section - Player stats */}
            <div className="flex-1">
              <div className="bg-white rounded-lg p-4 mb-4 shadow-sm">
                <h3 className="text-xl font-bold text-[#1D3557] mb-3">プレイヤー：ジェーンの動物園</h3>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <Card className="bg-[#F8FAFC] border border-gray-100">
                    <CardContent className="p-3">
                      <div className="flex items-center">
                        <Heart className="h-5 w-5 text-[#2D6A4F] mr-2" />
                        <div>
                          <p className="text-xs text-gray-500">保護ポイント</p>
                          <p className="text-lg font-bold text-[#2D6A4F]">24点</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-[#F8FAFC] border border-gray-100">
                    <CardContent className="p-3">
                      <div className="flex items-center">
                        <Award className="h-5 w-5 text-[#457B9D] mr-2" />
                        <div>
                          <p className="text-xs text-gray-500">魅力度</p>
                          <p className="text-lg font-bold text-[#457B9D]">18点</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-[#F8FAFC] border border-gray-100">
                    <CardContent className="p-3">
                      <div className="flex items-center">
                        <Coins className="h-5 w-5 text-amber-500 mr-2" />
                        <div>
                          <p className="text-xs text-gray-500">所持金</p>
                          <p className="text-lg font-bold text-amber-600">12</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-[#F8FAFC] border border-gray-100">
                    <CardContent className="p-3">
                      <div className="flex items-center">
                        <Users className="h-5 w-5 text-indigo-500 mr-2" />
                        <div>
                          <p className="text-xs text-gray-500">動物数</p>
                          <p className="text-lg font-bold text-indigo-600">7</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <h4 className="font-medium text-[#1D3557] mb-2">生息地の収容力</h4>
                <div className="space-y-2">
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <div className="flex items-center">
                        <Leaf className="h-4 w-4 text-green-600 mr-1" />
                        <span className="text-sm">森林</span>
                      </div>
                      <span className="text-sm font-medium">2/3</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full" style={{ width: '66%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <div className="flex items-center">
                        <Droplet className="h-4 w-4 text-blue-500 mr-1" />
                        <span className="text-sm">水域</span>
                      </div>
                      <span className="text-sm font-medium">2/2</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: '100%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <div className="flex items-center">
                        <Mountain className="h-4 w-4 text-gray-600 mr-1" />
                        <span className="text-sm">岩場</span>
                      </div>
                      <span className="text-sm font-medium">1/2</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-gray-600 h-2 rounded-full" style={{ width: '50%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <div className="flex items-center">
                        <Palmtree className="h-4 w-4 text-amber-700 mr-1" />
                        <span className="text-sm">サバンナ</span>
                      </div>
                      <span className="text-sm font-medium">2/3</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-amber-700 h-2 rounded-full" style={{ width: '66%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right section - Zoo layout */}
            <div className="flex-1">
              <div className="bg-white rounded-lg p-4 h-full shadow-sm">
                <h3 className="text-xl font-bold text-[#1D3557] mb-3">動物園レイアウト</h3>
                
                <div className="grid grid-cols-3 grid-rows-3 gap-2 h-[calc(100%-2.5rem)]">
                  <div className="bg-[#2D6A4F]/20 rounded flex items-center justify-center text-[#2D6A4F] text-xs font-medium p-1">
                    <Leaf className="h-3 w-3 mr-1" />
                    森林
                  </div>
                  <div className="bg-amber-700/20 rounded flex items-center justify-center text-amber-700 text-xs font-medium p-1">
                    <Palmtree className="h-3 w-3 mr-1" />
                    サバンナ
                  </div>
                  <div className="bg-gray-400/20 rounded flex items-center justify-center text-gray-500 text-xs font-medium p-1">
                    空き地
                  </div>
                  <div className="bg-[#457B9D]/20 rounded flex items-center justify-center text-[#457B9D] text-xs font-medium p-1">
                    <Droplet className="h-3 w-3 mr-1" />
                    水域
                  </div>
                  <div className="bg-gray-600/20 rounded flex items-center justify-center text-gray-600 text-xs font-medium p-1">
                    <Mountain className="h-3 w-3 mr-1" />
                    岩場
                  </div>
                  <div className="bg-[#2D6A4F]/20 rounded flex items-center justify-center text-[#2D6A4F] text-xs font-medium p-1">
                    <Leaf className="h-3 w-3 mr-1" />
                    森林
                  </div>
                  <div className="bg-amber-700/20 rounded flex items-center justify-center text-amber-700 text-xs font-medium p-1">
                    <Palmtree className="h-3 w-3 mr-1" />
                    サバンナ
                  </div>
                  <div className="bg-[#457B9D]/20 rounded flex items-center justify-center text-[#457B9D] text-xs font-medium p-1">
                    <Droplet className="h-3 w-3 mr-1" />
                    水域
                  </div>
                  <div className="bg-gray-400/20 rounded flex items-center justify-center text-gray-500 text-xs font-medium p-1">
                    空き地
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-[#1D3557] mb-4">戦略のヒント</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-bold text-[#2D6A4F] text-lg mb-2">相乗効果に注目</h4>
              <p className="text-gray-600">
                お互いの能力を補完し合う動物を探しましょう。相乗効果のある動物園を作ることで、
                保護ポイントと魅力度ポイントを大幅に増やすことができます。
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-bold text-[#457B9D] text-lg mb-2">バランスの取れたアプローチ</h4>
              <p className="text-gray-600">
                保護や魅力度のどちらか一方に偏らないようにしましょう。
                これら2つのスコアの差が最も小さいプレイヤーが勝利します。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlayersSection;