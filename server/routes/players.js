const express = require('express');
const router = express.Router();

// @route   GET /api/players
// @desc    Get all players
// @access  Public
router.get('/', (req, res) => {
  res.json({ message: 'Get all players endpoint' });
});

// @route   POST /api/players
// @desc    Create a new player
// @access  Public
router.post('/', (req, res) => {
  res.json({ message: 'Create new player endpoint' });
});

// @route   GET /api/players/:id
// @desc    Get player by ID
// @access  Public
router.get('/:id', (req, res) => {
  res.json({ message: `Get player ${req.params.id} endpoint` });
});

// @route   PUT /api/players/:id
// @desc    Update player by ID
// @access  Public
router.put('/:id', (req, res) => {
  res.json({ message: `Update player ${req.params.id} endpoint` });
});

// @route   DELETE /api/players/:id
// @desc    Delete player by ID
// @access  Public
router.delete('/:id', (req, res) => {
  res.json({ message: `Delete player ${req.params.id} endpoint` });
});

module.exports = router;