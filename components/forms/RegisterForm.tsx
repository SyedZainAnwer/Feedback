"use client"

import { useState } from "react";
import Button from "../shared/Button";
import Input from "../shared/Input";
import * as z from 'zod';
import { UserValidation } from "@/lib/validations/user";
import { registerUser } from "@/lib/actions/user.actions";
import { useRouter } from "next/navigation";

interface Props {
    user: {
        id: string;
        email: string;
    }
}

const RegisterForm = ({ user }: Props) => {

    const router = useRouter()

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

    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        await registerUser({
            email: registerFieldValue.email,
            password: registerFieldValue.password,
            confirmPassword: registerFieldValue.confirmPassword || ""
        });

        router.push("/login");
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