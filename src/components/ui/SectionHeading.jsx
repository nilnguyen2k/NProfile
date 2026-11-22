/**
 * Shared section header: a small mono label, the title, and an optional one-line summary.
 */
function SectionHeading({ index, label, title, subtitle, className = '' }) {
  return (
    <header className={`text-center max-w-2xl mx-auto mb-12 md:mb-16 ${className}`}>
      <p className="font-mono text-xs md:text-sm tracking-wider text-primary mb-3">
        <span className="text-slate-400 dark:text-slate-500">{index} /</span> {label}
      </p>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100 text-balance">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-slate-600 dark:text-slate-400 md:text-lg text-balance">{subtitle}</p>
      )}
    </header>
  );
}

export default SectionHeading;
