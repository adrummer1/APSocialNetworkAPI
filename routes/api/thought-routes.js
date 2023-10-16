const router = require('express').Router();

const {
    getThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction,
} = require('../../controllers/thought-control');

// Route fot getting and posting thoughts
router.route('/').get(getThoughts).post(createThought);

// Route for getting and updating single thoughts by thought ID
router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);

// Route posting new reaction based on thought ID
router.route('/:thoughtId/reactions').post(addReaction);

// Route for deleting reaction based on thought ID
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

module.exports = router;