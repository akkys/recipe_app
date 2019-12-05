import React from "react";

const Form = props => {
  //   console.log(props);
  return (
    <form onSubmit={props.getRecipe} style={{ marginBottom: "2rem" }}>
      <input type="text" className="form__input" name="recipeName" />
      <button className="form__button">Search</button>
    </form>
  );
};

export default Form;
