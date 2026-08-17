import { useState } from "react";
import LeftSidebar from "./leftSidebar";
import MainSection from "./MainSection";
import InputFild from "../../Components/Inputfilds/InputFild";
import TextAreaFilds from "../../Components/Inputfilds/TextAreaFilds";
import PrimaryButton from "../../Components/Buttons/PrimaryButton";
import SecondaryButton from "../../Components/Buttons/SecondaryButton";
import {AddBookmarkFunction} from "../../Services/bookmarkActions";
export default function Dashboard({ darkMode, setDarkMode }) {
  let [IsHomeActive, setIsHomeActive] = useState(true);
  let [IsMenuOpen, setIsMenuOpen] = useState(false);
  let [IsFormActive, setIsFormActive] = useState(false);

  const [bookmarkData, setBookmarkData] = useState({
    title: "",
    description: "",
    url: "",
    tags: "",
  });
  function handleChange(e) {
    const { name, value } = e.target;

    setBookmarkData((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log();
  }
  return (
    <div
      className={`relative h-screen overflow-hidden bg-[var(--n-l-100)] dark:bg-[var(--n-d-900)] flex w-full`}
    >
      <LeftSidebar
        HomeActive={IsHomeActive}
        setIsHomeActive={setIsHomeActive}
        MenuOpen={IsMenuOpen}
        setMenuOpen={setIsMenuOpen}
      />
      <MainSection
        IsFormActive={IsFormActive}
        setIsFormActive={setIsFormActive}
        HomeActive={IsHomeActive}
        MenuOpen={IsMenuOpen}
        setMenuOpen={setIsMenuOpen}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
      <div
        className={`absolute w-full h-screen bg-[#131313B2] dark:bg-[#131313B2] ${IsFormActive ? "flex" : "hidden"} justify-center items-center`}
      >
        <div className="w-[570px] h-auto py-[var(--spacing-500)] px-[var(--spacing-400)] border border-[var(--n-l-100)] dark:border-[var(--n-d-500)] bg-[var(--n-l-0)] dark:bg-[var(--n-d-800)] rounded-[var(--b-r-12)] flex flex-col gap-[var(--spacing-400)]">
          {/* heading */}
          <div className="flex flex-col gap-[var(--spacing-075)]">
            <div className="flex justify-between">
              <h1 className="t-p-1 text-[var(--n-l-900)] dark:text-[var(--n-d-0)]">
                Add a bookmark
              </h1>
              <div
                onClick={() => {
                  setIsFormActive(false);
                }}
                className="border flex justify-center items-center rounded h-8 w-8 border-[var(--n-l-400)] dark:border-[var(--n-d-500)] "
              >
                <i className="bi bi-x text-[20px] text-[var(--n-l-900)] dark:text-[var(--n-d-0)]"></i>
              </div>
            </div>
            <p className="t-p-4-medium text-[var(--n-l-800)] dark:text-[var(--n-d-100)]">
              Save a link with details to keep your collection organized. We
              extract the favicon automatically from the URL.
            </p>
          </div>
          {/* input filds */}
          <div className="flex flex-col gap-[var(--spacing-250)]">
            <InputFild
              labelTxt={"Title *"}
              inputType={"text"}
              name={"title"}
              onChange={handleChange}
            />
            <TextAreaFilds
              labeltxt={"Description"}
              name={"description"}
              onChange={handleChange}
            />
            <InputFild
              labelTxt={"Website Url*"}
              inputType={"text"}
              name={"url"}
              onChange={handleChange}
            />
            <InputFild
              labelTxt={"Tags *"}
              inputType={"text"}
              name={"tags"}
              onChange={handleChange}
            />
          </div>
          {/* buttons */}
          <div className="flex gap-[var(--spacing-200)] ">
            <SecondaryButton
              onClick={() => {
                setIsFormActive(false);
              }}
              text={"Cancel"}
            />
            <PrimaryButton onbuttonClick={() => {AddBookmarkFunction(bookmarkData)}} text={"Add Bookmark"} />
          </div>
        </div>
      </div>
    </div>
  );
}
