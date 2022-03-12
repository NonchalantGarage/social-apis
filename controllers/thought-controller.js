const { Thought ,User } = require("../models");

const thoughtController = {
  // get all thoughts
  getAllThoughts(req, res) {
    Thought.find({})
      .then((dbThoughtData) => res.json(dbThoughtData))
      .catch((err) => {
        res.status(400).json(err);
      });
  },
  createThought({ params, body }, res) {
    Thought.create(body)
      .then(({ _id }) => {
        return User.findOneAndUpdate(
          { _id: params.userId },
          { $push: { thoughts: _id } },
          { new: true }
        );
      })
      .then((dbThoughtData) => {
        if (!dbThoughtData) {
          res.status(404).json({ message: "No user found with this id!" });
          return;
        }
        res.json(dbThoughtData);
      })
      .catch((err) => res.json(err));
  },
  deleteThought({ params }, res) {
    Thought.findOneAndDelete({ _id: params.thoughtId })
      .then((deletedThought) => {
        if (!deletedThought) {
          res.status(404).json({ message: "No thought with that thought id!" });
          return;
        }
        return User.findByIdAndUpdate(
            { _id: params.userId },
            { $pull: { thoughts: params.thoughtId } },
            { new: true }
        );
        })  
        .then((dbThoughtData) => {
            if (!dbThoughtData) {
              res.status(404).json({ message: "No pizza found with this Id!" });
              return;
            }
        res.json(dbThoughtData);
      })
      .catch((err) => {
        res.json(err);
      });
  },
};

module.exports = thoughtController;
