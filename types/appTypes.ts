export interface IPost {
    topic: string;
    postId: string;
    post: string;
}

export interface ILogin {
    email: string;
    password: string;
    confirmPassword?: string;
    token?: string;
}