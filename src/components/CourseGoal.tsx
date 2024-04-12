import React, { PropsWithChildren, type ReactNode } from "react";

type CourseGoalProps = {
  title: string;
  children: PropsWithChildren<ReactNode>;
  onDeleteGoal: (id: number) => void;
  id: number;
};

const CourseGoal: React.FC<CourseGoalProps> = ({
  title,
  children,
  onDeleteGoal,
  id,
}) => {
  return (
    <article className=" text-white rounded-lg mt-4 bg-gray-700 p-2 flex items-start justify-between gap-2">
      <div className="my-2">
        <h2 className="text-2xl font-bold text-rose-400">{title}</h2>
        <p>{children}</p>
      </div>
      <button className="text-stone-200" onClick={() => onDeleteGoal(id)}>
        Delete
      </button>
    </article>
  );
};

export default CourseGoal;
