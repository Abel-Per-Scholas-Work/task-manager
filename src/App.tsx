import { useState } from "react";
import type { Task, TaskStatus } from "./types";
import TaskList from "./components/TaskList/TaskList";

function App() {
	const [tasks, setTasks] = useState<Task[]>([
		{
			id: "1",
			title: "Design landing page",
			description:
				"Create the initial wireframe and mockups for the landing page.",
			status: "pending",
			priority: "high",
			dueDate: "2025-12-20",
		},
		{
			id: "2",
			title: "Set up CI/CD pipeline",
			description:
				"Configure GitHub Actions for automated testing and deployment.",
			status: "pending",
			priority: "medium",
			dueDate: "2026-12-18",
		},
		{
			id: "3",
			title: "Fix login bug",
			description:
				"Resolve the issue where users can't log in with Google OAuth.",
			status: "in-progress",
			priority: "high",
			dueDate: "2026-1-14",
		},
		{
			id: "4",
			title: "Write unit tests",
			description: "Add coverage for the user service module.",
			status: "in-progress",
			priority: "low",
			dueDate: "2025-12-22",
		},
		{
			id: "5",
			title: "Deploy to staging",
			description: "Push the latest build to the staging environment for QA.",
			status: "completed",
			priority: "medium",
			dueDate: "2025-12-10",
		},
	]);

	const onStatusChange = (id: string, newStatus: TaskStatus) => {
		console.log("Delete");
	};
	const onDelete = (id: string) => {
		console.log("Delete");
	};

	return (
		<main className="bg-slate-200">
			<section className="h-screen max-w-[85rem] mx-auto flex flex-col p-4 py-8">
				<TaskList
					tasks={tasks}
					onStatusChange={onStatusChange}
					onDelete={onDelete}
				/>
			</section>
		</main>
	);
}

export default App;
