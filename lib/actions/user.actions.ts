"use server"

import { NextResponse } from "next/server";
import User from "../models/user.model";
import { connectToDB } from "../mongoose";
import bcrypt from 'bcrypt';

export const registerUser = async(formData: FormData) => {
    const email = formData.get("email");
    const password = formData.get("password");
    const confirmPassword = formData.get("confirmPassword");

    try {
        connectToDB();

        // const { email, password, confirmPassword, id } = await formData.get;
        const exist = await User.findOne({$or: [{email}, {id}]});
        if(exist) return NextResponse.json({message: "This email already exist"}, {status: 500});

        if (password !== confirmPassword) {
            return NextResponse.json({error: "Passwords do not match"}, {status: 400})
        }

        const hashPassword = await bcrypt.hash(password, 10);

        await User.create({email, password: hashPassword, id});
        return NextResponse.json({ message: "User registered" }, { status: 201 });

    } catch(error: any) {
        console.log(`Error while registering the user: ${error.message}`);
        return NextResponse.json({message: "Error occurred while registering"}, {status: 500})
    }
}