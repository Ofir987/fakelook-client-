import { CommentI } from "./comment.model";
import { LikeI } from "./like.model";
import { TagI } from "./tag.model";
import { UserTaggedPostI } from "./userTaggedPost.model";

export class PostI{
    constructor( 
        public id: number,
        public description:string,
        public imgSource: string,
        public x_Position: number,
        public y_Position: number,
        public z_Position: number,
        public date: Date,
        public userId: number,
        public likes?: LikeI,
        public comments?: CommentI,
        public tags?: TagI[],
        public usersTaggedInPost?: UserTaggedPostI[]
    ){}
}