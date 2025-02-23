import Button from "./Button";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import CategoryItem from "./CategoryItem";
import useFetch from "@hooks/useFetch";
import i18n from "i18next";
import Loader from "./Loader";

const Categories = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const currentLanguage = i18n.language;

  const { data, isLoading, error } = useFetch({
    url: `https://xlbox.services/backend/api/services?language=${currentLanguage}&paginate=3`,
  });

  if (isLoading) {
    return <Loader />;
  }
  if (error) {
    return null;
  }

  return (
    <section
      id="services"
      className="flex items-start justify-center min-h-[70vh] py-10 bg-[#f7f7f7]"
    >
      <div className="container flex flex-col items-center justify-between">
        <motion.h2
          className="mb-10 text-3xl font-bold text-center text-secondary-color"
          initial={{ y: 50, opacity: 1 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ amount: 0.6 }}
          transition={{ type: "spring" }}
        >
          {t("Services in our Box")}
        </motion.h2>
        <motion.div
          className="grid items-center justify-center w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-[repeat(3,minmax(200px,300px))] gap-x-6 lg:gap-x-16 gap-y-12 place-items-center"
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          viewport={{ amount: 0.9 }}
          transition={{ type: "spring" }}
        >
          {data?.map((item) => (
            <CategoryItem
              key={item.id}
              image={`https://xlbox.services/backend/${item.logo}`}
              title={item.title}
              id={item.id}
            />
          ))}
        </motion.div>
        <Button
          classes="px-5 py-2.5 rounded-lg bg-secondary-color text-sm font-medium text-primary-color hover:bg-primary-color hover:text-third-color transition flex items-center gap-1 mt-10"
          handleClick={() => {
            navigate("/categories");
          }}
        >
          {t("Explore more categories")}
        </Button>
      </div>
    </section>
  );
};

export default Categories;
