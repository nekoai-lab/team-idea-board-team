import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useState } from "react";
import { describe, expect, it, vi } from "vitest";
import { IdeaSearch } from "@/components/IdeaSearch";

function ControlledIdeaSearch() {
  const [value, setValue] = useState("");
  return <IdeaSearch value={value} onChange={setValue} />;
}

describe("キーワード検索", () => {
  it("入力するとonChangeへ入力値を渡す", () => {
    const handleChange = vi.fn();
    render(<IdeaSearch value="" onChange={handleChange} />);

    fireEvent.change(screen.getByRole("searchbox", { name: "キーワードで検索" }), {
      target: { value: "会議" },
    });

    expect(handleChange).toHaveBeenCalledWith("会議");
  });

  it("キーボードだけで入力欄にフォーカスし操作できる", async () => {
    const user = userEvent.setup();
    render(<ControlledIdeaSearch />);

    await user.tab();
    const input = screen.getByRole<HTMLInputElement>("searchbox", {
      name: "キーワードで検索",
    });
    expect(document.activeElement).toBe(input);

    await user.keyboard("会議");
    expect(input.value).toBe("会議");
  });
});
