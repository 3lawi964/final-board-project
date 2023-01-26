import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import db from "../../../utils/firebase";
import Spinner from "../Spinner";
import TaskForm from "../../forms/TaskForm";
import ColumnsComponent from "./ColumnsComponent";

export default function TaskComponent() {
  const { id } = useParams();
  const [boardClick, setBoardClick] = useState(false);

  // const boardId = Number(id);

  const [boardsTasks, setBoardsTasks] = useState(null);
  // async function getDocHandler() {
  //   console.log("");
  //   const docRef = doc(db, "boards", `${id}`);
  //   const docSnap = await getDoc(docRef);

  //   if (docSnap.exists()) {
  //     setBoardsTasks(docSnap.data());
  //     console.log("tasks", docSnap.data());
  //   }
  // }
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
  }, [id]);

  // const [tasks, setTasks] = useState(null);
  // useEffect(() => {
  //   if (!id) return;
  //   // getDocs(collection(db, `boards/${id}/tasks`))
  //   // /boards/${id}/tasks
  //   const snapshot = onSnapshot(
  //     doc(db, `boards/${id}/tasks/78mcwlYLHvTQYatt0aMb`),
  //     (next) => {
  //       setTasks(next.data().title);
  //     }
  //   );
  //   return () => snapshot();
  // }, [id]);

  if (!boardsTasks) return <Spinner />;

  return (
    <div className="flex flex-col items-center h-screen gap-16 px-32 py-16">
      <button
        type="button"
        onClick={() => setBoardClick(true)}
        className="px-4 py-2 font-medium text-indigo-100 transition-colors duration-200 bg-indigo-500 rounded  outline-none  active:shadow-none active:scale-95 hover:text-white hover:bg-indigo-600 focus:bg-indigo-600 focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 disabled:bg-gray-400/80 disabled:shadow-none disabled:cursor-not-allowed"
      >
        Add Task
      </button>
      <TaskForm trigger={boardClick} setTrigger={setBoardClick} boardId={id} />
      {/* <div className="flex items-center justify-center "> */}
      <ColumnsComponent id={id} />
      {/* </div> */}
    </div>
  );
}
