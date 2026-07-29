
export default function SecondaryButton({text}) {
  return (
    <button className="py-[var(--spacing-150)] px-[var(--spacing-200)] border rounded-[var(--spacing-100)] border-[var(--n-l-400)] dark:border-[var(--n-d-400)] text-[var(--n-l-900)] dark:text-[var(--n-d-0)] hover:cursor-pointer">
      {text}
    </button>
  );
}
