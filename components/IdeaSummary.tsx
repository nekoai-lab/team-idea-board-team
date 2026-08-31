import type { Idea } from "@/types/idea";

export function IdeaSummary({ ideas }: { ideas: Idea[] }) {
  return (
    <section className="panel summary-panel" aria-labelledby="summary-heading">
      <div>
        <p className="panel-label">BOARD SNAPSHOT</p>
        <h2 id="summary-heading">現在のアイデア</h2>
      </div>
      <div className="summary-grid">
        <div>
          <strong>{ideas.length}</strong>
          <span>全アイデア</span>
        </div>
        <div className="summary-placeholder">
          <strong>—</strong>
          <span>最多カテゴリ</span>
        </div>
      </div>
      <p className="pending-copy">Ticket Dでは、カテゴリごとの件数を見える化します。</p>
    </section>
  );
}
