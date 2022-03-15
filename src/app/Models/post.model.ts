import { CommentI } from "./comment.model";
import { LikeI } from "./like.model";
import { TagI } from "./tag.model";
import { UserTaggedPostI } from "./userTaggedPost.model";

export class PostI{
    constructor( 
        public description:string,
        public imgSource: string,
        public X_Position: number,
        public Y_Position: number,
        public Z_Position: number,
        public date: Date,
        public likes?: LikeI,
        public comments?: CommentI,
        public tags?: TagI[],
        public usersTaggedInPost?: UserTaggedPostI[]
    ){}
}