function InputeForm({ lable, onClick, className, type = "text" }) {
  return (
    <div className={`${className} flex flex-col flex-wrap gap-4 relative`}>
      {" "}
      <label className=" absolute top-[-11px] left-2 bg-themewhite px-2 text-gray-700 text-sm font-medium">
        {lable}
      </label>
      <input
        autoComplete="on"
        onChange={(e) => onClick(e.target.value)}
        type={type}
        className=" border border-gray-200 rounded-lg p-2 text-black"
      />
    </div>
  );
}

export default InputeForm;
