import { PostI } from "./post.model";
import { UserI } from "./user.model";

export class LikeI{
    constructor( 
        public isActive:boolean,
        public user: UserI,
        public post: PostI
    ){}
}