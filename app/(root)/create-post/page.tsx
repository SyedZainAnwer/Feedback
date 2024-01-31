import Heading from "@/components/shared/Heading";
import Input from "@/components/shared/Input";

const data = ["data1", "data2", "data3", "data4"]

const CreatePost = () => {
    return(
        <main className="">
            <Heading title="Post Feedback"/>
            <div className="mt-4">
                <Input 
                    inputType="text"
                    className="w-full py-3"
                    dataItems={data} 
                    placeholder="Select a topic or enter one"
                />
                <Input 
                    inputType="text"
                    className="w-full py-3"
                    placeholder="Enter post title"
                />
            </div>
        </main>
    )
}

export default CreatePost;