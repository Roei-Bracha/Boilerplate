export interface jwtPayload  {
    username : string,
    email:string
}

export interface User{
    id:string,
    user_name : string,
    password_hash:string,
    email:string,
    joinTime:Date
}

export interface SetTokenResult{
    success:boolean,
    userId:string,
    token:string
}

export interface SignUpBody{
    userName:string,
    password:string,
    email:string
}