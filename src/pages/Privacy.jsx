import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
const Privacy = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-[#f7f7f7] flex items-center justify-center pt-5 min-h-screen">
      <div className="container flex flex-col items-center gap-8 py-8 justify-evenly">
        <motion.h2
          className="mb-10 text-3xl font-bold text-center text-primary-color"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ amount: 0.2 }}
          transition={{ type: "spring" }}
        >
          {t("Privacy Policy")}
        </motion.h2>
      </div>
    </section>
  );
};

export default Privacy;
