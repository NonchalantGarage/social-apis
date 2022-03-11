const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  username: {
    type: String,
    unique: [true, "Username must be unique"],
    required: "Username is required",
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: [true, "Email must be unique"],
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
  },
  thoughts: [
    {
      type : Schema.Types.ObjectId,
      ref: "Thought"  
    }],
  friends: [
    {
      type : Schema.Types.ObjectId,
      ref: "User"  
    }],
},
{
  toJSON:{
    virtuals: true,

  },
});

UserSchema.virtual("friendCount").get(function(){
  return this.friends.length;
})

const User = model("User", UserSchema);

module.exports = User