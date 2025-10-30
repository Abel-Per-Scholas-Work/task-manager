import type { TaskFilterProps } from "../../types";
import React, { useState } from "react";

export default function TaskFilter({ onFilterChange }: TaskFilterProps) {
	const [filter, setFilter] = useState({
		status: undefined,
		priority: undefined,
	});

	const handleStatusChanges = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const { name, value } = e.target;
		const newValue = value === "" ? undefined : value;
		//create a new object
		const newFilter = { ...filter, [name]: newValue };
		//immediate update the state by passing a new object
		setFilter(newFilter);

		console.log(newFilter);
		onFilterChange(newFilter);

		/**
		 * delays the update of the state.
		 */
		// setFilter((prev) => ({ ...prev, [name]: value }));

		// console.log(filter);
		// onFilterChange(filter);
	};

	return (
		<div className="text-black flex p-4 gap-x-4">
			<div className=" flex flex-col gap-y-2 w-auto ">
				<label htmlFor="status">Status</label>
				<select
					id="optionsSelect"
					value={filter?.status}
					name="status"
					onChange={handleStatusChanges}
					className="bg-gray-800 text-white p-2 rounded-lg">
					<option value="" selected={!filter.status}>
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
				<label htmlFor="status">Priority</label>
				<select
					id="optionsSelect"
					value={filter?.priority}
					name="priority"
					onChange={handleStatusChanges}
					className="bg-gray-800 text-white p-2 rounded-lg">
					<option value="" selected={!filter.priority}>
						All Priorities
					</option>
					<option value="low" selected={filter.priority === "low"}>
						Low
					</option>
					<option value="medium" selected={filter.priority === "medium"}>
						Medium
					</option>
					<option value="high" selected={filter.priority === "high"}>
						High
					</option>
				</select>
			</div>
		</div>
	);
}
