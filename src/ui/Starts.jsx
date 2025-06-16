import { FaStar } from "react-icons/fa";
function Starts({ rate, postion = "start" }) {
  const element = [];
  for (let index = 0; index < 5; index++) {
    if (index < rate) element.push("themeyellow");
    else element.push("gray-400");
  }
  return (
    <div className={`flex justify-${postion} items-center gap-1`}>
      {element.map((el) => (
        <FaStar className={`text-${el}`} />
      ))}
    </div>
  );
}

export default Starts;
