import React, { useEffect } from "react";
import InputBox from "./InputBox";
import Button from "./Button";
import { GrClose } from "react-icons/gr";

const LoginModal = ({ isOpen, modalHandler }) => {
  if (!isOpen) {
    return null;
  }

  const loginHandler = (e) => {
    e.preventDefault();
    modalHandler(false);
  };

  return (
    <div className="absolute inset-0 bg-blue-400 bg-opacity-40 flex justify-center items-center">
      {/* modal box */}
      <div className="relative min-w-[500px] min-h-[500px] bg-white rounded-lg flex flex-col justify-center items-center shadow-black shadow-md">
        {/* modal header */}
        <div className="pb-6 pt-20">
          <h1 className="text-2xl font-semibold text-center">Login User</h1>

          <GrClose
            size={25}
            className="absolute top-8 right-8 cursor-pointer text-red-700 w-10"
            onClick={modalHandler}
          />
        </div>
        {/* modal body */}
        <div className="py-4 flex flex-col items-center">
          <form onSubmit={loginHandler}>
            <div>
              <p className="mb-1 text-gray-800 font-semibold">Email</p>
              <InputBox
                customClass={"mb-3 w-[350px]"}
                type={"email"}
                required={true}
                placeholder={"Enter Name"}
              />
            </div>
            <div className="mt-2">
              <p className="mb-1 text-gray-800 font-semibold">Password</p>
              <InputBox
                customClass={"w-[350px]"}
                type={"password"}
                required={true}
                placeholder={"Enter Password"}
              />

              <p className="underline text-blue-600 font-semibold cursor-pointer text-xs pt-2 text-end">
                Forgot password?
              </p>
            </div>

            <Button
              title={"Login"}
              customClass={"mt-6 w-[100px] mx-auto block"}
              buttonType={"submit"}
            />
          </form>
        </div>
        {/* modal footer */}
        <div className="pb-16">
          <p className="text-gray-600 text-sm">
            Don't have an account?{" "}
            <span className="underline text-blue-600 font-semibold cursor-pointer">
              Create account
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
