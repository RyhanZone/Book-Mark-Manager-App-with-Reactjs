import Logo from "../assets/Logo.png";
import LogoDark from "../assets/Logo-dark.png";
import PrimaryButton from "../Components/Buttons/PrimaryButton";
import InputFild from "../Components/Inputfilds/InputFild";
import { Link } from "react-router-dom";
export default function ForgotPassword() {
  return (
    <div className="min-h-screen sm:p-[var(--spacing-200)] p-[var(--spacing-200)] w-full bg-[var(--n-l-100)] dark:bg-[var(--n-d-900)] flex justify-center items-center">
      <div className="w-[448px] h-auto py-[var(--spacing-500)] px-[var(--spacing-400)] border border-[var(--n-l-100)] dark:border-[var(--n-d-500)] bg-[var(--n-l-0)] dark:bg-[var(--n-d-800)] rounded-[var(--b-r-12)] flex flex-col gap-[var(--spacing-400)] ">
        <img className="w-[214px] dark:hidden" src={Logo} alt="" />
        <img className="w-[214px] hidden dark:block" src={LogoDark} alt="" />
        <div className="flex flex-col gap-[var(--spacing-075)]">
          <h1 className="t-p-1 text-[var(--n-l-900)] dark:text-[var(--n-d-0)]">
            Forgot your password?
          </h1>
          <p className="t-p-4-medium text-[var(--n-l-800)] dark:text-[var(--n-d-100)]">
            Enter your email address below and we'll send you a link to reset your password.
          </p>
        </div>
        <form className="flex flex-col gap-[var(--spacing-200)]">
          <InputFild labelTxt="Email" inputType="email" />
          <PrimaryButton text="Send reset link" />
        </form>
        <div className="flex flex-col gap-[var(--spacing-200)] justify-center items-center">
          <div className="flex gap-[var(--spacing-075)]">
            <Link
              to="/login"
              className="t-p-4 text-[var(--n-l-900)] dark:text-[var(--n-d-0)] hover:t-p-4 dark:hover:text-[var(--n-d-100)] transition-all duration-500 hover:cursor-pointer"
            >
              Back to login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
