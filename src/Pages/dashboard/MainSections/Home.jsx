import { useState } from "react";
import BookMarksCard from "../../../Components/BookMraksCards/BookMarksCard";
export default function Home({
  bookmarks,
  setBookmarks,
  pinbookmarks,
  setpinbookmarks,
  setIsEditFormActive,
  handleEditBookmark,
  selectedTags = [],
  searchText = "",
}) {
  let [IsMenuOpen, setIsMenuOpen] = useState(false);
  const [sortBy, setSortBy] = useState("Recent added");

  const matchesSelectedTags = (b) => {
    if (!selectedTags || selectedTags.length === 0) return true;
    return b.tags?.some((tag) =>
      selectedTags.some((selected) => selected.toLowerCase() === tag.toLowerCase())
    );
  };

  const matchesSearch = (b) => {
    if (!searchText) return true;
    return b.title?.toLowerCase().includes(searchText.toLowerCase());
  };

  const activeBookmarks = bookmarks.filter((b) => !b.isArchived && matchesSelectedTags(b) && matchesSearch(b));
  const pinnedBookmarks = activeBookmarks.filter((b) => b.isPinned);
  const unpinnedBookmarks = activeBookmarks.filter((b) => !b.isPinned);

  const sortedUnpinnedBookmarks = [...unpinnedBookmarks].sort((a, b) => {
    if (sortBy === "Recent added") {
      return (b.id || 0) - (a.id || 0);
    } else if (sortBy === "Recently visited") {
      const dateA = new Date(a.cardLVDate || 0).getTime();
      const dateB = new Date(b.cardLVDate || 0).getTime();
      return dateB - dateA;
    } else if (sortBy === "Most visited") {
      return (b.views || 0) - (a.views || 0);
    }
    return 0;
  });

  const displayBookmarks = [...pinnedBookmarks, ...sortedUnpinnedBookmarks];

  return (
    <div className="h-full overflow-y-scroll pt-[var(--spacing-400)] px-[var(--spacing-400)] pb-[var(--spacing-400)]">
      <div className="w-full flex justify-between">
        <h4 className="t-p-1 text-[var(--n-l-900)] dark:text-[var(--n-d-0)]">
          All bookmarks
        </h4>
        <div className="relative">
          <div
            onClick={() => setIsMenuOpen(!IsMenuOpen)}
            className="px-[var(--spacing-150)] py-[var(--spacing-125)] flex items-center hover:cursor-pointer gap-[var(--spacing-200)] bg-[var(--n-l-0)] dark:bg-[var(--n-d-800)] rounded-[var(--b-r-8)] w-[112px] "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="15"
              viewBox="0 0 17 15"
              fill="none"
              className="text-[var(--n-l-900)] dark:text-[var(--n-d-0)] text-[20px] "
            >
              <path
                d="M12.4167 0.75V14.0833M15.75 10.75L12.4167 14.0833L9.08333 10.75M4.08333 14.0833V0.75M7.41667 4.08333L4.08333 0.75L0.75 4.08333"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="text-[var(--n-l-900)] dark:text-[var(--n-d-0)] t-p-3">
              Sort By
            </p>
          </div>
          {/* filter dropdown */}
          <div
            className={`absolute ${IsMenuOpen ? "flex" : "hidden"} z-200 right-[-0%] w-[200px] p-[var(--spacing-100)] flex flex-col gap-[var(--spacing-050)] rounded-[var(--b-r-8)] bg-[var(--n-l-0)] dark:bg-[var(--n-d-500)] shadow-md`}
          >
            <div
              onClick={() => {
                setSortBy("Recent added");
                setIsMenuOpen(false);
              }}
              className="w-full flex justify-between items-center text-[var(--n-l-900)] dark:text-[var(--n-d-100)] p-[var(--spacing-100)] rounded-[var(--b-r-6)] hover:bg-[var(--n-l-100)] dark:hover:bg-[var(--n-d-400)] cursor-pointer"
            >
              <p className="t-p-4">Recent added</p>
              {sortBy === "Recent added" && <i className="bi bi-check text-[18px]"></i>}
            </div>
            <div
              onClick={() => {
                setSortBy("Recently visited");
                setIsMenuOpen(false);
              }}
              className="w-full flex justify-between items-center text-[var(--n-l-900)] dark:text-[var(--n-d-100)] p-[var(--spacing-100)] rounded-[var(--b-r-6)] hover:bg-[var(--n-l-100)] dark:hover:bg-[var(--n-d-400)] cursor-pointer"
            >
              <p className="t-p-4">Recently visited</p>
              {sortBy === "Recently visited" && <i className="bi bi-check text-[18px]"></i>}
            </div>
            <div
              onClick={() => {
                setSortBy("Most visited");
                setIsMenuOpen(false);
              }}
              className="w-full flex justify-between items-center text-[var(--n-l-900)] dark:text-[var(--n-d-100)] p-[var(--spacing-100)] rounded-[var(--b-r-6)] hover:bg-[var(--n-l-100)] dark:hover:bg-[var(--n-d-400)] cursor-pointer"
            >
              <p className="t-p-4">Most visited</p>
              {sortBy === "Most visited" && <i className="bi bi-check text-[18px]"></i>}
            </div>
          </div>
        </div>
      </div>
      <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-5 justify-center 2xl:justify-between md:justify-start mt-[var(--spacing-400)]">
        {displayBookmarks.map((bookmark) => {
          return (
            <BookMarksCard
              key={bookmark.id}
              id={bookmark.id}
              cardTitle={bookmark.title}
              cardUrl={bookmark.url}
              cardDescription={bookmark.description}
              cardTags={bookmark.tags}
              cardViews={bookmark.views}
              cardCDate={bookmark.createdAt}
              cardLVDate={bookmark.cardLVDate}
              isPinned={bookmark.isPinned}
              isArchived={bookmark.isArchived}
              bookmarks={bookmarks}
              setBookmarks={setBookmarks}
              pinbookmarks={pinbookmarks}
              setpinbookmarks={setpinbookmarks}
              setIsEditFormActive={setIsEditFormActive}
              handleEditBookmark={handleEditBookmark}
            />
          );
        })}
      </div>
    </div>
  );
}