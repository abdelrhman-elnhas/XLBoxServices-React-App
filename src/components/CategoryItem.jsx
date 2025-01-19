import Button from "@components/Button";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const CategoryItem = ({ image, title, id }) => {
  const navigate = useNavigate();
  console.log(image);

  const handleNavigation = (id) => {
    navigate(`/categories/${id}`);
  };

  return (
    <div className="flex flex-col items-center py-8 px-5 rounded-lg justify-between category___item drop-shadow-custom-shadow bg-third-color min-h-[20rem] min-w-[18rem] hover:-translate-y-1 transition ">
      <img src={image} alt="" width={150} />
      <Button
        classes="w-full px-6 py-2 transition rounded-lg bg-primary-color text-third-color hover:bg-primary-color/85"
        handleClick={() => handleNavigation(id)}
      >
        {title}
      </Button>
    </div>
  );
};

CategoryItem.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  id: PropTypes.string.isRequired,
};

export default CategoryItem;
