"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Define the Task class
class Task {
    id;
    title;
    description;
    completed;
    constructor(id, title, description, completed = false) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.completed = completed;
    }
}
// Define the TaskManager class
class TaskManager {
    tasks = [];
    // Adds a task to the task list
    addTask(task) {
        this.tasks.push(task);
        console.log(`Task added successfully: "${task.title}"`);
    }
    // Returns a task by its ID
    getTaskById(id) {
        return this.tasks.find(task => task.id === id);
    }
    // Marks a task as complete
    markTaskComplete(id) {
        const task = this.getTaskById(id);
        if (task) {
            task.completed = true;
            console.log(`Task marked as complete: "${task.title}"`);
        }
        else {
            console.log(`Task with ID ${id} not found.`);
        }
    }
    // Lists all tasks to the console
    listAllTasks() {
        console.log("\n--- Task List ---");
        if (this.tasks.length === 0) {
            console.log("No tasks found.");
            return;
        }
        this.tasks.forEach(task => {
            const status = task.completed ? "[Completed]" : "[Pending]";
            console.log(`ID: ${task.id} | ${status} ${task.title} - ${task.description}`);
        });
        console.log("-----------------\n");
    }
}

// Demonstration of Functionality

// Instantiate TaskManager
const taskManager = new TaskManager();
// Adding tasks
taskManager.addTask(new Task(1, "Complete Assignment", "Finish the TypeScript TaskManager implementation"));
taskManager.addTask(new Task(2, "Review Database Schema", "Check SQL Server tables and stored procedures"));
taskManager.addTask(new Task(3, "Update Portfolio", "Push latest front-end project changes to GitHub"));
// Listing all tasks (Initial State)
taskManager.listAllTasks();
// Marking some tasks as complete
taskManager.markTaskComplete(1);
taskManager.markTaskComplete(3);
// Listing all tasks again to verify completion status
taskManager.listAllTasks();
//# sourceMappingURL=taskManager.js.map
