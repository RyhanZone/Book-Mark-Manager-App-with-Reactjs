import logo from "../../assets/Fronend-Logo.png";
export default function BookMarksCard() {
  return (
    <div className="bg-[var(--n-l-0)] dark:bg-[var(--n-d-800)] rounded-[var(--b-r-12)]">
      {/* card top */}
      <div className="pt-[var(--spacing-200)] px-[var(--spacing-200)] pb-[var(--spacing-150)] flex flex-col gap-[var(--spacing-200)]">
        {/* header */}
        <div className="flex justify-between">
          {/* card header and img */}
          <div className="flex gap-[var(--spacing-150)]">
            <div className="rounded-[var(--b-r-8)] border border-[var(--n-l-100)] dark:border-[var(--n-d-500)]">
              <img src={logo} alt="" />
            </div>
            <div className="flex flex-col gap-[var(--spacing-050)]">
              <h4 className="t-p-2 text-[var(--n-l-900)] dark:text-[var(--n-d-0)]">
                Frontend Mentor
              </h4>
              <p className="t-p-5 text-[var(--n-l-800)] dark:text-[var(--n-d-100)]">
                frontendmentor.io
              </p>
            </div>
          </div>
          {/* header three dot menu */}
          <div className="h-8 w-8 rounded-[var(--b-r-8)] border border-[var(--n-l-400)] dark:border-[var(--n-d-500)] flex justify-center items-center">
            <svg
              className="text-[var(--n-l-900)] dark:text-[var(--n-l-0)]"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-three-dots-vertical"
              viewBox="0 0 16 16"
            >
              <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
            </svg>
          </div>
        </div>
        <hr className="w-full text-[var(--n-l-300)] dark:text-[var(--n-d-500)]" />
        <p className="t-p-4-medium text-[var(--n-l-800)] dark:text-[var(--n-d-100)]">
          Improve your front-end coding skills by building real projects. Solve
          real-world HTML, CSS and JavaScript challenges whilst working to
          professional designs.
        </p>
        <div className="flex gap-[var(--spacing-100)]">
          <p className="px-[var(--spacing-100)] py-[var(--spacing-025)] bg-[var(--n-l-100)] dark:bg-[var(--n-d-600)] t-p-5 text-[var(--n-l-800)] dark:text-[var(--n-d-100)] ">Practice</p>
        </div>
      </div>
      {/* card bottom */}
      <div className=""></div>
    </div>
  );
}
