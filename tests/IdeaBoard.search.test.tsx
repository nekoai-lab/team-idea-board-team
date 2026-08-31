import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { IdeaBoard } from "@/components/IdeaBoard";

describe("キーワード検索とアイデア一覧の連動", () => {
  it("タイトルまたは説明に一致するアイデアだけを表示する", () => {
    render(<IdeaBoard />);

    fireEvent.change(screen.getByLabelText("キーワードで検索"), {
      target: { value: "引き継ぎ" },
    });

    expect(screen.getByText("問い合わせの引き継ぎ漏れを減らしたい")).toBeTruthy();
    expect(screen.queryByText("会議メモを同じ形式で残したい")).toBeNull();
    expect(screen.queryByText("集中時間をチームで共有したい")).toBeNull();
    expect(screen.getByText("1件を表示")).toBeTruthy();
  });

  it("タイトルだけでなく説明文の一部でも一致する", () => {
    render(<IdeaBoard />);

    fireEvent.change(screen.getByLabelText("キーワードで検索"), {
      target: { value: "相談可能な時間" },
    });

    expect(screen.getByText("集中時間をチームで共有したい")).toBeTruthy();
    expect(screen.getByText("1件を表示")).toBeTruthy();
  });

  it("一致するアイデアがないときは、その旨を表示する", () => {
    render(<IdeaBoard />);

    fireEvent.change(screen.getByLabelText("キーワードで検索"), {
      target: { value: "存在しないキーワード" },
    });

    expect(screen.getByText("条件に一致するアイデアが見つかりません")).toBeTruthy();
    expect(screen.getByText("0件を表示")).toBeTruthy();
  });

  it("キーワードを空にすると絞り込み前の一覧に戻る", () => {
    render(<IdeaBoard />);

    const searchInput = screen.getByLabelText("キーワードで検索");
    fireEvent.change(searchInput, { target: { value: "会議" } });
    expect(screen.getByText("1件を表示")).toBeTruthy();

    fireEvent.change(searchInput, { target: { value: "" } });

    expect(screen.getByText("会議メモを同じ形式で残したい")).toBeTruthy();
    expect(screen.getByText("問い合わせの引き継ぎ漏れを減らしたい")).toBeTruthy();
    expect(screen.getByText("集中時間をチームで共有したい")).toBeTruthy();
    expect(screen.getByText("3件を表示")).toBeTruthy();
  });
});
