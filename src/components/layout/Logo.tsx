import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to="/" className="flex items-center">
    <img
      src="/images/elements/brackets.svg"
      alt="GDG Cloud Kolkata"
      className="h-6 w-auto mr-2 xl:block hidden"
    />
    <div className="text-sm md:text-base text-black dark:text-white xl:block hidden">
      <div className="font-light">Google Developer Groups</div>
      <div className="text-xs text-[--gray60] dark:text-[--gray20]"><span className="text-google-blue">Cloud</span> • Kolkata</div>
    </div>
    <img src="/images/GDGCK.svg" alt="GDG Cloud Kolkata" className="h-6 w-auto mr-2 xl:hidden dark:brightness-100" />
  </Link>
  );
}
