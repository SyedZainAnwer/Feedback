import * as z from 'zod';

export const PostValidation = z.object({
    text: z.string().min(1, {message: "Post should have at least 10 characters"}),
    topic: z.string().nullable(),
    authorId: z.string()
})

export const PostCommentValidation = z.object({
    postComment: z.string().min(3, {message: "Minimum 3 characters"})
})