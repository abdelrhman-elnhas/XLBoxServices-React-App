import { useTranslation } from "react-i18next";
import logoB from "/images/logoB.svg";
import { motion } from "motion/react";

const About = () => {
  const { t } = useTranslation();
  return (
    <section
      id="about"
      className="flex items-center justify-center min-h-[calc(100vh-200px)] bg-primary-color py-10"
    >
      <div className="container flex flex-col items-center justify-center gap-8 md:flex-row md:justify-between md:gap-0">
        <div className="flex items-center justify-center w-full basis-1/2">
          <motion.img
            initial={{ rotateZ: -30 }}
            whileInView={{ rotateZ: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ type: "spring" }}
            src={logoB}
            width={"50%"}
            height={"50%"}
            alt="XLBox Services logo"
          />
        </div>
        <div className="text-secondary-color basis-1/2">
          <motion.h2
            className="mb-4 text-4xl font-bold text-secondary-color text-balance"
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ type: "spring" }}
          >
            {t("About Us")}
          </motion.h2>
          <motion.p
            className="mb-4 text-lg text-secondary-color text-balance"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ type: "spring" }}
          >
            {t(
              "Welcome to Xlbox , where excellence meets versatility.We are a dynamic multi-services company dedicated to providing top-tier public general services that cater to your every need."
            )}{" "}
          </motion.p>
          <ul className="text-lg text-balance text-third-color">
            <motion.li
              className="flex items-start gap-1 mb-2"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ amount: 0.2 }}
              transition={{ type: "spring" }}
            >
              <img
                src="/images/checkmark.svg"
                alt="Checkmark"
                className="w-4 h-4 mt-1"
              />
              {t(
                "Our mission is simple: to make your life easier with a wide range of reliable, high-quality services"
              )}
            </motion.li>
            <motion.li
              className="flex items-start gap-1"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ amount: 0.2 }}
              transition={{ type: "spring", delay: 0.1 }}
            >
              <img
                src="/images/checkmark.svg"
                alt="Checkmark"
                className="w-4 h-4 mt-1"
              />
              {t(
                "Our team of skilled professionals is committed to delivering exceptional results, consistently exceeding your expectations"
              )}
            </motion.li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
