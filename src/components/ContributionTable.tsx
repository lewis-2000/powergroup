import React, { useState } from "react";

type ContributionData = {
  name?: string;
  position?: string;
  hours?: number;
  salary?: number;
  contribution?: number;
  total?: number;
};

type ContributionTableProps = {
  data?: ContributionData;
};

const ContributionTable: React.FC<ContributionTableProps> = ({ data = {} }) => {
  const [filter, setFilter] = useState("all");

  // Default values if data is missing
  const name = data.name || "Unknown";
  const position = data.position || "Not specified";
  const hours = data.hours ?? 0;
  const salary = data.salary ?? 0;
  const contribution = data.contribution ?? 0;
  const total = data.total ?? 0;
  const status = contribution > 0 ? "Paid" : "Unpaid";

  // Contribution data
  const contributions = [
    {
      id: 1,
      name,
      amount: total,
      status,
      date: contribution > 0 ? "2025-03-10" : null,
    },
  ];

  // Filtering logic
  const filteredData = contributions.filter((c) =>
    filter === "all" ? true : c.status === filter
  );

  return (
    <div className="p-4">
      {/* Filter Dropdown */}
      <div className="mb-4">
        <select
          onChange={(e) => setFilter(e.target.value)}
          className="p-2 border"
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
          {filteredData.map((c) => (
            <tr key={c.id} className="text-center">
              <td className="border p-2">{c.name}</td>
              <td className="border p-2">${c.amount.toFixed(2)}</td>
              <td
                className={`border p-2 ${
                  c.status === "Paid" ? "text-green-500" : "text-red-500"
                }`}
              >
                {c.status}
              </td>
              <td className="border p-2">{c.date || "-"}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Employee Info */}
      <div className="mt-4">
        <h2 className="text-xl">Employee Information</h2>
        <p>Name: {name}</p>
        <p>Position: {position}</p>
        <p>Hours: {hours}</p>
        <p>Salary: ${salary.toLocaleString()}</p>
        <p>Contribution Percentage: {contribution * 100}%</p>
        <p>Total Contributions: ${total.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default ContributionTable;
