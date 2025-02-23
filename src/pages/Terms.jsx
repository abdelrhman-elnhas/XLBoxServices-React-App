import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

const Terms = () => {
  const { t } = useTranslation();
  return (
    <section className="bg-[#f7f7f7] flex items-start justify-center pt-5 min-h-screen">
      <div className="container  w-full sm:w-[70%] lg:w-[50%]  flex flex-col items-center justify-start gap-8 py-8 ">
        <motion.h2
          className="mb-10 text-3xl font-bold text-center text-primary-color"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ amount: 0.2 }}
          transition={{ type: "spring" }}
        >
          {t("Terms & Conditions")}
        </motion.h2>
        <div>
          <p className="mb-3">
            <b className="font-bold text-primary-color">{t("General")}</b>
            <ul className="list-decimal text-secondary-color ms-7">
              <li>
                {t(
                  'XLBOX Services GmbH, Berthold-Haupt-Street 34, 01257 Dresden (hereinafter referred to as "XLBOX"), offers moving and cleaning services.'
                )}
              </li>
              <li>
                {t(
                  "These Terms and Conditions (AGB) apply to all contracts between XLBOX and its customers."
                )}
              </li>
              <li>{t("Deviating agreements require written form.")}</li>
            </ul>
          </p>
          <p className="mb-3">
            <b className="font-bold text-primary-color">{t("Services")}</b>
            <ul className="list-decimal text-secondary-color ms-7">
              <li>
                {t(
                  "XLBOX offers moving and cleaning services as per the agreed contract."
                )}
              </li>
              <li>
                {t(
                  "Details regarding the services are outlined in the individual contract agreements."
                )}
              </li>
            </ul>
          </p>
          <p className="mb-3">
            <b className="font-bold text-primary-color">
              {t("Prices and Payment Terms")}
            </b>
            <ul className="list-decimal text-secondary-color ms-7">
              <li>{t("All prices are in euros plus the applicable VAT.")}</li>
              <li>
                {t(
                  "In the absence of an individually agreed payment term, invoices must be paid within 14 days of the invoice date without deduction."
                )}
              </li>
              <li>
                {t(
                  "In case of late payment, XLBOX reserves the right to charge interest on arrears in accordance with § 288 BGB."
                )}
              </li>
            </ul>
          </p>
          <p className="mb-3">
            <b className="font-bold text-primary-color">{t("Cancellation")}</b>
            <ul className="list-decimal text-secondary-color ms-7">
              <li>
                {t(
                  "Services can be canceled free of charge up to 14 days before the scheduled date."
                )}
              </li>
              <li>
                {t(
                  "For cancellations less than 14 days before the date, XLBOX reserves the right to charge a processing fee of 50% of the contract value."
                )}
              </li>
            </ul>
          </p>
          <p className="mb-3">
            <b className="font-bold text-primary-color">{t("Liability")}</b>
            <ul className="list-decimal text-secondary-color ms-7">
              <li>
                {t("XLBOX is only liable for intent and gross negligence.")}
              </li>
              <li>
                {t("Liability for damages due to force majeure is excluded.")}
              </li>
            </ul>
          </p>
          <p className="mb-3">
            <b className="font-bold text-primary-color">
              {t("Data Protection")}
            </b>
            <ul className="list-decimal text-secondary-color ms-7">
              <li>
                {t(
                  "The processing of personal data is carried out in accordance with the privacy policy."
                )}
              </li>
              <li>
                {t(
                  "Customers can request information about the stored data at any time."
                )}
              </li>
            </ul>
          </p>
          <p className="mb-3">
            <b className="font-bold text-primary-color">
              {t("Final Provisions")}
            </b>
            <ul className="list-decimal text-secondary-color ms-7">
              <li>
                {t("German law applies. The place of jurisdiction is Dresden.")}
              </li>
              <li>
                {t(
                  "Should individual provisions of these Terms and Conditions be invalid, the validity of the remaining provisions remains unaffected."
                )}
              </li>
            </ul>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Terms;
