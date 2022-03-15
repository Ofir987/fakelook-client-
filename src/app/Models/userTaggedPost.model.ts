import { PostI } from "./post.model";
import { UserI } from "./user.model";

export class UserTaggedPostI{
    constructor( 
        public user:UserI,
        public post: PostI
    ){}
}