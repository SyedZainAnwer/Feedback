import * as z from 'zod';

export const PostValidation = z.object({
    post: z.string().min(10, {message: "Post should have at least 10 characters"}),
    accountId: z.string()
})

export const PostCommentValidation = z.object({
    postComment: z.string().min(3, {message: "Minimum 3 characters"})
})