import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { CiGlobe } from "react-icons/ci";
import { FaCaretDown } from "react-icons/fa6";

import Button from "./Button";

const LanguageToggler = ({ position }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);
  const currentLanguage = i18n.language;

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setTimeout(() => setIsOpen(false), 0);
  };

  useEffect(() => {
    const updateHtmlAttributes = () => {
      const lang = i18n.language;
      const htmlElement = document.documentElement;

      htmlElement.setAttribute("lang", lang);

      if (lang === "ar") {
        htmlElement.setAttribute("dir", "rtl");
      } else {
        htmlElement.setAttribute("dir", "ltr");
      }
    };

    updateHtmlAttributes();

    i18n.on("languageChanged", updateHtmlAttributes);

    return () => {
      i18n.off("languageChanged", updateHtmlAttributes);
    };
  }, [i18n]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false); // Close dropdown if clicked outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="relative">
      <div className="inline-flex items-center overflow-hidden transition bg-transparent border rounded-full border-third-color hover:bg-primary-color">
        <Button
          ref={buttonRef}
          classes={`px-5 py-2.5 text-sm font-medium text-third-color hover:text-secondary-color transition flex items-center gap-1 group`}
          handleClick={toggleDropdown}
        >
          {" "}
          <CiGlobe className="text-primary-color group-hover:text-secondary-color" />{" "}
          {t(
            currentLanguage === "en"
              ? "English"
              : currentLanguage === "de"
              ? "Deutsch"
              : currentLanguage === "ar"
              ? "العربية"
              : "English"
          )}{" "}
          <FaCaretDown className="text-primary-color group-hover:text-secondary-color" />
        </Button>
      </div>

      {isOpen && (
        <div
          ref={dropdownRef}
          className={`absolute z-50 w-44 py-2 mt-2 divide-y divide-gray-100 rounded-md shadow-lg border-primary-color bg-slate-100  ${
            position === "end" ? "end-0" : "start-0"
          }`}
          role="menu"
        >
          <div>
            <button
              className="block w-full h-full px-4 py-2 text-sm text-secondary-color text-start hover:bg-primary-color/25"
              role="menuitem"
              onClick={() => changeLanguage("en")}
            >
              English
            </button>
          </div>

          <div>
            <button
              className="block w-full h-full px-4 py-2 text-sm text-secondary-color text-start hover:bg-primary-color/25"
              role="menuitem"
              onClick={() => changeLanguage("de")}
            >
              Deutsch
            </button>
          </div>

          <div>
            <button
              className="block w-full h-full px-4 py-2 text-sm font-bold text-secondary-color text-start hover:bg-primary-color/25 font-arabic"
              role="menuitem"
              onClick={() => changeLanguage("ar")}
            >
              العربية
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

LanguageToggler.propTypes = {
  position: PropTypes.string,
};

export default LanguageToggler;
