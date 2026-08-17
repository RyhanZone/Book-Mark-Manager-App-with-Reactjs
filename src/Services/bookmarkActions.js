import bookmarks from "../Data/data";
export function AddBookmarkFunction(bookmarkData) {
    bookmarks.push(bookmarkData);
    console.log('clicked');
}