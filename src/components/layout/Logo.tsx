import { Link } from "react-router-dom";
import { useTheme } from '@/context/ThemeContext';

interface LogoProps {
  className?: string;
}

export default function Logo({ className = "" }: LogoProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <Link to="/" className={`flex items-center ${className}`}>
      {/* <img
        src="/images/elements/brackets.svg"
        alt="GDG Cloud Kolkata"
        className="h-6 w-auto mr-2 xl:block hidden dark:hidden"
      />
      <div className="text-sm md:text-base text-[--black] dark:text-[--white] xl:block hidden dark:hidden">
        <div className="font-light">Google Developer Groups</div>
        <div className="text-xs text-[--gray60] dark:text-[--gray20]"><span className="text-google-blue">Cloud</span> • Kolkata</div>
      </div> */}
      <img src="/images/GDGCK.svg" alt="GDG Cloud Kolkata" className="h-6 lg:h-8 w-auto mr-2 dark:hidden" />
      <img src="/images/GDGCK-white.svg" alt="GDG Cloud Kolkata" className="h-6 lg:h-8 w-auto mr-2  hidden dark:block " />
    </Link>
  );
}
