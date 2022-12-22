import React from "react";
import DiscoverCard from "../../../components/Card/DiscoverCard";


const DiscoverSection = () => {
  const discoverCardData = [
    {
      title: "Agricultural",
      bgColor: "#00b36e",
      imgUrl:
        "https://images.unsplash.com/photo-1560493676-04071c5f467b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    },
    {
      title: "Energy",
      bgColor: "#c09d32",
      imgUrl:
        "https://images.unsplash.com/photo-1521618755572-156ae0cdd74d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80",
    },
    {
      title: "Technology",
      bgColor: "#004b93",
      imgUrl:
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      title: "Industry",
      bgColor: "#f7a460",
      imgUrl:
        "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      title: "Social",
      bgColor: "#ef3957",
      imgUrl:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
    },
    {
      title: "Real State",
      bgColor: "#6f4dc7",
      imgUrl:
        "https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1992&q=80",
    },
  ];

  return (
    <>
      <div className="pb-[50px] pt-[30px] bg-cyan">
        <div className="text-center mb-10">
          <h1 className="text-[50px] text-Grayscale m-0">Discover</h1>
          <p className="text-md text-Grayscale">
            Discover more projects looking for investment.
          </p>
        </div>
        <div className=" w-full max-w-[1300px] w-full mx-auto px-4 ">
          <div className="grid md:grid-cols-3 grid-col-1  gap-5  ">
            {discoverCardData.map((item, key) => (
             
              <DiscoverCard
                key={key}
                title={item.title}
                imgUrl={item.imgUrl}
                bgColor={item.bgColor}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default DiscoverSection;
