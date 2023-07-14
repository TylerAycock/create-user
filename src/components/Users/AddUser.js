import "./AddUser.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import { useState } from "react";
import ErrorModel from "../UI/ErrorModel";

const AddUser = (props) => {
  const [userName, setUserName] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState()

  const nameChangeHander = (e) => {
    setUserName(e.target.value);
  };

  const ageChangeHandler = (e) => {
    setAge(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (+age <= 0) {
      setError({
        title: 'Invalid Age',
        message: 'Please enter valid age'
      })
      return
    }
    if (userName.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: 'Invalid Input',
        message: 'Please enter valide name and age'
      })
      return;
    }
    props.onAddUser(userName, age);
    setUserName("");
    setAge("");
  };

  const errorHandler = () => {
    setError(null)
  }

  return (
    <div>
     {error && <ErrorModel title={error.title} message={error.message} onHandleError={errorHandler}/>}
      <Card className="input">
        <form onSubmit={submitHandler}>
          <label htmlFor="username">User Name</label>
          <input
            value={userName}
            type="text"
            id="username"
            onChange={nameChangeHander}
          />
          <label htmlFor="age">Age</label>
          <input
            value={age}
            type="number"
            id="age"
            onChange={ageChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
