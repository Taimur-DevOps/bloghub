// Mongoose model to define the structure of the blog posts in the database.

const blogSchema = new mongoose.Schema(
    {
      title: {
        type: String,
        required: [true, "Blog title is required"],
        maxlength: [200, "Title cannot exceed 200 characters"],
      },
      description: {
        type: String,
        required: [true, "Blog description is required"],
        minlength: [20, "Description should be at least 20 characters"],
      },
      content: {
        type: String,
        required: [true, "Blog content is required"],
      },
      image: {
        type: String,
        required: [true, "Blog image is required"],
      },
      author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: [true, "Author is required"],
      },
      category: {
        type: String,
        enum: ["tech", "business", "sports", "health", "education"],
        required: [true, "Blog category is required"],
      },
      isTrending: {
        type: Boolean,
        default: false,
      },
      views: {
        type: Number,
        default: 0,
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
    },
    {
      timestamps: true, // Adds createdAt and updatedAt automatically
    }
  );
  
  export default mongoose.models.Blog || mongoose.model("Blog", blogSchema);
  