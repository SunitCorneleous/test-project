import React, { useState } from "react";
import InputBox from "./InputBox";
import Button from "./Button";
import { GrClose } from "react-icons/gr";
import { motion } from "framer-motion";
import Encryption from "../utils/Encryption";
import CryptoJS from "crypto-js";
import { useApi } from "../hooks/useApi";
import { useForm } from "react-hook-form";

const LoginModal = ({ modalHandler }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const { data, loading, error, fetchData } = useApi("LoginApi/Post_v2");

  const loginHandler = async (formData) => {
    const password = formData.password;
    const email = formData.email;

    const words = CryptoJS.MD5(password);

    const encryption = new Encryption().getEncryptedData(
      JSON.stringify({
        UserName: email,
        Password: words.toString(),
      })
    );

    await fetchData({
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Data: encryption,
      }),
    });

    if (data && !loading) {
      console.log(data && JSON.parse(data?.Data)[0]);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 bg-blue-400 bg-opacity-40 flex justify-center items-center"
    >
      {/* modal box */}
      <motion.div
        initial={{ x: -500 }}
        animate={{ x: 0 }}
        transition={{ ease: "easeOut", duration: 1 }}
        className="relative min-w-[500px] min-h-[500px] bg-white rounded-lg flex flex-col justify-center items-center shadow-black shadow-md"
      >
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
          <form onSubmit={handleSubmit(loginHandler)}>
            <div>
              <p className="mb-1 text-gray-800 font-semibold">Email</p>
              <InputBox
                name={"email"}
                customClass={"mb-1 w-[350px]"}
                placeholder={"Enter Name"}
                register={{
                  ...register("email", {
                    required: "Email Address is required",
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: "Enter valid email",
                    },
                  }),
                }}
                error={errors?.email?.message}
              />
            </div>
            <div className="mt-2">
              <p className="mb-1 text-gray-800 font-semibold">Password</p>
              <InputBox
                name={"password"}
                customClass={"w-[350px]"}
                type={"password"}
                placeholder={"Enter Password"}
                register={{
                  ...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Minimum password length 6 characters",
                    },
                  }),
                }}
                error={errors?.password?.message}
              />

              <p className="underline text-blue-600 font-semibold cursor-pointer text-xs pt-2 text-end">
                Forgot password?
              </p>
            </div>

            <Button
              title={"Login"}
              customClass={"mt-6 w-[100px] mx-auto block"}
              buttonType={"submit"}
              loading={loading}
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
      </motion.div>
    </motion.div>
  );
};

export default LoginModal;
