import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { IdeaBoard } from "@/components/IdeaBoard";

describe("スターターアプリ", () => {
  it("初期アイデア3件と現在の票数だけを表示する", () => {
    render(<IdeaBoard />);

    expect(screen.getByText("会議メモを同じ形式で残したい")).toBeTruthy();
    expect(screen.getByText("問い合わせの引き継ぎ漏れを減らしたい")).toBeTruthy();
    expect(screen.getByText("集中時間をチームで共有したい")).toBeTruthy();
    expect(screen.getByLabelText("会議メモを同じ形式で残したいの投票数は8票です")).toBeTruthy();
    expect(screen.getByLabelText("問い合わせの引き継ぎ漏れを減らしたいの投票数は12票です")).toBeTruthy();
    expect(screen.getByLabelText("集中時間をチームで共有したいの投票数は5票です")).toBeTruthy();
    expect(screen.queryByRole("button")).toBeNull();
    expect(screen.queryByRole("textbox")).toBeNull();
    expect(screen.queryByText(/Ticket [A-D]/)).toBeNull();
  });
});
