import * as z from 'zod';

const isValidEmailDomain = (email: string) => {
    const domain = email.split('@')[1];
    return domain === "thi.de";
}

export const UserValidation = z.object({
    email: z.string()
        .email()
        .refine((email) => isValidEmailDomain(email), { message: "Must be THI email address" }),
    password: z.string().min(8, "Must be at least 8 characters long"),
    confirmPassword: z.string().nullable(),
}).refine(data => {
    return !data.password || data.password === data.confirmPassword;
}, {
    message: "Passwords do not match",
});