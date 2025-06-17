import { IoCloseOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { register } from "../../services/useUser";
import { useEffect, useState } from "react";
import InputeForm from "../../ui/InputeForm";
import Aos from "aos";
import { FaArrowUp } from "react-icons/fa";

const Popup = ({ orderPopup, setOrderPopup }) => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  useEffect(() => {
    Aos.init({ offset: 100, duration: 500, easing: "ease-in-out" });
    Aos.refresh();
  }, []);
  function handleRegister() {
    if (!name || !email || !password) {
      setError("Please fill in all fields.");
      return;
    }
    setOrderPopup(false);
    const userData = {
      name: name,
      email: email,
      password: password,
      valid: true,
    };

    dispatch(register(userData));
  }
  return (
    <>
      {orderPopup && (
        <div className="popup">
          <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
            <div
              data-aos="fade-up"
              data-aos-delay="100"
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-themewhite rounded-md duration-200 z-50 w-[80%] md:w-[500px]"
            >
              {/* header */}
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="font-semibold text-xl">Order Now</h1>
                </div>
                <div>
                  <IoCloseOutline
                    className="text-2xl cursor-pointer "
                    onClick={() => setOrderPopup(false)}
                  />
                </div>
              </div>
              <hr className="mt-4" />
              {/* form section */}
              <div>
                <InputeForm
                  lable={"Name"}
                  onClick={setName}
                  className={"mt-10 mb-10"}
                />
                <InputeForm
                  lable={"Email"}
                  onClick={setEmail}
                  className={"mb-10"}
                  type={"email"}
                />
                <InputeForm
                  lable={"Password"}
                  onClick={setPassword}
                  className={"mb-10"}
                  type={"password"}
                />
                <span className=" text-sm  text-red-600 font-semibold">
                  {error ? error : ""}
                </span>
                <div className="flex  items-center justify-center mt-5">
                  {" "}
                  <button
                    onClick={handleRegister}
                    className="w-[80%] bg-themepurple from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-5 rounded-lg font-semibold"
                  >
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
