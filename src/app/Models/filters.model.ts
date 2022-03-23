import { ITag } from "./tag.model";
import { IUser } from "./user.model";
import { IUserTaggedPost } from "./userTaggedPost.model";

export class IFilter{
    constructor(  
        public publishers?: string[],
        public dateFrom?: Date,
        public dateTo?: Date,
        public tags?: string[],
        public usersTaggedInPost?: string[] //userName 
    ){}
}