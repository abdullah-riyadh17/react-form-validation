import { useState } from "react";
import "./App.css";
import FormInput from "./components/FormInput";

function App() {
  const [values, setValues] = useState({
    username: "",
    fullName: "",
    email: "",
    birthday: "",
    phone: "",
    address: "",
    password: "",
    confirmPassword: "",
  });
  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "username",
      errorMessage:
        "username should be 3-16 chanracters and shouldn't include any special character",
      label: "username",
      pattern: `[A-Za-z0-9_.]{3,16}*$`,
      required: true,
    },
    {
      id: 2,
      name: "fullName",
      type: "text",
      placeholder: "Full Name",
      errorMessage: "Full Name only contains letter",
      label: "Full Name",
      pattern: "^[a-zA-Z].*[s.]*$",
      required: true,
    },
    {
      id: 3,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid Email",
      label: "Email",
      required: true,
    },
    {
      id: 4,
      name: "birthday",
      type: "date",
      placeholder: "Birthday ",
      label: "Birthday ",
      required: true,
    },
    {
      id: 5,
      name: "phone",
      type: "tel",
      placeholder: "Phone",
      errorMessage: "It should be a valid phone",
      label: "Phone",
      required: true,
    },
    {
      id: 6,
      name: "address",
      type: "text",
      placeholder: "Address",
      label: "Address",
      required: true,
    },
    {
      id: 7,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password Should be 8-20 characters and include at least 1 letter, 1 number and 1 special character",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 8,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Password doesn't match",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    },
  ];
  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.target);
    console.log(Object.fromEntries(data.entries()));
  };
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  // console.log(values);
  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>

        {inputs.map((input) => (
          <FormInput
            key={input.id}
            value={values[input.name]}
            {...input}
            onChange={onChange}
          ></FormInput>
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
