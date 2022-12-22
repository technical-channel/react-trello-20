import React from "react";
import ExploreCard from "../../components/Card/ExploreCard";

const About = () => {
  return (
    <>
      <div className="bg-cyan py-5">
        <div className="max-w-[1300px] w-full mx-auto">
          <img
            src={process.env.PUBLIC_URL + "/assets/user.png"}
            className=" max-w-[100px] w-full mx-auto"
          />
          <h5 className="text-3xl text-secondary  text-center capitalize py-3">
            Name of the author
          </h5>
          <hr />
          <div className="justify-between flex-col md:flex-row  items-center flex gap-5 py-4 px-5">
            <div className="flex  flex-wrap  justify-center items-center gap-5 px-5">
              <div>
                <h5 className="text-center text-2xl text-Grayscale">3</h5>
                <h5 className="text-">investments</h5>
              </div>
              <div>
                <h5 className="text-center text-2xl text-Grayscale">3</h5>
                <h5>projects</h5>
              </div>
              <div>
                <h5 className="text-center text-2xl text-Grayscale">116</h5>
                <h5>following</h5>
              </div>
              <div>
                <h5 className="text-center text-2xl text-Grayscale">200</h5>
                <h5>followers</h5>
              </div>
            </div>
            <div>
              <button className="uppercase text-sm bg-navy rounded  text-white px-5 py-2">
                follow
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1300px] mx-auto w-full">
       <div className="flex flex-col md:flex-row  justify-center items-start gap-5 py-10 px-5">
        <div className="flex-1">
        <h3 className="capitalize text-Grayscale text-2xl py-3">about </h3>
        <p className="text-sm text-Grayscale pb-4">
          A eget non neque lectus nibh nec nulla. Sit convallis congue ut
          fermentum. Sed enim amet, ullamcorper urna tincidunt neque. Id
          pellentesque penatibus posuere fringilla dignissim. Cursus sapien
          egestas velit pellentesque tristique etiam. Vitae placerat sagittis,
          ut iaculis proin fusce pulvinar. Nunc gravida vestibulum tellus elit
          convallis scelerisque pulvinar. Leo quam morbi nisi, lorem dolor.
          Neque nec, viverra tortor amet accumsan. Maecenas donec nam nam
          tempus. Neque, quis aenean dolor id luctus egestas quam ultrices
          donec. Amet morbi eu bibendum non. Pulvinar eu felis elit mattis
          tellus libero. Maecenas morbi erat quisque pulvinar sapien vitae.
        </p>

        <p className="text-sm text-Grayscale pb-4">
          Sapien maecenas aliquet lacus magna sed nec iaculis. Natoque ut nam
          sit diam adipiscing scelerisque. Ultrices velit lorem duis sit
          senectus mi, malesuada elementum tellus. Euismod neque urna orci
          aliquam ac ac adipiscing. Enim tristique in diam sagittis, velit,
          malesuada. Fermentum elementum velit tristique netus lacinia blandit.
          Viverra justo facilisis fames in condimentum ut scelerisque eget
          tincidunt. Blandit at odio molestie turpis vitae sit velit leo.
        </p>
        <p className="text-sm text-Grayscale pb-4">
          Facilisi dignissim id suspendisse convallis arcu lacus dui. Volutpat
          non ullamcorper eu cursus. Accumsan, ut donec pellentesque eu
          vulputate feugiat libero libero eleifend. Et fusce tortor neque,
          tortor adipiscing sed lacus. Cursus et morbi eu turpis. Amet sodales
          nunc, neque posuere arcu, felis. Praesent penatibus maecenas convallis
          eget ac aliquam W.
        </p>
        <p className="text-sm text-Grayscale pb-4">
          Nibh viverra tortor, faucibus lectus tellus. Bibendum massa mattis
          molestie tincidunt. Ac massa, elementum nunc pharetra mauris morbi
          sodales sit dignissim. Elementum eu sollicitudin aliquet consectetur
          facilisis. Diam tristique semper sed sed venenatis diam. Accumsan
          lobortis luctus bibendum odio ante et. Etiam aenean augue accumsan
          eleifend mi. Sagittis ac et cras venenatis nascetur euismod blandit.
          Mauris quam vel.
        </p>
        </div>
<div className="flex-1">
<div className=" max-w-[300px] w-full mx-auto bg-[#E0F1F3] px-5 py-4">
<h5 className="text-Grayscale text-lg">Find me on</h5>
<div className="flex justify-center gap-3 items-center py-7">
                  <img src={process.env.PUBLIC_URL + "/assets/fb.png"} />
                  <img src={process.env.PUBLIC_URL + "/assets/message.png"} />
                  <img src={process.env.PUBLIC_URL + "/assets/fb.png"} />
                  <img src={process.env.PUBLIC_URL + "/assets/message.png"} />
                  <img src={process.env.PUBLIC_URL + "/assets/wtsp.png"} />
                </div>
                <button className="w-full mx-auto bg-navy px-[40px] py-2 text-center text-white rounded">Website</button>

        </div>
</div>
        
   
       </div>
       </div>
       <div className="bg-cyan px-5 py-5">
       <div className="max-w-[1300px] mx-auto w-full">
       <div className="py-5">
        <h3 className="capitalize text-Grayscale text-2xl py-4 px-4">Projects </h3>
       <ExploreCard/>
        </div>
        <div className="py-[2rem]">
        <h3 className="capitalize text-Grayscale text-2xl py-4 px-4">Investments </h3>
       <ExploreCard/>
        </div>
        </div>
     
   
        
      </div>
    </>
  );
};

export default About;
