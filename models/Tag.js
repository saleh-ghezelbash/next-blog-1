import { Schema, model, models } from "mongoose";
// import URLSlug from "mongoose-slug-generator"

// mongoose.plugin(URLSlug);

const TagSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "The Tag title is required "],
      unique: true,
      trim: true,
      maxlength: [40, "title cannot be grater than 40 characters"],
    },
    slug: { type: String, slug: "title"}
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

TagSchema.pre("save", function(next) {
  this.slug = this.title.split(" ").join("-");
  next();
})

export default models.Tag || model("Tag", TagSchema);