import { useState } from "react";
export default function BookMarksCard({
  cardTitle,
  cardUrl,
  cardDescription,
  cardTags,
  cardViews,
  cardCDate,
  cardLVDate,
}) {
  let [IsMenuOpen, setIsMenuOpen] = useState(false);

  const getFavicon = (url) => {
    const domain = new URL(`https://${url}`).hostname;
    return `https://www.google.com/s2/favicons?domain=${domain}`;
  };

  return (
    <div className="bg-[var(--n-l-0)] flex flex-col justify-between dark:bg-[var(--n-d-800)] rounded-[var(--b-r-12)] max-w-[338px]">
      {/* card top */}
      <div className="pt-[var(--spacing-200)] px-[var(--spacing-200)] pb-[var(--spacing-150)] flex flex-col gap-[var(--spacing-200)]">
        {/* header */}
        <div className="flex justify-between">
          {/* card header and img */}
          <div className="flex gap-[var(--spacing-150)]">
            <div className="w-[44px] h-[44px] shrink-0 rounded-[var(--b-r-8)] border border-[var(--n-l-100)] dark:border-[var(--n-d-500)] overflow-hidden flex items-center justify-center">
              <img
                src={getFavicon(cardUrl)}
                alt={`${cardTitle} favicon`}
                className="w-full h-full"
              />
            </div>
            <div className="flex flex-col gap-[var(--spacing-050)]">
              <h4 className="t-p-2 text-[var(--n-l-900)] dark:text-[var(--n-d-0)]">
                {cardTitle}
              </h4>
              <p className="t-p-5 text-[var(--n-l-800)] dark:text-[var(--n-d-100)]">
                {cardUrl}
              </p>
            </div>
          </div>
          {/* header three dot && menu */}
          <div className="relative ">
            <div
              onClick={() => setIsMenuOpen(!IsMenuOpen)}
              className="h-8 w-8 rounded-[var(--b-r-8)] hover:cursor-pointer border border-[var(--n-l-400)] dark:border-[var(--n-d-500)] hover:bg-[var(--n-l-100)] dark:hover:bg-[var(--n-d-500)] flex justify-center items-center"
            >
              <svg
                className="text-[var(--n-l-900)] dark:text-[var(--n-l-0)] "
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
              </svg>
            </div>
            {/* menu */}
            <div
              onClick={(e) => {
                e.stopPropagation();
              }}
              className={`absolute right-[-50%] ${
                IsMenuOpen ? "flex" : "hidden"
              } flex-col gap-[var(--spacing-050)] p-[var(--spacing-100)] bg-[var(--n-l-0)] dark:bg-[var(--n-d-600)] rounded-[var(--b-r-8)] w-[200px] shadow-[0px_6px_14px_0px_rgba(34,34,39,0.1)] border border-[var(--n-l-100)] dark:border-[var(--n-d-500)]`}
            >
              {/* Visit */}
              <div className="flex items-center gap-[var(--spacing-125)] p-[var(--spacing-100)] rounded-[var(--b-r-6)] hover:bg-[var(--n-l-100)] dark:hover:bg-[var(--n-d-500)] cursor-pointer">
                <i className="bi bi-box-arrow-up-right shrink-0 text-[16px] leading-none text-[var(--n-l-800)] dark:text-[var(--n-d-100)]" />
                <p className="t-p-4 text-[var(--n-l-800)] dark:text-[var(--n-d-100)]">
                  Visit
                </p>
              </div>

              {/* Copy URL */}
              <div className="flex items-center gap-[var(--spacing-125)] p-[var(--spacing-100)] rounded-[var(--b-r-6)] hover:bg-[var(--n-l-100)] dark:hover:bg-[var(--n-d-500)] cursor-pointer">
                <i className="bi bi-link-45deg shrink-0 text-[16px] leading-none text-[var(--n-l-800)] dark:text-[var(--n-d-100)]" />
                <p className="t-p-4 text-[var(--n-l-800)] dark:text-[var(--n-d-100)]">
                  Copy URL
                </p>
              </div>

              {/* Pin */}
              <div className="flex items-center gap-[var(--spacing-125)] p-[var(--spacing-100)] rounded-[var(--b-r-6)] hover:bg-[var(--n-l-100)] dark:hover:bg-[var(--n-d-500)] cursor-pointer">
                <i className="bi bi-pin-angle shrink-0 text-[16px] leading-none text-[var(--n-l-800)] dark:text-[var(--n-d-100)]" />
                <p className="t-p-4 text-[var(--n-l-800)] dark:text-[var(--n-d-100)]">
                  Pin
                </p>
              </div>

              {/* Edit */}
              <div className="flex items-center gap-[var(--spacing-125)] p-[var(--spacing-100)] rounded-[var(--b-r-6)] hover:bg-[var(--n-l-100)] dark:hover:bg-[var(--n-d-500)] cursor-pointer">
                <i className="bi bi-pencil shrink-0 text-[16px] leading-none text-[var(--n-l-800)] dark:text-[var(--n-d-100)]" />
                <p className="t-p-4 text-[var(--n-l-800)] dark:text-[var(--n-d-100)]">
                  Edit
                </p>
              </div>

              {/* Archive */}
              <div className="flex items-center gap-[var(--spacing-125)] p-[var(--spacing-100)] rounded-[var(--b-r-6)] hover:bg-[var(--n-l-100)] dark:hover:bg-[var(--n-d-500)] cursor-pointer">
                <i className="bi bi-archive shrink-0 text-[16px] leading-none text-[var(--n-l-800)] dark:text-[var(--n-d-100)]" />
                <p className="t-p-4 text-[var(--n-l-800)] dark:text-[var(--n-d-100)]">
                  Archive
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr className="w-full text-[var(--n-l-300)] dark:text-[var(--n-d-500)]" />
        <p className="t-p-4-medium text-[var(--n-l-800)] dark:text-[var(--n-d-100)]">
          {cardDescription}
        </p>
        <div className="flex gap-[var(--spacing-100)] flex-wrap">
          {cardTags.map((tag, index) => (
            <p
              className="px-[var(--spacing-100)] py-[var(--spacing-025)] bg-[var(--n-l-100)] dark:bg-[var(--n-d-600)] t-p-5 text-[var(--n-l-800)] dark:text-[var(--n-d-100)] rounded-[var(--b-r-4)] "
              key={index}
            >
              {tag}
            </p>
          ))}
        </div>
      </div>
      {/* card bottom */}
      <div className="py-[var(--spacing-150)] px-[var(--spacing-200)] flex gap-[var(--spacing-200)] border-t border-[var(--n-l-100)] dark:border-[var(--n-d-500)]">
        <div className="flex items-center gap-[var(--spacing-075)]">
          <i className="bi bi-eye text-[12px] text-[var(--n-l-800)] dark:text-[var(--n-d-100)] "></i>
          <p className="t-p-5 text-[var(--n-l-800)] dark:text-[var(--n-d-100)]">
            {cardViews}
          </p>
        </div>
        <div className="flex items-center gap-[var(--spacing-075)]">
          <i className="bi bi-clock text-[12px] text-[var(--n-l-800)] dark:text-[var(--n-d-100)] "></i>
          <p className="t-p-5 text-[var(--n-l-800)] dark:text-[var(--n-d-100)]">
            {cardCDate}
          </p>
        </div>
        <div className="flex items-center gap-[var(--spacing-075)]">
          <i className="bi bi-calendar4 text-[12px] text-[var(--n-l-800)] dark:text-[var(--n-d-100)] "></i>
          <p className="t-p-5 text-[var(--n-l-800)] dark:text-[var(--n-d-100)]">
            {cardLVDate}
          </p>
        </div>
      </div>
    </div>
  );
}
