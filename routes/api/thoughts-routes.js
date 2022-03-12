const router = require('express').Router();

const {
    getAllThoughts,
    createThought,
    deleteThought,
} = require('../../controllers/thought-controller');

router.route('/').get(getAllThoughts)
router.route('/:userId').post(createThought)

router.route('/:userId/:thoughtId').delete(deleteThought);

module.exports = router;