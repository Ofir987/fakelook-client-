import { PostI } from "./post.model";
import { UserI } from "./user.model";

export class UserTaggedPostI{
    constructor( 
        public userName:string,
        public postId: number
    ){}
}