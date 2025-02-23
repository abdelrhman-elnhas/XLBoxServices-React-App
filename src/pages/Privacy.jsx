import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
const Privacy = () => {
  const { t } = useTranslation();
  return (
    <section className="bg-[#f7f7f7] flex items-start justify-center pt-5 min-h-screen">
      <div className="container w-full sm:w-[70%] lg:w-[50%] flex flex-col items-center justify-start gap-8 py-8 ">
        <motion.h2
          className="mb-10 text-3xl font-bold text-center text-primary-color"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ amount: 0.2 }}
          transition={{ type: "spring" }}
        >
          {t("Privacy Policy")}
        </motion.h2>
        <div>
          <p className="mb-3">
            <b className="font-bold text-primary-color">
              {t("Responsible Person")}
            </b>
            <b className="block font-normal text-secondary-color">
              {t("Responsible for data processing is:")}
            </b>
            <ul className="list-disc text-secondary-color ms-7">
              <li>{t("XLBOX Services GmbH")}</li>
              <li>{t("Berthold-Haupt-Straße 34")}</li>
              <li>{t("01257 Dresden")}</li>
              <li>{t("Email: info@xlbox.services")}</li>
              <li>{t("Phone: +49 176 32582194")}</li>
            </ul>
          </p>
          <p className="mb-3">
            <b className="font-bold text-primary-color">
              {t("Collection and Storage of Personal Data")}
            </b>
            <ul className="list-disc text-secondary-color ms-7">
              <li>
                {t(
                  "When visiting the website, the following data is automatically collected: IP address, date and time of access, browser, and operating system."
                )}
              </li>
              <li>
                {t(
                  "This data is used to ensure a smooth connection setup and system security."
                )}
              </li>
            </ul>
          </p>
          <p className="mb-3">
            <b className="font-bold text-primary-color">
              {t("Use and Disclosure of Data")}
            </b>
            <b className="block font-normal text-secondary-color">
              {t("Your data will only be used for the following purposes:")}
            </b>

            <ul className="list-disc text-secondary-color ms-7">
              <li>{t("Processing of inquiries")}</li>
              <li>{t("Contract processing")}</li>
              <li>{t("Processing of inquiries")}</li>
            </ul>
            <b className="block font-normal text-secondary-color">
              {t(
                "Disclosure to third parties will only occur if it is necessary for the fulfillment of the contract."
              )}
            </b>
          </p>
          <p className="mb-3">
            <b className="font-bold text-primary-color">
              {t("Cookies and Other Technologies")}
            </b>
            <ul className="list-disc text-secondary-color ms-7">
              <li>
                {t(
                  "This website uses cookies to improve user-friendliness. Some cookies are deleted after the end of the session (so-called session cookies), while others remain on your device and enable your browser to be recognized (persistent cookies)."
                )}
              </li>
              <li>
                {t(
                  "For functions that are not strictly necessary, your consent according to Art. 6 Para. 1 lit. a GDPR is required. You can revoke your consent at any time."
                )}
              </li>
            </ul>
          </p>
          <p className="mb-3">
            <b className="font-bold text-primary-color">
              {t("Marketing and Newsletter")}
            </b>
            <ul className="list-disc text-secondary-color ms-7">
              <li>
                {t(
                  "Email and SMS marketing will only take place with your explicit consent according to Art. 6 Para. 1 lit. a GDPR. Unsubscribing from the newsletter is possible at any time."
                )}
              </li>
              <li>
                {t(
                  "Newsletter Tracking: When sending the newsletter, we analyze your user behavior to optimize future campaigns. If you do not wish to have newsletter tracking, you can unsubscribe from the newsletter."
                )}
              </li>
            </ul>
          </p>
          <p className="mb-3">
            <b className="font-bold text-primary-color">{t("User Rights")}</b>
            <b className="block font-normal text-secondary-color">
              {t("You have the right")}
            </b>
            <ul className="list-disc text-secondary-color ms-7">
              <li>
                {t(
                  "To request information about your stored data (Art. 15 GDPR)"
                )}
              </li>
              <li>
                {t(
                  "To request the correction of incorrect data (Art. 16 GDPR)"
                )}
              </li>
              <li>
                {t(
                  "To request the deletion of your data, provided there are no legal retention obligations (Art. 17 GDPR)"
                )}
              </li>
              <li>
                {t("To object to the processing of your data (Art. 21 GDPR)")}
              </li>
            </ul>
            <b className="block font-normal text-secondary-color">
              {t("For this, please contact: info@xlbox.services.")}
            </b>
          </p>
          <p className="mb-3">
            <b className="font-bold text-primary-color">
              {t("Storage Duration")}
            </b>
            <ul className="list-disc text-secondary-color ms-7">
              <li>
                {t(
                  "Personal data will be deleted after the completion of contract processing or upon your request, provided there are no legal retention obligations."
                )}
              </li>
            </ul>
          </p>
          <p className="mb-3">
            <b className="font-bold text-primary-color">{t("Data Security")}</b>
            <ul className="list-disc text-secondary-color ms-7">
              <li>
                {t(
                  "We implement technical and organizational measures to protect your data from loss, destruction, or unauthorized access."
                )}
              </li>
            </ul>
          </p>
          <p className="mb-3">
            <b className="font-bold text-primary-color">
              {t("Hosting and Data Transfer")}
            </b>
            <ul className="list-disc text-secondary-color ms-7">
              <li>{t("Our website is hosted by Hostinger.")}</li>
              <li>
                {t(
                  "The following systems, plugins, etc. are used: React; PHP; Laravel; MySQL"
                )}
              </li>
              <li>
                {t(
                  "Data is processed on servers in countries with and without an adequacy decision from the European Commission. For data transfers to third countries without an adequacy decision, we rely on EU standard contractual clauses."
                )}
              </li>
            </ul>
          </p>
          <p className="mb-3">
            <b className="font-bold text-primary-color">
              {t("Changes to the Privacy Policy")}
            </b>
            <ul className="list-disc text-secondary-color ms-7">
              <li>
                {t(
                  "We reserve the right to adjust this privacy policy as needed. The current version can always be found on our website."
                )}
              </li>
            </ul>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Privacy;
