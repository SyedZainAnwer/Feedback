export interface IPost {
    topic: string[];
    authorId: string;
    text: string;
    path: string
}

export interface ILogin {
    email: string;
    password: string;
    confirmPassword?: string;
    token?: string;
}