import * as z from 'zod';

export const PostValidation = z.object({
    text: z.string().min(1, {message: "Post should have at least 10 characters"}),
    topic: z.array(z.string()).min(1, { message: "At least one topic must be provided" }),
    authorId: z.string()
});

export const TopicValidation = z.object({
    name: z.string().min(1).max(255),
});

export const PostCommentValidation = z.object({
    postComment: z.string().min(3, {message: "Minimum 3 characters"})
})