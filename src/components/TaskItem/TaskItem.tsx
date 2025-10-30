import type { TaskItemProps } from "../../types";

export default function TaskItem({
	task,
	onStatusChange,
	onDelete,
}: TaskItemProps) {
	//color scheme for the priority
	const priorityTheme = {
		low: "text-green-400",
		medium: "text-amber-700",
		high: "text-red-700",
	};

	const selectTheme = {
		pending: "text-amber-900 bg-amber-200",
		"in-progress": "text-indigo-900 bg-indigo-200",
		completed: "text-green-900 bg-green-200",
	};

	return (
		<div className="rounded-lg border border-orange-600 flex items-start p-4 bg-slate-900 text-white">
			<div className="w-2/3 flex flex-col gap-y-2">
				<h2 className="font-bold">{task.title}</h2>
				<p>{task.description}</p>
				<p>
					<span className={priorityTheme[task.priority]}>
						{" "}
						Priority: {task.priority}
					</span>{" "}
					Due: {task.dueDate}
				</p>
			</div>
			<div className="flex justify-end w-1/3 items-center gap-x-2">
				<select
					id="optionsSelect"
					value={task.status}
					onChange={() => onStatusChange(task.id, task.status)}
					className={`${selectTheme[task.status]} p-2 rounded-lg`}>
					<option value="pending" selected={task.status === "pending"}>
						Pending
					</option>
					<option value="in-progress" selected={task.status === "in-progress"}>
						In-Progress
					</option>
					<option value="completed" selected={task.status === "completed"}>
						Completed
					</option>
				</select>
				<p
					className="text-red-500 hover:text-red-700 cursor-pointer"
					onClick={() => onDelete(task.id)}>
					Delete
				</p>
			</div>
		</div>
	);
}
