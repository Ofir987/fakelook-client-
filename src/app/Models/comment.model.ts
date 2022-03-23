import { IPost } from "./post.model";
import { ITag } from "./tag.model";
import { IUser } from "./user.model";
import { IUserTaggedPost } from "./userTaggedPost.model";


export class IComment{
    constructor( 
    public content: string,
    // public user: UserI,
    // public post: PostI,
    public userId:number,
    public userName:string,
    public postId: number,
    public tags?: ITag[],
    public usersTaggedInPost?: IUserTaggedPost[] 
    ){}
}