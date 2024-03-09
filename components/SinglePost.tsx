// "use client"

// import { fetchPostById } from "@/lib/actions/post.actions";
// import { useEffect, useState } from "react";
// import LeftSideBar from "./LeftSideBar";
// import { IPost } from "@/types/appTypes";
// import Post from "./Post";
// import HeadingIndicator from "./shared/HeadingIndicator";
// import CommentCard from "./shared/CommentCard";

// interface Props {
//     id: string;
//     isAuthenticated: string
// }


// const SinglePost = ({ id, isAuthenticated }: Props) => {

//     const [singlePost, setSinglePost] = useState<>()

//     useEffect(() => {
//         const fetchSinglePost = async() => {
//             const post = await fetchPostById(id);
//             setSinglePost(post);
//         }

//         fetchSinglePost()
//     }, [id])

//     return(
//         <div className="flex overflow-hidden">
//             <section className="md:w-1/5 lg:block hidden shadow-lg bg-white p-3 h-screen">
//                 <LeftSideBar />
//             </section>

//             <section className="md:my-10 md:ml-10 md:w-1/2 px-4">
//             <Post 
//                 createdAt={singlePost.createdAt} 
//                 postId={id} 
//                 text={singlePost?.text} 
//                 topic={singlePost?.topic} 
//                 isAuthenticated={isAuthenticated} 
//             />
//             {singlePost?.children.length !== 0 && (
//             <div className="flex mt-6">
//                 <HeadingIndicator className='ml-7' />
//                 <div className="ml-3">
//                     <h1 className="font-bold text-lg mb-3">Replies</h1>
//                     {singlePost?.children.map((comment: any) => (
//                         <CommentCard text={comment.text} key={comment._id}/>
//                     ))}
//                 </div>
//             </div>
//             )}
//             </section>
//         </div>
//     )
// }

// export default SinglePost;