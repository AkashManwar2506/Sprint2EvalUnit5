const BlogRouter = require("express").Router()
const BlogModel = require("../models/blogModel")
const {auth} = require("../middleware/auth")

BlogRouter.post("/create", auth, async(req, res)=>{
    try {
        const {authorName, body} = req.body
        const {email, role}= req.payload;
        const newBlog = new BlogModel({authorName, body, email});
        await newBlog.save();
        res.send({msg: "Blog posted"})
    } catch (error) {
        res.status(500).send({msg: error.messgae})
    }
})

BlogRouter.get("/read", auth, async(req, res)=>{
    try {
        const Blogs = await BlogModel.find({});
        res.send(Blogs)
    } catch (error) {
        res.status(500).send({msg: error.messgae})
    }
})

BlogRouter.delete("/delete/:id", auth, async(req, res)=>{
    try {
        const {email, role}= req.payload;
        await BlogModel.deleteOne({_id: req.params.id, email});
        res.send({msg: "Blog Deleted"})
    } catch (error) {
        res.status(500).send({msg: error.messgae})
    }
})

BlogRouter.patch("/update/:id", auth, async(req, res)=>{
    try {
        const {email, role}= req.payload;
        await BlogModel.update({_id: req.params.id, email}, {$set: req.body});
        res.send({msg: "Blog Updated"})
    } catch (error) {
        res.status(500).send({msg: error.messgae})
    }
})


module.exports = {BlogRouter}
