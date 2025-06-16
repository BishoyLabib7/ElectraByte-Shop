import Aos from "aos";
import { useEffect } from "react";
import { useState } from "react";

function Payment() {
  useEffect(() => {
    Aos.init({ offset: 100, duration: 500, easing: "ease-in-out" });
    Aos.refresh();
  }, []);
  const [step, setStep] = useState(1);

  // Step content
  const StepContent = () => {
    switch (step) {
      case 1:
        return (
          <div className="w-[90%] flex flex-col gap-4">
            <h2 className="text-xl font-semibold mb-2">Contact Information</h2>
            <div className="w-full flex justify-around flex-1/3 flex-wrap gap-4 mt-10">
              <div className=" flex flex-col flex-wrap gap-4 relative">
                {" "}
                <label className=" absolute top-[-11px] left-2 bg-themewhite px-2 text-gray-700 text-sm font-medium">
                  Full Name
                </label>
                <input className=" border border-gray-200 rounded-lg p-2 text-black" />
              </div>

              <div className=" flex flex-col flex-wrap gap-4 relative">
                {" "}
                <label className=" absolute top-[-11px] left-2 bg-themewhite px-2 text-gray-700 text-sm font-medium">
                  Email Address
                </label>
                <input className=" border border-gray-200 rounded-lg p-2 text-black" />
              </div>
              <div className="flex flex-col flex-wrap gap-4 relative">
                {" "}
                <label className=" absolute top-[-11px] left-2 bg-themewhite px-2 text-gray-700 text-sm font-medium">
                  Phone Number
                </label>
                <input className=" border border-gray-200 rounded-lg p-2 text-black" />
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="w-[90%] flex flex-col gap-4">
            <h2 className="text-xl font-semibold mb-2">Shipping Address</h2>
            <div className="w-full flex justify-around flex-1/3 flex-wrap gap-4 mt-10">
              <div className=" flex flex-col flex-wrap gap-4 relative">
                {" "}
                <label className=" absolute top-[-11px] left-2 bg-themewhite px-2 text-gray-700 text-sm font-medium">
                  Address
                </label>
                <input className=" border border-gray-200 rounded-lg p-2 text-black" />
              </div>

              <div className=" flex flex-col flex-wrap gap-4 relative">
                {" "}
                <label className=" absolute top-[-11px] left-2 bg-themewhite px-2 text-gray-700 text-sm font-medium">
                  City
                </label>
                <input className=" border border-gray-200 rounded-lg p-2 text-black" />
              </div>

              <div className="flex flex-col flex-wrap gap-4 relative">
                {" "}
                <label className=" absolute top-[-11px] left-2 bg-themewhite px-2 text-gray-700 text-sm font-medium">
                  Postal Code
                </label>
                <input className=" border border-gray-200 rounded-lg p-2 text-black" />
              </div>

              <div className="flex flex-col flex-wrap gap-4 relative">
                {" "}
                <label className=" absolute top-[-11px] left-2 bg-themewhite px-2 text-gray-700 text-sm font-medium">
                  Country
                </label>
                <input className=" border border-gray-200 rounded-lg p-2 text-black" />
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="w-[90%]  flex flex-col gap-4">
            <h2 className="text-xl font-semibold mb-2">Payment Method</h2>
            <div className="w-full flex justify-around flex-1/3 flex-wrap gap-4 mt-10">
              <div className=" flex flex-col flex-wrap gap-4 relative">
                {" "}
                <label className=" absolute top-[-11px] left-2 bg-themewhite px-2 text-gray-700 text-sm font-medium">
                  Card Number
                </label>
                <select className="border border-gray-200 rounded-lg px-7 py-2 text-black">
                  <option>Credit Card</option>
                  <option>PayPal</option>
                  <option>Cash on Delivery</option>
                </select>
              </div>

              <div className=" flex flex-col flex-wrap gap-4 relative">
                {" "}
                <label className=" absolute top-[-11px] left-2 bg-themewhite px-2 text-gray-700 text-sm font-medium">
                  Card Number
                </label>
                <input className=" border border-gray-200 rounded-lg p-2 text-black" />
              </div>

              <div className=" flex flex-col flex-wrap gap-4 relative">
                {" "}
                <label className=" absolute top-[-11px] left-2 bg-themewhite px-2 text-gray-700 text-sm font-medium">
                  Card Holder Name
                </label>
                <input className=" border border-gray-200 rounded-lg p-2 text-black" />
              </div>

              <div className="flex flex-col flex-wrap gap-4 relative">
                {" "}
                <label className=" absolute top-[-11px] left-2 bg-themewhite px-2 text-gray-700 text-sm font-medium">
                  Expiry Date
                </label>
                <input className=" border border-gray-200 rounded-lg p-2 text-black" />
              </div>

              <div className="flex flex-col flex-wrap gap-4 relative">
                {" "}
                <label className=" absolute top-[-11px] left-2 bg-themewhite px-2 text-gray-700 text-sm font-medium">
                  CVV
                </label>
                <input className=" border border-gray-200 rounded-lg p-2 text-black" />
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };
  return (
    <div
      data-aos="fade-up"
      data-aos-delay="100"
      className="flex-1 bg-themewhite not-only:rounded-lg h-fit shadow-lg p-8 mb-8 md:mb-0"
    >
      <div className="w-full flex justify-center">
        <div className="w-[90%] after:mt-4 after:block after:h-1 after:w-full after:rounded-lg after:bg-gray-200">
          <ol className="grid grid-cols-3 text-sm font-medium text-gray-700">
            <li
              className={`relative flex justify-start ${
                step === 1 ? "text-blue-600" : ""
              }`}
            >
              <span
                className={`absolute start-0 -bottom-[1.75rem] rounded-full ${
                  step === 1 ? "bg-blue-600" : "bg-gray-600"
                }  text-white`}
              >
                <svg
                  className="size-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>

              <span className="hidden sm:block"> Details </span>

              <svg
                className="size-6 sm:hidden"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                />
              </svg>
            </li>

            <li
              className={`relative flex justify-center ${
                step === 2 ? "text-blue-600" : ""
              }`}
            >
              <span
                className={`absolute -bottom-[1.75rem] left-1/2 -translate-x-1/2 rounded-full ${
                  step === 2 ? "bg-blue-600" : "bg-gray-600"
                }  text-white`}
              >
                <svg
                  className="size-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>

              <span className="hidden sm:block"> Address </span>

              <svg
                className="mx-auto size-6 sm:hidden"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </li>

            <li
              className={`relative flex justify-end ${
                step === 3 ? "text-blue-600" : ""
              }`}
            >
              <span
                className={`absolute end-0 -bottom-[1.75rem] rounded-full ${
                  step === 3 ? "bg-blue-600" : "bg-gray-600"
                }  text-white`}
              >
                <svg
                  className="size-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>

              <span className="hidden sm:block"> Payment </span>

              <svg
                className="size-6 sm:hidden"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                />
              </svg>
            </li>
          </ol>
        </div>
      </div>

      <div className="flex justify-center mt-10">
        {" "}
        <StepContent />
      </div>

      <div className="w-full flex justify-end items-center mt-8 gap-5 ">
        <button
          onClick={() => setStep((s) => Math.max(1, s - 1))}
          className={` bg-gray-200 text-gray-700 px-5 py-2 mt-8  font-semibold rounded-lg shadow   transition cursor-pointer ${
            step === 1
              ? "opacity-50 cursor-not-allowed "
              : "hover:bg-gray-100 hover:text-black"
          }`}
          disabled={step === 1}
        >
          Back
        </button>

        {step < 3 ? (
          <button
            onClick={() => setStep((s) => Math.min(3, s + 1))}
            className=" bg-themepurple px-5 py-2 mt-8 text-white font-semibold rounded-lg shadow hover:bg-purple-300 hover:text-black transition cursor-pointer"
          >
            Next
          </button>
        ) : (
          <button
            onClick={() => alert("Order placed!")}
            className=" bg-themepurple px-5 py-2 mt-8 text-white font-semibold rounded-lg shadow hover:bg-themeyellow hover:text-black transition cursor-pointer"
          >
            Confirm order
          </button>
        )}
      </div>
    </div>
  );
}

export default Payment;
