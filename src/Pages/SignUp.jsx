import Logo from "../assets/Logo.png";
import LogoDark from "../assets/Logo-dark.png";
import PrimaryButton from "../Components/Buttons/PrimaryButton";
import InputFild from "../Components/Inputfilds/InputFild";
import {Link} from "react-router-dom";
export default function SignUp() {
  return (
    <div className="min-h-screen sm:p-[var(--spacing-200)] p-[var(--spacing-200)] w-full bg-[var(--n-l-100)] dark:bg-[var(--n-d-900)] flex justify-center items-center">
      <div className="w-[448px] h-auto py-[var(--spacing-500)] px-[var(--spacing-400)] border border-[var(--n-l-100)] dark:border-[var(--n-d-500)] bg-[var(--n-l-0)] dark:bg-[var(--n-d-800)] rounded-[var(--b-r-12)] flex flex-col gap-[var(--spacing-400)] ">
        <img className="w-[214px] dark:hidden" src={Logo} alt="" />
        <img className="w-[214px] hidden dark:block" src={LogoDark} alt="" />
        <div className="flex flex-col gap-[var(--spacing-075)]">
          <h1 className="t-p-1 text-[var(--n-l-900)] dark:text-[var(--n-d-0)]">
            Create your account
          </h1>
          <p className="t-p-4-medium text-[var(--n-l-800)] dark:text-[var(--n-d-100)]">
            Join us and start saving your favorite links — organized, searchable, and always within reach.
          </p>
        </div>
        <form className="flex flex-col gap-[var(--spacing-200)]">
          <InputFild labelTxt="Full Name *" inputType="text" />
          <InputFild labelTxt="Email *" inputType="email" />
          <InputFild labelTxt="Password *" inputType="password" />
          <PrimaryButton text="Create account" />
        </form>
        <div className="flex flex-col gap-[var(--spacing-200)] justify-center items-center">
          <div className="flex gap-[var(--spacing-075)]">
            <p className="t-p-4-medium text-[var(--n-l-800)] dark:text-[var(--n-d-100)]">
              Already have an account?
            </p>
            <Link to="/login" className="t-p-4 text-[var(--n-l-900)]  hover:text-[var(--n-l-800)] hover:t-p-4-medium  dark:text-[var(--n-d-0)] hover:t-p-4 dark:hover:text-[var(--n-d-100)] transition-all duration-500 hover:cursor-pointer">
                Log in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
