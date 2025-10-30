import type { TaskItemProps } from "../../types";
import React, { useState } from "react";

export default function TaskItem({ onFilterChange }: TaskItemProps) {
	const [filter, setFilter] = useState({
		status: "all-statuses",
		priority: "all-priorities",
	});
	return (
		<div className="text-black flex p-4 gap-x-4">
			<div className=" flex flex-col gap-y-2 w-auto ">
				<label htmlFor="status">Status</label>
				<select
					id="optionsSelect"
					value={filter.status}
					onChange={(e) => console.log(e.target.value)}
					className="bg-gray-800 text-white p-2 rounded-lg">
					<option
						value="all-statuses"
						selected={filter.status === "all-statuses"}>
						All Statuses
					</option>
					<option value="pending" selected={filter.status === "pending"}>
						Pending
					</option>
					<option
						value="in-progress"
						selected={filter.status === "in-progress"}>
						In-Progress
					</option>
					<option value="completed" selected={filter.status === "completed"}>
						Completed
					</option>
				</select>
			</div>
			<div className=" flex flex-col gap-y-2 w-auto ">
				<label htmlFor="status">Status</label>
				<select
					id="optionsSelect"
					value={filter.status}
					onChange={(e) => console.log(e.target.value)}
					className="bg-gray-800 text-white p-2 rounded-lg">
					<option
						value="all-priorities"
						selected={filter.status === "all-priorities"}>
						All Priorities
					</option>
					<option value="low" selected={filter.status === "low"}>
						Low
					</option>
					<option value="medium" selected={filter.status === "medium"}>
						Medium
					</option>
					<option value="high" selected={filter.status === "high"}>
						High
					</option>
				</select>
			</div>
		</div>
	);
}
