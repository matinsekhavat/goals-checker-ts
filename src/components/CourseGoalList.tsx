import { CourseGoalType } from "../App";
import CourseGoal from "./CourseGoal";
import InfoBox from "./InfoBox";

type CourseGoalListProps = {
  goals: CourseGoalType[];
  onDeleteGoal: (id: number) => void;
};

function CourseGoalList({ goals, onDeleteGoal }: CourseGoalListProps) {
  if (goals.length === 0) {
    return <InfoBox mode="hint">You have no goal yet.</InfoBox>;
  }
  return (
    <>
      {goals.length >= 4 && (
        <InfoBox mode="warn">
          you are collecting a lot of Goals . don't push any more
        </InfoBox>
      )}
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {goals.map((goal) => (
          <li key={goal.id}>
            <CourseGoal
              title={goal.title}
              id={goal.id}
              onDeleteGoal={onDeleteGoal}
            >
              {goal.desc}
            </CourseGoal>
          </li>
        ))}
      </ul>
    </>
  );
}

export default CourseGoalList;
