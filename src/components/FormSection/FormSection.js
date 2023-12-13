import {
  Box,
  Container,
  FormControlLabel,
  Grid,
  InputLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import HeadingSection from "../HeadingSection/HeadingSection";
import axios from "axios";
import * as Yup from "yup";
import { useFormik } from "formik";
import TemplateMedia from "../TemplateMedia/TemplateMedia";

export default function FormSection(props) {
  const [value, setValue] = useState("");
  const [successMessage, setSuccessMessage] = useState();

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      mobileno: "",
      firstname: "",
      companyname: "",
      message: "",
      productInterest: "",
      submit: null,
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .email("Enter Valid Email Address")
        .max(100, "The Email address must be below 100 characters")
        .required("The Email field is required"),
      mobileno: Yup.string()
        .min(10, "The Mobile number must be at least 10 characters")
        .max(10, "The Mobile number must be below 10 characters")
        .required("The Mobile number is required")
        .matches(/^\d+$/, "The Mobile number field must contain only digits"),
      firstname: Yup.string()
        .max(50, "The First name must be below 50 characters")
        .required("The First name field is required"),
      companyname: Yup.string()
        .max(50, "The Company name must be below 50 characters")
        .required("The Company name field is required"),
      message: Yup.string()
        .min(10, "The Message must be at least 10 characters")
        .max(180, "The Message must be below 180 characters"),
      productInterest: Yup.string().required(
        "Please select a product interest"
      ),
    }),

    onSubmit: async (values, helpers) => {
      const data = {
        mobileno: values.mobileno,
      };
      try {
        const response = await axios.post(
          "https://eobgzgk4elbj6q9.m.pipedream.net",
          {
            Name: values.firstname,
            email: values.email,
            Message: values.message,
          }
        );
        // Process the response and set the success message
        if (response.status === 200) {
          setSuccessMessage(`Thanks for sending the message. 😊`);
          formik.resetForm(values); // Reset the form
        }
      } catch (error) {
        console.error(error);
        helpers.setStatus({ success: false });
        helpers.setErrors({ email: "message not send" });
        helpers.setSubmitting(false);
      }
    },
  });
  return (
    <Box
      component={"section"}
      className={`contact-form-section ${props?.Class ? props?.Class : ""}`}
    >
      <Container>
        <Grid container className="contact-column" spacing={2}>
          <Grid item md={5} sm={12}>
            <Box component={"div"} className="left-box">
              <Box component={"div"}>
                <HeadingSection
                  Title={props?.data?.title}
                  Description={props?.data?.description}
                />
              </Box>

              <Box component={"div"} className="media-icon-box">
                <Box component={"div"} className="media-column">
                  {props?.data?.socialLinkTitle && (
                    <Typography
                      variant="h5"
                      className=" title "
                      dangerouslySetInnerHTML={{
                        __html: props?.data?.socialLinkTitle,
                      }}
                    />
                  )}
                </Box>
                <TemplateMedia data={props?.data?.socialIcon} />
              </Box>
            </Box>
          </Grid>
          <Grid item md={7} sm={12}>
            <Box component={"Form"} className="right-box" role="form">
              <Box
                component={"div"}
                sx={{
                  display: { md: "flex" },
                  justifyContent: "space-between",
                }}
              >
                <Box component={"div"} className="field-area">
                  <label className="input-lable">
                    Full Name
                    <Box
                      component={"span"}
                      sx={{ color: "#ff0000", marginLeft: "4px" }}
                    >
                      *
                    </Box>
                  </label>
                  <TextField
                    className="input-field"
                    required
                    id="firstname"
                    value={formik.values.firstname}
                    helperText={
                      formik.touched.firstname && formik.errors.firstname
                    }
                    error={Boolean(
                      formik.touched.firstname && formik.errors.firstname
                    )}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                  />
                </Box>
                <Box component={"div"} className="field-area">
                  <InputLabel className="input-lable">
                    Your Email
                    <Box
                      component={"span"}
                      sx={{ color: "#ff0000", marginLeft: "4px" }}
                    >
                      *
                    </Box>
                  </InputLabel>
                  <TextField
                    className="input-field"
                    required
                    type="email"
                    id="email"
                    value={formik.values.email}
                    helperText={formik.touched.email && formik.errors.email}
                    error={Boolean(formik.touched.email && formik.errors.email)}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                  />
                </Box>
              </Box>
              <Box
                component={"div"}
                sx={{
                  display: { md: "flex" },
                  justifyContent: "space-between",
                  marginTop: "32px",
                }}
              >
                <Box component={"div"} className="field-area">
                  <InputLabel className="input-lable">
                    Company Name
                    <Box
                      component={"span"}
                      sx={{ color: "#ff0000", marginLeft: "4px" }}
                    >
                      *
                    </Box>
                  </InputLabel>
                  <TextField
                    className="input-field"
                    required
                    aria-label="companyname"
                    value={formik.values.companyname}
                    id="companyname"
                    helperText={
                      formik.touched.companyname && formik.errors.companyname
                    }
                    error={Boolean(
                      formik.touched.companyname && formik.errors.companyname
                    )}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                  />
                </Box>
                <Box component={"div"} className="field-area">
                  <InputLabel className="input-lable">
                    Mobile Number
                    <Box
                      component={"span"}
                      sx={{ color: "#ff0000", marginLeft: "4px" }}
                    >
                      *
                    </Box>
                  </InputLabel>
                  <TextField
                    className={`input-field `}
                    required
                    type="number"
                    value={formik.values.mobileno}
                    id="mobileno"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    helperText={
                      formik.touched.mobileno && formik.errors.mobileno
                    }
                    error={Boolean(
                      formik.touched.mobileno && formik.errors.mobileno
                    )}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                  />
                </Box>
              </Box>
              <Box
                component={"div"}
                sx={{
                  marginTop: "32px",
                }}
              >
                <InputLabel className="input-lable">
                  Product interest
                </InputLabel>

                <RadioGroup
                  aria-label="productInterest"
                  name="productInterest"
                  required
                  value={formik.values.productInterest}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.productInterest &&
                    Boolean(formik.errors.productInterest)
                  }
                  helperText={
                    formik.touched.productInterest &&
                    formik.errors.productInterest
                  }
                >
                  <Box
                    component={"div"}
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                    className="radio-button"
                  >
                    <Box component={"div"}>
                      <FormControlLabel
                        name="productInterest"
                        control={<Radio />}
                        value={"Member"}
                        onClick={handleChange}
                        label="I'm an IA Member"
                        area-label="Member"
                      />
                      <FormControlLabel
                        value="OrbitInsight"
                        onChange={handleChange}
                        control={<Radio />}
                        label="Orbit Insight"
                        area-label="Insight"
                      />
                    </Box>
                    <Box component={"div"}>
                      <FormControlLabel
                        value="OrbitData"
                        onChange={handleChange}
                        control={<Radio />}
                        label="Orbit Data"
                        area-label="data"
                      />

                      <FormControlLabel
                        value="All"
                        onChange={handleChange}
                        control={<Radio />}
                        label="All"
                      />
                    </Box>
                    <Box component={"div"}>
                      <FormControlLabel
                        value="OrbitExtract"
                        control={<Radio />}
                        label="Orbit Extract"
                      />
                      <FormControlLabel
                        value="Other"
                        onChange={handleChange}
                        control={<Radio />}
                        label="Other"
                      />
                    </Box>
                  </Box>
                </RadioGroup>
                {formik.touched.productInterest &&
                  formik.errors.productInterest && (
                    <Box
                      component={"div"}
                      sx={{ color: "#d32f2f", fontSize: "12px", ml: 2 }}
                    >
                      {formik.errors.productInterest}
                    </Box>
                  )}

                <Box component={"div"}>
                  <TextField
                    className="text-area"
                    id="message"
                    value={formik.values.message}
                    helperText={formik.touched.message && formik.errors.message}
                    error={
                      formik.touched.message && Boolean(formik.errors.message)
                    }
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                  />
                </Box>
                <Box component={"div"}>
                  <button
                    className="btn"
                    type="submit"
                    aria_lable="send-message"
                    onClick={formik.handleSubmit}
                  >
                    Send Message
                  </button>
                </Box>
                {/* Display success message */}
                {successMessage && (
                  <Box component={"div"}>
                    <h6>{successMessage}</h6>
                  </Box>
                )}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
