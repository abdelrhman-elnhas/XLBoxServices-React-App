import PropTypes from "prop-types";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { IoClose } from "react-icons/io5";

const SubService = ({ image, title, description }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <motion.div
        layout
        className="relative flex flex-col items-center justify-start pb-5 overflow-hidden rounded-lg drop-shadow-custom-shadow bg-third-color h-[410px]"
      >
        <img src={image} alt="" className="w-full" />
        <p className="text-[#666666] font-light leading-6 px-3 py-4 text-balance text-start text-sm overflow-y-hidden h-[108px] line-clamp-4 text-ellipsis">
          {description}
        </p>
        <button
          className="px-2 py-3 mx-3 rounded-lg bg-primary-color text-third-color w-[90%] mt-5"
          onClick={(e) => {
            e.stopPropagation();
            setOpen(true);
          }}
        >
          {title}
        </button>
      </motion.div>

      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black bg-opacity-75"
              onClick={() => setOpen(false)}
            />

            {/* Expanded Card */}
            <motion.div
              layout
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
            >
              <motion.div
                layout
                className="bg-third-color rounded-lg drop-shadow-custom-shadow w-full max-w-xl h-[80vh] overflow-y-auto flex flex-col relative"
              >
                <button
                  className="absolute w-8 h-8  mx-3 mt-5 mb-5 rounded-[50%] top-0 right-4 bg-[#ccccccc0] text-[#666666] flex items-center justify-center"
                  onClick={() => setOpen(false)}
                >
                  <IoClose className="text-2xl" />
                </button>
                <img src={image} alt="" className="w-full" />
                <p className="text-[#666666] font-light leading-6 px-5 py-4 text-balance text-start text-sm overflow-x-auto flex-1">
                  {description}
                </p>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

SubService.propTypes = {
  image: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string,
};

export default SubService;
