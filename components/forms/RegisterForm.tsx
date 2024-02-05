"use client"

import { useState } from "react";
import Button from "../shared/Button";
import Input from "../shared/Input";
import * as z from 'zod';
import { UserValidation } from "@/lib/validations/user";

interface Props {
    user: {
        id: string;
        email: string;
    }
}

const RegisterForm = ({ user }: Props) => {

    const [registerFieldValue, setRegisterFieldValue] = useState<z.infer<typeof UserValidation>>({
        email: "",
        password: "",
        confirmPassword: "" as string
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setRegisterFieldValue((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async(e: any) => {
        e.preventDefault()

        if(
            !registerFieldValue.email || 
            !registerFieldValue.password || 
            !registerFieldValue.confirmPassword
        ) return console.error("Fill all the values")

        if(registerFieldValue.password !== registerFieldValue.confirmPassword) {
            return console.log("Enter same password");
        }

        try {

            UserValidation.parse(registerFieldValue);

            const res = await fetch('api/register/', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(registerFieldValue)
            });
            if(res.ok){
                // setRegisterFieldValue({email: "", confirmPassword: "", password: ""})
                const form = e.target;
                form.reset();
                console.log("user registered")
            } else {
                console.error("Something went wrong!")
            }
        } catch(error: any) {
            throw new Error(`Cannot register new user: ${error.message}`)
        }
    }

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="shadow-lg px-10 py-12 md:py-16 rounded-lg">
                <p className="block md:hidden text-center text-3xl font-bold text-orange mb-8">Feedback</p>
            <form onSubmit={handleSubmit}>
                <Input 
                    inputType="email" 
                    name="email" 
                    value={registerFieldValue.email} 
                    title="Email" 
                    onChange={(e) => handleChange(e)}
                />
                <Input 
                    inputType="password" 
                    name="password"
                    value={registerFieldValue.password} 
                    title="Password"
                    onChange={(e) => handleChange(e)}
                />
                <Input 
                    inputType="password" 
                    name="confirmPassword"
                    value={registerFieldValue.confirmPassword || ""} 
                    title="Confirm Password"
                    onChange={(e) => handleChange(e)}
                />
                <Button 
                    className="bg-light_blue mt-2" 
                    title="Register"
                    // handleSubmit={handleSubmit}
                />
            </form>
                <p className="mt-5 text-center text-sm">
                    Already have an account? {" "}
                    <a href="/login" className="underline text-gray">Login</a>
                </p>
            </div>
        </div>
    )
}

export default RegisterForm;