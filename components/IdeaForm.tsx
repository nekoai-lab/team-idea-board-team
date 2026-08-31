import type { FormEvent } from "react";
import type { IdeaDraft } from "@/types/idea";

type IdeaFormProps = {
  onAdd: (idea: IdeaDraft) => void;
};

export function IdeaForm({ onAdd }: IdeaFormProps) {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    void onAdd;
  };

  return (
    <section className="panel form-panel" aria-labelledby="form-heading">
      <p className="panel-label">NEW IDEA</p>
      <h2 id="form-heading">アイデアを追加</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="idea-title">タイトル</label>
        <input id="idea-title" name="title" placeholder="改善したいことを入力" disabled />

        <label htmlFor="idea-category">カテゴリ</label>
        <select id="idea-category" name="category" disabled defaultValue="業務効率化">
          <option>業務効率化</option>
          <option>顧客対応</option>
          <option>働き方</option>
        </select>

        <label htmlFor="idea-description">背景・困りごと</label>
        <textarea
          id="idea-description"
          name="description"
          placeholder="どんな場面で困っているかを入力"
          rows={4}
          disabled
        />

        <button className="primary-button" type="submit" disabled>
          Ticket Cで有効になります
        </button>
      </form>
    </section>
  );
}
