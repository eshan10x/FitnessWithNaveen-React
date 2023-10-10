import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";
import { Form, Radio, Message } from "semantic-ui-react";
import { useForm } from "react-hook-form";
import topcover from "../img/cover3.jpg";
import bodyimgsample from "../img/body_image_3sides.jpg";
import { useHistory } from 'react-router-dom';


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "95%",
  bgcolor: "background.paper",
  boxShadow: 24,
  overflow: "scroll",
  height: "90%",
  borderRadius: 3,
  p: 2,
};

const options = [
  { key: "m", text: "Male", value: "Male" },
  { key: "f", text: "Female", value: "Female" },
  { key: "o", text: "Other", value: "Other" },
];

const joinReasons = [
  { key: "E", text: "Endurance", value: "Endurance" },
  { key: "SS", text: "Strength & Size", value: "Strength & Size" },
  { key: "MP", text: "Muscle & Power", value: "Muscle & Power" },
  { key: "F", text: "Fitness", value: "Fitness" },
  { key: "TWL", text: "Toining & weight loss", value: "Toining & weight loss" },
];

const intrestedPrograms = [
  { key: "PT", text: "Personal Training", value: "Personal Training" },
  { key: "OT", text: "Online Training", value: "Online Training" },
  { key: "HV", text: "Home Visit", value: "Home Visit" },
  { key: "OAC", text: "Online ABS Class", value: "Online ABS Class" },
  { key: "ODT", text: "Outdoor Training", value: "Outdoor Training" },
  { key: "WP", text: "Workout Plan", value: "Workout Plan" },
  { key: "MP", text: "Meal Plan", value: "Meal Plan" },
];

const howLong = [
  { key: "less6", text: "less than 6 Months", value: "less than 6 Months" },
  { key: "1y", text: "1 Year", value: "One Year" },
  { key: "mthan1", text: "More than 1 Year", value: "More than 1 Year" },
];

const physicallyAtive = [
  { key: "LA", text: "Lightly Active", value: "Lightly Active" },
  { key: "MA", text: "Moderately Active", value: "Moderately Active" },
  { key: "VA", text: "Very Active", value: "Very Active" },
];

