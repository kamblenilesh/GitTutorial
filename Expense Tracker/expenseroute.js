const express = require('express');

const expenseController = require('../controllers/expensectr');

const router = express.Router();

// /admin/add-product => GET
router.post('/add-expense', expenseController.postAddExpense);

router.get('/get-expenses', expenseController.getAllExpenses);

router.delete('/delete-expense/:id', expenseController.postDeleteExpense);

module.exports = router;