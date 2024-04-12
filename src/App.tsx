import { useState } from "react";
import Header from "./components/Header";
import CourseGoalList from "./components/CourseGoalList";
import NewGoal from "./components/NewGoal";

export type CourseGoalType = {
  title: string;
  desc: string;
  id: number;
};

const App = () => {
  const [goals, setGoals] = useState<CourseGoalType[]>([]);

  //handle Add goals
  function handleAddGoals(newGoal: CourseGoalType) {
    const newGoalAdded: CourseGoalType = {
      ...newGoal,
      id: Math.floor(Math.random() * 100),
    };
    setGoals((allGoals) => [...allGoals, newGoalAdded]);
  }

  // handle Delete Goals
  function handleDeleteGoal(id: number) {
    const deletedGoals = goals.filter((goal) => goal.id !== id);
    setGoals(deletedGoals);
  }

  return (
    <main className="min-h-dvh flex justify-center bg-stone-200 ">
      <div className="container max-w-screen-sm bg-gray-800 h-min rounded-md mt-16 p-4">
        <Header image={{ src: "./public/goals.jpg", alt: "A list Of Goals" }}>
          <p className="text-2xl text-orange-300 font-bold text-center">
            Your Course Goals
          </p>
        </Header>
        <NewGoal handleAddGoals={handleAddGoals} />
        <CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal} />
      </div>
    </main>
  );
};

export default App;
