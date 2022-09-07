import React, { useState } from "react";
import styled from "styled-components";
import Button from "../../UI/Button/Button";
import ModuleTile from "../../UI/ModuleTile/ModuleTile";
import Tag from "../../UI/Tag/Tag";
import "./CourseInput.css";

const FormControl = styled.div`
  margin: 0.5rem 0;

  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
  }

  & input {
    display: block;
    width: 100%;
    border: 1px solid #ccc;
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
  }

  & input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
  }

  &.invalid input {
    background: #fad0ec;
    border-color: red;
  }

  &.invalid label {
    color: red;
  }
`;

const DynamicTile = styled.div`
width: 100%;
height: 140px;
background-color: ${ props =>  props.invalid ? 'red' : 'green'};
-webkit-align-content: center;
-ms-flex-line-pack: center;
padding: 10px;
box-sizing: border-box;
margin-top: 20px;
justify-content: center;
display: flex;
flex-direction: column;
align-items: center;
& h3{
  color: white;
}
@media ( min-width : 480px){
  width: 140px;
}
`;

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
      console.log("empty!");
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <>
      <form onSubmit={formSubmitHandler}>
        <FormControl className={`${!isValid ? "invalid" : ""}`}>
          <label style={{ color: !isValid ? "red" : "black" }}>
            Course Goal
          </label>
          <input type="text" onChange={goalInputChangeHandler} />
        </FormControl>
        <Button type="submit">Add Goal</Button>
      </form>
      <DynamicTile invalid={!isValid}>
        <div className="indicator"></div>
        <h3>Test Styled Component</h3>
        <p>Dynamic props</p>
      </DynamicTile>
      <Tag>CSS Module!</Tag>
      <ModuleTile><p>CSS MODULE</p></ModuleTile>
    </>
  );
};

export default CourseInput;
