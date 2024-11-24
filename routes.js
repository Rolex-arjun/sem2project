const express = require('express');
const { registerUser, loginUser } = require('../controllers/userController');
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);

module.exports = router;

//expenseroutes.js
const express = require('express');
const {
  createExpense,
  getExpenses,
  deleteExpense,
} = require('../controllers/expenseController');
const { protect } = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/', protect, createExpense);
router.get('/', protect, getExpenses);
router.delete('/:id', protect, deleteExpense);

module.exports = router;
