import Button from "../shared/Button";
import Input from "../shared/Input";

const LoginForm = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="shadow-lg px-10 py-16 rounded-lg">
                <p className="block md:hidden text-center text-3xl font-bold text-orange mb-8">Feedback</p>
                <Input inputType="email" title="Email"/>
                <Input inputType="password" title="Password"/>
                <Button className="bg-light_blue mt-2" title="Login"/>
                <p className="mt-5 text-center text-sm">
                    Don't have an account? {" "}
                    <a href="/register" className="text-gray underline">Register</a>
                </p>
            </div>
        </div>
    )
}

export default LoginForm;