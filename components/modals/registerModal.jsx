import useRegisterModal from "@/hook/useRegistonModal";
import React, { useState } from "react";
import Modal from "../ui/modal";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import Button from "../ui/button";
import { RegisterSchema_1 } from "@/lib/validation";

function RegisterModal() {
  const [step, setstep] = useState(1);
  const [data, setData] = useState({ name: "", email: "" });
  const registerModal = useRegisterModal();
  const body =
    step === 1 ? (
      <Register_1 setData={setData} setstep={setstep} />
    ) : (
      <Register_2 />
    );
  const footer = (
    <div>
      <p className="text-neutral-400 text-center mb-4">
        Already have an account ?{" "}
        <span className="text-white hover:underline cursor-pointer">
          Sign in
        </span>
      </p>
    </div>
  );
  return (
    <Modal
      body={body}
      footer={footer}
      isOpen={registerModal.isOpen}
      Onclose={registerModal.onClose}
      step={step}
      totalStep={2}
    />
  );
}
function Register_1({ setData, setstep }) {
  const onSubmit = (data) => {
    console.log("Form data:", data);
    setData(data);
    setstep(2);
  };
  const form = useForm({
    resolver: zodResolver(RegisterSchema_1),
    defaultValues: {
      email: "",
      name: "",
    },
  });
  const { isSubmitting } = form.formState;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Name" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="email" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          secondary
          fullWidth
          type="submit"
          label="Next"
          disabled={isSubmitting}
        >
          Submit
        </Button>
      </form>
    </Form>
  );
}
function Register_2() {
  // const form = useForm({
  //   resolver: zodResolver(RegisterSchema_2),
  // });
  return <div>Register_2</div>;
}

export default RegisterModal;
