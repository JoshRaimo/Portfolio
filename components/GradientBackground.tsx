/**
 * GradientBackground - Deep dark base (#0A0A0A).
 */
export default function GradientBackground() {
  return (
    <div
      className="fixed inset-0 -z-20 overflow-hidden pointer-events-none"
      aria-hidden="true"
      style={{ backgroundColor: "#0a0a0a" }}
    />
  );
}
