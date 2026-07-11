import { useEffect, useState } from "react";
import CardExpense from "../components/CardExpense";
import { getExpenses } from "../services/expenseService";

function Expenses() {
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchExpenses();
  }, []);

  const fetchExpenses = async () => {
    try {
      const response = await getExpenses();

      console.log(JSON.stringify(response, null, 2));

      setExpenses(response);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  return (
    <div className="grid grid-cols-3 gap-5 p-5">
      {expenses.map((expense, index) => (
        <CardExpense key={index} expense={expense} />
      ))}
    </div>
  );
}

export default Expenses;
