const router = require('express').Router();
const {Post} = require('../../models');
const withAuth = require('../../utils/auth');

// Create a new blog post
router.post('/', withAuth, async (req, res) => {
    try {
      const newPost = await Post.create({
        ...req.body,
        user_id: req.session.user_id,
      });
  
      res.status(200).json(newPost);
    } catch (err) {
      res.status(400).json(err);
    }
  });

// Update a blog post by its ID
router.put('/:id', withAuth, async (req, res) => {
    try {
      const updatePost = await Post.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
      if (!updatePost) {
        res.status(404).json({ message: 'No blog post found with that id' });
        return;
      }
      res.status(200).json(updatePost);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  // Delete a blog post by its ID
  router.delete('/:id', withAuth, async (req, res) => {
    try {
      const deletePost = await Project.destroy({
        where: {
          id: req.params.id,
        },
      });
  
      if (!deletePost) {
        res.status(404).json({ message: 'No blog post found with that id' });
        return;
      }
  
      res.status(200).json(deletePost);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  module.exports = router;