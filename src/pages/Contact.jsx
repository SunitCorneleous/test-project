import React from "react";
import { IoMdMail } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { BiSolidPhone } from "react-icons/bi";
import InputBox from "../components/InputBox";
import Button from "../components/Button";
import TextBox from "../components/TextBox";

const Contact = () => {
  return (
    <div className="w-[85%] mx-auto">
      <div className="py-16 flex justify-between">
        {/* side  */}
        <div>
          <h2 className="uppercase font-bold text-3xl">get in touch</h2>

          <p className="mt-8 leading-7">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti{" "}
            <br />
            laudantium dolorem quasi explicabo, ab ipsam. Laborum, possimus{" "}
            <br />
            perspiciatis saepe nobis blanditiis ducimus fugiat nam labore.{" "}
            <br />
          </p>

          <p className="mt-6">
            <IoMdMail className="inline-block mr-4" size={20} />{" "}
            info@finease.com
          </p>
          <p className="mt-4">
            {" "}
            <IoLocationSharp className="inline-block mr-4" size={20} /> 123 Main
            Street, City, State, ZIP
          </p>
          <p className="mt-4">
            {" "}
            <BiSolidPhone className="inline-block mr-4" size={20} />{" "}
            123-456-7890
          </p>
        </div>
        {/* contact form  */}
        <div className="min-w-[450px] px-6 py-8 border border-blue-100 rounded-md shadow-gray-300 shadow-md">
          <h1 className="font-bold text-2xl">Leave a message to us</h1>

          <div className="mt-8">
            <div className="flex mb-4">
              <InputBox customClass="w-auto" placeholder={"First Name"} />
              <InputBox customClass="w-auto ml-4" placeholder={"Last Name"} />
            </div>
            <InputBox customClass="w-full mb-4" placeholder={"Email"} />
            <TextBox customClass="w-full mb-4" placeholder={"Message"} />
          </div>

          <Button title={"Send"} customClass={"w-[200px] block mx-auto"} />
        </div>
      </div>
    </div>
  );
};

export default Contact;
