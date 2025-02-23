import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
const Imprint = () => {
  const { t } = useTranslation();
  return (
    <section className="bg-[#f7f7f7] flex items-start justify-center pt-5 min-h-screen">
      <div className="container w-full sm:w-[70%] lg:w-[50%]  flex flex-col items-center justify-start gap-8 py-8 ">
        <motion.h2
          className="mb-10 text-3xl font-bold text-center text-primary-color"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ amount: 0.2 }}
          transition={{ type: "spring" }}
        >
          {t("Imprint")}
        </motion.h2>
        <div>
          <p className="">
            <b className="block mb-3 font-bold text-primary-color">
              {t("Information according to § 5 TMG")}
            </b>
            <b className="block mb-3 font-normal text-secondary-color">
              {t("XLBOX Services GmbH")}
            </b>
            <b className="block mb-3 font-normal text-secondary-color">
              {t("Berthold-Haupt-Street 34, 01257 Dresden, Germany")}
            </b>
            <b className="block mb-3 font-normal text-secondary-color">
              {t("Represented by: Managing Director: Mohammad Kassem")}
            </b>
            <b className="block mb-3 font-bold text-primary-color">
              {t("Contact")}
            </b>
            <b className="block mb-3 font-normal text-secondary-color">
              {t("Phone: +49 176 32582194")}
            </b>
            <b className="block mb-3 font-normal text-secondary-color">
              {t("Email: info@xlbox.services")}
            </b>
            <b className="block mb-3 font-normal text-secondary-color">
              {t("Trade Register: Dresden District Court, HRB 46119")}
            </b>

            <b className="block mb-3 font-bold text-primary-color">
              {t("Commercial Register")}
            </b>
            <b className="block mb-3 font-normal text-secondary-color">
              {t(
                "Registered in the Commercial Register. Register Court: Local Court Dresden, Registration Number: HRB 46119"
              )}
            </b>

            <b className="block mb-3 font-bold text-primary-color">
              {t("VAT Identification Number")}
            </b>
            <b className="block mb-3 font-normal text-secondary-color">
              {t(
                "VAT Identification Number according to § 27a of the VAT Act: DE451756702"
              )}
            </b>
            <b className="block mb-3 font-normal text-secondary-color">
              {t("Responsible for content according to § 55 para. 2 RStV")}
            </b>
            <b className="block mb-3 font-normal text-secondary-color">
              {t("Mohammad Kassem, Berthold-Haupt-Straße 34, 01257 Dresden")}
            </b>

            <b className="block mb-3 font-bold text-primary-color">
              {t("Disclaimer")}
            </b>
            <b className="block mb-3 font-normal text-secondary-color">
              {t(
                "The contents of this website were created with the greatest care. However, we cannot guarantee the accuracy, completeness, or timeliness of the content."
              )}
            </b>
            <b className="block mb-3 font-bold text-primary-color">
              {t("Dispute Resolution")}
            </b>
            <b className="block mb-3 font-normal text-secondary-color">
              {t(
                "We are neither willing nor obliged to participate in dispute resolution proceedings before a consumer arbitration board."
              )}
            </b>
            <b className="block mb-3 font-normal text-secondary-color">
              {t(
                "The European Commission provides a platform for online dispute resolution (OS), which you can find here: https://ec.europa.eu/consumers/odr/"
              )}
            </b>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Imprint;
