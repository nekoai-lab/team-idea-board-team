"use client";

import { useState } from "react";

type VoteButtonProps = {
  initialVotes: number;
  ideaTitle: string;
};

export function VoteButton({ initialVotes, ideaTitle }: VoteButtonProps) {
  const [votes, setVotes] = useState(initialVotes);

  return (
    <button
      type="button"
      className="vote-count"
      aria-label={`${ideaTitle}の投票数は${votes}票です`}
      onClick={() => setVotes((current) => current + 1)}
    >
      <strong>{votes}</strong>
      <small>票</small>
    </button>
  );
}
