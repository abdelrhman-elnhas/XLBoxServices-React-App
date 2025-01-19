import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import useFetch from "@hooks/useFetch";
import Loader from "./Loader";

const Video = () => {
  const { t } = useTranslation();
  const { data, isLoading, error } = useFetch({
    url: "https://xlbox.services/backend/api/home",
  });

  if (isLoading) {
    return <Loader />;
  }
  if (error) {
    return null;
  }

  return (
    <section className="flex items-start justify-center min-h-[70vh] py-10 bg-third-color">
      <div className="container flex flex-col items-center justify-between">
        <motion.h2
          className="mb-10 text-3xl font-bold text-center text-secondary-color"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ amount: 0.2 }}
          transition={{ type: "spring" }}
        >
          <span className="text-primary-color">{t("HOW")}</span> {t("IT WORKS")}
        </motion.h2>
        <video width="950" height="500" className="rounded-xl" controls>
          <source
            src={`https://xlbox.services/backend/${data?.video}`}
            type="video/mp4"
          />
        </video>
      </div>
    </section>
  );
};

export default Video;
