export default interface PostInterface {
    addPost(req: any, res: any): Promise<object>;
    editPost(req: any, res: any): Promise<object>;
    deletePost(req: any, res: any): Promise<object>;
    getOnePost(req: any, res: any): Promise<object>;
    getGroubOfPosts(req: any, res: any): Promise<object>;
}