function Modalpopup() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [userDetails] = useState({
    user_gender: "",
    reasonforjoin: "",
    programme: "",
    q1: "",
    q2: "",
    q3: "",
    q4: "",
    q5: "",
    q6: "",
    q7: "",
    q8: "",
    howlong: "",
    howactive: "",
  });

  const handlegenderChange = (e, data) => {
    userDetails.user_gender = data.value;
  };

  const handleReasonJoin = (e, data) => {
    userDetails.reasonforjoin = data.value;
  };

  const handleProgramme = (e, data) => {
    userDetails.programme = data.value;
  };

  const handleHowLong = (e, data) => {
    userDetails.howlong = data.value;
  };

  const handleHowActive = (e, data) => {
    userDetails.howactive = data.value;
  };

  const [answer, setAnwer] = useState("");
  const [answer2, setAnwer2] = useState("");
  const [answer3, setAnwer3] = useState("");
  const [answer4, setAnwer4] = useState("");
  const [answer5, setAnwer5] = useState("");
  const [answer6, setAnwer6] = useState("");
  const [answer7, setAnwer7] = useState("");

  const handleQChange = (event, { value }) => {
    setAnwer(value);
    userDetails.q1 = value;
  };

  const handleQ2Change = (event, { value }) => {
    setAnwer2(value);
    userDetails.q2 = value;
  };

  const handleQ3Change = (event, { value }) => {
    setAnwer3(value);
    userDetails.q3 = value;
  };

  const handleQ4Change = (event, { value }) => {
    setAnwer4(value);
    userDetails.q4 = value;
  };

  const handleQ5Change = (event, { value }) => {
    setAnwer5(value);
    userDetails.q5 = value;
  };

  const handleQ6Change = (event, { value }) => {
    setAnwer6(value);
    userDetails.q6 = value;
  };

  const handleQ7Change = (event, { value }) => {
    setAnwer7(value);
    userDetails.q7 = value;
  };

  const navigate = useHistory(); 

  const { register, handleSubmit } = useForm();

  const onSubmit = async (data, e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", data.file[0]);
    formData.append("file2", data.file[1]);
    formData.append("file3", data.file[2]);
    formData.append("firstname", data.firstname);
    formData.append("lastname", data.lastname);
    formData.append("gender", userDetails.user_gender);
    formData.append("birthdate", data.birthdate);
    formData.append("nic", data.nic);
    formData.append("mobilenumber", data.mobilenumber);
    formData.append("email", data.email);
    formData.append("weight", data.weight);
    formData.append("height", data.height);
    formData.append("reasonforjoin", userDetails.reasonforjoin);
    formData.append("programme", userDetails.programme);
    formData.append("q1", userDetails.q1);
    formData.append("q2", userDetails.q2);
    formData.append("q3", userDetails.q3);
    formData.append("q4", userDetails.q4);
    formData.append("q5", userDetails.q5);
    formData.append("q6", userDetails.q6);
    formData.append("q7", userDetails.q7);
    formData.append("q8", userDetails.q8);
    formData.append("howlong", userDetails.howlong);
    formData.append("howactive", userDetails.howactive);

    console.log(formData);

    const result = await fetch("http://localhost:3002/upload-file", {
      method: "POST",
      body: formData,
    }).then((result) => result.json());

    const res = await fetch("http://localhost:3002/join-now", {
      method: "POST",
      body: formData,
    }).then((res) => res.json());

    const status = res.status

    if (status === "ERROR") {
      alert(JSON.stringify(`${res.message}, status: ${res.status}`));
    }else {
      alert(JSON.stringify(`${res.message}, status: ${res.status}`));
      navigate.push('/')
    }

  };

  return (
    <div>
      <Button
        onClick={handleOpen}
        variant="contained"
        endIcon={<BookmarkAddedIcon />}
      >
        Join Now for a Programme
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <img class="ui fluid image" src={topcover} alt="popupCover" />
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Book your intrested programme here.
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Fill following details for registration.
          </Typography>

          <Form className="formPopUp" onSubmit={handleSubmit(onSubmit)}>
            <Form.Group widths="equal">
              <Form.Field>
                <label>Enter your first name</label>
                <input placeholder="First Name" {...register("firstname")} />
              </Form.Field>

              <Form.Field>
                <label>Enter your last name</label>
                <input placeholder="First Name" {...register("lastname")} />
              </Form.Field>

              <Form.Field>
                <label>Date of Birth</label>
                <input placeholder="YYYY-MM-DD" {...register("birthdate")} />
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
                <label>N. I. C</label>
                <input placeholder="Enter your NIC" {...register("nic")} />
              </Form.Field>
            </Form.Group>

            <Form.Group widths="equal">
              <Form.Field>
                <label>Mobile Number</label>
                <input
                  placeholder="Enter your your Mobile Number"
                  {...register("mobilenumber")}
                />
              </Form.Field>

              <Form.Field>
                <label>E-Mail</label>
                <input
                  placeholder="Enter your E-Mail ID"
                  {...register("email")}
                />
              </Form.Field>
            </Form.Group>

            <Form.Group widths="equal">
              <Form.Field>
                <label>Weight</label>
                <input
                  placeholder="Enter your Weight"
                  {...register("weight")}
                />
              </Form.Field>

              <Form.Field>
                <label>Height</label>
                <input
                  placeholder="Enter your Height"
                  {...register("height")}
                />
              </Form.Field>
            </Form.Group>

            <Form.Group widths="equal">
              <Form.Field>
                <label>Purpose of Joining</label>
                <Form.Select
                  options={joinReasons}
                  placeholder="Select"
                  name="reasonforjoin"
                  onChange={handleReasonJoin}
                />
              </Form.Field>

              <Form.Field>
                <label>Intrested Programme</label>
                <Form.Select
                  options={intrestedPrograms}
                  placeholder="Select"
                  name="programme"
                  onChange={handleProgramme}
                />
              </Form.Field>
            </Form.Group>

            <p>Answer below simple question for us</p>

            <Form.Field>
              <div class="ui message">
                <div className="inline fields">
                  <label>
                    Has your doctor ever said that you have a heart condition
                    and that you should only do physical acticity recomended by
                    a doctor?
                  </label>
                  <Form.Field
                    control={Radio}
                    label="Yes"
                    name="q1"
                    value="Yes"
                    checked={answer === "Yes"}
                    onChange={handleQChange}
                  />

                  <Form.Field
                    control={Radio}
                    label="No"
                    name="q1"
                    value="No"
                    checked={answer === "No"}
                    onChange={handleQChange}
                  />
                </div>
              </div>

              <Message>
                <div className="inline fields">
                  <label>
                    Do you feel pain in your chest when you do any physical
                    activity?
                  </label>
                  <Form.Field
                    control={Radio}
                    label="Yes"
                    name="q2"
                    value="Yes"
                    checked={answer2 === "Yes"}
                    onChange={handleQ2Change}
                  />

                  <Form.Field
                    control={Radio}
                    label="No"
                    name="q2"
                    value="No"
                    checked={answer2 === "No"}
                    onChange={handleQ2Change}
                  />
                </div>
              </Message>

              <Message>
                <div className="inline fields">
                  <label>
                    In the past month have you had chest pain when you were not
                    doing physical activity?
                  </label>
                  <Form.Field
                    control={Radio}
                    label="Yes"
                    name="q3"
                    value="Yes"
                    checked={answer3 === "Yes"}
                    onChange={handleQ3Change}
                  />

                  <Form.Field
                    control={Radio}
                    label="No"
                    name="q3"
                    value="No"
                    checked={answer3 === "No"}
                    onChange={handleQ3Change}
                  />
                </div>
              </Message>

              <Message>
                <div className="inline fields">
                  <label>
                    Do you loose your balance because of dizziness or do you
                    ever loose consciousness?
                  </label>
                  <Form.Field
                    control={Radio}
                    label="Yes"
                    name="q4"
                    value="Yes"
                    checked={answer4 === "Yes"}
                    onChange={handleQ4Change}
                  />

                  <Form.Field
                    control={Radio}
                    label="No"
                    name="q4"
                    value="No"
                    checked={answer4 === "No"}
                    onChange={handleQ4Change}
                  />
                </div>
              </Message>

              <Message>
                <div className="inline fields">
                  <label>
                    Do you have a bone or joint problem that could be made worse
                    by a change in your physical activity?
                  </label>
                  <Form.Field
                    control={Radio}
                    label="Yes"
                    name="q5"
                    value="Yes"
                    checked={answer5 === "Yes"}
                    onChange={handleQ5Change}
                  />

                  <Form.Field
                    control={Radio}
                    label="No"
                    name="q5"
                    value="No"
                    checked={answer5 === "No"}
                    onChange={handleQ5Change}
                  />
                </div>
              </Message>

              <Message>
                <div className="inline fields">
                  <label>
                    Is your doctor currently prescribing drugs for your blood
                    pressure or heart condition?
                  </label>
                  <Form.Field
                    control={Radio}
                    label="Yes"
                    name="q6"
                    value="Yes"
                    checked={answer6 === "Yes"}
                    onChange={handleQ6Change}
                  />

                  <Form.Field
                    control={Radio}
                    label="No"
                    name="q6"
                    value="No"
                    checked={answer6 === "No"}
                    onChange={handleQ6Change}
                  />
                </div>
              </Message>

              <Message>
                <div className="inline fields">
                  <label>Are you already on a workout schedule?</label>
                  <Form.Field
                    control={Radio}
                    label="Yes"
                    name="q7"
                    value="Yes"
                    checked={answer7 === "Yes"}
                    onChange={handleQ7Change}
                  />

                  <Form.Field
                    control={Radio}
                    label="No"
                    name="q7"
                    value="No"
                    checked={answer7 === "No"}
                    onChange={handleQ7Change}
                  />
                </div>

                <Form.Field>
                  <label>If yes How Longgg?</label>

                  <Form.Select
                    options={howLong}
                    placeholder="Select"
                    name="howlong"
                    onChange={handleHowLong}
                    fluid
                  />
                </Form.Field>
              </Message>

              <Message>
                <Form.Field>
                  <label>How active are you?</label>
                  <Form.Select
                    options={physicallyAtive}
                    placeholder="Select"
                    name="howactive"
                    onChange={handleHowActive}
                    fluid
                  />
                </Form.Field>
              </Message>

              <Message>
                <label>
                  3 Side views of the body (provide 3 pictures as sample vector){" "}
                </label>
                <br></br>
                <img class="ui small image" src={bodyimgsample} alt="sample"/>
                <br></br>
                <Button>
                  <input type="file" multiple {...register("file")} />
                </Button>
              </Message>
            </Form.Field>
            <Button variant="contained" type="submit">
              Submit
            </Button>
          </Form>
        </Box>
      </Modal>
    </div>
  );
}

export default Modalpopup;
