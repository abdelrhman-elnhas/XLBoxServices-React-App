import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import useFetch from "./../hooks/useFetch";
import i18n from "i18next";
import Loader from "./Loader";

const FAQs = () => {
  const { t } = useTranslation();

  const [openIndex, setOpenIndex] = useState(null);

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
    url: `https://xlbox.services/backend/api/faqs?language=${currentLanguage}`,
  });

  // Toggle the FAQ state
  const toggleOpen = (index) => {
    event.preventDefault();
    setOpenIndex(openIndex === index ? null : index);
  };

  if (isLoading) {
    return <Loader />;
  }
  if (error) {
    return null;
  }

  return (
    <section
      id="faqs"
      className="flex items-start justify-center min-h-[50vh] py-10 bg-third-color"
    >
      <div className="container space-y-4 max-w-[1080px] ">
        <motion.h2
          className="mb-10 text-3xl font-bold text-center text-secondary-color"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ amount: 0.2 }}
          transition={{ type: "spring" }}
        >
          {t("Frequently Asked Questions")}
        </motion.h2>
        <div className=" overflow-y-scroll max-h-[50vh] space-y-4 my-8">
          {data?.data.length > 0 &&
            data.data.map((item) => (
              <details
                key={item.id}
                open={openIndex === item.id}
                className="group [&_summary::-webkit-details-marker]:hidden"
              >
                <summary
                  className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-[#f7f7f7] p-4 text-gray-900"
                  onClick={(e) => toggleOpen(item.id, e)}
                >
                  <h2 className="font-medium">
                    {currentLanguage == "en" && item.question}
                    {currentLanguage == "de" && item.question_gr}
                    {currentLanguage == "ar" && item.question_ar}
                  </h2>
                  <motion.svg
                    className="transition duration-300 size-5 shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    animate={{ rotate: openIndex === item.id ? 180 : 0 }}
                    transition={{ duration: 0.1 }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </motion.svg>
                </summary>

                {/* AnimatePresence for entry and exit animations */}
                <AnimatePresence>
                  {openIndex === item.id && (
                    <motion.div
                      className="overflow-hidden"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <p className="px-4 mt-4 leading-relaxed text-[#666666]">
                        {currentLanguage == "en" && item.answer}
                        {currentLanguage == "de" && item.answer_gr}
                        {currentLanguage == "ar" && item.answer_ar}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </details>
            ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
