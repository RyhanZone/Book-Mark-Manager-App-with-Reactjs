export function AddBookmarkFunction(bookmarkData, setBookmarks) {
  setBookmarks((prev) => [...prev, bookmarkData]);
}
// visit
export function VisitBookmarkUrl(key, bookmarks, setBookmarks) {
  for (let i = 0; i < bookmarks.length; i++) {
    if (bookmarks[i].id === key) {
      let viewupdate = (bookmarks[i].views += 1);
      setBookmarks((prev) => {
        const updatedBookmarks = prev.map((bookmark) => {
          if (bookmark.id === key) {
            return {
              ...bookmark,
              views: viewupdate,
              cardLVDate: new Date().toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              }),
            };
          }
          return bookmark;
        });
        return updatedBookmarks;
      });
      const url = bookmarks[i].url.startsWith("http")
        ? bookmarks[i].url
        : `https://${bookmarks[i].url}`;
      window.open(url, "_blank");
      return;
    }
  }
}
// copy url
export function CopyBookmarkUrl(key, bookmarks) {
  const bookmark = bookmarks.find((item) => item.id === key);

  if (!bookmark) return;

  const url = bookmark.url.startsWith("http")
    ? bookmark.url
    : `https://${bookmark.url}`;

  navigator.clipboard.writeText(url);
}
// pin Bookmark
export function PinBookmark(key, bookmarks, setBookmarks) {
  const updatedBookmarks = bookmarks.map((bookmark) => {
    if (bookmark.id === key) {
      return { ...bookmark, isPinned: !bookmark.isPinned };
    }
    return bookmark;
  });
  setBookmarks(updatedBookmarks);
}