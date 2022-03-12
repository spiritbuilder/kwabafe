import React, {
  useState,
  useContext,
  useEffect,
  useLayoutEffect,
  useCallback,
} from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import { useParams, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppProvider";

const RequestLoan = () => {
  const [picked, setPicked] = useState("");
  const formik = useFormik({
    initialValues: {
      // accomodation_status: "",
      monthly_income: 0,
      rent_amount: 0,
      payment_plan: "",
    },
    validationSchema: Yup.object({
      // accomodation_status: Yup.string()
      // .max(15, "Must be 15 characters or less")
      // .required("Required"),

      payment_plan: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      monthly_income: Yup.number().min(10000).required("Required"),
      rent_amount: Yup.number().min(10000).required("Required"),
    }),
    onSubmit: (values) => {
      let finalval = { ...values, accomodation_status: picked };

      alert(finalval.accomodation_status);
      //do something
    },
  });

  return (
    <div className=" w-1/2 p-6 self-center justify-self-center rounded-md border border-kwabapurplelight">
      <div className=" text-gray-700 -ml-3 mb-8 text-lg font-medium ">
        My Rent
      </div>
      <div className=" text-kwabapurple text-lg font-medium ">
        Payment Option
      </div>
      <div className="my-2 flex flex-col">
        <label className="text-sm mb-1" htmlFor="lastName">
          What's your accomodation status ?
        </label>
        <div
          className={
            picked == "Looking to renew my rent"
              ? "border cursor-pointer hover:scale-105 my-1 text-center text-sm text-kwabapurplelight py-3 border-kwabapurplelight rounded-md"
              : "border cursor-pointer hover:scale-105 my-1 text-center text-sm border-gray-400 py-3 text-gray-400 rounded-md"
          }
          onClick={() => {
            setPicked("Looking to renew my rent");
          }}
        >
          Looking to renew my rent
        </div>

        <div
          className={
            picked == "Want to pay for a new place"
              ? "border cursor-pointer hover:scale-105 my-1 text-center text-sm text-kwabapurplelight py-3 border-kwabapurplelight rounded-md"
              : "border cursor-pointer hover:scale-105 my-1 text-center text-sm border-gray-400 py-3 text-gray-400 rounded-md"
          }
          onClick={() => {
            setPicked("Want to pay for a new place");
          }}
        >
          Want to pay for a new place
        </div>
        <div
          id="lastName"
          name="lastName"
          className={
            picked == "I'm still searching"
              ? "border cursor-pointer hover:scale-105 my-1 text-center text-sm text-kwabapurplelight py-3 border-kwabapurplelight rounded-md"
              : "border cursor-pointer hover:scale-105 my-1 text-center text-sm border-gray-400 py-3 text-gray-400 rounded-md"
          }
          onClick={() => {
            setPicked("I'm still searching");
          }}
        >
          I'm still searching
        </div>
        {formik.errors.accomodation_status ? (
          <div className=" text-red-500 text-xs mt-1">
            {formik.errors.accomodation_status}
          </div>
        ) : undefined}

        <div className="my-2 flex flex-col">
          <label className="text-sm mb-1" htmlFor="rent_amount">
            How much is your request amount ?
          </label>
          <input
            id="rent_amount"
            name="rent_amount"
            className="border p-2  border-kwabapurplelight rounded-md"
            type="number"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.rent_amount}
          />
          {formik.errors.rent_amount ? (
            <div className=" text-red-500 text-xs mt-1">
              {formik.errors.rent_amount}
            </div>
          ) : undefined}
        </div>
        <div className="my-2 flex flex-col">
          <label className="text-sm mb-1" htmlFor="monthly_income">
            How much do you earn monthly ?
          </label>
          <input
            id="monthly_income"
            name="monthly_income"
            className="border p-2  border-kwabapurplelight rounded-md"
            type="number"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.monthly_income}
          />

          {formik.errors.monthly_income ? (
            <div className=" text-red-500 text-xs mt-1">
              {formik.errors.monthly_income}
            </div>
          ) : undefined}
        </div>
        <div className="my-2 flex flex-col">
          <label className="text-sm mb-1" htmlFor="payment_plan">
            Choose a monthly payment plan
          </label>
          <select
            id="payment_plan"
            name="payment_plan"
            className="border p-2  border-kwabapurplelight rounded-md"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.payment_plan}
          >
            <option value="1 Month">1 Month</option>
            <option value="1 Month">2 Month</option>
            <option value="1 Month">3 Month</option>
            <option value="1 Month">4 Month</option>
            <option value="1 Month">6 Month</option>
          </select>
          {formik.errors.accomodation_status ? (
            <div className=" text-red-500 text-xs mt-1">
              {formik.errors.accomodation_status}
            </div>
          ) : undefined}
        </div>
        <button
          className=" bg-kwabagreen text-sm mt-2 w-full self-center text-white p-2  rounded-md "
          onClick={formik.handleSubmit}
        >
          NEXT
        </button>
      </div>
    </div>
  );
};

export default RequestLoan;
