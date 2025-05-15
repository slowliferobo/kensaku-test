import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface RuleCategory {
  id: string;
  title: string;
  content: React.ReactNode;
}

const RulesSection: React.FC = () => {
  const [openCategory, setOpenCategory] = useState<string>('setup');

  const toggleCategory = (id: string) => {
    setOpenCategory(openCategory === id ? '' : id);
  };

  const ruleCategories: RuleCategory[] = [
    {
      id: 'setup',
      title: 'ゲームの準備',
      content: (
        <div>
          <p className="mb-4">
            テストのゲームを始めるための準備手順：
          </p>
          <ol className="list-decimal list-inside space-y-3 text-gray-700">
            <li>各プレイヤーはプレイヤーボードを選び、自分の前に置きます。</li>
            <li>動物カードをシャッフルしてドローパイルを作り、5枚のカードを公開して動物市場を形成します。</li>
            <li>生息地タイルを種類別（森林、水域、岩場、サバンナ）に分けて配置します。</li>
            <li>プレイヤー数に応じて保護トークンの山を設定します。</li>
            <li>各プレイヤーは10コインと3枚の動物カードを受け取ります。</li>
          </ol>
        </div>
      ),
    },
    {
      id: 'turn',
      title: 'ターンの流れ',
      content: (
        <div>
          <p className="mb-4">
            自分のターンでは、以下の5つのアクションから1つを選択します：
          </p>
          <ul className="list-disc list-inside space-y-3 text-gray-700">
            <li><strong>建設：</strong> コストを支払って新しい生息地を動物園に追加します。</li>
            <li><strong>動物：</strong> 適切な生息地があれば、市場から動物カードを動物園に追加できます。</li>
            <li><strong>カード：</strong> 追加の動物カードを手札に加えます。</li>
            <li><strong>協会：</strong> 保護協会からの支援を得てボーナスを獲得します。</li>
            <li><strong>スポンサー：</strong> スポンサーシップを通じて追加の資金を獲得します。</li>
          </ul>
          <p className="mt-4">
            アクションを実行した後、時計回りに次のプレイヤーに手番が移ります。
          </p>
        </div>
      ),
    },
    {
      id: 'scoring',
      title: '得点計算と勝利',
      content: (
        <div>
          <p className="mb-4">
            勝利は保護トラックと魅力度トラックを比較して決定されます：
          </p>
          <ul className="list-disc list-inside space-y-3 text-gray-700">
            <li><strong>保護ポイント：</strong> 絶滅危惧種の保護と保護プロジェクトの支援により獲得します。</li>
            <li><strong>魅力度ポイント：</strong> 魅力的な展示と人気のある動物を収容することで獲得します。</li>
          </ul>
          <p className="mt-4">
            ゲームは1人のプレイヤーが一定数の保護プロジェクトを完了するか、保護トークンの山が尽きた時に終了します。
          </p>
          <p className="mt-4">
            最終得点計算では、保護スコアと魅力度スコアの差が最も小さいプレイヤーが勝利します。
          </p>
        </div>
      ),
    },
    {
      id: 'abilities',
      title: '動物の能力',
      content: (
        <div>
          <p className="mb-4">
            各動物カードには、様々な方法でトリガーされる独自の能力があります：
          </p>
          <ul className="list-disc list-inside space-y-3 text-gray-700">
            <li><strong>即時：</strong> 動物が動物園に追加された瞬間に発動します。</li>
            <li><strong>継続：</strong> 動物が動物園にいる限り、継続的な利益を提供します。</li>
            <li><strong>アクティブ：</strong> 特定のアクションを取ることで、ラウンドごとに1回トリガーできます。</li>
            <li><strong>ゲーム終了時：</strong> 最終得点計算時にボーナスポイントを提供します。</li>
          </ul>
          <p className="mt-4">
            動物の能力を戦略的に組み合わせることが、動物園の効率を最大化するカギとなります。
          </p>
        </div>
      ),
    },
    {
      id: 'habitats',
      title: '生息地の要件',
      content: (
        <div>
          <p className="mb-4">
            動物は互換性のある生息地にのみ配置できます：
          </p>
          <ul className="list-disc list-inside space-y-3 text-gray-700">
            <li><strong>森林：</strong> 樹上性および森林性の種に必要です。</li>
            <li><strong>水域：</strong> 水生および半水生の種に必要です。</li>
            <li><strong>岩場：</strong> 山岳および砂漠に住む種に必要です。</li>
            <li><strong>サバンナ：</strong> 草原および平原の種に必要です。</li>
            <li><strong>複数：</strong> 適応性の高い種は複数の生息地タイプに配置できます。</li>
          </ul>
          <p className="mt-4">
            各生息地には収容できる動物の数に制限があります。収容力を増やすには生息地をアップグレードする必要があります。
          </p>
        </div>
      ),
    },
  ];

  return (
    <section id="rules" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1D3557] mb-4">ゲームルール</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            包括的なルールガイドでテストの遊び方を学びましょう。
            動物園を建設し、動物を管理し、保護目標に向かって取り組みます。
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {ruleCategories.map((category) => (
            <div key={category.id} className="mb-4">
              <button
                className={`w-full flex justify-between items-center p-4 rounded-lg text-left ${
                  openCategory === category.id
                    ? 'bg-[#1D3557] text-white'
                    : 'bg-white hover:bg-gray-100 text-[#1D3557]'
                } transition-colors duration-300`}
                onClick={() => toggleCategory(category.id)}
              >
                <span className="text-xl font-medium">{category.title}</span>
                {openCategory === category.id ? (
                  <ChevronUp className="h-6 w-6" />
                ) : (
                  <ChevronDown className="h-6 w-6" />
                )}
              </button>
              {openCategory === category.id && (
                <div className="bg-white p-6 rounded-b-lg shadow-md mt-1 animate-fadeIn">
                  {category.content}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RulesSection;