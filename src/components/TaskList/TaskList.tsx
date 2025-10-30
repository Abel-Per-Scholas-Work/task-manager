import { useState } from "react";
import type { Task, TaskListProps, TaskStatus } from "../../types";
import TaskFilter from "../TaskFilter/TaskFilter";
import TaskItem from "../TaskItem/TaskItem";

interface Filter {
	status?: TaskStatus;
	priority?: "low" | "medium" | "high";
}

export default function TaskList({
	tasks,
	onStatusChange,
	onDelete,
}: TaskListProps) {
	const [taskList, setTaskList] = useState(tasks);

	const onFilterChange = (filters: Filter) => {
		console.log("these are the ", filters);
		let result = [];
		if (!filters.priority && !filters.status) {
			result = tasks;
			console.log("I am in here");
		} else {
			result = tasks.filter((task) => {
				if (filters.status && filters.priority) {
					return (
						task.status === filters.status && task.priority == filters.priority
					);
				}
				if (filters.status) {
					return task.status === filters.status;
				}
				if (filters.priority) {
					return task.priority === filters.priority;
				}
			});
		}
		setTaskList(result);
	};

	return (
		<div>
			<div>
				<TaskFilter onFilterChange={onFilterChange} />
			</div>

			<div className="flex flex-col gap-y-4 ">
				{taskList.map((item) => {
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
