import React from "react";
import { useState, useEffect } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import db from "../../../utils/firebase";

export default function ColumnsComponent({ id }) {
  const [boardsTasks, setBoardsTasks] = useState(null);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, `boards/${id}/tasks`),
      (snapshot) => {
        setBoardsTasks(
          snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        );
      }
    );

    return unsubscribe;
  }, []);
  console.log(boardsTasks);
  return boardsTasks ? (
    <div className="flex gap-10 h-96 w-full">
      <section className="flex items-center justify-around flex-col h-full gap-4 w-1/4">
        <h4 className="bg-gray-200 rounded-3xl py-1 px-4 font-bold text-sm text-gray-500">
          TODO
        </h4>
        <div className="border border-gray-200 rounded-lg p-2 h-full w-full">
          {boardsTasks
            .filter((ele) => ele.progress === "todo")
            .map((task) => {
              return (
                <div
                  key={task.id}
                  className="text-sm p-2 bg-gray-200 rounded-lg text-gray-600"
                >
                  <p>
                    <span className="font-bold text-gray-500">Task Title:</span>{" "}
                    {task.title}
                  </p>
                  <p>
                    <span className="font-bold text-gray-500">
                      Description:
                    </span>{" "}
                    {task.description}
                  </p>
                  <p>
                    <span className="font-bold text-gray-500">DueDate:</span>{" "}
                    {task.dueDate}
                  </p>
                  <p>
                    <span className="font-bold text-gray-500">Priority:</span>{" "}
                    {task.priority}
                  </p>
                </div>
              );
            })}
        </div>
      </section>
      <section className="flex items-center justify-around flex-col h-full gap-4 w-1/4">
        <h4 className="bg-indigo-200 rounded-3xl py-1 px-4 font-bold text-sm text-indigo-500">
          In Progress
        </h4>
        <div className="border border-indigo-200 rounded-lg p-2 h-full w-full">
          {boardsTasks
            .filter((ele) => ele.progress === "inProgress")
            .map((task) => {
              return (
                <div
                  key={task.id}
                  className="text-sm p-2 bg-indigo-200 rounded-lg text-indigo-600"
                >
                  <p>
                    <span className="font-bold text-indigo-500">
                      Task Title:
                    </span>{" "}
                    {task.title}
                  </p>
                  <p>
                    <span className="font-bold text-indigo-500">
                      Description:
                    </span>{" "}
                    {task.description}
                  </p>
                  <p>
                    <span className="font-bold text-indigo-500"> DueDate:</span>{" "}
                    {task.dueDate}
                  </p>
                  <p>
                    <span className="font-bold text-indigo-500">Priority:</span>{" "}
                    {task.priority}
                  </p>
                </div>
              );
            })}
        </div>
      </section>
      <section className="flex items-center justify-around flex-col h-full gap-4 w-1/4">
        <h4 className="bg-red-200 rounded-3xl py-1 px-4 font-bold text-sm text-red-500">
          Blocked
        </h4>
        <div className="border border-red-200 rounded-lg p-2 h-full w-full">
          {boardsTasks
            .filter((ele) => ele.progress === "blocked")
            .map((task) => {
              return (
                <div
                  key={task.id}
                  className="text-sm p-2 bg-red-200 rounded-lg text-red-600"
                >
                  <p>
                    <span className="font-bold text-red-700">Task Title:</span>{" "}
                    {task.title}
                  </p>
                  <p>
                    <span className="font-bold text-red-700">Description:</span>{" "}
                    {task.description}
                  </p>
                  <p>
                    <span className="font-bold text-red-700">DueDate:</span>{" "}
                    {task.dueDate}
                  </p>
                  <p>
                    <span className="font-bold text-red-700">Priority:</span>{" "}
                    {task.priority}
                  </p>
                </div>
              );
            })}
        </div>
      </section>
      <section className="flex items-center justify-around flex-col h-full gap-4 w-1/4">
        <h4 className="bg-green-200 rounded-3xl py-1 px-4 font-bold text-sm text-green-500">
          Completed
        </h4>
        <div className="border border-green-200 rounded-lg p-2 h-full w-full">
          {boardsTasks
            .filter((ele) => ele.progress === "completed")
            .map((task) => {
              return (
                <div
                  key={task.id}
                  className="text-sm p-2 bg-green-200 rounded-lg text-green-600"
                >
                  <p>
                    <span className="font-bold text-green-700">
                      Task Title:
                    </span>{" "}
                    {task.title}
                  </p>
                  <p>
                    <span className="font-bold text-green-700">
                      Description:
                    </span>{" "}
                    {task.description}
                  </p>
                  <p>
                    <span className="font-bold text-green-700">DueDate:</span>{" "}
                    {task.dueDate}
                  </p>
                  <p>
                    <span className="font-bold text-green-700">Priority:</span>{" "}
                    {task.priority}
                  </p>
                </div>
              );
            })}
        </div>
      </section>
    </div>
  ) : (
    ""
  );
}
