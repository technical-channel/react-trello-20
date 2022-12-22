import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const NFTPage = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0);
  const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0);

  const tabsRef = useRef([]);

  useEffect(() => {
    function setTabPosition() {
      const currentTab = tabsRef.current[activeTabIndex];
      setTabUnderlineLeft(currentTab?.offsetLeft ?? 0);
      setTabUnderlineWidth(currentTab?.clientWidth ?? 0);
    }
    setTabPosition();
    window.addEventListener("resize", setTabPosition);

    return () => window.removeEventListener("resize", setTabPosition);
  }, [activeTabIndex]);

  const tabsData = [
    {
      label: "Description",
      content: (
        <>
          <div>
            <div className="shadow border my-3">
              <img
                src={process.env.PUBLIC_URL + "/assets/updates.png"}
                className="w-full mx-auto"
              />
              <div className="pb-5 px-4 py-3">
                <h5>Titulo del post</h5>
                <p>
                  A eget non neque lectus nibh nec nulla. Sit convallis congue
                  ut fermentum. Sed enim amet, ullamcorper urna tincidunt neque.
                  Id pellentesque penatibus posuere fringilla dignissim. Cursus
                  sapien egestas velit pellentesque tristique etiam. Vitae
                  placerat sagittis, ut iaculis proin fusce pulvinar. Nunc
                  gravida vestibulum tellus elit convallis scelerisque pulvinar.
                  Leo quam morbi nisi, lorem dolor. Neque nec, viverra tortor
                  amet accumsan. Maecenas donec nam nam tempus. Neque, quis
                  aenean dolor id luctus egestas quam ultrices donec. Amet morbi
                  eu bibendum non. Pulvinar eu felis elit mattis tellus libero.
                  Maecenas morbi erat quisque pulvinar sapien.
                </p>
              </div>
            </div>

            <div className="shadow border">
              <img
                src={process.env.PUBLIC_URL + "/assets/nftcard.png"}
                className="w-full mx-auto"
              />
              <div className="pb-5 px-4 py-3">
                <h5>Titulo del post</h5>
                <p>
                  A eget non neque lectus nibh nec nulla. Sit convallis congue
                  ut fermentum. Sed enim amet, ullamcorper urna tincidunt neque.
                  Id pellentesque penatibus posuere fringilla dignissim. Cursus
                  sapien egestas velit pellentesque tristique etiam. Vitae
                  placerat sagittis, ut iaculis proin fusce pulvinar. Nunc
                  gravida vestibulum tellus elit convallis scelerisque pulvinar.
                  Leo quam morbi nisi, lorem dolor. Neque nec, viverra tortor
                  amet accumsan. Maecenas donec nam nam tempus. Neque, quis
                  aenean dolor id luctus egestas quam ultrices donec. Amet morbi
                  eu bibendum non. Pulvinar eu felis elit mattis tellus libero.
                  Maecenas morbi erat quisque pulvinar sapien.
                </p>
              </div>
            </div>

            <div className="my-5">
              <img
                src={process.env.PUBLIC_URL + "/assets/ractangle11.png"}
                className="w-full mx-auto"
              />
            </div>
            <div className="my-5">
              <div className="bg-gradient-to-r from-[#004987] to-[#009688] p-5 border border-0 rounded-lg">
                <div className="py-10">
                  <h4 className="Grayscale text-white text-lg capitalize text-center">
                    project launch
                  </h4>
                  <h5 className="Grayscale text-white text-5xl capitalize text-center">
                    10
                  </h5>
                  <h5 className="Grayscale text-white text-lg capitalize text-center">
                    jul
                  </h5>
                  <h5 className="Grayscale text-white text-lg capitalize text-center">
                    2022
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </>
      ),
    },
    {
      label: "Analysis",
      content:
        "Fugiat dolor et quis in incididunt aute. Ullamco voluptate consectetur dolor officia sunt est dolor sint.",
    },
    {
      label: "Updates",
      content:
        "Ut irure mollit nulla eiusmod excepteur laboris elit sit anim magna tempor excepteur labore nulla.",
    },
    {
      label: "Smart Contract",
      content:
        "Ut irure mollit nulla eiusmod excepteur laboris elit sit anim magna tempor excepteur labore nulla.",
    },
  ];

  return (
    <>
      <div className="bg-cyan py-5  ">
        <div className="flex justify-center items-center gap-[20px] ">
          <Link to="/" className="text-secondary uppercase">
            Categoría
          </Link>
          <Link to="/" className="text-secondary uppercase">
            Subcategoria
          </Link>
        </div>
        <div className="text-center max-w-[800px] mx-auto py-5">
          <p className="text-5xl nft-para pb-5">
            Venta futura producción de maiz 40 hectares
          </p>
        </div>
      </div>
      <div className="max-w-[1100px] mx-auto px-2">
        <div className="mt-[-2rem]">
          <iframe
            width="560"
            src="https://www.youtube.com/embed/gfGuPd1CELo"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="flex justify-center 
            w-full h-full object-cover"
          ></iframe>
        </div>
      </div>

      <div className="max-w-[1100px] w-full mx-auto py-5  ">
        <div className="flex flex-col md:flex-row justify-between  items-start gap-5 py-[3rem] px-5 ">
          <div className="max-w-[500px] w-full flex-1 ">
            <div className="relative">
              <div className="flex md:gap-[40px] gap-[20px] border-b">
                {tabsData.map((tab, idx) => {
                  return (
                    <button
                      key={idx}
                      ref={(el) => (tabsRef.current[idx] = el)}
                      className="pt-2 pb-3 text-secondary text-sm font-normal"
                      onClick={() => setActiveTabIndex(idx)}
                    >
                      {tab.label}
                    </button>
                  );
                })}
              </div>
              <span
                className="absolute bottom-0 block h-1 bg-teal-500 transition-all duration-300"
                style={{ left: tabUnderlineLeft, width: tabUnderlineWidth }}
              />
            </div>
            <div className="py-4 ">
              <p>{tabsData[activeTabIndex].content}</p>
            </div>
          </div>

          <div className="flex-1">
            <div className="max-w-[400px] w-full mx-auto">
              <div className="bg-cyan px-5 py-5">
                <div className="flex items-center pb-2">
                  <div className="pr-3">
                    <img src={process.env.PUBLIC_URL + "/assets/1.png"} />
                  </div>

                  <h5 className="text-sm text-Grayscale">
                    Expected annual returns: 15%
                  </h5>
                </div>
                <div className="flex items-center pb-2 ">
                  <div className="pr-3">
                    <img src={process.env.PUBLIC_URL + "/assets/2.png"} />
                  </div>

                  <h5 className="text-sm text-Grayscale">Risk: 1%</h5>
                </div>
                <div className="flex items-center pb-2 ">
                  <div className="pr-3">
                    <img src={process.env.PUBLIC_URL + "/assets/3.png"} />
                  </div>

                  <h5 className="text-sm text-Grayscale">Token price: $100</h5>
                </div>
                <div className="flex items-center pb-2 ">
                  <div className="pr-3">
                    <img src={process.env.PUBLIC_URL + "/assets/4.png"} />
                  </div>

                  <h5 className="text-sm text-Grayscale">
                    Available tokens: 2,500 / 10,000
                  </h5>
                </div>
              </div>
              <div className="bg-cyan mt-5 px-5 py-5">
                <h5 className="text-sm capitalize text-[#70727E] text-center mb-5 ">
                  share
                </h5>
                <div className="flex justify-center gap-5 items-center">
                  <img src={process.env.PUBLIC_URL + "/assets/fb.png"} />
                  <img src={process.env.PUBLIC_URL + "/assets/message.png"} />
                  <img src={process.env.PUBLIC_URL + "/assets/wtsp.png"} />
                </div>
              </div>

              <div className="mt-5">
                <h2 className=" rounded text-center border-[#004987] border-2 px-4 py-2 text-[#004987] text-sm">
                  Download project information (PDF)
                </h2>
              </div>
              <div className="mt-5">
                <div className="flex justify-center items-center gap-3 mt-5 rounded text-center border-[#004987] border-2 px-4 py-2">
                  <img src={process.env.PUBLIC_URL + "/assets/print.png"} />
                  <h2 className=" text-sm uppercase text-[#004987]">print</h2>
                </div>

                <div
                  className="mt-5"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, #004987,#009688 )",
                  }}
                >
                  <h2 className="uppercase p-3 text-center text-white ">
                    invest
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      </div>
      <div className="flex flex-col md:flex-row  items-center">
        <div className="flex flex-col md:flex-row justify-center items-center">
          <div className="bg-cyan px-5 py-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-5">
              <div className="">
                <h3 className="text-2xl text-Grayscale pb-3">
                  About the author
                </h3>
                <h5 className="text-4xl text-secondary capitalize pb-3">
                  Name of the author
                </h5>
              </div>
              <div>
                <img
                  src={process.env.PUBLIC_URL + "/assets/user.png"}
                  style={{ width: "80px" }}
                />
              </div>
            </div>
            <p className="text-sm text-GrayScale pb-5 mt-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis nam
              elit imperdiet eros nullam ut congue tortor tristique. Nam ut
              euismod duis mauris. Tortor consequat tortor mus nunc, ac morbi id
              proin egestas. Vivamus maecenas cras enim metus, quisque lectus
              pharetra. Id mi nam facilisi ridiculus ut. Elit nulla imperdiet
              rutrum lectus nibh nisl vulputate. Sem facilisis morbi mauris quis
              enim eleifend semper amet porttitor. Est molestie in elementum eu.
              Vulputate vitae enim sagittis suscipit cursus vehicula. Risus
              ornare nibh purus feugiat at.{" "}
            </p>
            <button className="uppercase bg-navy text-white p-2 text-sm border rounded ">
              view profile{" "}
            </button>
          </div>
          <div className="bg-[#E0F1F3] px-5 py-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-5">
              <div className="">
                <h3 className="text-2xl text-Grayscale pb-3">
                  Project audited by
                </h3>
                <h5 className="text-4xl text-secondary capitalize pb-3">
                  Deloitte
                </h5>
              </div>
            </div>
            <p className="text-sm text-GrayScale pb-5 mt-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis nam
              elit imperdiet eros nullam ut congue tortor tristique. Nam ut
              euismod duis mauris. Tortor consequat tortor mus nunc, ac morbi id
              proin egestas. Vivamus maecenas cras enim metus, quisque lectus
              pharetra. Id mi nam facilisi ridiculus ut. Elit nulla imperdiet
              rutrum lectus nibh nisl vulputate. Sem facilisis morbi mauris quis
              enim eleifend semper amet porttitor. Est molestie in elementum eu.
              Vulputate vitae enim sagittis suscipit cursus vehicula. Risus
              ornare nibh purus feugiat at.{" "}
            </p>
            <button className="uppercase bg-[#E0F1F3] text-navy  p-2 text-sm border border-navy  rounded">
              view audit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NFTPage;
