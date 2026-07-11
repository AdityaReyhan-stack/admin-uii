import MainLayout from "../components/Layouts/MainLayout";

import CardBalance from "../components/Fragments/CardBalance";
import CardGoal from "../components/Fragments/CardGoal";
import CardUpcomingBill from "../components/Fragments/CardUpcomingBill";
import CardRecentTransaction from "../components/Fragments/CardRecentTransaction";
import CardStatistic from "../components/Fragments/CardStatistic";
import CardExpenseBreakdown from "../components/Fragments/CardExpenseBreakdown";
import { useEffect, useState } from "react";
import { getExpenses } from "../services/expenseService";
import { getBills } from "../services/billService";

import {
  transactions,
  expensesBreakdowns,
  bills,
  balances,
  goals,
  expensesStatistics,
} from "../data";

function Dashboard() {
  const [expenses, setExpenses] = useState(expensesBreakdowns);
  const [loading, setLoading] = useState(true);
  const [billsData, setBillsData] = useState([]);

  useEffect(() => {
    fetchExpenses();
    fetchBills();
  }, []);

  const fetchExpenses = async () => {
    try {
      const response = await getExpenses();

      console.log(response); // nanti kita lihat isi API di sini

      // sementara masih pakai data dummy
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const fetchBills = async () => {
    try {
      const response = await getBills();

      console.log("RESPONSE =", response);
      console.log("RESPONSE.DATA =", response.data);

      setBillsData(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  console.log("STATE billsData =", billsData);

  return (
    <MainLayout>
      <div className="grid sm:grid-cols-12 gap-6">
        <div className="sm:col-span-4">
          <CardBalance data={balances} />
        </div>

        <div className="sm:col-span-4">
          <CardGoal data={goals} />
        </div>

        <div className="sm:col-span-4">
          <CardUpcomingBill data={billsData} />
        </div>

        <div className="sm:col-span-4 sm:row-span-2">
          <CardRecentTransaction data={transactions} />
        </div>

        <div className="sm:col-span-8">
          <CardStatistic data={expensesStatistics} />
        </div>

        <div className="sm:col-span-8">
          <CardExpenseBreakdown data={expenses} />
        </div>
      </div>
    </MainLayout>
  );
}
export default Dashboard;
