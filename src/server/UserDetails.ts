// Import mongoose and bcrypt
mongoose = require("mongoose");
bcrypt = require("bcrypt");

const saltRounds = 10; // Number of salt rounds for bcrypt

// Define the Movie sub-schema
const MovieSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  title: { type: String, required: true },
  releaseDate: { type: String, required: true },
  language: { type: String, required: true },
  overview: { type: String, required: true },
  imageUrl: { type: String, required: true },
  backUrl: { type: String, required: true },
});

// Define the UserDetail schema with favouriteList as an array of type Movie
const UserDetailSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    password: { type: String, required: true },
    picUrl: { type: String },
    favourites: { type: [MovieSchema], default: [] }, // Array of type MovieSchema
  },
  {
    collection: "users",
  }
);

// Pre-save middleware to hash the password before saving to the database
UserDetailSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next(); // Skip hashing if password is not modified
  }

  try {
    // Generate a salt
    const salt = await bcrypt.genSalt(saltRounds);

    // Hash the password with the salt
    const hashedPassword = await bcrypt.hash(this.password, salt);

    // Replace the plaintext password with the hashed password
    this.password = hashedPassword;
    next();
  } catch (error) {
    next(error);
  }
});

// Create the users model
const users = mongoose.model("users", UserDetailSchema);

module.exports = users;
