export default function PrimaryButton({ text }) {
  return (
    <button
      type="button"
      // onClick={onClick}
      className="w-full py-[var(--spacing-150)] px-[var(--spacing-200)] border-[2px] rounded-[var(--spacing-100)] border-[var(--n-l-0)] dark:border-[var(--n-d-400)] text-[var(--n-l-0)] bg-[var(--t-700)] hover:cursor-pointer"
    >
      {text}
    </button>
  );
}
