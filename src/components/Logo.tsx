// The Ambit mark: a little atom. Two orbits tilted at asymmetric angles (so it
// reads as dynamic, not a balanced X), a nucleus, and one electron. Uses
// currentColor, so set the color via the parent's text color.
export default function Logo({
  size = 22,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.2}
      className={className}
      aria-hidden="true"
    >
      <ellipse cx="24" cy="24" rx="18" ry="6.5" transform="rotate(20 24 24)" />
      <ellipse cx="24" cy="24" rx="18" ry="6.5" transform="rotate(78 24 24)" />
      <circle cx="24" cy="24" r="3.4" fill="currentColor" stroke="none" />
      <circle cx="40.9" cy="30.2" r="2.6" fill="currentColor" stroke="none" />
    </svg>
  );
}
