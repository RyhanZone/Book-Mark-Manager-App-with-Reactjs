import Logo from "../../assets/Logo.png";
import LogoDark from "../../assets/Logo-dark.png";
import tags from "../../Data/data";

export default function LeftSidebar({
  HomeActive,
  setIsHomeActive,
  MenuOpen,
  setMenuOpen,
}) {
  return (
    <div
      className={`${MenuOpen ? "absolute flex z-50 left-0 w-full" : "mobile:hidden tablet:hidden desktop:flex w-auto"}`}
    >
      <div
        className={`flex flex-col gap-[var(--spacing-200] min-w-[280px] min-h-screen bg-[var(--n-l-0)] dark:bg-[var(--n-d-800)] flex-col gap-[var(--spacing-500)] px-[var(--spacing-200)] py-[var(--spacing-200)]`}
      >
        <div className="flex justify-between">
          <img className="w-[214px] dark:hidden" src={Logo} alt="" />
          <img className="w-[214px] hidden dark:block" src={LogoDark} alt="" />
          <i
            onClick={() => {
              !MenuOpen ? setMenuOpen(true) : setMenuOpen(false);
            }}
            className="bi bi-x text-[var(--n-l-800)] dark:text-[var(--n-d-100)] text-2xl desktop:hidden tablet:block mobile:block"
          ></i>
        </div>
        <div className="flex flex-col gap-[var(--spacing-200)]">
          <div className="">
            <div
              onClick={() => !HomeActive && setIsHomeActive(true)}
              className={`flex gap-[var(--spacing-100)] px-[var(--spacing-100)] py-[var(--spacing-150)] rounded-[var(--b-r-8)] ${HomeActive ? "bg-[var(--n-l-100)] dark:bg-[var(--n-d-600)]" : ""} hover:bg-[var(--n-l-100)] hover:dark:bg-[var(--n-d-600)]`}
            >
              <svg
                className="text-[var(--n-l-800)] dark:text-[var(--n-d-100)]"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M6.66667 14.1667H13.3333M9.18141 2.30333L3.52949 6.69927C3.15168 6.99312 2.96278 7.14005 2.82669 7.32405C2.70614 7.48704 2.61633 7.67065 2.56169 7.86588C2.5 8.08627 2.5 8.32558 2.5 8.80421V14.8333C2.5 15.7667 2.5 16.2335 2.68166 16.59C2.84144 16.9036 3.09641 17.1585 3.41002 17.3183C3.76654 17.5 4.23325 17.5 5.16667 17.5H14.8333C15.7668 17.5 16.2335 17.5 16.59 17.3183C16.9036 17.1585 17.1586 16.9036 17.3183 16.59C17.5 16.2335 17.5 15.7667 17.5 14.8333V8.80421C17.5 8.32558 17.5 8.08627 17.4383 7.86588C17.3837 7.67065 17.2939 7.48704 17.1733 7.32405C17.0372 7.14005 16.8483 6.99312 16.4705 6.69927L10.8186 2.30333C10.5258 2.07562 10.3794 1.96177 10.2178 1.918C10.0752 1.87938 9.92484 1.87938 9.78221 1.918C9.62057 1.96177 9.47418 2.07562 9.18141 2.30333Z"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="t-p-3 text-[var(--n-l-800)] dark:text-[var(--n-d-100)]">
                Home
              </p>
            </div>
            <div
              onClick={() => HomeActive && setIsHomeActive(false)}
              className={`flex gap-[var(--spacing-100)] px-[var(--spacing-100)] py-[var(--spacing-150)] rounded-[var(--b-r-8)] ${!HomeActive ? "bg-[var(--n-l-100)] dark:bg-[var(--n-d-600)]" : ""} hover:bg-[var(--n-l-100)] hover:dark:bg-[var(--n-d-600)]`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                className="text-[var(--n-l-800)] dark:text-[var(--n-d-100)]"
              >
                <path
                  d="M3.33366 6.66383C3.19699 6.6603 3.09774 6.65239 3.00851 6.63464C2.34736 6.50313 1.83053 5.9863 1.69902 5.32515C1.66699 5.16415 1.66699 4.97055 1.66699 4.58333C1.66699 4.19612 1.66699 4.00251 1.69902 3.84152C1.83053 3.18037 2.34736 2.66354 3.00851 2.53202C3.16951 2.5 3.36311 2.5 3.75033 2.5H16.2503C16.6375 2.5 16.8311 2.5 16.9921 2.53202C17.6533 2.66354 18.1701 3.18037 18.3016 3.84152C18.3337 4.00251 18.3337 4.19612 18.3337 4.58333C18.3337 4.97055 18.3337 5.16415 18.3016 5.32515C18.1701 5.9863 17.6533 6.50313 16.9921 6.63464C16.9029 6.65239 16.8037 6.6603 16.667 6.66383M8.33366 10.8333H11.667M3.33366 6.66667H16.667V13.5C16.667 14.9001 16.667 15.6002 16.3945 16.135C16.1548 16.6054 15.7724 16.9878 15.302 17.2275C14.7672 17.5 14.0671 17.5 12.667 17.5H7.33366C5.93353 17.5 5.23346 17.5 4.69868 17.2275C4.22828 16.9878 3.84583 16.6054 3.60614 16.135C3.33366 15.6002 3.33366 14.9001 3.33366 13.5V6.66667Z"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="t-p-3 text-[var(--n-l-800)] dark:text-[var(--n-d-100)] ">
                Archived
              </p>
            </div>
          </div>
          <div className="">
            <p className="px-[var(--spacing-150)] pb-[var(--spacing-025)] text-[12px] font-bold text-[#4D4D4D] dark:text-[var(--n-d-100)]">
              TAGS
            </p>
            <div className="">
              {tags.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="py-[var(--spacing-100)] px-[var(--spacing-150)] flex justify-between"
                  >
                    <div className="flex gap-[var(--spacing-100)] items-center">
                      <input
                        className="h-4 w-4 border border-[var(--n-l-500)] dark:border-[var(--n-l-300)] dark:accent-amber-300 darbg-amber-800 checked:bg-[var(--t-700)] checked:border-[var(--t-700)] cursor-pointer"
                        type="checkbox"
                        id={`tag-${item.id}`}
                      />

                      <label
                        className="t-p-3 text-[var(--n-l-800)] dark:text-[var(--n-d-100)]"
                        htmlFor={`tag-${item.id}`}
                      >
                        {item.name}
                      </label>
                    </div>

                    <div className="px-[var(--spacing-100)] py-[var(--spacing-025)] bg-[var(--n-l-100)] dark:bg-[var(--n-d-600)] rounded-full border border-[var(--n-l-300)] dark:border-[var(--n-d-400)] text-[12px] font-medium text-[var(--n-l-800)] dark:text-[var(--n-d-100)]">
                      {item.count}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div
        onClick={() => {
          !MenuOpen ? setMenuOpen(true) : setMenuOpen(false);
        }}
        className="w-full min-h-screen bg-[#131313B2]"
      ></div>
    </div>
  );
}
