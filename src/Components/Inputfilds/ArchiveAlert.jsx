import PrimaryButton from "../Buttons/PrimaryButton"
import SecondaryButton from "../Buttons/SecondaryButton"
export default function ArchiveAler() {
  return (
    <div className="max-w-[450px] flex flex-col gap-[var(--spacing-300)] rounded-[var(--b-r-12)] p-[var(--spacing-300)] bg-[var(--n-l-0)] dark:bg-[var(--n-d-800)] ">
        <i className="bi bi-x text-[30px]/0 text-[var(--n-l-900)] dark:text-[var(--n-l-0)] text-right hover:cursor-pointer"></i>
        <div className="flex flex-col gap-[var(--sapcing-100)]">
            <h1 className="t-p-1 text-[var(--n-l-900)] dark:text-[var(--n-d-0)]">Archive bookmark</h1>
            <p className="t-p-4-medium text-[var(--n-l-800)] dark:text-[var(--n-d-100)]">Are you sure you want to archive this bookmark?</p>
        </div>
        <div className="flex justify-end gap-[var(--spacing-400)]">
            <SecondaryButton text={"Cencel"}/>
            <PrimaryButton text={"Archive"} />
        </div>
    </div>
  )
}
