# Components & Props

Task management App, uses a static data (tasks) and display them. Including features like, Deleting and Sorting. The App consist of three component, detailize below.

## Components

### TaskList

A Parent component for TaskItems and TaskFilters: it the following props:

- **tasks**: is an array of object that contains these properties: id, title, description, status, priority, dueDate.
- **onStatusChnage**: is a function that takes in an id and updatedStatus as argument and update a task.
- **onDelete**: is a function that takes in an id as argument and delete a task .

**Component Structure**

`type TaskStatus = "pending" | "in-progress" | "completed";`

`interface Task {
	id: string;
	title: string;
	description: string;
	status: TaskStatus;
	priority: "low" | "medium" | "high";
	dueDate: string;
}`

`interface TaskListProps {
	tasks: Task[];
	onStatusChange: (taskId: string, newStatus: TaskStatus) => void;
	onDelete: (taskId: string) => void;
}`

**Example**

`<TaskList tasks={tasks} onStatusChange={onStatusChange} onDelete={onDelete}/>`

### TaskItem

TaskItem is a component used to display each task on the list. it has these props:

- **task**: is an object that contains these properties: id, title, description, status, priority,
- **onStatusChnage**: is a passed down from the parent Component TaskList, the function that takes in an id and updatedStatus as argument and update a task.
- **onDelete**: s a passed down from the parent Component TaskList, is a function that takes in an id as argument and delete a task .

**Component Structure**

`interface TaskItemProps { task: Task; onStatusChange: (taskId: string, newStatus: TaskStatus) => void; onDelete: (taskId: string) => void;
}`

**Example**

`<TaskItem key={item.id} task={item} onStatusChange={onFilterListStatusChange} onDelete={onFilterListDelete} />`

### TaskFilter

A component that hold two select element that will filter/sort the tasklist; it has this props:

- **onFilterChange**: is a passed down from the parent Component TaskList, the function that takes an object with status and priority properties

**Component Structure**

`interface TaskFilterProps { onFilterChange: (filters: { status?: TaskStatus; priority?: "low" | "medium" | "high"; }) => void;
}`

**Example** (Using tailsinwcss for styling)

`<TaskFilter onFilterChange={onFilterChange} />`

## Example Usage of the component

- **The code given below is only the return section of the code, to view it full extent, please view my repo. Thank you**

### App.tsx

`<TaskList tasks={tasks} onStatusChange={onStatusChange} onDelete={onDelete}
/>`

### TaskList.tsx

``return ( <div> <div> <TaskFilter onFilterChange={onFilterChange} /> </div>

 <div className="flex flex-col gap-y-4 "> {filterList.length > 0 ? ( filterList.map((item) => { return ( <TaskItem key={item.id} task={item} onStatusChange={onFilterListStatusChange} onDelete={onFilterListDelete} /> ); }) ) : ( <p className="text-black text-center pt-8"> No tasks match the current filters </p> )} </div> </div> );``

### TaskItem.tsx

`` return (<div className="rounded-lg border border-gray-600 flex items-start p-6 bg-gray-800 text-white">	<div className="w-2/3 flex flex-col gap-y-2"><h2 className="font-bold">{task.title}</h2><p>{task.description}</p><p>	<span className={priorityTheme[task.priority]}>{" "}Priority: {task.priority} </span>{" "} Due: {task.dueDate}</p> </div> <div className="flex justify-end w-1/3 items-center gap-x-2"><select id="optionsSelect" value={task.status} onChange={(e) =>onStatusChange(task.id, e.target?.value as TaskStatus) } className={`${selectTheme[task.status]} p-2 rounded-lg`}> <option value="pending" selected={task.status === "pending"}>Pending </option> <option value="in-progress" selected={task.status === "in-progress"}>In-Progress </option> <option value="completed" selected={task.status === "completed"}>Completed </option></select><p className="text-red-500 hover:text-red-700 cursor-pointer" onClick={() => onDelete(task.id)}> Delete</p> </div></div>
 ); ``

### TaskFilter

`return ( <div className="text-black flex p-4 gap-x-4"> <div className=" flex flex-col gap-y-2 w-auto "> <label htmlFor="status">Status</label> <select id="optionsSelect" value={filter?.status} name="status" onChange={handleStatusChanges} className="bg-gray-800 text-white p-2 rounded-lg"> <option value="" selected={!filter.status}> All Statuses </option> <option value="pending" selected={filter.status === "pending"}> Pending </option> <option value="in-progress" selected={filter.status === "in-progress"}> In-Progress </option> <option value="completed" selected={filter.status === "completed"}> Completed </option> </select> </div> <div className=" flex flex-col gap-y-2 w-auto "> <label htmlFor="status">Priority</label> <select id="optionsSelect" value={filter?.priority} name="priority" onChange={handleStatusChanges} className="bg-gray-800 text-white p-2 rounded-lg"> <option value="" selected={!filter.priority}> All Priorities </option> <option value="low" selected={filter.priority === "low"}> Low </option> <option value="medium" selected={filter.priority === "medium"}> Medium </option> <option value="high" selected={filter.priority === "high"}> High </option> </select> </div> </div> );`
