import mongoose, { Schema, model, models } from "mongoose";
// var URLSlug = require("mongoose-slug-generator");
import URLSlug from "mongoose-slug-generator"

mongoose.plugin(URLSlug);

const PostSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "The Post title is required "],
      unique: true,
      trim: true,
      maxlength: [40, "title cannot be grater than 100 characters"],
    },
    body: {
      type: String,
      required: [true, "The Post body is required "],
      trim: true,
    },
    slug: { type: String, unique: true, slug: "title" },
    category: {type: mongoose.Types.ObjectId, ref: "Category"}
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

PostSchema.pre("save", function (next) {
  this.slug = this.title.split(" ").join("-");
  next();
})

export default models.Post || model("Post", PostSchema);