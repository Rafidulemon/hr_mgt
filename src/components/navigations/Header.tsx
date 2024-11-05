import React from "react";

const Header: React.FC = () => {
  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    console.log("Selected language:", event.target.value);
  };

  return (
    <header className="relative z-10 flex flex-row h-[65px] justify-between items-center py-4 px-10 bg-white mx-20 shadow-2xl rounded-md text-[#1E1E1E]">
      <img src="/demo_logo.png" className="cursor-pointer w-[120px] h-full" alt="Logo" />
      <nav>
        <ul className="flex flex-row gap-10">
          <li>
            <a href="/" className="hover:text-primary text-text_bold font-semibold">
              Support
            </a>
          </li>
          <li>
            <a href="/about" className="hover:text-primary text-text_bold font-semibold">
              Terms
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:text-primary text-text_bold font-semibold">
              Privacy
            </a>
          </li>
          <select
            defaultValue="En"
            onChange={handleLanguageChange}
            className="cursor-pointer rounded-md px-3 bg-primary text-white hover:bg-white hover:text-primary hover:border-primary hover:border font-semibold transition"
          >
            <option value="En">En</option>
            <option value="Ban">Ban</option>
          </select>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
