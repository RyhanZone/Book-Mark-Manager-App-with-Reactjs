import ArchivedBookmarks from "./MainSections/ArchivedBookmarks";
import Header from "./MainSections/Header";
import Home from "./MainSections/Home";

export default function MainSection({HomeActive}) {
  return (
    <div className="w-full">
      <Header />
      {HomeActive ? <Home /> : <ArchivedBookmarks />}
    </div>
  )
}
