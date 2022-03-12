const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const reactionSchema = new Schema({
  reactionId: {
    type: Schema.Types.ObjectId,
    // default: new Types.ObjectId()
  },
  reactionBody: {
    type: String,
    require: true,
    maxLength: 280,
  },
  username: {
    type: String,
    require: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (createdAtVal) => dateFormat(createdAtVal),
  },
});

const ThoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: "Text is required",
      min: 1,
      max: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtVal) => dateFormat(createdAtVal),
    },
    username: 
      {
        type: String,
        required: "Enter a username!"
      },
  
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

const Thought = model("Thought", ThoughtSchema);

reactionSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

module.exports = Thought;
