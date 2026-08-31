"use client";

import { useMemo, useState } from "react";
import { CategoryFilter } from "@/components/CategoryFilter";
import { IdeaCard } from "@/components/IdeaCard";
import { IdeaForm } from "@/components/IdeaForm";
import { IdeaSummary } from "@/components/IdeaSummary";
import { initialIdeas } from "@/data/ideas";
import { categories, type CategoryFilterValue, type IdeaDraft } from "@/types/idea";

export function IdeaBoard() {
  const [ideas, setIdeas] = useState(initialIdeas);
  const [activeCategory, setActiveCategory] = useState<CategoryFilterValue>("すべて");

  const visibleIdeas = useMemo(
    () =>
      activeCategory === "すべて"
        ? ideas
        : ideas.filter((idea) => idea.category === activeCategory),
    [activeCategory, ideas],
  );

  const addIdea = (draft: IdeaDraft) => {
    setIdeas((currentIdeas) => [
      {
        ...draft,
        id: `idea-${Date.now()}`,
        author: "演習チーム",
        votes: 0,
      },
      ...currentIdeas,
    ]);
  };

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="KAIZEN BOARD トップへ">
          <span className="brand-mark" aria-hidden="true">
            K
          </span>
          <span>
            <strong>KAIZEN BOARD</strong>
            <small>チームの気づきを、次の改善へ。</small>
          </span>
        </a>
        <span className="release-label">TEAM RELEASE / v1.0</span>
      </header>

      <section className="hero" id="top">
        <div>
          <p className="eyebrow">改善アイデアを共有する</p>
          <h1>
            小さな気づきを、
            <span>みんなの前進に。</span>
          </h1>
          <p className="hero-copy">
            日々の仕事で感じた「もっと良くできそう」を集め、チームで優先順位を考えるためのボードです。
          </p>
        </div>
        <div className="hero-note" aria-label="現在のリリーステーマ">
          <span>現在のボード</span>
          <strong>3件の改善アイデアを共有中</strong>
          <p>チームから集まった気づきと、現在の票数を一覧で確認できます。</p>
        </div>
      </section>

      <section className="workspace" aria-labelledby="board-heading">
        <div className="workspace-main">
          <div className="section-heading">
            <div>
              <p className="eyebrow">IDEA LIST</p>
              <h2 id="board-heading">みんなの改善アイデア</h2>
            </div>
            <span className="idea-count">{visibleIdeas.length}件を表示</span>
          </div>

          <CategoryFilter
            categories={categories}
            activeCategory={activeCategory}
            onChange={setActiveCategory}
          />

          <div className="idea-list" aria-live="polite">
            {visibleIdeas.length > 0 ? (
              visibleIdeas.map((idea) => <IdeaCard key={idea.id} idea={idea} />)
            ) : (
              <div className="empty-state">
                <strong>このカテゴリのアイデアはまだありません</strong>
                <p>別のカテゴリを選ぶか、新しいアイデアを追加してください。</p>
              </div>
            )}
          </div>
        </div>

        <aside className="workspace-side" aria-label="アイデアの追加と集計">
          <IdeaSummary ideas={ideas} />
          <IdeaForm onAdd={addIdea} />
        </aside>
      </section>

      <footer>
        <span>AI駆動開発・チーム演習用サンプル</span>
        <span>サンプルデータのみを使用しています</span>
      </footer>
    </main>
  );
}
