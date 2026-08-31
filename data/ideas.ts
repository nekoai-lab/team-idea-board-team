import type { Idea } from "@/types/idea";

export const initialIdeas: Idea[] = [
  {
    id: "idea-001",
    title: "会議メモを同じ形式で残したい",
    description: "決定事項と次のアクションが、人によって違う場所に記録されています。",
    category: "業務効率化",
    author: "営業企画",
    votes: 8,
  },
  {
    id: "idea-002",
    title: "問い合わせの引き継ぎ漏れを減らしたい",
    description: "担当変更時に、過去の回答と未対応事項をすぐ確認できるようにしたいです。",
    category: "顧客対応",
    author: "カスタマーサクセス",
    votes: 12,
  },
  {
    id: "idea-003",
    title: "集中時間をチームで共有したい",
    description: "相談可能な時間と集中したい時間が分かると、声をかけやすくなります。",
    category: "働き方",
    author: "開発チーム",
    votes: 5,
  },
];
