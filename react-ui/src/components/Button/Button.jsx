import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import classnames from "classnames";
import "./button.scss";
const Button = (props) => {
  let { type, round, loading, disabled = true } = props;
  const btnClassName = classnames({
    btn: true,
    [`btn--${type}`]: true,
    "btn-round": round,
    "is-loading": loading,
  });
  return (
    <button className={btnClassName} disabled>
      {loading ? (
        <span className="btn-loading">
          <svg className="circular" viewBox="-10, -10, 50, 50">
            <path
              className="path"
              d="
            M 30 15
            L 28 17
            M 25.61 25.61
            A 15 15, 0, 0, 1, 15 30
            A 15 15, 0, 1, 1, 27.99 7.5
            L 15 15
          "
              style={{ strokeWidth: 4 }}
            />
          </svg>
        </span>
      ) : (
        ""
      )}
      <span>{props.children}</span>
    </button>
  );
};
Button.defaultProps = {
  type: "default",
};
// Button.propTypes = {
//   type: PropTypes.string,
// };
export default Button;
