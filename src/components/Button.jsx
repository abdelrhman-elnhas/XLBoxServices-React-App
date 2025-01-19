import PropTypes from "prop-types";
import { forwardRef } from "react";

// Forward ref to ensure the button can be referenced from a parent component
const Button = forwardRef(({ params, classes, handleClick, children }, ref) => {
  return (
    <button ref={ref} {...params} className={classes} onClick={handleClick}>
      {children}
    </button>
  );
});

Button.displayName = "Button";

Button.propTypes = {
  params: PropTypes.object,
  classes: PropTypes.string,
  handleClick: PropTypes.func,
  children: PropTypes.node,
};

export default Button;
