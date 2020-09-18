import React, { useState } from "react";
import * as yup from "yup";
import axios from "axios";
const formSchema = yup.object().shape({
    name: yup
      .string()
      .required("Name is a required field")
      .min(2, "Name must be at least 2 characters long"),
    sizes: yup.string().required("Please choose a size"),
    pepperoni: yup.boolean(),
    pineapple: yup.boolean(),
    olives: yup.boolean(),
    mushrooms: yup.boolean(),
    instructions: yup.string(),
  });
  const Order = () => {
  const [formState, setFormState] = useState({
    name: "",
    sizes: "xLarge",
    pesto: false,
    whiteGarlic: false,
    bbq: false,
    pepperoni: false,
    pineapple: false,
    olives: false,
    mushrooms: false,
    instructions: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    size: "",
    instructions: "",
  });

  const [order, setOrder] = useState({});

  const validate = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    yup
      .reach(formSchema, e.target.name)
      .validate(value)
      .then((valid) => {
        setErrors({
          ...errors,
          [e.target.name]: "",
        });
      })
      .catch((err) => {
        setErrors({
          ...errors,
          [e.target.name]: err.errors[0],
        });
      });
    setFormState({
      ...formState,
      [e.target.name]: value,
    });
  };

  const inputChange = (e) => {
    e.persist();
    console.log("input changed!", e.target.value, e.target.checked);
    validate(e);
  };

  const formSubmit = (e) => {
    e.preventDefault();
    console.log("Pizza ordered!");
    axios
      .post("https://reqres.in/api/users", formState)
      .then((response) => {
        setOrder(response.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={formSubmit}>
      <label htmlFor="name">
        Name
        <input
          type="text"
          name="name"
          id="name"
          placeholder="name"
          value={formState.name}
          onChange={inputChange}
        ></input>
        {errors.name.lenth > 2 ? <p className="error">{errors.name}</p> : null}
      </label>

      <div className="sizeComponent">
        <form>
          <h3>Size</h3>
          <select
            id="sizes"
            name="sizes"
            value={formState.sizes}
            onChange={inputChange}
          >
            <option value="xLarge"> XL</option>
            <option value="large"> Large</option>
            <option value="medium"> Medium </option>
            <option value="small"> Small </option>
          </select>
        </form>
      </div>
        <div className="toppingComponent">
        <h3> Choose your toppings </h3>
        <label htmlFor="pepperoni">
          <input
            type="checkbox"
            id="pepperoni"
            name="pepperoni"
            checked={formState.pepperoni}
            onChange={inputChange}
          ></input>
          Pepperoni 
        </label>

        <label htmlFor="mushrooms">
          <input
            type="checkbox"
            id="mushrooms"
            name="mushrooms"
            checked={formState.mushrooms}
            onChange={inputChange}
          ></input>
          Mushrooms 
        </label>

        <label htmlFor="pineapple">
          <input
            type="checkbox"
            id="pineapple"
            name="pineapple"
            checked={formState.pineapple}
            onChange={inputChange}
          ></input>
          Pineapple 
        </label>

        <label htmlFor="olives">
          <input
            type="checkbox"
            id="olives"
            name="olives"
            checked={formState.olives}
            onChange={inputChange}
          ></input>
          Olives 
        </label>
      </div>

      <div className="component">
        <label htmlFor="instructions">
          <h3> Special instructions </h3>
          <input
            type="text"
            name="instructions"
            id="instructions"
            placeholder="instructions"
            value={formState.instructions}
            onChange={inputChange}
          ></input>
        </label>
      </div>
      <button>Order</button>
      <pre>{JSON.stringify(order, null, 2)}</pre>
    </form>
  );
}
export default Order;