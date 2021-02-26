import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Form from "./Form";
import Home from  "./Home";
import * as yup from 'yup';

const initialValues = {
  size: "",
  sauce: "",
  pepperoni: false,
  special: "",
  fname: "",

};
const intitialFormErrors = {
  fname: "",
};
const initialDisable = true;
const App = () => {
  const [ formValues, setFormValues ] = useState(initialValues);
  const [ errors, setErrors ] = useState(intitialFormErrors);
  const [ disable, setDisable ] = useState(initialDisable);
  const formSchema = yup.object().shape({
    size: yup.string(),
    sauce: yup.string(),
    pepperoni: yup.boolean(),
    special: yup.string(),
    fname: yup
      .string()
      .required("Name is required to order")
      .min(2, "Must be at least 2 characters")
  });

  useEffect(() => {
    formSchema.isValid(formValues).then(valid => {
      setDisable(!valid);
    });
  }, [formValues, formSchema]);

  const changeHandler = ( name, value ) => {
    yup.reach(formSchema, name)
    .validate(value)
    .then(() => {
      setErrors({...errors, [name]: ""});
    }).catch(err => {
      setErrors({...errors, [name]: err.errors[0]})
    })
    setFormValues({ ...formValues, [name]: value });
  };

  const submitHandler = () => {
    setFormValues(initialValues)
  };

  return (
    <>
    <Router>
       <Switch>
        <Route path="/pizza">
          <Form 
          values={formValues} 
          change={changeHandler} 
          submit={submitHandler}
          errors={errors}
          disable={disable} />
        </Route>
        <Route exact path="/">
          <Home/>
        </Route>
      </Switch>
    </Router>
    </>
  );
};
export default App;
