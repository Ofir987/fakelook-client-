import { IComment } from "./comment.model";
import { IPost } from "./post.model";

export class ITag{
    constructor( 
        public content:string,
        public commentId?: number,
        public postId?: number
    ){}
}