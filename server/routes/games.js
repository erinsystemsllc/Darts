const express = require('express');
const router = express.Router();

// @route   GET /api/games
// @desc    Get all games
// @access  Public
router.get('/', (req, res) => {
  res.json({ message: 'Get all games endpoint' });
});

// @route   POST /api/games
// @desc    Create a new game
// @access  Public
router.post('/', (req, res) => {
  res.json({ message: 'Create new game endpoint' });
});

// @route   GET /api/games/:id
// @desc    Get game by ID
// @access  Public
router.get('/:id', (req, res) => {
  res.json({ message: `Get game ${req.params.id} endpoint` });
});

// @route   PUT /api/games/:id
// @desc    Update game by ID
// @access  Public
router.put('/:id', (req, res) => {
  res.json({ message: `Update game ${req.params.id} endpoint` });
});

// @route   DELETE /api/games/:id
// @desc    Delete game by ID
// @access  Public
router.delete('/:id', (req, res) => {
  res.json({ message: `Delete game ${req.params.id} endpoint` });
});

module.exports = router;