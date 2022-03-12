const router = require('express').Router();

const {
    getAllThoughts,
    createThought,
    deleteThought,
    updateThought,
    removeReaction,
    addReaction,
} = require('../../controllers/thought-controller');

router.route('/').get(getAllThoughts)
router.route('/:userId').post(createThought)

router.route('/:userId/:thoughtId').delete(deleteThought).put(updateThought);

router.route('/:thoughtId/reactions').post(addReaction);
router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);


module.exports = router;