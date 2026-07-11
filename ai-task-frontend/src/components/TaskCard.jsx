import { useState } from "react";
import taskService from "../services/taskService";

function TaskCard({ task, loadTasks }) {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);

  const handleDelete = async () => {
    await taskService.deleteTask(task.id);
    loadTasks();
  };

  const handleUpdate = async () => {
    try {
      await taskService.updateTask(task.id, {
        title,
        description,
      });

      setIsEditing(false);
      loadTasks();
    } catch (error) {
      console.error(error);
      alert("Update Failed");
    }
  };

  return (
    <div className="bg-white shadow-md rounded-xl p-5 border border-gray-200">

      {isEditing ? (
        <>
          <input
            className="w-full border p-2 rounded mb-3"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            className="w-full border p-2 rounded mb-3"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </>
      ) : (
        <>
          <h3 className="text-2xl font-semibold">
            {task.title}
          </h3>

          <p className="mt-2 text-gray-600">
            {task.description}
          </p>
          <p className="mt-2">
  Priority:
  <span className="ml-2 bg-red-100 text-red-600 px-2 py-1 rounded">
    {task.priority}
  </span>
</p>

<p className="mt-2">
  Status: {task.status}
</p>

<p className="mt-2">
  Due Date: {task.dueDate}
</p>
        </>
      )}

      <div className="flex gap-3 mt-4">

        {isEditing ? (
          <button
            onClick={handleUpdate}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg"
          >
            Save
          </button>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg"
          >
            Update
          </button>
        )}

        <button
          onClick={handleDelete}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
        >
          Delete
        </button>

      </div>
    </div>
  );
}

export default TaskCard;