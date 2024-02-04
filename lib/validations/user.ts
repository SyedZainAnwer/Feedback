import * as z from 'zod';

const isValidEmailDomain = (email: string) => {
    const domain = email.split('@')[1];
    return domain === "thi.de";
}

export const UserValidation = z.object({
    email: z.string()
        .email()
        .refine((email) => isValidEmailDomain(email), { message: "Must be THI email address" }),
    password: z
        .string()
        .regex(new RegExp(".*[A-Z].*"), "One uppercase character")
        .regex(new RegExp(".*[a-z].*"), "One lowercase character")
        .regex(new RegExp(".*\\d.*"), "One number")
        .regex(new RegExp(".*[`~<>?,./!@#$%^&*()\\-_+=\"'|{}\\[\\];:\\\\].*"), "One special character")
        .min(8, "Must be at least 8 characters long"),
    confirmPassword: z.string().nullable(),
}).refine(data => {
    return !data.password || data.password === data.confirmPassword;
}, {
    message: "Passwords do not match",
});