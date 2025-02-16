import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { Container } from "react-bootstrap";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#FF4563", "#7D3C98"];

export default function ExpenseChart({ transactions }) {
  const data = transactions.reduce((acc, t) => {
    const existing = acc.find((d) => d.name === t.category);
    if (existing) existing.value += t.amount;
    else acc.push({ name: t.category, value: t.amount });
    return acc;
  }, []);

  return (
    <Container className="p-4 mt-3 border rounded shadow bg-white">
      <h3 className="mb-3">Category-wise Expenses</h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie data={data} cx="50%" cy="50%" labelLine={false} label={({ name }) => name}
            outerRadius={120} dataKey="value">
            {data.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </Container>
  );
}
