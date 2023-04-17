const mongoose = require("mongoose");

const blogSchema = mongoose.Schema({
    authorName: {type :String, required: true},
    body: {type: String, required: true}
})

const BlogModel = mongoose.model("blog", blogSchema);

module.exports = BlogModel