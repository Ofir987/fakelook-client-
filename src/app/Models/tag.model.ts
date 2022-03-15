import { CommentI } from "./comment.model";
import { PostI } from "./post.model";

export class TagI{
    constructor( 
        public content:string,
        public comments: CommentI[],
        public posts: PostI[]
    ){}
}