import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Header() {
  const location = useLocation(); 
  const navigate = useNavigate();
  const isLoginPage = location.pathname === "/auth/login";
  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="relative z-10 flex flex-row h-[65px] justify-between items-center py-4 px-10 bg-white mx-20 shadow-2xl rounded-md text-[#1E1E1E]">
      <img
        src="/demo_logo.png"
        className="cursor-pointer w-[120px] h-full"
        alt="Logo"
        onClick={()=>navigate("/")}
      />
      <nav>
        <ul className="flex flex-row gap-10">
          <li>
            <Link
              to="/support"
              className={`${
                isActive("/support") ? "text-primary" : "text-text_bold"
              } hover:text-primary text-text_bold font-semibold`}
            >
              Support
            </Link>
          </li>
          <li>
            <Link
              to="/terms"
              className={`${
                isActive("/terms") ? "text-primary" : "text-text_bold"
              } hover:text-primary text-text_bold font-semibold`}
            >
              Terms
            </Link>
          </li>
          <li>
            <Link
              to="/privacy"
              className={`${
                isActive("/privacy") ? "text-primary" : "text-text_bold"
              } hover:text-primary text-text_bold font-semibold`}
            >
              Privacy
            </Link>
          </li>
          <li>
            <Link
              to={isLoginPage ? "/auth/signup" : "/auth/login"}
              className="bg-primary px-4 py-2 rounded-md hover:bg-white hover:border hover:border-primary hover:text-primary text-white font-semibold"
            >
              {isLoginPage ? "Sign Up" : "Login"}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
