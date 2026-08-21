import ArchivedBookmarks from "./MainSections/ArchivedBookmarks";
import Header from "./MainSections/Header";
import Home from "./MainSections/Home";

export default function MainSection({ HomeActive, setMenuOpen, MenuOpen , darkMode, setDarkMode, IsFormActive, setIsFormActive, bookmarksList ,setBookmarks, pinbookmarks, setpinbookmarks, setIsEditFormActive, handleEditBookmark, selectedTags, searchText, setSearchText}) {
  return (
    <div className="w-full h-full flex flex-col">
      <Header setMenuOpen={setMenuOpen} MenuOpen={MenuOpen} darkMode={darkMode} setDarkMode={setDarkMode} IsFormActive={IsFormActive} setIsFormActive={setIsFormActive} searchText={searchText} setSearchText={setSearchText} />
      <div className="flex-1 min-h-0">
        {HomeActive ? (
          <Home
            bookmarks={bookmarksList}
            setBookmarks={setBookmarks}
            pinbookmarks={pinbookmarks}
            setpinbookmarks={setpinbookmarks}
            setIsEditFormActive={setIsEditFormActive}
            handleEditBookmark={handleEditBookmark}
            selectedTags={selectedTags}
            searchText={searchText}
          />
        ) : (
          <ArchivedBookmarks
            bookmarks={bookmarksList}
            setBookmarks={setBookmarks}
            pinbookmarks={pinbookmarks}
            setpinbookmarks={setpinbookmarks}
            setIsEditFormActive={setIsEditFormActive}
            handleEditBookmark={handleEditBookmark}
            selectedTags={selectedTags}
            searchText={searchText}
          />
        )}
      </div>
    </div>
  );
}
