import { useState } from "react";

export default function TextAreaFilds() {
  const [text, setText] = useState("");

  const charCount = text.length;

  const handleChange = (e) => {
    const value = e.target.value;

    if (value.length <= 280) {
      setText(value);
    }
  };

  const isLimitReached = charCount === 280;

  return (
    <div className="flex flex-col gap-[var(--spacing-075)]">
      <div className="flex flex-col gap-[var(--spacing-075)]">
        <label className="t-p-4 text-[var(--n-l-900)] dark:text-[var(--n-d-0)]">
          URL *
        </label>

        <textarea
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
            ${
              isLimitReached
                ? "border border-[var(--r-800)] focus:border-[var(--r-800)] focus:ring-[var(--r-800)]"
                : "border border-[var(--n-l-500)] focus:border-[var(--t-700)] focus:ring-[var(--t-700)] dark:border-[var(--n-d-400)] dark:focus:border-[var(--n-d-400)] dark:focus:ring-[var(--n-d-400)]"
            }
          `}
          rows={20}
        />
      </div>

      <div className="text-[var(--n-l-800)] dark:text-[var(--n-d-100)] flex justify-between">
        <p className="t-p-4-medium">
          This is a hint text to help user.
        </p>

        <p className={`t-p-5 ${isLimitReached && "text-[var(--r-600)]"}`}>
          {charCount}/280
        </p>
      </div>
    </div>
  );
}