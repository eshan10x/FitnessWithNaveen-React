import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "../css/Contact.css";
import { Form, Message } from "semantic-ui-react";
import Button from "@mui/material/Button";
import Navbar from "./Navbar";
import Modal from "./Modal";

function App() {
  const options = [
    { key: "m", text: "Male", value: "Male" },
    { key: "f", text: "Female", value: "Female" },
    { key: "o", text: "Other", value: "Other" },
  ];

  const [gender] = useState({
    user_gender: "",
  });

  const handlegenderChange = (e, data) => {
    gender.user_gender = data.value;
  };

  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("firstname", data.firstname);
    formData.append("lastname", data.lastname);
    formData.append("gender", gender.user_gender);
    formData.append("birthdate", data.birthdate);
    formData.append("mobilenumber", data.mobilenumber);
    formData.append("email", data.email);

    // const result = await fetch("https://fitnesswithnaveen-react-90bdf1dd6174.herokuapp.com/send-email", {
    const result = await fetch("http://localhost:3002/send-email", {
      method: "POST",
      body: formData,
    }).then((result) => result.json());
    alert(JSON.stringify(`${result.message}, status: ${result.status}`));
  };

  return (
    <div className="contactPage">
      <div className="contact__header">
        <Navbar />
        <h1 id="subhead1">Contact Us</h1>
      </div>
      <div className="rowContact">
        <div className="topheader">
          <Message>
            <p>
              Feel free to get in touch to find out how We can help you to archieve
              your Strength or Fitness Goals. If You wish to Join with us click on Join Now Button
            </p>
          </Message>
          {/* <Button variant="contained" endIcon={<BookmarkAddedIcon/> }>
            Join Now for a Programme
          </Button> */}
          <Modal/>
        </div>
      </div>

      <div className="FormContainer">
        <h3>Personal Details</h3>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group widths="equal">
            <Form.Field>
              <label>Enter your first name</label>
              <input placeholder="First Name" {...register("firstname")} />
            </Form.Field>

            <Form.Field>
              <label>Enter your last name</label>
              <input placeholder="First Name" {...register("lastname")} />
            </Form.Field>
          </Form.Group>

          <Form.Group widths="equal">
            <Form.Field>
              <label>Select Gender</label>
              <Form.Select
                options={options}
                placeholder="Gender"
                name="user_gender"
                onChange={handlegenderChange}
              />
            </Form.Field>

            <Form.Field>
              <label>Date of Birth</label>
              <input placeholder="DD/MM/YYYY" {...register("birthdate")} />
            </Form.Field>
          </Form.Group>

          <Form.Group widths="equal">
            <Form.Field>
              <label>Enter Mobile Number</label>
              <input
                placeholder="Enter Your Mobile Number"
                {...register("mobilenumber")}
              />
            </Form.Field>

            <Form.Field>
              <label>Enter Your Email</label>
              <input placeholder="Email ID" {...register("email")} />
            </Form.Field>
          </Form.Group>

          <Form.Checkbox label="I agree to the Terms and Conditions" />

          <Button type="submit">Submit</Button>
        </Form>

        <div className="conntactinfo">
          <h1>Contact Number</h1>
          <a href="tel:+94766876602">076 687 6602</a>
          <h1>E-Mail</h1>
          <h3>fitnesswithnaveen@gmail.com</h3>
          <div className="socialbox"></div>
        </div>
      </div>

      <div className="bottomBox">
        <div className="contactfottercover"></div>
      </div>
    </div>
  );
}

export default App;
