export const NetworkSection = () => {
  const NetworkData = [
    {
      imgURl: "./assets/binance.svg",
    },
    {
      imgURl: "./assets/etherum.svg",
    },
    {
      imgURl: "./assets/blockchain.svg",
    },
  ];
  return (
    <div>
      <section className="network-sec md:pt-[50px] pt-5 md:px-[40px] px-2">
        <div className="max-w-[1500px] mx-auto w-full">
          <div className="flex flex-col md:flex-row md:gap-[40px] gap-[20px] md:justify-between justify-center ">
            {NetworkData.map((data, index) => {
              return (
                <>
                  <img
                    src={process.env.PUBLIC_URL + data.imgURl}
                    key={index}
                    className="max-w-[200px] w-full  md:mx-0  mx-auto"
                  />
                </>
              );
            })}
          </div>
          <div></div>
        </div>
      </section>
    </div>
  );
};
