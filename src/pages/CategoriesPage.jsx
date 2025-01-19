import { useTranslation } from "react-i18next";
import CategoryItem from "@components/CategoryItem";
import i18n from "i18next";
import useFetch from "./../hooks/useFetch";
import Loader from "../components/Loader";

const CategoriesPage = () => {
  const { t } = useTranslation();
  const currentLanguage = i18n.language;

  const { data, isLoading, error } = useFetch({
    url: `https://xlbox.services/backend/api/services?language=${currentLanguage}`,
  });

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return null;
  }

  return (
    <section className="flex items-start justify-center min-h-[70vh] py-10 bg-[#f7f7f7]">
      <div className="container flex flex-col items-center justify-between">
        <h2 className="mb-10 text-3xl font-bold text-center text-secondary-color">
          {t("Services in our Box")}
        </h2>
        <div className="grid items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 lg:gap-x-16 gap-y-12">
          {data?.map((item) => (
            <CategoryItem
              key={item.id}
              image={`https://xlbox.services/backend/${item.logo}`}
              title={item.title}
              id={item.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesPage;
