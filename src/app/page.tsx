
import TodoApp from "./todo/page";

export default function Home() {
  return (
    <div className="flex-col justify-center items-center ">
      <div className="h-auto max-w-3xl mt-20 ml-72 mb-44">
        <h1 className="text-2xl md:text-4xl font-extrabold flex justify-center mt-10">
          <i> Wellcome to My Todo App</i>
        </h1>
        <p className="text-lg md:text-2xl flex justify-center mt-5">
          This is a simple Todo App that allows you to add, remove and mark
          tasks as completed.
        </p>
        <br />

        <TodoApp />
      </div>
    </div>
  );
}
