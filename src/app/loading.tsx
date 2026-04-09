export default function Loading() {
  return (
    <div className="devotional-loader-shell" role="status" aria-live="polite" aria-label="Loading page">
      <div className="devotional-loader-card">
        <div className="devotional-lotus">
          <span className="devotional-petal devotional-petal-1" />
          <span className="devotional-petal devotional-petal-2" />
          <span className="devotional-petal devotional-petal-3" />
          <span className="devotional-petal devotional-petal-4" />
          <span className="devotional-center" />
        </div>
        <p className="section-kicker mb-3 text-center">North Hindi Pandit</p>
        <h2 className="text-center font-serif font-bold text-ink">Preparing your devotional page</h2>
        <p className="text-center text-ink/70 mt-3">
          "ॐ शुभं करोतु कल्याणम्"
        </p>
      </div>
    </div>
  );
}
