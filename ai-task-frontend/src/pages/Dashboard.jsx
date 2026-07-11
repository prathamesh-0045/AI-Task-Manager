import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import taskService from "../services/taskService";

import Navbar from "../components/Navbar";
import StatsCards from "../components/StatsCards";
import SearchBar from "../components/SearchBar";
import FilterBar from "../components/FilterBar";
import Charts from "../components/Charts";
import CalendarView from "../components/CalendarView";
import DarkModeToggle from "../components/DarkModeToggle";
import TaskCard from "../components/TaskCard";

import TaskForm from "./TaskForm";

function Dashboard() {
  const navigate = useNavigate();

  // =======================
  // States
  // =======================

  const [tasks, setTasks] = useState([]);

  const [search, setSearch] = useState("");

  const [statusFilter, setStatusFilter] = useState("");

  const [priorityFilter, setPriorityFilter] = useState("");

  // =======================
  // Load Tasks
  // =======================
const loadTasks = async () => {

    try {

        const data = await taskService.getTasks();

        setTasks(data);

    } catch (error) {
    console.log("Full Error:", error);

    if (error.response) {
        console.log("Status:", error.response.status);
        console.log("Data:", error.response.data);
    }

    alert("AI Generation Failed");
}

};


  useEffect(() => {
    loadTasks();
  }, []);

  // =======================
  // Dashboard Statistics
  // =======================

  const totalTasks = tasks.length;

  const completedTasks = tasks.filter(
    (task) => task.status === "DONE"
  ).length;

  const pendingTasks = tasks.filter(
    (task) => task.status !== "DONE"
  ).length;

  const highPriorityTasks = tasks.filter(
    (task) => task.priority === "HIGH"
  ).length;

  // =======================
  // Search + Filter
  // =======================

  const filteredTasks = tasks.filter((task) => {
    const searchMatch =
      task.title.toLowerCase().includes(search.toLowerCase()) ||
      task.description.toLowerCase().includes(search.toLowerCase());

    const statusMatch =
      statusFilter === "" ||
      task.status === statusFilter;

    const priorityMatch =
      priorityFilter === "" ||
      task.priority === priorityFilter;

    return searchMatch && statusMatch && priorityMatch;
  });

  // =======================
  // Logout
  // =======================

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  // =======================
  // UI
  // =======================

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Navbar */}

      <Navbar logout={logout} />

      <div className="max-w-7xl mx-auto p-6">

        {/* Dark Mode */}

        <div className="flex justify-end mb-6">
          <DarkModeToggle />
        </div>

        {/* Statistics */}

        <StatsCards
          total={totalTasks}
          completed={completedTasks}
          pending={pendingTasks}
          high={highPriorityTasks}
        />

        {/* Charts */}

        <div className="my-8">
          <Charts tasks={tasks} />
        </div>

        {/* Calendar */}

        <div className="my-8">
          <CalendarView tasks={tasks} />
        </div>

        {/* Search */}

        <div className="mb-5">
          <SearchBar
            search={search}
            setSearch={setSearch}
          />
        </div>

        {/* Filter */}

        <div className="mb-6">
          <FilterBar
            statusFilter={statusFilter}
            setStatusFilter={setStatusFilter}
            priorityFilter={priorityFilter}
            setPriorityFilter={setPriorityFilter}
          />
        </div>

        {/* Task Form */}

        <div className="mb-8">
          <TaskForm loadTasks={loadTasks} />
        </div>

        {/* Task Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {filteredTasks.length > 0 ? (

            filteredTasks.map((task) => (
              <TaskCard
                key={task.id}
                task={task}
                loadTasks={loadTasks}
              />
            ))

          ) : (

            <div className="col-span-full text-center py-10">

              <h2 className="text-2xl font-bold text-gray-600">
                No Tasks Found
              </h2>

              <p className="text-gray-500 mt-2">
                Try changing the search or filter.
              </p>

            </div>

          )}

        </div>

      </div>
    </div>
  );
}

export default Dashboard;