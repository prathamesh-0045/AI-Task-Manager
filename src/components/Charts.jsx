import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";

import { Pie, Bar } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement
);

function Charts({ tasks }) {
  const statusData = {
    labels: ["TODO", "IN_PROGRESS", "DONE"],
    datasets: [
      {
        data: [
          tasks.filter((t) => t.status === "TODO").length,
          tasks.filter((t) => t.status === "IN_PROGRESS").length,
          tasks.filter((t) => t.status === "DONE").length,
        ],
        backgroundColor: [
          "#f59e0b",
          "#3b82f6",
          "#10b981",
        ],
      },
    ],
  };

  const priorityData = {
    labels: ["HIGH", "MEDIUM", "LOW"],
    datasets: [
      {
        label: "Tasks",
        data: [
          tasks.filter((t) => t.priority === "HIGH").length,
          tasks.filter((t) => t.priority === "MEDIUM").length,
          tasks.filter((t) => t.priority === "LOW").length,
        ],
        backgroundColor: [
          "#ef4444",
          "#f59e0b",
          "#10b981",
        ],
      },
    ],
  };

  return (
    <div className="grid md:grid-cols-2 gap-6 mb-8">

      <div className="bg-white p-5 rounded-xl shadow">
        <h2 className="text-xl font-bold mb-4">
          Task Status
        </h2>

        <Pie data={statusData} />
      </div>

      <div className="bg-white p-5 rounded-xl shadow">
        <h2 className="text-xl font-bold mb-4">
          Priority
        </h2>

        <Bar data={priorityData} />
      </div>

    </div>
  );
}

export default Charts;