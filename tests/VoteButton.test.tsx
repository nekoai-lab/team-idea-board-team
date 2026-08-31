import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { VoteButton } from "@/components/VoteButton";

describe("Ticket A: 投票ボタン", () => {
  it("投票ボタンを押すと、表示される票数が1増える", async () => {
    const user = userEvent.setup();
    render(<VoteButton initialVotes={5} ideaTitle="会議メモを同じ形式で残したい" />);

    const button = screen.getByRole("button", {
      name: "会議メモを同じ形式で残したいの投票数は5票です",
    });
    await user.click(button);

    expect(
      screen.getByRole("button", {
        name: "会議メモを同じ形式で残したいの投票数は6票です",
      }),
    ).toBeTruthy();
  });

  it("続けて押した場合も、押した回数だけ増える", async () => {
    const user = userEvent.setup();
    render(<VoteButton initialVotes={0} ideaTitle="集中時間をチームで共有したい" />);

    const button = screen.getByRole("button", {
      name: "集中時間をチームで共有したいの投票数は0票です",
    });
    await user.click(button);
    await user.click(button);
    await user.click(button);

    expect(
      screen.getByRole("button", {
        name: "集中時間をチームで共有したいの投票数は3票です",
      }),
    ).toBeTruthy();
  });

  it("投票ボタンをキーボードで操作できる", async () => {
    const user = userEvent.setup();
    render(<VoteButton initialVotes={2} ideaTitle="問い合わせの引き継ぎ漏れを減らしたい" />);

    await user.tab();
    await user.keyboard("{Enter}");

    expect(
      screen.getByRole("button", {
        name: "問い合わせの引き継ぎ漏れを減らしたいの投票数は3票です",
      }),
    ).toBeTruthy();
  });
});
