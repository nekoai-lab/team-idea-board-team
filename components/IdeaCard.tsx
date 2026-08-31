import { VoteButton } from "@/components/VoteButton";
import type { Idea } from "@/types/idea";

const categoryClass: Record<Idea["category"], string> = {
  業務効率化: "category-blue",
  顧客対応: "category-orange",
  働き方: "category-green",
};

export function IdeaCard({ idea }: { idea: Idea }) {
  return (
    <article className="idea-card">
      <span className={`category-tab ${categoryClass[idea.category]}`} aria-hidden="true" />
      <div className="idea-card-body">
        <div className="idea-card-meta">
          <span className="category-name">{idea.category}</span>
          <span>{idea.author}</span>
        </div>
        <h3>{idea.title}</h3>
        <p>{idea.description}</p>
      </div>
      <VoteButton initialVotes={idea.votes} ideaTitle={idea.title} />
    </article>
  );
}
