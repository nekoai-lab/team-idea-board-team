import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { IdeaBoard } from "@/components/IdeaBoard";

describe("スターターアプリ", () => {
  it("初期アイデア3件と演習用の未実装表示を確認できる", () => {
    render(<IdeaBoard />);

    expect(screen.getByText("会議メモを同じ形式で残したい")).toBeTruthy();
    expect(screen.getByText("問い合わせの引き継ぎ漏れを減らしたい")).toBeTruthy();
    expect(screen.getByText("集中時間をチームで共有したい")).toBeTruthy();
    expect(screen.getByText("Ticket Bで有効になります")).toBeTruthy();
    expect(screen.getByRole("button", { name: "Ticket Cで有効になります" })).toBeTruthy();
  });
});
