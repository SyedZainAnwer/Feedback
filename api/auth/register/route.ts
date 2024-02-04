import { connectToDB } from "@/lib/mongoose";

export const POST = async(req: Request) => {
    try {
        connectToDB();

        const { email, password, confirmPassword } = await req.json();
    } catch(error: any) {
        throw new Error(`Error while registering the user: ${error.message}`)
    }
}