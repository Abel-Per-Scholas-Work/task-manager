import { useState } from "react";
import type { TaskListProps, TaskStatus } from "../../types";
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
	const [filterList, setFilterList] = useState(tasks);

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
		setFilterList(result);
	};

	//delete and update FilterList and tasks
	const onFilterListDelete = (id: string) => {
		// update the filterList
		const deletedList = filterList.filter((task) => task.id !== id);
		setFilterList(deletedList);
		//call the onDelete function from parent
		onDelete(id);
	};

	//update the status and update the original  tasks
	const onFilterListStatusChange = (id: string, newStatus: TaskStatus) => {
		const updatedTask = filterList.map((task) => {
			console.log(task);
			return task.id === id ? { ...task, status: newStatus } : task;
		});
		//update the filterList
		setFilterList(updatedTask);
		// updated the original tasks
		onStatusChange(id, newStatus);
	};

	return (
		<div>
			<div>
				<TaskFilter onFilterChange={onFilterChange} />
			</div>

			<div className="flex flex-col gap-y-4 ">
				{filterList.length > 0 ? (
					filterList.map((item) => {
						return (
							<TaskItem
								key={item.id}
								task={item}
								onStatusChange={onFilterListStatusChange}
								onDelete={onFilterListDelete}
							/>
						);
					})
				) : (
					<p className="text-black text-center pt-8">
						No tasks match the current filters
					</p>
				)}
			</div>
		</div>
	);
}
