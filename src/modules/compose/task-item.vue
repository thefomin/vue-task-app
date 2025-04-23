<template>
	<li>
		<label>
			<input type="checkbox" v-model="task.done" @change="onToggle" />
			<span :style="{ textDecoration: task.done ? 'line-through' : 'none' }">
				{{ task.title }}
			</span>
		</label>
	</li>
</template>

<script setup>
defineProps({
	task: Object,
	onToggle: Function,
})
</script>

<style scoped>
li {
	margin: 0.5rem 0;
}
</style>
