// routes/articles.js
// In the create and update article routes, include the image field
router.post('/', [auth, [
  check('title', 'Title is required').not().isEmpty(),
  check('summary', 'Summary is required').not().isEmpty(),
  check('content', 'Content is required').not().isEmpty(),
  check('image', 'Image URL is required').not().isEmpty() // Add this validation
]], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { title, summary, content, image } = req.body; // Include image
  try {
    const newArticle = new Article({
      title,
      summary,
      content,
      image, // Include image
      author: req.user.id
    });
    const article = await newArticle.save();
    res.json(article);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});
