import AddBookmarkButton from "../../../Components/Buttons/AddBookmarkButton";
import ProfilePic from "../../../assets/Avatar.png";
import { useState } from "react";
export default function Header({
  MenuOpen,
  setMenuOpen,
  darkMode,
  setDarkMode,
  IsFormActive,
  setIsFormActive
}) {
  let [IsMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="flex justify-between w-full px-[var(--spacing-400)] py-[var(--spacing-200)] bg-[var(--n-l-0)] dark:bg-[var(--n-d-800)]">
      <div className="flex gap-[var(--spacing-200)]">
        <div
          onClick={() => {
            MenuOpen ? setMenuOpen(false) : setMenuOpen(true);
          }}
          className="mobile:flex tablet:flex desktop:hidden w-[44px] h-[44px] rounded-[var(--b-r-8)] border border-[var(--n-l-400)] dark:border-[var(--n-d-400)] flex justify-center items-center cursor-pointer"
        >
          <i className="bi bi-list text-[20px] text-[var(--n-l-900)] dark:text-[var(--n-d-0)]"></i>
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
      <div className="relative flex gap-[var(--spacing-200)]">
        <AddBookmarkButton onClick={() => setIsFormActive(!IsFormActive)} />
        <img
          onClick={() => setIsMenuOpen(true)}
          src={ProfilePic}
          alt="Avater img"
          className="cursor-pointer"
        />
        <div
          className={`absolute z-250 ${IsMenuOpen ? "block" : "hidden"} right-0 top-full mt-2 w-[370px] overflow-hidden rounded-[var(--b-r-8)] bg-[var(--n-l-0)] shadow-[0px_6px_14px_0px_rgba(34,34,39,0.1)] dark:bg-[var(--n-d-500)]`}
        >
          {/* Profile */}
          <div className="flex items-center gap-[var(--spacing-200)] border-b border-b-[#E9EAEB] px-[var(--spacing-200)] py-[var(--spacing-150)] dark:border-b-[var(--n-d-400)]">
            <img
              src={ProfilePic}
              alt="Profile"
              className="h-14 w-14 shrink-0 rounded-full object-cover"
            />

            <div className="flex flex-col gap-[var(--spacing-050)]">
              <h4 className="t-p-4 text-[var(--n-l-900)] dark:text-[var(--n-d-0)]">
                Emily Carter
              </h4>

              <p className="t-p-4-medium text-[var(--n-l-800)] dark:text-[var(--n-d-100)]">
                emily101@gmail.com
              </p>
            </div>
          </div>

          {/* Theme */}
          <div className="flex items-center justify-between border-b border-b-[#E9EAEB] px-[var(--spacing-200)] py-[var(--spacing-200)] dark:border-b-[var(--n-d-400)]">
            <div className="flex items-center gap-[var(--spacing-125)]">
              <i className="bi bi-palette-fill text-[18px] text-[var(--n-l-800)] dark:text-[var(--n-d-100)]"></i>

              <p className="t-p-4-medium text-[var(--n-l-800)] dark:text-[var(--n-d-100)]">
                Theme
              </p>
            </div>

            {/* Theme buttons */}
            <div className="flex cursor-pointer gap-[var(--spacing-050)] rounded-[var(--b-r-8)] bg-[var(--n-l-300)] p-[var(--spacing-050)] dark:bg-[var(--n-d-400)]">
              {/* Light */}
              <button
                onClick={() => {
                  setDarkMode(!darkMode);
                }}
                type="button"
                className={`flex h-10 w-10 items-center justify-center rounded-[var(--b-r-6)] ${!darkMode ? "bg-[var(--n-l-0)]" : ""} text-[var(--n-l-900)] dark:text-[var(--n-d-100)]`}
              >
                <i className="bi bi-sun text-[18px]"></i>
              </button>

              {/* Dark */}
              <button
                onClick={() => {
                  setDarkMode(!darkMode);
                }}
                type="button"
                className={`flex h-10 w-10 items-center justify-center rounded-[var(--b-r-6)] ${darkMode ? "bg-[var(--n-d-500)]" : ""} text-[var(--n-l-900)] dark:text-[var(--n-d-0)]`}
              >
                <i className="bi bi-moon-fill text-[17px]"></i>
              </button>
            </div>
          </div>

          {/* Logout */}
          <button
            type="button"
            className="flex w-full items-center gap-[var(--spacing-125)] px-[var(--spacing-200)] py-[var(--spacing-200)] text-left hover:bg-[var(--n-l-50)] dark:hover:bg-[var(--n-d-400)]"
          >
            <i className="bi bi-box-arrow-right text-[18px] text-[var(--n-l-800)] dark:text-[var(--n-d-100)]"></i>

            <p className="t-p-4-medium text-[var(--n-l-800)] dark:text-[var(--n-d-100)]">
              Logout
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}
