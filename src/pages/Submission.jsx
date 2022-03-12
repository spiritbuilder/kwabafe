import React, { useState, useContext, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { toast } from "react-toastify";
import { useParams, useNavigate, Navigate } from "react-router-dom";
import { AppContext } from "../context/AppProvider";

const Submission = () => {
  let navigate = useNavigate();

  const [auth, setAuth] = useContext(AppContext);
  console.log(auth);
  const [formdata, setFormdata] = useState(auth.formValues);
  const [isloangood, setIsloangood] = useState(false);
  const [loaninsights, setLoaninsights] = useState({});
  useEffect(() => {
    calculatePaybackdetails(formdata);
  }, [formdata]);

  const calculatePaybackdetails = (loandata) => {
    // monthly_income: 0,
    // rent_amount: 0,
    // payment_plan: "",

    let months = parseInt(loandata?.payment_plan?.split(" ")[0]);

    let payableAmount = loandata?.rent_amount * (1 + 0.02 * months);

    let monthlypayment = payableAmount / months;

    if (monthlypayment > loandata?.monthly_income) {
      toast.error(
        "Your Monthly income is lower the loan you want to take, please reduce your amount"
      );
      setLoaninsights({
        ...loaninsights,
        months,
        payableAmount,
        monthlypayment,
      });
    } else {
      toast.success("Your application is looking good");
      setLoaninsights({
        ...loaninsights,
        months,
        payableAmount,
        monthlypayment,
      });
      setIsloangood(true);
    }
  };

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
        <span className="mr-2">
          &#8358;
          <input
            className="text-lg"
            value={formdata?.rent_amount}
            onChange={(e) =>
              setFormdata({
                ...formdata,
                rent_amount: parseInt(e.target.value),
              })
            }
          />
        </span>
      </div>
      <label className="text-sm mt-5 mb-1 block" htmlFor="lastName">
        Monthly Payment Plan
      </label>
      <select
        id="payment_plan"
        name="payment_plan"
        className="border p-2 block w-full  border-kwabapurplelight rounded-md"
        type="text"
        onChange={(e) =>
          setFormdata({ ...formdata, payment_plan: e.target.value })
        }
        // onBlur={formik.handleBlur}
        value={formdata?.payment_plan}
      >
        <option value="1 Month">1 Month</option>
        <option value="2 Month">2 Months</option>
        <option value="3 Month">3 Months</option>
        <option value="4 Month">4 Months</option>
        <option value="5 Month">5 Months</option>
        <option value="6 Month">6 Months</option>
        <option value="7 Month">7 Months</option>
        <option value="8 Month">8 Months</option>
        <option value="9 Month">9 Months</option>
        <option value="10 Month">10 Months</option>
        <option value="11 Month">11 Months</option>
        <option value="12 Month">12 Months</option>
      </select>

      <label className="text-sm mt-10 mb-1 block" htmlFor="lastName">
        Payment option
      </label>
      <div className=" bg-kwabapurplebg w-full rounded-lg  p-4">
        <div className="flex flex-row mb-8 text-sm justify-between items-center">
          <div>Pre-approved amount</div>
          <div>&#8358;{formdata?.rent_amount}</div>
        </div>
        <div className="flex flex-row mb-8 text-sm justify-between items-center">
          <div>Monthly payment</div>
          <div>&#8358;{loaninsights.monthlypayment?.toFixed(2)}</div>
        </div>
        <div className="flex flex-row  text-sm justify-between items-center">
          <div>Tenure</div>
          <div>{loaninsights.months}</div>
        </div>
      </div>

      <button
        type="submit"
        className=" bg-kwabapurple text-sm mt-4 w-full self-center text-white p-4  rounded-md "
        onClick={async () => {
          if (isloangood) {
            try {
              let response = await axios.post(
                process.env.REACT_APP_BASE_URI + "/borrowings",
                {
                  ...formdata,
                  tenure: loaninsights.months,
                },
                {
                  headers: {
                    authorization: `Bearer ${auth.authentication.token}`,
                  },
                }
              );

              toast.success(
                "Your Application has been sent, we will contact you on the next steps"
              );

              setAuth({ ...auth, formValues: {} });
              navigate("/");
            } catch (error) {
              console.log(error);
              toast.error(error.message);
            }
          } else {
            toast.error(
              "You loan cannot be processed please reapply with a lesser rent amount"
            );
          }
        }}
      >
        ACCEPT
      </button>
    </div>
  );
};

export default Submission;
