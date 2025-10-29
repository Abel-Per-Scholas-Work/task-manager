import type { TaskListProps } from "../../types";
import TaskItem from "../TaskItem/TaskItem";

export default function TaskList({
	tasks,
	onStatusChange,
	onDelete,
}: TaskListProps) {
	return (
		<>
			{tasks.map((item) => {
				return (
					<TaskItem
						key={item.id}
						task={item}
						onStatusChange={onStatusChange}
						onDelete={onDelete}
					/>
				);
			})}
		</>
	);
}
