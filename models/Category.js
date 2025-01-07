import mongoose, { Schema, model, models } from "mongoose";
// var URLSlug = require("mongoose-slug-generator");
import URLSlug from "mongoose-slug-generator"

mongoose.plugin(URLSlug);

const CategorySchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "The Category title is required "],
      unique: true,
      trim: true,
      maxlength: [40, "title cannot be grater than 40 characters"],
    },
    posts: [{type: Schema.Types.ObjectId, ref: "Post"}],
    slug: { type: String, unique: true, slug: "title" }
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

CategorySchema.pre("save", function (next) {
  this.slug = this.title.split(" ").join("-");
  next();
})

export default models.Category || model("Category", CategorySchema);