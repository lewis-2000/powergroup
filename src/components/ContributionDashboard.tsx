/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";

const ContributionDashboard: React.FC<{ data: any }> = ({ data }) => {
  const [filter, setFilter] = useState("all");

  // Sample contribution data (Replace with real data later)
  const contributions = data?.contributions || [
    {
      id: 1,
      name: "Alice Johnson",
      amount: 100,
      status: "Paid",
      date: "2025-03-01",
    },
    { id: 2, name: "Bob Smith", amount: 50, status: "Unpaid", date: null },
    {
      id: 3,
      name: "Charlie Davis",
      amount: 75,
      status: "Paid",
      date: "2025-03-05",
    },
  ];

  // Filter contributions based on selection
  const filteredData = contributions.filter((c: any) =>
    filter === "all" ? true : c.status === filter
  );

  // Calculate total paid contributions
  const totalPaid = contributions
    .filter((c: any) => c.status === "Paid")
    .reduce((sum: any, c: any) => sum + c.amount, 0);

  return (
    <div className="p-6 bg-white shadow-md rounded-md">
      <h2 className="text-xl font-bold mb-4">Contribution Dashboard</h2>

      {/* Filter Dropdown */}
      <div className="mb-4">
        <label className="font-semibold">Filter by Status: </label>
        <select
          onChange={(e) => setFilter(e.target.value)}
          className="p-2 border rounded-md ml-2"
        >
          <option value="all">All</option>
          <option value="Paid">Paid</option>
          <option value="Unpaid">Unpaid</option>
        </select>
      </div>

      {/* Contribution Table */}
      <table className="w-full border-collapse border">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Name</th>
            <th className="border p-2">Amount</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Date</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.length > 0 ? (
            filteredData.map((c: any) => (
              <tr key={c.id} className="text-center">
                <td className="border p-2">{c.name}</td>
                <td className="border p-2">${c.amount}</td>
                <td
                  className={`border p-2 ${
                    c.status === "Paid" ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {c.status}
                </td>
                <td className="border p-2">{c.date || "-"}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4} className="p-4 text-center text-gray-500">
                No contributions found.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Summary Stats */}
      <div className="mt-4 p-4 bg-gray-100 rounded-md">
        <h3 className="font-semibold">Summary</h3>
        <p>
          Total Paid Contributions: <strong>${totalPaid}</strong>
        </p>
        <p>
          Total Entries: <strong>{contributions.length}</strong>
        </p>
      </div>
    </div>
  );
};

export default ContributionDashboard;
