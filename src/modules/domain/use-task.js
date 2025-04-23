import { ref, onMounted } from "vue"

const tasks = ref([])

export function useTasks() {
	const loadTasks = async () => {
		const saved = localStorage.getItem("tasks")
		if (saved) {
			tasks.value = JSON.parse(saved)
		} else {
			const res = await fetch("/tasks.json")
			tasks.value = await res.json()
			saveTasks()
		}
	}

	const saveTasks = () => {
		localStorage.setItem("tasks", JSON.stringify(tasks.value))
	}

	onMounted(loadTasks)

	return {
		tasks,
		saveTasks,
	}
}
