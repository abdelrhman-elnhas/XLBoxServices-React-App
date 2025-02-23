import toast, { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import { PropTypes } from "prop-types";
import { useTranslation } from "react-i18next";
import LoaderSmall from "./LoaderSmall";
import { Link } from "react-router-dom";

const Form = ({ inputs, language, serviceId }) => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({});
  const [files, setFiles] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const initializeFormData = (inputFields) => {
      const initialFormData = {};
      inputFields.forEach((input) => {
        initialFormData[input.id] = "";
      });
      setFormData(initialFormData);
    };
    initializeFormData(inputs);
  }, [inputs]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (event) => {
    const { name, files: selectedFiles } = event.target;
    setFiles({ ...files, [name]: selectedFiles });
  };
  console.log(files);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formDataToSend = new FormData();

    formDataToSend.append("service_id", serviceId);

    Object.keys(formData).forEach((key, index) => {
      if (files[key] && files[key].length > 0) {
        return;
      }

      formDataToSend.append(`values[${index}][service_form_id]`, key);
      formDataToSend.append(`values[${index}][value]`, formData[key]);
    });

    Object.keys(files).forEach((key) => {
      const offset = Object.keys(formData).length;

      for (let i = 0; i < files[key].length; i++) {
        formDataToSend.append(`values[${offset + i}][service_form_id]`, key);
        formDataToSend.append(`values[${offset + i}][value]`, files[key][i]);
      }
    });

    try {
      const response = await fetch(
        "https://xlbox.services/backend/api/services/forms/submit",
        {
          method: "POST",
          body: formDataToSend,
        }
      );

      if (response.ok) {
        console.log("Form submitted successfully!");
        toast.success("Form submitted successfully");
        setFormData({});
        setFiles({});
        document.querySelectorAll('input[type="file"]').forEach((input) => {
          input.value = ""; // Clear file input values
        });
      } else {
        console.error("Form submission failed. Please try again.");
        toast.error("Failed to submit, try again later");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to submit, try again later");
    }
    setIsSubmitting(false);
  };
  return (
    <>
      <Toaster
        position="bottom-center"
        reverseOrder={false}
        toastOptions={{
          duration: 7000,
          removeDelay: 1000,
        }}
      />
      <section className="flex flex-col items-center justify-around min-h-[90vh] bg-primary-color py-16">
        <div className="container flex flex-col items-center justify-center ">
          <form
            id="quoteForm"
            onSubmit={handleSubmit}
            className="grid items-start justify-center grid-cols-1 gap-4 mb-5 xs:grid-cols-2 xs:gap-x-7 sm:grid-cols-3  "
          >
            {inputs.map((input, index) => {
              if (input.type === "text") {
                return (
                  <div className="font-light" key={index}>
                    <label
                      htmlFor={input.id}
                      className=" text-third-color h-[48px] flex items-end "
                      style={{ verticalAlign: "end" }}
                    >
                      {input.lable}
                      {input.required == "yes" && "*"}
                    </label>
                    <input
                      required={input.required === "yes" ? true : false}
                      type="text"
                      id={input.id}
                      value={formData[input.id] || ""}
                      name={input.id}
                      onChange={handleChange}
                      className="p-2 border rounded-lg text-primary-color focus-visible:outline-none focus-visible:border-secondary-color border-primary-color w-full h-10"
                    />
                  </div>
                );
              }
              if (input.type === "select") {
                return (
                  <div className="font-light" key={index}>
                    <label
                      htmlFor={input.id}
                      className=" text-third-color h-[48px] flex items-end"
                    >
                      {input.lable}
                      {input.required == "yes" && "*"}
                    </label>
                    <select
                      id={input.id}
                      value={formData[input.id] || ""}
                      name={input.id}
                      onChange={handleChange}
                      required={input.required === "yes" ? true : false}
                      className="pt-1 pb-2 ps-2 pe-7 border rounded-lg text-primary-color focus-visible:outline-none focus-visible:border-secondary-color border-primary-color w-full h-10"
                    >
                      <option value="">{t("Choose an option")}</option>
                      {input.options.map((item, index) => (
                        <option
                          key={index}
                          value={item.id}
                          className="text-secondary-color"
                        >
                          {language == "en" && item.option}
                          {language == "de" && item.option_gr}
                          {language == "ar" && item.option_ar}
                        </option>
                      ))}
                    </select>
                  </div>
                );
              }
              if (input.type === "file") {
                return (
                  <div className="font-light w-min" key={index}>
                    <label
                      htmlFor={input.id}
                      className=" text-third-color h-[48px] flex items-end"
                    >
                      {input.lable}
                      {input.required == "yes" && "*"}
                    </label>
                    <input
                      type="file"
                      id={input.id}
                      name={input.id}
                      onChange={handleFileChange}
                      required={input.required === "yes" ? true : false}
                      accept="image/*"
                      multiple
                      className="px-2 pt-1 border rounded-lg text-primary-color bg-third-color focus-visible:outline-none focus-visible:border-secondary-color border-primary-color min-w-[184px] lg:w-[293px] w-[360px] xs:w-full h-10 pb-3"
                      style={{ appearance: "none" }}
                    />
                  </div>
                );
              }
              if (input.type === "textarea") {
                return (
                  <div
                    className="w-full col-span-1 font-light xs:col-span-2 xs:gap-x-7 sm:col-span-3"
                    key={index}
                  >
                    <label
                      htmlFor={input.id}
                      className=" text-third-color h-[48px] flex items-end"
                    >
                      {input.lable}
                      {input.required == "yes" && "*"}
                    </label>
                    <textarea
                      id={input.id}
                      required={input.required === "yes" ? true : false}
                      type="text"
                      value={formData[input.id] || ""}
                      name={input.id}
                      onChange={handleChange}
                      style={{ resize: "none" }}
                      className="w-full p-2 border rounded-lg text-primary-color focus-visible:outline-none focus-visible:border-secondary-color border-primary-color"
                      rows="5"
                    ></textarea>
                  </div>
                );
              }
              return null;
            })}
          </form>
          <div className="col-span-1 mb-5 xs:col-span-2 xs:gap-x-7 sm:col-span-3">
            <p className="text-sm text-center text-third-color">
              {t("By submitting this form, you agree to our ")}
              <Link
                to={"/terms-conditions"}
                className="mx-1 underline text-secondary-color"
              >
                {t("Terms & Conditions")}
              </Link>
              {t("and")}
              <Link
                to={"/privacy-policy"}
                className="mx-1 underline text-secondary-color"
              >
                {t("Privacy Policy")}
              </Link>
              .
            </p>
          </div>
          <button
            type="submit"
            form="quoteForm"
            disabled={isSubmitting}
            className="rounded-lg w-44 h-14 bg-secondary-color text-third-color"
          >
            {isSubmitting ? <LoaderSmall /> : t("Get A Quote")}
          </button>
        </div>
      </section>
    </>
  );
};

Form.propTypes = {
  inputs: PropTypes.arrayOf(PropTypes.object),
  language: PropTypes.string,
  serviceId: PropTypes.string,
};

export default Form;
