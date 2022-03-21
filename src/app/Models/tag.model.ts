import { CommentI } from "./comment.model";
import { PostI } from "./post.model";

export class TagI{
    constructor( 
        public content:string,
        public commentId?: number,
        public postId?: number
    ){}
}