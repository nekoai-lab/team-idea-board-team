"use client";

type IdeaSearchProps = {
  value: string;
  onChange: (value: string) => void;
};

export function IdeaSearch({ value, onChange }: IdeaSearchProps) {
  return (
    <div className="idea-search">
      <label htmlFor="idea-search-input">キーワードで検索</label>
      <input
        id="idea-search-input"
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="タイトルや説明の一部を入力"
        autoComplete="off"
      />
    </div>
  );
}
