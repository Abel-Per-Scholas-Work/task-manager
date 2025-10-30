import type { TaskListProps, Task } from "../../types";
import TaskFilter from "../TaskFilter/TaskFilter";
import TaskItem from "../TaskItem/TaskItem";
import { useState } from "react";

export default function TaskList({
	tasks,
	onStatusChange,
	onDelete,
}: TaskListProps) {
	//viewed list
	const [viewTasks, setViewTasks] = useState<Task[]>(tasks);

	return (
		<div>
			<div>
				<TaskFilter />
			</div>

			<div className="flex flex-col gap-y-4 ">
				{viewTasks.map((item) => {
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
