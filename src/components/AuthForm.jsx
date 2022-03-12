import React, { useState, useContext, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { toast } from "react-toastify";
import { useParams, useNavigate, Link } from "react-router-dom";
import { AppContext } from "../context/AppProvider";

const AuthForm = () => {
  let navigate = useNavigate();
  const [disabled, setDisabled] = useState(false);
  let [auth, setAuth] = useContext(AppContext);

  useEffect(() => {
    if (auth.authentication) {
      navigate("/apply");
    }
  });

  let { slug } = useParams();

  let condition = slug === "signup";
  let baseurl = process.env.REACT_APP_BASE_URI + "/auth";
  console.log(baseurl);
  let url = condition ? baseurl + "/signup" : baseurl + "/signin";
  const formik = useFormik({
    initialValues: {
      firstName: condition ? "" : undefined,
      lastName: condition ? "" : undefined,
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      firstName: condition
        ? Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required")
        : undefined,
      lastName: condition
        ? Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required")
        : undefined,
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(8, "Must be 8 characters long or more")
        .required("Required"),
    }),
    onSubmit: async (values) => {
      try {
        setDisabled(true);
        let response = await axios.post(url, values);
        console.log(response.data);
        setAuth({ ...auth, authentication: response.data });
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("userfullname", response.data.fullname);
        navigate("/apply");
       
        setDisabled(false);
      } catch (error) {
        console.log(error.response);
        toast.error(error.response.data.message);
        setDisabled(false);
      }

      // alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form
      className="  rounded-lg flex xl:w-1/2 lg:w-2/5 md:w-1/2 p-10  flex-col self-center justify-evenly  border-kwabapurplelight border"
      onSubmit={formik.handleSubmit}
    >
      <div className=" self-center mb-2 text-xl font-semibold">
        {condition ? "Sign Up" : "Sign In"}
      </div>
      {condition && (
        <>
          <label className="text-sm mb-1" htmlFor="firstName ">
            First Name
          </label>
          <input
            id="firstName"
            name="firstName"
            className="border p-2  border-kwabapurplelight rounded-md"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName}
          />
          {formik.touched.firstName && formik.errors.firstName ? (
            <div className=" text-red-500 text-xs mt-1">
              {formik.errors.firstName}
            </div>
          ) : null}

          <label className="text-sm mb-1" htmlFor="lastName">
            Last Name
          </label>
          <input
            id="lastName"
            name="lastName"
            className="border p-2  border-kwabapurplelight rounded-md"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastName}
          />
          {formik.touched.lastName && formik.errors.lastName ? (
            <div className=" text-red-500 text-xs mt-1">
              {formik.errors.lastName}
            </div>
          ) : null}
        </>
      )}
      <div className="my-3 flex flex-col">
        <label className="text-sm mb-1" htmlFor="email">
          Email Address
        </label>
        <input
          className="border p-2  border-kwabapurplelight rounded-md"
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <div className=" text-red-500 text-xs mt-1">
            {formik.errors.email}
          </div>
        ) : null}
      </div>
      <div className="my-3 flex flex-col">
        <label className="text-sm mb-1" htmlFor="password">
          Password
        </label>
        <input
          className="border p-2  border-kwabapurplelight rounded-md"
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password ? (
          <div className=" text-red-500 text-xs mt-1">
            {formik.errors.password}
          </div>
        ) : null}
      </div>

      <button
        disabled={disabled}
        className=" bg-kwabagreen w-full self-center text-white p-2  rounded-md "
        type="submit"
      >
        Submit
      </button>

      <div className="mt-3 text-center text-sm underline text-kwabapurplelight">
        {slug === "signin" ? (
          <Link to="/auth/signup">New here?, sign up</Link>
        ) : (
          <Link to="/auth/signin"> Already a user?, please sign in</Link>
        )}
      </div>
    </form>
  );
};

export default AuthForm;
