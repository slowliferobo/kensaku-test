import { AnimalCard } from '../types';

export const animals: AnimalCard[] = [
  {
    id: '1',
    name: 'アフリカゾウ',
    imageUrl: 'https://images.pexels.com/photos/133394/pexels-photo-133394.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    type: '哺乳類',
    habitatRequirement: 'サバンナ',
    conservationPoints: 5,
    appealValue: 5,
    cost: 7,
    ability: 'ラウンドごとに2保護ポイントを獲得'
  },
  {
    id: '2',
    name: 'ジャイアントパンダ',
    imageUrl: 'https://images.pexels.com/photos/158109/kodiak-brown-bear-adult-portrait-wildlife-158109.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    type: '哺乳類',
    habitatRequirement: '森林',
    conservationPoints: 4,
    appealValue: 5,
    cost: 6,
    ability: '森林生息地1つにつき1魅力度ポイントを獲得'
  },
  {
    id: '3',
    name: 'コウテイペンギン',
    imageUrl: 'https://images.pexels.com/photos/3889695/pexels-photo-3889695.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    type: '鳥類',
    habitatRequirement: '水域',
    conservationPoints: 3,
    appealValue: 4,
    cost: 5,
    ability: '他の鳥類の隣に配置すると1枚カードを引く'
  },
  {
    id: '4',
    name: 'コモドドラゴン',
    imageUrl: 'https://images.pexels.com/photos/1653423/pexels-photo-1653423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    type: '爬虫類',
    habitatRequirement: '岩場',
    conservationPoints: 4,
    appealValue: 3,
    cost: 5,
    ability: 'プレイ時、全ての爬虫類の魅力度が+1'
  },
  {
    id: '5',
    name: 'アカメアマガエル',
    imageUrl: 'https://images.pexels.com/photos/70083/frog-macro-amphibian-green-70083.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    type: '両生類',
    habitatRequirement: '複数',
    conservationPoints: 2,
    appealValue: 2,
    cost: 3,
    ability: 'どの生息地タイプにも配置可能'
  },
  {
    id: '6',
    name: 'ホホジロザメ',
    imageUrl: 'https://images.pexels.com/photos/726478/pexels-photo-726478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    type: '魚類',
    habitatRequirement: '水域',
    conservationPoints: 3,
    appealValue: 4,
    cost: 6,
    ability: '追加の水域生息地の配置が可能'
  },
  {
    id: '7',
    name: 'マウンテンゴリラ',
    imageUrl: 'https://images.pexels.com/photos/1109882/pexels-photo-1109882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    type: '哺乳類',
    habitatRequirement: '森林',
    conservationPoints: 4,
    appealValue: 4,
    cost: 6,
    ability: 'プレイ時、森林生息地1つにつき2保護ポイントを獲得'
  },
  {
    id: '8',
    name: 'ハクトウワシ',
    imageUrl: 'https://images.pexels.com/photos/752035/pexels-photo-752035.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    type: '鳥類',
    habitatRequirement: '複数',
    conservationPoints: 3,
    appealValue: 4,
    cost: 5,
    ability: 'プレイ時、デッキの上から3枚のカードを確認'
  }
];

export const animalTypes = ['哺乳類', '鳥類', '爬虫類', '両生類', '魚類'];
export const habitatTypes = ['森林', '水域', '岩場', 'サバンナ', '複数'];