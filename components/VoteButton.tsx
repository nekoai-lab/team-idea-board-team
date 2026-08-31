type VoteButtonProps = {
  initialVotes: number;
  ideaTitle: string;
};

export function VoteButton({ initialVotes, ideaTitle }: VoteButtonProps) {
  return (
    <button
      className="vote-button is-pending"
      type="button"
      disabled
      aria-label={`${ideaTitle}への投票機能は準備中です`}
    >
      <span aria-hidden="true">＋</span>
      <strong>{initialVotes}</strong>
      <small>準備中</small>
    </button>
  );
}
