<template>
	<h1 class="text-3xl font-bold">{{ title }}</h1>
</template>

<script setup>
defineProps({
	title: {
		type: String,
		default: 'Title',
		required: true,
	},
})
</script>
