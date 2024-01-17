import { useState } from "react";
import AddTodoModal from "./AddTodoModal";
import TodoCard, { TTodoCard } from "./TodoCard";
import TodoFilter from "./TodoFilter";
import { useGetTodosQuery } from "@/redux/api/api";

const TodoContainer = () => {
  const [priority, setPriority] = useState("");
  const { data: todos } = useGetTodosQuery(priority);

  return (
    <div>
      <div className="flex justify-between mb-2 text-white text-xl font-semibold">
        <AddTodoModal />
        <TodoFilter priority={priority} setPriority={setPriority} />
      </div>
      <div className="bg-primary-gradient w-full h-full rounded-xl p-1">
        {/* <div className="bg-white p-3 font-semibold rounded-md text-center">
          There is no task pending
        </div> */}
        <div className="bg-white p-5 w-full h-full rounded-lg space-y-3">
          {todos?.data?.map((item: TTodoCard) => (
            <TodoCard key={item._id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
