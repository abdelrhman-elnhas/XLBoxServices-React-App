import { useState } from "react";
import LanguageToggler from "./LanguageToggler";
import { useTranslation } from "react-i18next";
import { HashLink } from "react-router-hash-link";
import logo from "/images/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { t } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className=" bg-secondary-color">
        <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[70px]">
            <div className="md:flex md:items-center md:gap-12">
              <Link className="block text-primary-color" to="/">
                <span className="sr-only">Home</span>
                <img src={logo} alt="XLBox Logo" width="148px" height="37px" />
              </Link>
            </div>

            <div className="hidden md:block">
              <nav aria-label="Global">
                <ul className="flex items-center gap-6 text-sm font-bold">
                  <li>
                    <Link
                      smooth={+true}
                      to="/"
                      className="transition text-third-color hover:text-primary-color nav-item active"
                    >
                      {" "}
                      {t("Home")}{" "}
                    </Link>
                  </li>

                  <li>
                    <HashLink
                      smooth={+true}
                      to="/#about"
                      className="transition text-third-color hover:text-primary-color nav-item"
                    >
                      {" "}
                      {t("About")}{" "}
                    </HashLink>
                  </li>

                  <li>
                    <HashLink
                      smooth={+true}
                      to="/#services"
                      className="transition text-third-color hover:text-primary-color nav-item"
                    >
                      {" "}
                      {t("Services")}{" "}
                    </HashLink>
                  </li>

                  <li>
                    <HashLink
                      smooth={+true}
                      to="/#faqs"
                      className="transition text-third-color hover:text-primary-color nav-item"
                    >
                      {" "}
                      {t("FAQs")}{" "}
                    </HashLink>
                  </li>

                  {/* <li>
                    <HashLink
                      smooth={+true}
                      to="/#contact"
                      className="transition text-third-color hover:text-primary-color nav-item"
                    >
                      {" "}
                      {t("Contact Us")}{" "}
                    </HashLink>
                  </li> */}
                </ul>
              </nav>
            </div>

            <div className="flex items-center gap-4">
              {/* <div className="sm:flex sm:gap-4">
                <NavLink
                  className="px-5 py-2.5 text-sm font-medium transition rounded-full shadow bg-primary-color hover:bg-primary-color/85 text-third-color hover:text-secondary-color"
                  to="/categories"
                >
                  {t("Explore Services")}
                </NavLink>
              </div> */}
              <div className="hidden md:flex sm:gap-4">
                <LanguageToggler position="end" />
              </div>

              <div className="block md:hidden">
                <button
                  className="p-2 transition rounded text-third-color bg-primary-color hover:bg-secondary-color"
                  onClick={toggleMobileMenu}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>{" "}
          <div
            className={`fixed inset-0 z-50 bg-secondary-color bg-opacity-50 flex items-center justify-center transition-transform duration-300 ${
              isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
            }`}
          >
            <div className="relative w-full h-full bg-secondary-color/85">
              <div className="absolute flex flex-row-reverse items-center justify-between w-full top-4 ltr:right-5 ltr:left-auto rtl:left-5 rtl:right-auto">
                <button
                  className="p-2 transition rounded text-third-color bg-primary-color hover:bg-secondary-color"
                  onClick={toggleMobileMenu}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
                <div className="mx-10">
                  <LanguageToggler position="start" />
                </div>
              </div>
              <ul className="flex flex-col items-center justify-center h-full space-y-8 text-lg font-bold text-center">
                <li>
                  <HashLink
                    smooth={+true}
                    to="/"
                    className="transition text-third-color hover:text-primary-color nav-item"
                  >
                    {" "}
                    {t("Home")}{" "}
                  </HashLink>
                </li>
                <li>
                  <HashLink
                    smooth={+true}
                    to="/#about"
                    className="transition text-third-color hover:text-primary-color nav-item"
                  >
                    {" "}
                    {t("About")}{" "}
                  </HashLink>
                </li>
                <li>
                  <HashLink
                    smooth={+true}
                    to="/#services"
                    className="transition text-third-color hover:text-primary-color nav-item"
                  >
                    {" "}
                    {t("Services")}{" "}
                  </HashLink>
                </li>
                <li>
                  <HashLink
                    smooth={+true}
                    to="/#faqs"
                    className="transition text-third-color hover:text-primary-color nav-item"
                  >
                    {" "}
                    {t("FAQs")}{" "}
                  </HashLink>
                </li>
                {/* <li>
                  <HashLink
                    smooth={+true}
                    to="/#contact"
                    className="transition text-third-color hover:text-primary-color nav-item"
                  >
                    {" "}
                    {t("Contact Us")}{" "}
                  </HashLink>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
