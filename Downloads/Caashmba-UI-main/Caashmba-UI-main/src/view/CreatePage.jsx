import React, { useState } from "react";
import { Button, message, Steps, Select, Form } from "antd";
import { DownOutlined } from "@ant-design/icons";
import UploadData from "./Upload/UploadData";

const documentOptions = [
  {
    value: "passport",
    label: "Passport",
  },
  {
    value: "license",
    label: "Driver License",
  },
];

const steps = [
  {
    title: "Project information",
    content: (
      <div>
        {" "}
        <div>
          <h2 className="capitalize text-3xl text-Grayscale mt-5 pt-5 ">
            project information{" "}
          </h2>
          <div className="">
            <h4 className="capitalize text-Grayscale  text-lg py-4 ">
              project title
            </h4>
            <input type="text" className="border rounded-lg w-full p-2"></input>
          </div>

          <div className="">
            <h4 className="capitalize text-Grayscale  text-lg py-4 ">
              Category
            </h4>

            <div className="">
              <Form.Item className="w-full mb-4 ">
                <Select options={documentOptions} />
              </Form.Item>
            </div>
          </div>

          <div className="">
            <h4 className="capitalize text-Grayscale  text-lg py-4 ">
              subcategory
            </h4>
            <div>
              <Form.Item className="w-full">
                <Select options={documentOptions} />
              </Form.Item>
            </div>
            <div className="">
              <h4 className="capitalize text-Grayscale  text-lg py-4 ">
                Brief description
              </h4>
              <input
                placeholder="Briefly describe your project in 250 characters or less..."
                className="border p-5 w-full rounded-lg "
              ></input>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Description ",
    content: (
      <>
        <h2 className="capitalize text-3xl text-Grayscale mt-5 pt-5  ">
          Description
        </h2>
        <p className="py-5">
          Describe your project, as detailed as posible, the goal here is to
          convince everyone to invest in it, you can add images, videos and any
          other resource you consider necessary to describe your vision.
        </p>
        <img
          src={process.env.PUBLIC_URL + "assets/frame.png"}
          className="w-full"
        />
      </>
    ),
  },
  {
    title: "Media",
    content: (
      <>
        <h2 className="capitalize text-3xl text-Grayscale mt-5 pt-5 ">Media</h2>
        <div className="py-4">
          <h4 className="capitalize text-Grayscale text-sm">
            Youtube video URL
          </h4>
          <p className="capitalize text-Grayscale text-xs ">
            If you have a youtube video explaining your project, add its URL
            here.
          </p>
          <div>
            <input
              type="text"
              className="border rounded-lg px-3 w-full my-3 p-2"
            ></input>
          </div>
          <div>
            <h2 className="capitalize text-Grayscale text-sm my-4">
              feature image
            </h2>
            <UploadData />
          </div>

          <div>
            <h2 className="capitalize text-Grayscale text-sm my-4">
              Attach documents
            </h2>
            <p className="capitalize text-Grayscale text-xs pb-5 ">
              {" "}
              If you have documents that provide aditional financial information
              about your project, add it here.
            </p>
            <UploadData />
          </div>
        </div>
      </>
    ),
  },
  {
    title: "Confirmation ",
    content: (
      <>
        <div>
          <img
            src={process.env.PUBLIC_URL + "assets/right.png"}
            className=" max-w-[200px] w-full mx-auto  py-10"
          />
          <div className="max-w-[400px] w-full mx-auto">
            <img
              src={process.env.PUBLIC_URL + "assets/¡Congratulations!.png"}
              className="   py-10"
            />
            <p className="text-2xl text-Grayscale">
              Your project is now one step closer to beign funded.
            </p>
            <p className="text-sm text-Grayscale pt-5">
              We will begin the evaluation process as soon as posible and will
              keep you updated on every step of the way.
            </p>
          </div>
        </div>
      </>
    ),
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const CreatePage = () => {
  const [current, setCurrent] = useState(0);
  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };
  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));

  return (
    <div className="max-w-[1000px] w-full mx-auto  px-5   my-[2rem]">
      <div className="shadow px-5 py-5 rounded-lg">
        <h2 className="text-secondary text-4xl text-center capitalize py-5 ">
          publish a project{" "}
        </h2>
        <div className="max-w-[700px] w-full mx-auto">
          <Steps current={current} items={items} />
          <div className="steps-content">{steps[current].content}</div>
          <div className="steps-action flex justify-center items-center text-center mt-5">
            {current < steps.length - 1 && (
              <Button
                type="primary"
                className="bg-navy px-5 text-white rounded"
                onClick={() => next()}
              >
                Next
              </Button>
            )}
            {/* {current === steps.length - 1 && (
            <Button
              type="primary"
              onClick={() => message.success("Processing complete!")}
            >
              Done
            </Button>
          )} */}
            <div className="mr-5">
              {current > 0 && (
                <Button
                  style={{
                    margin: "0 8px",
                  }}
                  onClick={() => prev()}
                  className="bg-cyan px-5 font-semibold  text-navy"
                >
                  GO BACK
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePage;
