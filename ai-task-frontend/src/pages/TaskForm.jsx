import { useState } from "react";
import taskService from "../services/taskService";

function TaskForm({ loadTasks }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("MEDIUM");
  const [status, setStatus] = useState("TODO");
  const [dueDate, setDueDate] = useState("");

  

  // Add Task
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await taskService.createTask({
        title,
        description,
        priority,
        status,
        dueDate,
      });

      loadTasks();

      setTitle("");
      setDescription("");
      setPriority("MEDIUM");
      setStatus("TODO");
      setDueDate("");

      alert("Task Created Successfully");

    } catch (error) {
    console.log(error);

    if (error.response) {
        console.log("Status:", error.response.status);
        console.log("Response:", error.response.data);
    } else {
        console.log("Message:", error.message);
    }

    alert("AI Generation Failed");
}
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-lg rounded-xl p-6"
    >
      {/* Task Title */}
      <input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full border border-gray-300 rounded-lg p-3 mb-4"
      />

      {/* Description */}
      <textarea
        placeholder="Task Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full border border-gray-300 rounded-lg p-3 mb-4 h-32"
      />

      {/* Buttons */}
      <div className="flex gap-3 mb-4">
       <button
  type="button"
  onClick={handleGenerateAI}
  className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-3 rounded-lg"
>
  🤖 Generate with AI
</button>

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg"
        >
          Add Task
        </button>
      </div>

      {/* Priority */}
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        className="w-full border rounded-lg p-3 mb-4"
      >
        <option value="LOW">LOW</option>
        <option value="MEDIUM">MEDIUM</option>
        <option value="HIGH">HIGH</option>
      </select>

      {/* Due Date */}
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        className="w-full border rounded-lg p-3 mb-4"
      />

      {/* Status */}
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="w-full border rounded-lg p-3 mb-4"
      >
        <option value="TODO">TODO</option>
        <option value="IN_PROGRESS">IN_PROGRESS</option>
        <option value="DONE">DONE</option>
      </select>
    </form>
  );
}

export default TaskForm;