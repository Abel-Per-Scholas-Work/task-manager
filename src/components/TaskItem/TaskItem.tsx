import type { TaskItemProps, Task } from "../../types";

export default function TaskItem({
	task,
	onStatusChange,
	onDelete,
}: TaskItemProps) {
	//color scheme for the priority
	const colorTheme = {
		low: "text-green-400",
		medium: "text-amber-700",
		high: "text-red-700",
	};

	return (
		<div className="rounded-lg border border-orange-600 flex items-center p-4">
			<div className="w-2/3 ">
				<h2 className="font-bold">{task.title}</h2>
				<p>{task.description}</p>
				<p>
					<span className={colorTheme[task.priority]}>
						{" "}
						Priority: {task.priority}
					</span>{" "}
					Due: {task.dueDate}
				</p>
			</div>
			<div className="flex justify-end">
				<select
					id="optionsSelect"
					value={task.status}
					// onChange={(task.id, task.status)=>onStatusChange()}
				>
					<option value="option1">Option 1</option>
					<option value="option2">Option 2</option>
					<option value="option3">Option 3</option>
				</select>
				<p className="text-red-500 hover:text-red-700" onClick={onDelete}>
					Delete
				</p>
			</div>
		</div>
	);
}
