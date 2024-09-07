"use client";

import { FloatingLabelInput } from "@/components/FloatingLabelInput";
import React, { useCallback, useState } from "react";

type FormMode = "sign in" | "sign up";

export const SignInCard = () => {
  const [formMode, setformMode] = useState<FormMode>("sign in");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const toggleFormMode = useCallback(() => {
    setformMode((currentFormMode) =>
      currentFormMode === "sign in" ? "sign up" : "sign in"
    );
  }, []);

  return (
    <div className="flex flex-col bg-black p-16 rounded-md bg-opacity-70 text-white gap-4 w-full sm:w-3/6 sm:max-w-lg">
      {/* title */}
      <h2 className="font-semibold text-2xl">
        {formMode === "sign in" ? "Sign in" : "Register"}
      </h2>

      {/* username */}
      {formMode === "sign up" && (
        <FloatingLabelInput
          id="username"
          label="Username"
          type="text"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setUsername(e.target.value)
          }
          value={username}
        />
      )}

      {/* email */}
      <FloatingLabelInput
        id="email"
        label="Email"
        type="email"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setEmail(e.target.value)
        }
        value={email}
      />

      {/* password */}
      <FloatingLabelInput
        id="password"
        label="Password"
        type="password"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setPassword(e.target.value)
        }
        value={password}
      />

      {/* submit button */}
      <button className="bg-red-600 hover:bg-red-700 mt-5 py-3 rounded-md">
        {formMode === "sign in" ? "Sign in" : "Sign up"}
      </button>

      {/* question */}
      <p className="text-neutral-500 mt-5">
        {formMode === "sign in"
          ? "First time using Netflix? "
          : "Already have an account? "}
        <span
          onClick={toggleFormMode}
          className="text-white hover:underline cursor-pointer"
        >
          {formMode === "sign in" ? "Create an account" : "Sign in"}
        </span>
      </p>

      {/* version */}
      <p className="text-zinc-600 text-right">v.1</p>
    </div>
  );
};
