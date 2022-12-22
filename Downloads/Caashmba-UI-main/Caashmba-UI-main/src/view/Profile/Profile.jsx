import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
const Profile = () => {
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
          <div className="flex flex-col gap-5">
            <p className="text-sm text-Grayscale">1 NFT (token) - equivale a 1mt2 de producción de maíz</p>
            <p className="text-sm text-Grayscale">Plazo: 1 año</p>
            <p className="text-sm text-Grayscale">Pago de rendimientos: anual</p>
            <p className="text-sm text-Grayscale">Si yo hoy invierto $100 en 1 año me dan $115 y se muere.</p>
            <p className="text-sm text-Grayscale">
              A eget non neque lectus nibh nec nulla. Sit convallis congue ut
              fermentum. Sed enim amet, ullamcorper urna tincidunt neque. Id
              pellentesque penatibus posuere fringilla dignissim. Cursus sapien
              egestas velit pellentesque tristique etiam. Vitae placerat
              sagittis, ut iaculis proin fusce pulvinar. Nunc gravida vestibulum
              tellus elit convallis scelerisque pulvinar. Leo quam morbi nisi,
              lorem dolor. Neque nec, viverra tortor amet accumsan. Maecenas
              donec nam nam tempus. Neque, quis aenean dolor id luctus egestas
              quam ultrices donec. Amet morbi eu bibendum non. Pulvinar eu felis
              elit mattis tellus libero. Maecenas morbi erat quisque pulvinar
              sapien vitae.
            </p>
            <p className="text-sm text-Grayscale">
              Sapien maecenas aliquet lacus magna sed nec iaculis. Natoque ut
              nam sit diam adipiscing scelerisque. Ultrices velit lorem duis sit
              senectus mi, malesuada elementum tellus. Euismod neque urna orci
              aliquam ac ac adipiscing. Enim tristique in diam sagittis, velit,
              malesuada. Fermentum elementum velit tristique netus lacinia
              blandit. Viverra justo facilisis fames in condimentum ut
              scelerisque eget tincidunt. Blandit at odio molestie turpis vitae
              sit velit leo.
            </p>
            <p className="text-sm text-Grayscale">
              Facilisi dignissim id suspendisse convallis arcu lacus dui.
              Volutpat non ullamcorper eu cursus. Accumsan, ut donec
              pellentesque eu vulputate feugiat libero libero eleifend. Et fusce
              tortor neque, tortor adipiscing sed lacus. Cursus et morbi eu
              turpis. Amet sodales nunc, neque posuere arcu, felis. Praesent
              penatibus maecenas convallis eget ac aliquam malesuada.
            </p>
            <p className="text-sm text-Grayscale">
              Nibh viverra tortor, faucibus lectus tellus. Bibendum massa mattis
              molestie tincidunt. Ac massa, elementum nunc pharetra mauris morbi
              sodales sit dignissim. Elementum eu sollicitudin aliquet
              consectetur facilisis. Diam tristique semper sed sed venenatis
              diam. Accumsan lobortis luctus bibendum odio ante et. Etiam aenean
              augue accumsan eleifend mi. Sagittis ac et cras venenatis nascetur
              euismod blandit. Mauris quam vel.
            </p>
            <h5 className="text-2xl text-Grayscale"> Ubicación</h5>
            <img src={process.env.PUBLIC_URL + './assets/map.png'}/>
            <p className="text-sm text-Grayscale">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis nam
              elit imperdiet eros nullam ut congue tortor tristique. Nam ut
              euismod duis mauris. Tortor consequat tortor mus nunc, ac morbi id
              proin egestas. Vivamus maecenas cras enim metus, quisque lectus
              pharetra. Id mi nam facilisi ridiculus ut. Elit nulla imperdiet
              rutrum lectus nibh nisl vulputate. Sem facilisis morbi mauris quis
              enim eleifend semper amet porttitor. Est molestie in elementum eu.
              Vulputate vitae enim sagittis suscipit cursus vehicula. Risus
              ornare nibh purus feugiat at. Pellentesque sit dignissim potenti
              fermentum neque leo ultricies nibh tellus. Nulla viverra nisl
              cursus non in nullam vestibulum. Cursus facilisis tempor amet
              ullamcorper ultricies consectetur egestas mauris. Feugiat lobortis
              malesuada orci consectetur tincidunt.
            </p>
            <h5 className="text-2xl text-Grayscale">Factibilidad legal</h5>
            <h5 className="text-2xl text-Grayscale"> Factibilidad técnica</h5>
            <h5 className="text-2xl text-Grayscale">Factibilidad ambiental</h5>
            <h5 className="text-2xl text-Grayscale">Gallery</h5>
            <div className="flex justify-center items-start gap-5">
              <div>
                <img
                  src={process.env.PUBLIC_URL + "/assets/Rectangle 14.png"}
                  className="w-full "
                  style={{ height: "250px" }}
                />
              </div>
              <div className="flex flex-wrap justify-center items-center gap-5 ">
                <img
                  src={process.env.PUBLIC_URL + "/assets/Rectangle 15.png"}
                />
                <img
                  src={process.env.PUBLIC_URL + "/assets/Rectangle 15.png"}
                />
                <img
                  src={process.env.PUBLIC_URL + "/assets/Rectangle 15.png"}
                />
                <img
                  src={process.env.PUBLIC_URL + "/assets/Rectangle 15.png"}
                />
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
    <div>
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
      <div className="max-w-[900px] mx-auto px-2">
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

      <div className="max-w-[1300px] w-full mx-auto py-5  ">
        <div className="flex flex-col md:flex-row justify-between  items-start gap-5 py-[3rem] px-5 ">
          <div className="max-w-[500px] w-full flex-1 ">
            <div className="relative">
              <div className="flex gap-[40px] border-b">
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
    </div>
  );
};

export default Profile;
