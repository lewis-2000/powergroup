import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  users: [
    { id: 1, name: "Alice Johnson", role: "admin" },
    { id: 2, name: "Bob Smith", role: "user" },
    { id: 3, name: "Charlie Davis", role: "user" },
    { id: 4, name: "Diana Evans", role: "user" },
  ],
  contributions: [
    { userId: 1, amount: 100, status: "Paid", date: "2025-03-01" },
    { userId: 1, amount: 150, status: "Paid", date: "2024-10-01" },
    { userId: 1, amount: 30, status: "Paid", date: "2024-10-01" },

    { userId: 2, amount: 50, status: "Unpaid", date: null },
    { userId: 3, amount: 75, status: "Paid", date: "2025-03-05" },
    { userId: 4, amount: 200, status: "Paid", date: "2025-03-08" },
    { userId: 3, amount: 150, status: "Paid", date: "2025-02-15" },
    { userId: 2, amount: 90, status: "Paid", date: "2025-01-20" },
    { userId: 5, amount: 90, status: "Paid", date: "2025-01-20" },
  ],
};

// Logged-in user
const loggedInUser = data.users[0]; // Assume the first user is logged in
const userContributions = data.contributions.filter(
  (c) => c.userId === loggedInUser.id
);

// Calculate global stats
const totalMembers = data.users.length;
const paidMembers = new Set(
  data.contributions.filter((c) => c.status === "Paid").map((c) => c.userId)
).size;
const activeMembers = paidMembers;
const pendingContributions = data.contributions
  .filter((c) => c.status === "Unpaid")
  .reduce((sum, c) => sum + c.amount, 0);

// Contributions by month
const contributionsByMonth: Record<string, number> = {};
const paidMembersByMonth: Record<string, number> = {};

data.contributions.forEach((c) => {
  if (!c.date) return;
  const month = new Date(c.date).toLocaleString("default", { month: "short" });

  contributionsByMonth[month] = (contributionsByMonth[month] || 0) + c.amount;
  if (c.status === "Paid") {
    paidMembersByMonth[month] = (paidMembersByMonth[month] || 0) + 1;
  }
});

// Chart Data
const chartData = {
  labels: Object.keys(contributionsByMonth),
  datasets: [
    {
      label: "Contributions",
      data: Object.values(contributionsByMonth),
      borderColor: "rgb(75, 192, 192)",
      fill: false,
    },
  ],
};

const Dashboard: React.FC = () => {
  return (
    <div className="p-6 space-y-6 bg-[#f2f4f5]">
      {/* Header Section */}
      <header className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">PowerGroup | LOGO</h1>
        <p className="text-gray-500">Empowering communities through unity.</p>
      </header>

      {/* Profile Section */}
      <div className="p-6 flex items-center gap-6">
        <div className="w-24 h-24 bg-gray-300 rounded-full flex items-center justify-center text-2xl font-bold text-gray-700">
          <img
            src="/defaultImage.png"
            alt="Profile"
            className="w-12 h-12 rounded-full"
          />
        </div>
        <div className="text-start">
          <h2 className="text-xl font-semibold">{loggedInUser.name}</h2>
          <p className="text-gray-600 capitalize">{loggedInUser.role}</p>
        </div>
      </div>

      {/* Logged-in User's Contributions */}
      <div className="bg-white shadow rounded-lg p-4">
        <h2 className="text-lg font-semibold mb-2">
          Your Contributions ({loggedInUser.name})
        </h2>
        <table className="w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-200 p-2">Amount</th>
              <th className="border border-gray-200 p-2">Status</th>
              <th className="border border-gray-200 p-2">Date</th>
            </tr>
          </thead>
          <tbody>
            {userContributions.map((c, index) => (
              <tr key={index} className="text-center">
                <td className="border border-gray-200 p-2">${c.amount}</td>
                <td
                  className={`border border-gray-200 p-2 ${
                    c.status === "Paid" ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {c.status}
                </td>
                <td className="border border-gray-200 p-2">
                  {c.date || "N/A"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Stats & Summary Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Chart */}
        <div className="col-span-2 bg-white shadow rounded-lg p-4">
          <h2 className="text-lg font-semibold mb-2">Analytics</h2>
          <Line data={chartData} />
        </div>

        {/* Extra Stats */}
        <div className="bg-white shadow rounded-lg p-4 text-center">
          <h2 className="text-lg font-semibold mb-2">Extra Stats</h2>
          <p className="text-[#3e4252] text-2xl font-bold">
            Total Members: {totalMembers}
          </p>
          <p className="text-[#3e4252] text-2xl font-bold">
            Active Members: {activeMembers}
          </p>
          <p className="text-[#3e4252] text-2xl font-bold">
            Pending Contributions: ${pendingContributions}
          </p>
        </div>
      </div>

      {/* All Users Contributions */}
      <div className="bg-white shadow rounded-lg p-4">
        <h2 className="text-lg font-semibold mb-2">All Users Contributions</h2>
        <table className="w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-200 p-2">Name</th>
              <th className="border border-gray-200 p-2">Amount</th>
              <th className="border border-gray-200 p-2">Status</th>
              <th className="border border-gray-200 p-2">Date</th>
            </tr>
          </thead>
          <tbody>
            {data.contributions.map((c, index) => {
              const contributor = data.users.find((u) => u.id === c.userId);
              return (
                <tr key={index} className="text-center">
                  <td className="border border-gray-200 p-2">
                    {contributor?.name || "Unknown"}
                  </td>
                  <td className="border border-gray-200 p-2">${c.amount}</td>
                  <td
                    className={`border border-gray-200 p-2 ${
                      c.status === "Paid" ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    {c.status}
                  </td>
                  <td className="border border-gray-200 p-2">
                    {c.date || "N/A"}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
