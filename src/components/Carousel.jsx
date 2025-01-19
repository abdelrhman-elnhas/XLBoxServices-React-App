import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import useFetch from "@hooks/useFetch";
import Loader from "./Loader";

const Carousel = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);

  const { data, isLoading, error } = useFetch({
    url: "https://xlbox.services/backend/api/heros",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data?.length);
    }, 7000); // Auto-scroll every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [data?.length]);

  // Handle swipe gestures
  const handleSwipe = (direction) => {
    if (direction === "left") {
      setCurrentIndex((prev) => (prev + 1) % data.length);
    } else if (direction === "right") {
      setCurrentIndex((prev) => (prev - 1 + data.length) % data.length);
    }
  };

  // const nextSlide = () => {
  //   setCurrentIndex((prev) => (prev + 1) % slides.length);
  // };

  // const prevSlide = () => {
  //   setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  // };

  if (isLoading) {
    return <Loader />;
  }
  if (error) {
    return null;
  }

  return (
    <section className="flex flex-col items-center justify-center min-h-screen py-16 bg-third-color ">
      <motion.h2
        className="mb-2 text-2xl font-bold text-center text-primary-color text-balance"
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ type: "spring" }}
      >
        {t("Connecting You with Reliable Services for Every Need")}
      </motion.h2>
      <motion.h4
        className="mb-10 text-lg text-center text-secondary-color "
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ type: "spring" }}
      >
        {t(
          "Browse a wide range of professional and Reliable services in just a few clicks."
        )}
      </motion.h4>
      <div className="relative w-[95%] max-w-5xl mx-auto">
        {/* Slides */}
        <div className="relative min-w-full overflow-hidden rounded-[20px]">
          <AnimatePresence mode="wait">
            {data?.map(
              (slide, index) =>
                index === currentIndex && (
                  <motion.img
                    key={slide.id}
                    src={`https://xlbox.services/backend/${slide.photo_url}`}
                    alt={slide.alt}
                    initial={{ x: 500, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -500, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    onDragEnd={(event, info) => {
                      if (info.offset.x < -50) {
                        handleSwipe("left");
                      } else if (info.offset.x > 50) {
                        handleSwipe("right");
                      }
                    }}
                    className="object-cover w-full min-w-full"
                  />
                )
            )}
          </AnimatePresence>
        </div>

        {/* Arrows */}
        {/* <button
          onClick={prevSlide}
          className="absolute p-2 transition transform -translate-y-1/2 bg-white rounded-full shadow-md left-2 top-1/2 hover:bg-gray-100"
        >
          &#8592;
        </button>
        <button
          onClick={nextSlide}
          className="absolute p-2 transition transform -translate-y-1/2 bg-white rounded-full shadow-md right-2 top-1/2 hover:bg-gray-100"
        >
          &#8594;
        </button> */}

        {/* Dots */}
        <div className="flex justify-evenly mt-4 gap-2 absolute bottom-[20px] start-[50%] ltr:translate-x-[-50%] rtl:translate-x-[50%]">
          {data?.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${
                currentIndex === index ? "bg-third-color" : "bg-slate-400"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Carousel;
