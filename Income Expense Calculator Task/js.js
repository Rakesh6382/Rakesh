const form = document.getElementById('entry-form');
    const description = document.getElementById('description');
    const amount = document.getElementById('amount');
    const type = document.getElementById('type');
    const entryList = document.getElementById('entry-list');
    const totalIncome = document.getElementById('total-income');
    const totalExpense = document.getElementById('total-expense');
    const balance = document.getElementById('balance');
    const filters = document.getElementsByName('filter');

    let entries = JSON.parse(localStorage.getItem('entries')) || [];
    let editingId = null;

    function saveEntries() {
      localStorage.setItem('entries', JSON.stringify(entries));
    }

    function updateSummary() {
      const income = entries.filter(e => e.type === 'income').reduce((acc, e) => acc + e.amount, 0);
      const expense = entries.filter(e => e.type === 'expense').reduce((acc, e) => acc + e.amount, 0);
      totalIncome.textContent = income;
      totalExpense.textContent = expense;
      balance.textContent = income - expense;
    }

    function renderEntries(filter = 'all') {
      entryList.innerHTML = '';
      entries.filter(e => filter === 'all' || e.type === filter).forEach((entry, index) => {
        const li = document.createElement('li');
        li.className = 'flex justify-between items-center bg-gray-200 p-2 rounded';
        li.innerHTML = `
          <span>${entry.description} - ₹${entry.amount} (${entry.type})</span>
          <span>
            <button class="edit bg-yellow-400 px-2 py-1 rounded text-white mr-1" onclick="editEntry(${index})">Edit</button>
            <button class="delete bg-red-500 px-2 py-1 rounded text-white" onclick="deleteEntry(${index})">Delete</button>
          </span>`;
        entryList.appendChild(li);
      });
      updateSummary();
    }

    function addOrUpdateEntry(e) {
      e.preventDefault();
      const newEntry = {
        description: description.value,
        amount: parseFloat(amount.value),
        type: type.value
      };
      if (editingId !== null) {
        entries[editingId] = newEntry;
        editingId = null;
      } else {
        entries.push(newEntry);
      }
      saveEntries();
      form.reset();
      renderEntries(getSelectedFilter());
    }

    function editEntry(index) {
      const entry = entries[index];
      description.value = entry.description;
      amount.value = entry.amount;
      type.value = entry.type;
      editingId = index;
    }

    function deleteEntry(index) {
      if (confirm('Delete this entry?')) {
        entries.splice(index, 1);
        saveEntries();
        renderEntries(getSelectedFilter());
      }
    }

    function getSelectedFilter() {
      return [...filters].find(r => r.checked).value;
    }

    filters.forEach(filter => filter.addEventListener('change', () => renderEntries(getSelectedFilter())));
    form.addEventListener('submit', addOrUpdateEntry);

    renderEntries();