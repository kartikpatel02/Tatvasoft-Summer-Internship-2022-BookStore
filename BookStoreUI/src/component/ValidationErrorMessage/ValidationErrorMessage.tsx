import React from "react";

type IProps = {
  message?: string;
  touched?: boolean;
};

const ValidationErrorMessage: React.FC<IProps> = (props) => {
  return (
    <span style={{color: 'red'}}>
    <>{props.touched && <p>{props.message}</p>}</></span>
  );
};

export default ValidationErrorMessage;
