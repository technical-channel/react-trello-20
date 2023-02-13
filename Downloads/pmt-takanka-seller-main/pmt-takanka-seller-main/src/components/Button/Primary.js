export const Button = ({ title }) => {
  return (
    <>
      <button className=" px-[3rem] py-2  max-w-[200px] bg-[#0674BB] text-white  font-semibold rounded-full button-shadow" style={{ fontFamily: "Mulish" }} > 
        {title}
      </button>
    </>
  );
};
