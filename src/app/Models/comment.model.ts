import { PostI } from "./post.model";
import { TagI } from "./tag.model";
import { UserI } from "./user.model";
import { UserTaggedPostI } from "./userTaggedPost.model";


export class CommentI{
    constructor( 
    public content: string,
    // public user: UserI,
    // public post: PostI,
    public userId:number,
    public userName:string,
    public postId: number,
    public tags?: TagI[],
    public usersTaggedInPost?: UserTaggedPostI[] 
    ){}
}