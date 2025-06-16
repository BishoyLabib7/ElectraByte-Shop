import { IoCloseOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { register } from "../../services/useUser";
import { useState } from "react";

const Popup = ({ orderPopup, setOrderPopup }) => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  function handleRegister() {
    dispatch(register());
  }
  return (
    <>
      {orderPopup && (
        <div className="popup">
          <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white  rounded-md duration-200 w-[300px]">
              {/* header */}
              <div className="flex items-center justify-between">
                <div>
                  <h1>Order Now</h1>
                </div>
                <div>
                  <IoCloseOutline
                    className="text-2xl cursor-pointer "
                    onClick={() => setOrderPopup(false)}
                  />
                </div>
              </div>
              {/* form section */}
              <div className="mt-4">
                <input
                  type="text"
                  placeholder="Name"
                  className=" w-full rounded-full border border-gray-300 px-2 py-1 mb-4"
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="email"
                  placeholder="Email"
                  className=" w-full rounded-full border border-gray-300 px-2 py-1 mb-4"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Address"
                  className=" w-full rounded-full border border-gray-300 px-2 py-1 mb-4"
                  onChange={(e) => setAddress(e.target.value)}
                />
                <div className="flex justify-center">
                  <button
                    onClick={handleRegister}
                    className="bg-themeyellow from-primary to-secondary hover:scale-105 duration-200 text-black py-2 px-5 rounded-full  font-semibold"
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
