import type { TaskListProps } from "../../types";
import TaskFilter from "../TaskFilter/TaskFilter";
import TaskItem from "../TaskItem/TaskItem";

export default function TaskList({
	tasks,
	onStatusChange,
	onDelete,
}: TaskListProps) {
	return (
		<div>
			<div>
				<TaskFilter />
			</div>

			<div className="flex flex-col gap-y-4 ">
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
			</div>
		</div>
	);
}
