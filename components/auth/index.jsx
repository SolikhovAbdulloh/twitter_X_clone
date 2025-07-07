"use client";
import Image from "next/image";
import React, { useCallback } from "react";
import Button from "../ui/button";
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";
import RegisterModal from "../modals/registerModal";
import useRegisterModal from "@/hook/useRegistonModal";
function Auth() {
  const registerModal = useRegisterModal();
  const OnOpenRegisterModal = useCallback(() => {
    registerModal.onOpen();
  }, [registerModal]);

  return (
    <>
      <RegisterModal />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-15 h-screen items-center">
        <Image
          src={"/images/x.code.svg"}
          width={450}
          height={450}
          alt="X"
          className="justify-self-end hidden md:block"
        />
        <div className="flex flex-col px-4 justify-center md:justify-between gap-5 h-full md:h-[70vh]">
          <h1 className="text-5xl font-bold text-center md:text-6xl md:text-start ">
            Happening now
          </h1>
          <div className="w-full  md:w-[60%]">
            <h2 className="font-bold text-3xl mb-4">Join Today</h2>
            <div className="flex flex-col  space-y-2">
              <Button
                label={
                  <div className="flex gap-2 items-center justify-center">
                    <FcGoogle />
                    Sign up with Google
                  </div>
                }
                fullWidth
                secondary
              />
              <Button
                label={
                  <div className="flex gap-2 items-center justify-center">
                    <AiFillGithub />
                    Sign up with Github
                  </div>
                }
                fullWidth
                secondary
              />

              <div className="flex items-center justify-center">
                <div className="h-px bg-gray-700 w-1/2" />
                <p className="mx-4">or</p>
                <div className="h-px bg-gray-700 w-1/2" />
              </div>
              <Button
                label={"Create account"}
                fullWidth
                onClick={OnOpenRegisterModal}
              />
              <div className="text-[10px] text-gray-400">
                By signing up, you agree to the{" "}
                <span className="text-sky-500">Terms of Service</span> and
                <span className="text-sky-500"> Privacy Policy</span>, including
                <span className="text-sky-500"> Cookie Use</span>.
              </div>
            </div>
          </div>

          <div className="w-full md:w-[60%]">
            <h3 className="font-medium text-xl mb-4">
              Already have an account?
            </h3>
            <Button label={"Sign in"} fullWidth outline />
          </div>
        </div>
      </div>
    </>
  );
}

export default Auth;
