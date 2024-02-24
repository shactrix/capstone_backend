const router = require('express').Router()
const { postControllers } = require('../controllers')

router.get('/', postControllers.getPost)
router.post('/', postControllers.createPost)
router.put('/:id', postControllers.editPost)
router.delete('/:id', postControllers.deletePost)

module.exports = router;