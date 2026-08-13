export default function AddBookmarkButton({ onClick }) {
  return (
    <div>
      <button
        className="h-[45px] w-[177px] mobile:hidden tablet:flex desktop:flex items-center px-[var(--spacing-200)] py-[var(--spacing-150)] flex gap-[var(--spacing-050)] bg-[var(--t-700)] t-p-3 text-[var(--n-l-0)] rounded-[var(--b-r-8)]"
        onClick={onClick}
      >
        <i className="bi bi-plus t-p-3 text-[20px]"></i>
        Add Bookmark
      </button>
      <button
        onClick={onClick}
        className="h-[45px] w-auto mobile:flex tablet:hidden desktop:hidden items-center px-[var(--spacing-200)] py-[var(--spacing-150)] flex gap-[var(--spacing-050)] bg-[var(--t-700)] t-p-3 text-[var(--n-l-0)] rounded-[var(--b-r-8)]"
      >
        <i className="bi bi-plus t-p-3 text-[20px]"></i>
      </button>
    </div>
  );
}
