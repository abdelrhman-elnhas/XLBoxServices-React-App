import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
const Hero = () => {
  const { t } = useTranslation();

  return (
    <section
      id=""
      className="flex flex-col relative items-center justify-start h-[calc(100vh-70px)] py-16 text-center text-primary-color bg-hero-bg bg-cover bg-no-repeat after:bg-hero-tex after:w-full after:h-full after:absolute after:bg-no-repeat after:bg-cover after:top-0 after:left-0"
      style={{ backgroundPosition: "center -30px" }}
    >
      <div className="container flex items-start justify-center mx-auto mt-[-20px]">
        <motion.h1
          className="text-xl font-bold uppercase md:text-2xl lg:text-4xl"
          initial={{ scale: 0.7, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring" }}
        >
          {t("From Fixing to Freshening")}{" "}
          <span className="block my-4 text-third-color">
            {t("We've Got Every Corner Covered!")}
          </span>
        </motion.h1>
        {/* <div className="mt-6">
          <button className="px-5 py-2.5 font-bold rounded-full text-primary-color bg-primary-color/30">
            Browse Categories
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
