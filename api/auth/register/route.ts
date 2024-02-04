import User from "@/lib/models/user.model";
import { connectToDB } from "@/lib/mongoose";
import { NextResponse } from "next/server";

export const POST = async(req: Request) => {
    try {
        connectToDB();

        const { email, password, confirmPassword, id } = await req.json();
        const exist = await User.findOne({$or: [{email}, {id}]});
        if(exist) return NextResponse.json({message: "This email already exist"}, {status: 500});

        if(password === confirmPassword) {
            await User.create({email, password, id})
            return NextResponse.json({message: "User registered"}, {status: 201});
        }

    } catch(error: any) {
        console.log(`Error while registering the user: ${error.message}`);
        return NextResponse.json({message: "Error occurred while registering"}, {status: 500})
    }
}