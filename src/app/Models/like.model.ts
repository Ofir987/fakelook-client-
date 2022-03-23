import { IPost } from "./post.model";
import { IUser } from "./user.model";

export class ILike{
    constructor( 
        // public id: number,
        public isActive:boolean,
        // public user: UserI,
        // public post: PostI
        public userId: number,
        public postId: number
    ){}
}