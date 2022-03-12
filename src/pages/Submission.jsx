import React, { useState, useContext, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { toast } from "react-toastify";
import { useParams, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppProvider";

const Submission = () => {
  return (
    
    <div className="xl:w-1/2 lg:w-2/5 md:w-4/5 w-full p-6 self-center justify-self-center rounded-md border border-kwabapurplelight">
      <div className=" text-gray-700 -ml-2 mb-8 text-lg font-medium ">
        My Rent
      </div>
      <div className=" text-kwabapurple text-lg font-medium ">
        Payment Breakdown
      </div>
      <label className="text-sm mb-1" htmlFor="rent_amount">
        Rent request amount
      </label>
      <div className="flex flex-col pl-5 w-full pt-1 pb-3 rounded-md  shadow-lg">
        <div className=" text-xs">Amount</div>
        <div className="text-lg">#200,000</div>
      </div>
      <label className="text-sm mt-5 mb-1 block" htmlFor="lastName">
        Monthly Payment Plan
      </label>
      <select
        id="payment_plan"
        name="payment_plan"
        className="border p-2 block w-full  border-kwabapurplelight rounded-md"
        type="text"
        // onChange={formik.handleChange}
        // onBlur={formik.handleBlur}
        // value={formik.values.payment_plan}
      >
        <option value="1 Month">1 Month</option>
        <option value="1 Month">2 Month</option>
        <option value="1 Month">3 Month</option>
        <option value="1 Month">4 Month</option>
        <option value="1 Month">6 Month</option>
      </select>

      <label className="text-sm mt-10 mb-1 block" htmlFor="lastName">
        Payment option
      </label>
      <div className=" bg-kwabapurplebg w-full rounded-lg  p-4">
        <div className="flex flex-row mb-8 text-sm justify-between items-center">
          <div>Pre-approved amount</div>
          <div>#200,000</div>
        </div>
        <div className="flex flex-row mb-8 text-sm justify-between items-center">
          <div>Monthly payment</div>
          <div>#200,000</div>
        </div>
        <div className="flex flex-row  text-sm justify-between items-center">
          <div>Tenure</div>
          <div>2 Month</div>
        </div>
      </div>

      <button className=" bg-kwabapurple text-sm mt-4 w-full self-center text-white p-4  rounded-md "
        onClick={() => {
        
      }}
      >
        ACCEPT
      </button>
    </div>
  );
};

export default Submission;
