import AddBookmarkButton from "../../../Components/Buttons/AddBookmarkButton";
import ProfilePic from "../../../assets/Avatar.png"
export default function Header({MenuOpen, setMenuOpen}) {
  return (
    <div className="flex justify-between w-full px-[var(--spacing-400)] py-[var(--spacing-200)] bg-[var(--n-l-0)] dark:bg-[var(--n-d-800)]">
      <div className="flex gap-[var(--spacing-200)]">
        <div onClick={() => {MenuOpen ? setMenuOpen(false) : setMenuOpen(true)}} className="mobile:flex tablet:flex desktop:hidden w-[44px] h-[44px] rounded-[var(--b-r-8)] border border-[var(--n-l-400)] dark:border-[var(--n-d-400)] flex justify-center items-center">
          <i className="bi bi-list text-[20px] text-[var(--n-l-100)] dark:text-[var(--n-d-0)]"></i>
        </div>
        <div className="relative w-[320px] mobile:w-[193px] tablet:w-[250px] flex">
          <i className="bi bi-search absolute left-[var(--spacing-150)] top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--n-l-800)] dark:text-[var(--n-d-100)]"></i>

          <input
            type="text"
            placeholder="Search by title..."
            className=" w-full h-[45px] pl-[var(--spacing-600)] pr-[var(--spacing-150)] rounded-[var(--b-r-8)] border border-[var(--n-l-300)] dark:border-[var(--n-d-400)] bg-[var(--n-l-0)] dark:bg-[var(--n-d-500)] t-p-4-medium text-[var(--n-l-800)] dark:text-[var(--n-d-100)] placeholder:text-[var(--n-l-800)] dark:placeholder:text-[var(--n-d-100)]  placeholder:t-p-4-medium focus:outline-none focus:border-[var(--t-700)] focus:ring-1 focus:ring-[var(--t-700)]"
          />
        </div>
      </div>
      <div className="flex gap-[var(--spacing-200)]">
        <AddBookmarkButton />
        <img src={ProfilePic} alt="Avater img" />
      </div>
    </div>
  );
}
