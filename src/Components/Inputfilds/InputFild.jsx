import { useState } from "react";

export default function InputFild() {
    let [text , settext] = useState("");
    function handleChange(e){
        let value  = e.target.value;
        settext(value);
    }
  return (
    <div className="flex flex-col gap-[var(--spacing-075)]">
      <label className="t-p-4 text-[var(--n-l-900)] dark:text-[var(--n-d-0)]">
        URL *
      </label>
      <input
        type="text"
        value={text}
        placeholder="Search"
        onChange={handleChange}
        className={`
            text-[var(--n-l-800)]
            dark:text-[var(--n-d-100)]
            hover:bg-[var(--n-l-100)]
            dark:hover:bg-[var(--n-d-500)]
            border 
            p-[var(--spacing-150)]
            rounded-[var(--b-r-8)]
            focus:outline-none
            focus:ring-2
            transition-all
            bg-[var(--n-l-0)]
            dark:bg-[var(--n-d-600)]
            
            
            "border border-[var(--n-l-500)] focus:border-[var(--t-700)] focus:ring-[var(--t-700)] dark:border-[var(--n-d-400)] dark:focus:border-[var(--n-d-400)] dark:focus:ring-[var(--n-d-400)]"
            
          `}
      />
    </div>
  );
}
