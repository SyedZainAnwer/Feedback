"use client"

import { useState } from "react";
import Button from "../shared/Button";
import Input from "../shared/Input";
import * as z from "zod";
import { UserValidation } from "@/lib/validations/user";

const LoginForm = () => {

    const [loginFormValues, setLoginFormValues] = useState<z.infer<typeof UserValidation>>({
        email: "",
        password: "",
        confirmPassword: null
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setLoginFormValues((prev) => ({
            ...prev,
            [name]: value
        }))
    };

    const handleSubmit = () => {
        console.log(loginFormValues)
    }

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="shadow-lg px-10 py-16 rounded-lg">
                <p className="block md:hidden text-center text-3xl font-bold text-orange mb-8">Feedback</p>
                <Input 
                    inputType="email" 
                    title="Email"
                    name="email"
                    value={loginFormValues.email}
                    onChange={(e) => handleChange(e)}
                />
                <Input 
                    inputType="password" 
                    title="Password"
                    name="password"
                    value={loginFormValues.password}
                    onChange={(e) => handleChange(e)}
                />
                <Button 
                    className="bg-light_blue mt-2" 
                    title="Login"
                    handleSubmit={handleSubmit}
                />
                <p className="mt-5 text-center text-sm">
                    Don't have an account? {" "}
                    <a href="/register" className="text-gray underline">Register</a>
                </p>
            </div>
        </div>
    )
}

export default LoginForm;