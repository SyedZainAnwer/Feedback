"use client"

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import * as z from "zod";
import Cookies from "js-cookie";
import jwt from "jsonwebtoken";

import { UserValidation } from "@/lib/validations/user";
import { loginUser } from "@/lib/actions/user.actions";

import Button from "../shared/Button";
import Input from "../shared/Input";

const LoginForm = () => {

    const router = useRouter();

    const [loginFormValues, setLoginFormValues] = useState<z.infer<typeof UserValidation>>({
        email: "",
        password: "",
        confirmPassword: null
    });
    const [isAccurateData, setIsAccurateData] = useState(true);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setLoginFormValues((prev) => ({
            ...prev,
            [name]: value
        }))
    };

    const handleSubmit = async () => {
        const { email, password } = loginFormValues;

        if(!email || !password) {
            setIsAccurateData(false);
            return;
        }

        try {
            const response = await loginUser({ email, password })
            if(response) {
                Cookies.set("authToken", response.token);
                Cookies.set("authUserId", response.userId)
                router.push("/")
            } else {
                console.error("Failed to Login: Invalid response")
            }
        } catch(error: any) {
            console.error(`Failed to login: ${error.message}`)
        }
    }

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="shadow-lg px-10 py-16 rounded-lg">
                <p className="block md:hidden text-center text-3xl font-bold text-orange mb-8">Feedback</p>
                <form action={handleSubmit}>
                    <Input
                        inputType="email"
                        className={`mb-5 rounded-sm p-2 ${!isAccurateData ? "border-red-500" : ""}`}
                        title="Email"
                        name="email"
                        value={loginFormValues.email}
                        onChange={(e) => handleChange(e)}
                    />
                    <Input
                        inputType="password"
                        className={`mb-1 rounded-sm p-2 ${!isAccurateData ? "border-red-500" : ""}`}
                        title="Password"
                        name="password"
                        value={loginFormValues.password}
                        onChange={(e) => handleChange(e)}
                    />
                    {!isAccurateData && (
                        <p className="text-sm text-red-700 mb-2">Enter correct details</p>
                    )}
                    <Button
                        className="bg-light_blue mt-7"
                        title="Login"
                    />
                </form>
                <p className="mt-5 text-center text-sm">
                    Don't have an account? {" "}
                    <a href="/register" className="text-gray underline">Register</a>
                </p>
            </div>
        </div>
    )
}

export default LoginForm;