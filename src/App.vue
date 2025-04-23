<template>
	<div class="app">
		<h1>Список задач</h1>
		<ul>
			<TaskItem
				v-for="task in tasks"
				:key="task.id"
				:task="task"
				:onToggle="saveTasks"
			/>
		</ul>
	</div>
</template>

<script setup>
import TaskItem from "./modules/compose/task-item.vue"
import { useTasks } from "./modules/domain/use-task"

const { tasks, saveTasks } = useTasks()
</script>

<style scoped>
.app {
	max-width: 600px;
	margin: 2rem auto;
	font-family: sans-serif;
}
</style>
