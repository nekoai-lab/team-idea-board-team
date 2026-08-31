"use client";

import { useId, useState, type FormEvent } from "react";
import { categories, type IdeaDraft } from "@/types/idea";

const TITLE_MIN_LENGTH = 3;
const TITLE_MAX_LENGTH = 40;

type IdeaFormProps = {
  onAdd: (idea: IdeaDraft) => void;
};

export function IdeaForm({ onAdd }: IdeaFormProps) {
  const titleId = useId();
  const categoryId = useId();
  const descriptionId = useId();

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState<IdeaDraft["category"]>(categories[0]);
  const [description, setDescription] = useState("");
  const [error, setError] = useState<string | null>(null);

  const remainingTitleLength = TITLE_MAX_LENGTH - title.length;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (title.length < TITLE_MIN_LENGTH || title.length > TITLE_MAX_LENGTH) {
      setError(
        `タイトルは${TITLE_MIN_LENGTH}文字以上${TITLE_MAX_LENGTH}文字以内で入力してください。`,
      );
      return;
    }

    onAdd({ title, category, description });

    setTitle("");
    setCategory(categories[0]);
    setDescription("");
    setError(null);
  };

  return (
    <form className="idea-form" onSubmit={handleSubmit}>
      <p className="eyebrow">NEW IDEA</p>
      <h2>アイデアを追加する</h2>

      <div className="form-field">
        <label htmlFor={titleId}>タイトル</label>
        <input
          id={titleId}
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <small className="char-count">残り{remainingTitleLength}文字</small>
      </div>

      <div className="form-field">
        <label htmlFor={categoryId}>カテゴリ</label>
        <select
          id={categoryId}
          value={category}
          onChange={(event) => setCategory(event.target.value as IdeaDraft["category"])}
        >
          {categories.map((categoryOption) => (
            <option key={categoryOption} value={categoryOption}>
              {categoryOption}
            </option>
          ))}
        </select>
      </div>

      <div className="form-field">
        <label htmlFor={descriptionId}>背景・困りごと</label>
        <textarea
          id={descriptionId}
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
      </div>

      {error && (
        <p className="form-error" role="alert">
          {error}
        </p>
      )}

      <button type="submit">アイデアを追加</button>
    </form>
  );
}
