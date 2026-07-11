import HomeIcon from "@mui/icons-material/Home";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

function CardExpense({ expense }) {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <div className="flex justify-between items-center p-4 border-b">
        <div className="flex gap-3">
          <div className="bg-gray-100 rounded-lg p-2">
            <HomeIcon fontSize="small" />
          </div>

          <div>
            <h3 className="font-semibold capitalize">{expense.category}</h3>

            <h2 className="text-xl font-bold">${expense.amount}</h2>

            <div className="flex items-center text-sm mt-1">
              {expense.trend === "up" ? (
                <ArrowUpwardIcon fontSize="small" className="text-red-500" />
              ) : (
                <ArrowDownwardIcon
                  fontSize="small"
                  className="text-green-500"
                />
              )}

              <span className="ml-1">{expense.percentage}%</span>
            </div>
          </div>
        </div>

        <div className="text-xs text-gray-500">Compare to last month</div>
      </div>

      <div>
        {expense.detail?.map((item, index) => (
          <div
            key={index}
            className="flex justify-between border-b last:border-none p-4"
          >
            <div>
              <h4 className="font-medium">{item.item}</h4>

              <p className="text-xs text-gray-400">{item.date}</p>
            </div>

            <div className="font-semibold">${item.amount}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardExpense;
