/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  let totalSpentByCategory = [];

  transactions.map((txn) => {
    let category = txn['category'];
    let price = txn['price'];
    let entry = totalSpentByCategory.find((tn) => tn['category'] == category);
    if (entry) {
      entry['totalSpent'] += price;
    } else {
      totalSpentByCategory.push({ category, totalSpent: price });
    }
  });
  return totalSpentByCategory;
}

module.exports = calculateTotalSpentByCategory;
