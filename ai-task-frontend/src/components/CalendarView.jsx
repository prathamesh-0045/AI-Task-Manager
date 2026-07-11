import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function CalendarView({ tasks }) {
  const [date, setDate] = useState(new Date());

  const selectedDate = date.toISOString().split("T")[0];

  const todaysTasks = tasks.filter(
    (task) => task.dueDate === selectedDate
  );

  return (
    <div className="bg-white rounded-xl shadow p-5 mb-8">

      <h2 className="text-2xl font-bold mb-4">
        Calendar
      </h2>

      <Calendar
        onChange={setDate}
        value={date}
      />

      <div className="mt-5">

        <h3 className="font-semibold mb-3">
          Tasks on {selectedDate}
        </h3>

        {todaysTasks.length === 0 ? (
          <p>No Tasks</p>
        ) : (
          todaysTasks.map((task) => (
            <div
              key={task.id}
              className="border rounded p-3 mb-2"
            >
              <h4 className="font-bold">
                {task.title}
              </h4>

              <p>{task.description}</p>

              <p>
                Priority :
                <span className="font-bold">
                  {" "}
                  {task.priority}
                </span>
              </p>

              <p>
                Status :
                <span className="font-bold">
                  {" "}
                  {task.status}
                </span>
              </p>
            </div>
          ))
        )}

      </div>

    </div>
  );
}

export default CalendarView;