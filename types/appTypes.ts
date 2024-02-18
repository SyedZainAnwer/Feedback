export interface IPost {
    topic: string;
    authorId?: string;
    text: string;
    createdAt?: string;
}

export interface ILogin {
    email: string;
    password: string;
    confirmPassword?: string;
    token?: string;
}