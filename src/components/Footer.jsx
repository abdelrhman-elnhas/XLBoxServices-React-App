import { useTranslation } from "react-i18next";
import { FaWhatsapp } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { MdAlternateEmail } from "react-icons/md";
import { HashLink } from "react-router-hash-link";
import logoH from "/images/logoH.svg";
import { NavLink } from "react-router-dom";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";
import { FaSnapchat } from "react-icons/fa6";
import { PiTiktokLogo } from "react-icons/pi";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer
      id="Footer"
      className="text-white bg-secondary-color min-h-[350px] flex justify-end flex-col"
    >
      <div className="container px-4 mx-auto my-auto">
        <div className="pt-5 text-center md:text-start">
          <div className="mt-5 text-center md:text-start">
            <div className="grid mt-3 md:grid-cols-2 md:gap-y-4 lg:grid-cols-4">
              {/* Logo Section */}
              <div className="flex flex-col items-center justify-center gap-12 mx-auto mb-4 lg:justify-start">
                <img src={logoH} height={164} width={100} alt="XLBox Logo" />
                <div className="flex items-center justify-center gap-3">
                  <NavLink>
                    <FaXTwitter className="text-primary-color" />
                  </NavLink>
                  <NavLink>
                    <IoLogoInstagram className="text-primary-color" />
                  </NavLink>
                  <NavLink>
                    <FaSnapchat className="text-primary-color" />
                  </NavLink>
                  <NavLink>
                    <PiTiktokLogo className="text-primary-color" />
                  </NavLink>
                </div>
              </div>

              {/* Contact Section */}
              <div className="mx-auto mb-4 ">
                <h6 className="text-lg font-bold uppercase text-primary-color">
                  {t("Info")}
                </h6>
                <ul className="mt-3 space-y-2 text-start ">
                  <li>
                    <IoLocationOutline className="inline mr-2 text-primary-color" />
                    {t("Munchen | Germany")}
                  </li>
                  <li>
                    <NavLink
                      to="mailto:info@xlbox.services"
                      className="text-white transition hover:text-primary-color"
                    >
                      <MdAlternateEmail className="inline mr-2 text-primary-color" />
                      info@xlbox.services
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="https://wa.me/+0559943499"
                      className="flex items-center text-white transition hover:text-primary-color"
                    >
                      <FaWhatsapp className="mr-2 text-primary-color" />
                      +0559943499
                    </NavLink>
                  </li>
                </ul>
              </div>

              {/* Links Section */}
              <div className="mx-auto mb-4 relative before:bg-primary-color before:w-[2px] before:h-28 before:absolute before:top-0 before:-start-6 before:lg:block before:hidden">
                <h6 className="text-lg font-bold uppercase text-primary-color">
                  {t("Sections")}
                </h6>
                <ul className="mt-3 space-y-2">
                  <li>
                    <HashLink
                      to="/#"
                      className="text-white transition hover:text-primary-color"
                    >
                      {t("Home")}
                    </HashLink>
                  </li>
                  <li>
                    <HashLink
                      to="/#about"
                      className="text-white transition hover:text-primary-color"
                    >
                      {t("About")}
                    </HashLink>
                  </li>
                  <li>
                    <HashLink
                      to="/#services"
                      className="text-white transition hover:text-primary-color"
                    >
                      {t("Services")}
                    </HashLink>
                  </li>
                  <li>
                    <HashLink
                      to="/#faqs"
                      className="text-white transition hover:text-primary-color"
                    >
                      {t("FAQs")}
                    </HashLink>
                  </li>
                </ul>
              </div>

              {/* Legal Section */}
              <div className="mx-auto mb-4 relative before:bg-primary-color before:w-[2px] before:h-28 before:absolute before:top-0 before:-start-6 before:lg:block before:hidden">
                <h6 className="text-lg font-bold uppercase text-primary-color">
                  {t("Legal")}
                </h6>
                <ul className="mt-3 space-y-2">
                  <li>
                    <HashLink
                      to="/terms-conditions"
                      className="text-white transition hover:text-primary-color"
                    >
                      {t("Terms & Conditions")}
                    </HashLink>
                  </li>
                  <li>
                    <HashLink
                      to="/privacy-policy"
                      className="text-white transition hover:text-primary-color"
                    >
                      {t("Privacy Policy")}
                    </HashLink>
                  </li>
                  <li>
                    <HashLink
                      to="/imprint"
                      className="text-white transition hover:text-primary-color"
                    >
                      {t("Imprint")}
                    </HashLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-3 text-center uppercase bg-secondary-color">
        {t("All Rights Reserved to")}{" "}
        <span className="text-primary-color">{t("XLBoxGMBH")}</span>
      </div>
    </footer>
  );
};

export default Footer;
