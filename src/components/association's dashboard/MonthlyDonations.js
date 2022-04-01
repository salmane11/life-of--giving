import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

function MonthlyDonations() {
  const monthlydonations = [
    { name: "January", uv: 0, pv: 2400, amt: 2400 },
    { name: "February", uv: 20, pv: 2400, amt: 2400 },
    { name: "March", uv: 60, pv: 2400, amt: 2400 },
    { name: "April", uv: 150, pv: 2400, amt: 2400 },
    { name: "Mai", uv: 130, pv: 2400, amt: 2400 },
    { name: "June", uv: 200, pv: 2400, amt: 2400 },
    { name: "July", uv: 250, pv: 2400, amt: 2400 },
    { name: "August", uv: 300, pv: 2400, amt: 2400 },
    { name: "september", uv: 450, pv: 2400, amt: 2400 },
    { name: "November", uv: 100, pv: 2400, amt: 2400 },
    { name: "October", uv: 90, pv: 2400, amt: 2400 },
    { name: "December", uv: 13, pv: 2400, amt: 2400 },
  ];
  return (
    <ResponsiveContainer width="100%" height={200}>
      <LineChart
        data={monthlydonations}
        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
      >
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="name" />
        <YAxis />
      </LineChart>
    </ResponsiveContainer>
  );
}
export default MonthlyDonations;
