export function WikiWizLogo() {
  return (
    <div className="flex items-center gap-2">
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Gold W shape */}
        <path
          d="M4 2 L8 28 L12 12 L16 28 L20 12 L24 28 L28 2 L24 8 L20 2 L16 12 L12 2 L8 8 Z"
          fill="currentColor"
          className="text-primary"
        />
        {/* Decorative circle */}
        <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-primary/40" />
      </svg>
      <span className="font-serif font-bold text-xl text-primary">WikiWiz</span>
    </div>
  );
}
