"use client"

import { useState } from "react";
import Button from "../shared/Button";
import Input from "../shared/Input";
import * as z from 'zod';
import { UserValidation } from "@/lib/validations/user";
import { registerUser } from "@/lib/actions/user.actions";
import { useRouter } from "next/navigation";

const RegisterForm = () => {

    const router = useRouter()

    const [registerFieldValue, setRegisterFieldValue] = useState<z.infer<typeof UserValidation>>({
        email: "",
        password: "",
        confirmPassword: "" as string
    });
    const [touchedFields, setTouchedFields] = useState<{ [key: string]: boolean }>({
        email: false,
        password: false,
        confirmPassword: false
    });
    const [validationErrors, setValidationErrors] = useState<string[]>([]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setRegisterFieldValue((prev) => ({
            ...prev,
            [name]: value
        }));

        setTouchedFields((prev) => ({
            ...prev,
            [name]: true
        }));
    }

    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            UserValidation.parse(registerFieldValue);
            
            await registerUser({
                email: registerFieldValue.email,
                password: registerFieldValue.password,
                confirmPassword: registerFieldValue.confirmPassword || ""
            });
    
            router.push("/login");
        } catch(error: any) {
            if(error instanceof z.ZodError) {
                const errors: string[] = [];
                error.errors.forEach((err) => {
                    errors.push(err.message);
                });
                setValidationErrors(errors);
            } else {
                console.log(`Error occurred during registration: ${error.message}`)
            }
        }

    }

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="shadow-lg px-10 py-12 md:py-16 rounded-lg">
                <p className="block md:hidden text-center text-3xl font-bold text-orange mb-8">Feedback</p>
            <form onSubmit={handleSubmit}>

                {/* Email Input Field */}
                <Input 
                    inputType="email"
                    className={`${validationErrors.includes("Must be THI email address") ? 
                    "border-red-500 mb-1" : "mb-5"}`}
                    name="email" 
                    value={registerFieldValue.email} 
                    title="Email" 
                    onChange={(e) => handleChange(e)}
                />

                {validationErrors.includes("Must be THI email address") && (
                    <p className="mb-5 text-sm text-red-700">
                        Must be THI email address
                    </p>
                )}

                {/* Password Input Field */}
                <Input 
                    inputType="password"
                    className={`${validationErrors.includes("Must be at least 8 characters long") ? 
                    "border-red-500 mb-1" : "mb-5"}`}
                    name="password"
                    value={registerFieldValue.password} 
                    title="Password"
                    onChange={(e) => handleChange(e)}
                />

                {validationErrors.includes("Must be at least 8 characters long") && (
                    <p className="mb-5 text-sm text-red-700">
                        Must be at least 8 characters long
                    </p>
                )}

                {/* Confirm Password Input Field */}
                <Input 
                    inputType="password"
                    className={`${validationErrors.includes("Passwords do not match") ? 
                    "border-red-500 mb-1" : ""}`}
                    name="confirmPassword"
                    value={registerFieldValue.confirmPassword || ""} 
                    title="Confirm Password"
                    onChange={(e) => handleChange(e)}
                />

                {validationErrors.includes("Passwords do not match") && (
                    <p className="text-sm text-red-700">
                        Passwords do not match
                    </p>
                )}
                
                {/* Register Button */}
                <Button 
                    className="bg-light_blue mt-7" 
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