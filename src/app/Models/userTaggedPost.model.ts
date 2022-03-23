import { IPost } from "./post.model";
import { IUser } from "./user.model";

export class IUserTaggedPost{
    constructor( 
        public userName:string,
        public postId: number
    ){}
}