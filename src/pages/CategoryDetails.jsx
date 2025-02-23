import Form from "@components/Form";
import SubService from "@components/SubServices";
import { useParams } from "react-router-dom";
import useFetch from "@hooks/useFetch";
import i18n from "i18next";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import { motion } from "motion/react";

const CategoryDetails = () => {
  const { id } = useParams();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  useEffect(() => {
    const handleLanguageChange = () => {
      setCurrentLanguage(localStorage.getItem("i18nextLng"));
    };

    i18n.on("languageChanged", handleLanguageChange);

    return () => {
      i18n.off("languageChanged", handleLanguageChange);
    };
  }, []);

  const { data, isLoading, error } = useFetch({
    url: `https://xlbox.services/backend/api/services/${id}?language=${currentLanguage}`,
  });

  if (isLoading) {
    return <Loader />;
  }
  if (error) {
    return null;
  }
  return (
    <>
      {/* Category Details Section */}
      <section className="bg-[#f7f7f7] border border-b-8 border-third-color flex items-center justify-center">
        <div className="container flex flex-col items-center gap-8 py-8 justify-evenly">
          <h2 className="text-2xl font-bold text-center sm:text-4xl text-primary-color">
            {data?.service.title}
          </h2>
          <div className="overflow-hidden rounded-lg max-w-[800px] max-h-[435px]">
            {data.service.images.length > 0 &&
              (data?.service?.images[0]?.type === "image" ? (
                <img
                  src={`https://xlbox.services/backend/${data.service.images[0].photo_url}`}
                  alt=""
                  className="w-full"
                />
              ) : (
                <video width="950" height="500" className="rounded-xl" controls>
                  <source
                    src={`https://xlbox.services/backend/${data.service.images[0].photo_url}`}
                    type="video/mp4"
                  />
                </video>
              ))}
          </div>
          <div>
            <p className="text-[#666666] font-light text-balance text-center">
              {data?.service.description}
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      {data?.subservices.length > 0 && (
        <section className="bg-[#f7f7f7] border border-b-8 border-third-color py-16 ">
          <motion.div
            className="container lg:max-w-[1200px] grid items-center justify-start grid-cols-1 gap-8 px-16 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 lg:gap-x-8 gap-y-12"
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            viewport={{ amount: 0.6 }}
            transition={{ type: "spring" }}
          >
            {/* Service Item */}
            {data?.subservices &&
              data.subservices.map((service) => (
                <SubService
                  key={service.id}
                  image={`https://xlbox.services/backend/${service.image}`}
                  title={service.title}
                  description={service.descriptions}
                />
              ))}
          </motion.div>
        </section>
      )}

      {/* Form Section */}
      {data?.forms.length > 0 && (
        <Form
          inputs={data?.forms}
          language={currentLanguage}
          serviceId={data.service.id}
        />
      )}
    </>
  );
};

export default CategoryDetails;
