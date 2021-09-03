import express, { Request, Response } from 'express';
import Post from '../BusinessLogic/post/post';
const postRouter = express.Router();
const post = new Post()


postRouter.post('/createPost', async (req: any, res: any): Promise<object> => {
    try {
        return post.addPost(req, res);
    } catch (error) {
        return res.status(400).send({ error });
    }
})

postRouter.delete('/deletePost/:_id', async (req: any, res: any) => {
    try {
        post.deletePost(req, res)
    } catch (error) {
        return res.status(400).send({ error })
    }

})

postRouter.put('/editPost', async (req: any, res: any) => {
    try {
        post.editPost(req, res)
    } catch (error) {
        return res.status(400).send({ error })
    }

})

postRouter.get('/getOnePost/:_id', async (req: any, res: any) => {
    try {
        post.getOnePost(req, res)
    } catch (error) {
        return res.status(400).send({ error })
    }
})

postRouter.get('/getGroubOfPosts/:numberOfPosts', async (req: any, res: any) => {
    try {
        post.getGroubOfPosts(req, res)
    } catch (error) {
        return res.status(400).send({ error })
    }
})


export default postRouter;