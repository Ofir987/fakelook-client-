import { TagI } from "./tag.model";
import { UserI } from "./user.model";
import { UserTaggedPostI } from "./userTaggedPost.model";

export class FilterI{
    constructor(  
        public publishers?: string[],
        public dateFrom?: Date,
        public dateTo?: Date,
        public tags?: string[],
        public usersTaggedInPost?: string[] //userName 
    ){}
}