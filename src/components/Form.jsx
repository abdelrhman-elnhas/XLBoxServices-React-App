import Button from "./Button";
import { PropTypes } from "prop-types";

const Form = ({ inputs, currentLanguage }) => {
  return (
    <section className="flex flex-col items-center justify-around min-h-[90vh] bg-primary-color">
      <div className="container flex flex-col items-center justify-center ">
        <form className="grid items-center justify-center grid-cols-1 gap-4 mb-16 xs:grid-cols-2 xs:gap-x-7 sm:grid-cols-3 place-items-center ">
          {inputs.map((input, index) => {
            if (input.type === "text") {
              return (
                <div className="font-light" key={index}>
                  <label htmlFor={input.id} className="block text-third-color">
                    {input.lable}
                  </label>
                  <input
                    required={input.required === "yes" ? true : false}
                    type="text"
                    id={input.id}
                    className="p-2 border rounded-lg text-primary-color focus-visible:outline-none focus-visible:border-secondary-color border-primary-color w-[210px] h-10"
                  />
                </div>
              );
            }
            if (input.type === "select") {
              return (
                <div className="font-light" key={index}>
                  <label htmlFor={input.id} className="block text-third-color">
                    {input.lable}
                  </label>
                  <select
                    id={input.id}
                    required={input.required === "yes" ? true : false}
                    className="pt-1 pb-2 ps-2 pe-7 border rounded-lg text-primary-color focus-visible:outline-none focus-visible:border-secondary-color border-primary-color w-[210px] h-10"
                  >
                    <option value="">Choose a category</option>
                    {input.options.map((item, index) => (
                      <option key={index} value={item.id}>
                        {currentLanguage == "en" && item.option}
                        {currentLanguage == "de" && item.option_gr}
                        {currentLanguage == "ar" && item.option_ar}
                      </option>
                    ))}
                  </select>
                </div>
              );
            }
            if (input.type === "image") {
              return (
                <div className="font-light w-min" key={index}>
                  <label htmlFor={input.id} className="text-third-color">
                    {input.lable}
                  </label>
                  <input
                    type="file"
                    id={input.id}
                    required={input.required === "yes" ? true : false}
                    accept="image/*"
                    multiple
                    className="px-2 pt-1 border rounded-lg text-primary-color bg-third-color focus-visible:outline-none focus-visible:border-secondary-color border-primary-color w-[210px] h-10 pb-3"
                    style={{ appearance: "none" }}
                  />
                </div>
              );
            }
            return null;
          })}
        </form>
        <Button
          type="submit"
          classes="bg-secondary-color text-third-color px-5 py-3 rounded-lg"
        >
          Get A Quote
        </Button>
      </div>
    </section>
  );
};

Form.propTypes = {
  inputs: PropTypes.arrayOf(PropTypes.object),
  currentLanguage: PropTypes.string,
};

export default Form;
