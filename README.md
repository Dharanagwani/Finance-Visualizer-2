
# **Personal Finance Visualizer (Stage 2: Categories)**
🚀 **A simple web application for tracking personal finances with category-wise insights.**  

## **📌 Features**
✔ **Add/Edit/Delete Transactions** (Amount, Date, Description)  
✔ **Transaction List View**  
✔ **Monthly Expenses Bar Chart** (Recharts)  
✔ **Predefined Categories for Transactions** (Food, Transport, Shopping, etc.)  
✔ **Category-wise Pie Chart** for expense distribution  
✔ **Dashboard with Summary Cards**:  
   - ✅ **Total Expenses**  
   - ✅ **Category Breakdown**  
   - ✅ **Most Recent Transactions**  

---

## **📂 Tech Stack**
- **Frontend:** React, Bootstrap, Recharts  
- **State Management:** React Hooks (`useState`)  
- **CSS Framework:** Bootstrap  

---

## **📌 Installation Guide**
### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/your-username/personal-finance-visualizer.git
cd personal-finance-visualizer
```

### **2️⃣ Install Dependencies**
```sh
npm install
```

### **3️⃣ Start the Application**
```sh
npm start
```
The app will be available at **`http://localhost:3000`**.

---

## **📂 Project Structure**
```
📦 personal-finance-visualizer
 ┣ 📂 src
 ┃ ┣ 📂 components
 ┃ ┃ ┣ 📜 TransactionForm.js   # Add transactions with categories
 ┃ ┃ ┣ 📜 TransactionList.js   # List transactions with categories
 ┃ ┃ ┣ 📜 ExpenseChart.js      # Monthly expenses bar chart & category pie chart
 ┃ ┃ ┣ 📜 Dashboard.js         # Summary cards (Total expenses, Category breakdown)
 ┃ ┣ 📜 App.js                 # Main application
 ┃ ┣ 📜 index.js               # Entry point
 ┣ 📜 package.json
 ┣ 📜 README.md
```

---

## **📌 Usage**
1. **Add Transactions:** Enter amount, description, date, and category, then click "Add Transaction."  
2. **View Transactions:** See your transaction history categorized by type.  
3. **Delete Transactions:** Click "Delete" to remove a transaction.  
4. **View Expenses Chart:**  
   - **Bar Chart** shows monthly expenses.  
   - **Pie Chart** visualizes category-wise expense breakdown.  
5. **Dashboard Insights:**  
   - **Total Expenses:** Sum of all transactions.  
   - **Category Breakdown:** Overview of expenses per category.  
   - **Most Recent Transaction:** Last added transaction.  

---

