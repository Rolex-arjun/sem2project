// Get elements from the DOM
const form = document.getElementById('expense-form');
const titleInput = document.getElementById('title');
const amountInput = document.getElementById('amount');
const categoryInput = document.getElementById('category');
const expenseList = document.getElementById('expense-list');
const totalExpenses = document.getElementById('total-expenses');

// Expense data
let expenses = [];

// Add expense
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const title = titleInput.value;
  const amount = parseFloat(amountInput.value);
  const category = categoryInput.value;

  if (!title || !amount || !category) return alert('Please fill in all fields.');

  const expense = { id: Date.now(), title, amount, category };
  expenses.push(expense);

  // Clear form inputs
  titleInput.value = '';
  amountInput.value = '';
  categoryInput.value = '';

  // Update UI
  renderExpenses();
  updateTotal();
});

// Render expenses
function renderExpenses() {
  expenseList.innerHTML = '';

  expenses.forEach((expense) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <span>${expense.title} - $${expense.amount} (${expense.category})</span>
      <span class="delete-btn" onclick="deleteExpense(${expense.id})">X</span>
    `;
    expenseList.appendChild(li);
  });
}

// Delete expense
function deleteExpense(id) {
  expenses = expenses.filter((expense) => expense.id !== id);
  renderExpenses();
  updateTotal();
}

// Update total expenses
function updateTotal() {
  const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  totalExpenses.textContent = `Total Expenses: $${total.toFixed(2)}`;
}
