import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { month_name: "Mar", earned: 30, spent: 34 },
  { month_name: "Apr", earned: 15, spent: 18 },
  { month_name: "May", earned: 57, spent: 62 },
  { month_name: "June", earned: 50, spent: 41 },
  { month_name: "Jul", earned: 48, spent: 55 },
  { month_name: "Aug", earned: 8, spent: 10 },
];

const Chart = () => {
  const startValue = 20;
  const increment = 10;

  const maxValue = Math.max(
    ...data.map((item) => Math.max(item.earned, item.spent))
  );

  const ticks = [];
  for (let i = startValue; i <= maxValue; i += increment) {
    ticks.push(i);
  }
  const formatYAxisValue = (value) => `$${value}`;
  return (
    <>
      <div className="hidden sm:block">
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={data} margin={{ top: 5, right: 10 }}>
            <CartesianGrid
              vertical={false}
              strokeDasharray="1  1"
              stroke="#d0d0d0"
              strokeWidth={1}
            />
            <XAxis
              dataKey="month_name"
              tick={{ stroke: "gray", strokeWidth: 1 }}
              tickLine={false}
            />
            <YAxis
              domain={[startValue, "auto"]} // Set domain to start at 20 and extend automatically
              tickFormatter={formatYAxisValue}
              ticks={ticks} // Set custom tick values
              tick={{ stroke: "gray", strokeWidth: 0 }}
              axisLine={false}
              tickLine={false}
            />
            <Legend iconType="circle" />
            <Bar dataKey="earned" name="Earned" fill="#174691" barSize={20} />
            <Bar dataKey="spent" name="Spent" fill="#ffffff" barSize={20} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="sm:hidden">
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={data} margin={{ top: 5, right: 10 }}>
            <CartesianGrid
              vertical={false}
              strokeDasharray="1  1"
              stroke="#d0d0d0"
              strokeWidth={1}
            />
            <XAxis
              dataKey="month_name"
              tick={{ stroke: "gray", strokeWidth: 1 }}
              tickLine={false}
            />
            <YAxis
              domain={[startValue, "auto"]} // Set domain to start at 20 and extend automatically
              tickFormatter={formatYAxisValue}
              ticks={ticks} // Set custom tick values
              tick={{ stroke: "gray", strokeWidth: 0 }}
              axisLine={false}
              tickLine={false}
            />
            <Legend iconType="circle" />
            <Bar dataKey="earned" name="Earned" fill="#174691" barSize={10} />
            <Bar dataKey="spent" name="Spent" fill="#ffffff" barSize={10} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default Chart;
