type VoteButtonProps = {
  initialVotes: number;
  ideaTitle: string;
};

export function VoteButton({ initialVotes, ideaTitle }: VoteButtonProps) {
  return (
    <div className="vote-count" aria-label={`${ideaTitle}の投票数は${initialVotes}票です`}>
      <strong>{initialVotes}</strong>
      <small>票</small>
    </div>
  );
}
