import PostInterface from "./postInterface";
import PostModel from '../../MongoSchema/post/postModel'



export default class Post implements PostInterface {

    async addNewPost({ postName, postDescription}): Promise<object> {
        const post = new PostModel({
            postName,
            postDescription
        });
        return await post.save()
    }

    async addPost(req: any, res: any): Promise<object> {
        const { postName, postDescription } = req.body
        const post = new PostModel({
            postName,
            postDescription
        });
        const savedPost = await post.save()
        return res.json({ savedPost })
    }

    async deletePost(req: any, res: any): Promise<object> {
        const { _id } = req.params
        const deletedPost = await PostModel.findByIdAndDelete(_id)
        return res.json({ deletedPost })
    }

    async editPost(req: any, res: any): Promise<object> {
        const { postName, postDescription, _id } = req.body
        const updatedPost = await PostModel.findByIdAndUpdate(_id, {
            postName,
            postDescription
        })
        return res.send({ updatedPost })
    }

    async getOnePost(req: any, res: any): Promise<object> {

        // get a post with a specific id --> "_id" 
        const { _id } = req.params
        const postThatWith_id = await PostModel.findById(_id)
        return res.send({ postThatWith_id })

    }

    async getGroubOfPosts(req: any, res: any): Promise<object> {
        //get a groub of posts 
        const { numberOfPosts } = req.params
        const posts = await PostModel.find().limit(parseInt(numberOfPosts))
        return res.send({ posts })
    }

}