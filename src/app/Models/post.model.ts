import { Observable } from "rxjs";
import { IComment } from "./comment.model";
import { ILike } from "./like.model";
import { ITag } from "./tag.model";
import { IUser } from "./user.model";
import { IUserTaggedPost } from "./userTaggedPost.model";

export class IPost{
    constructor( 
        public id: number,
        public description:string,
        public imageSorce: string,
        public x_Position: number,
        public y_Position: number,
        public z_Position: number,
        public date: Date,
        public userId: number,
        public user: IUser,
        public likes?: ILike[],
        public comments?: IComment[],
        public tags?: ITag[],
        public usersTaggedInPost?: IUserTaggedPost[]
    ){}
}