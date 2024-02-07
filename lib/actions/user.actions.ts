"use server"

import User from "../models/user.model";
import { connectToDB } from "../mongoose";
import bcrypt from 'bcrypt';

interface Params {
    email: string;
    password: string;
    confirmPassword?: string;
}

export const registerUser = async({ email, password, confirmPassword }: Params) => {
    try {
        const exist = await User.findOne({ email });
        if (exist) {
            return {
                status: 500,
                body: { message: "This email already exists" }
            };
        }

        if (password !== confirmPassword) {
            return {
                status: 400,
                body: { error: "Passwords do not match" }
            };
        }

        const hashPassword = await bcrypt.hash(password, 10);

        await User.create({ email, password: hashPassword });

        return {
            status: 201,
            body: { message: "User registered" }
        };

    } catch (error: any) {
        console.log(`Error while registering the user: ${error.message}`);
        return {
            status: 500,
            body: { message: "Error occurred while registering" }
        };
    }
};

export const loginUser = async({ email, password }: Params) => {
    try {
        const user = await User.findOne({ email });

        if(!user) return false;

        const valid = await bcrypt.compare(password, user.password);

        if(!valid) return false;

        return true;
    } catch(error: any) {
        throw new Error(`Error logging user: ${error.message}`)
    }
};