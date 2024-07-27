<script lang="ts">
	import * as Alert from '$lib/components/ui/alert';
	import { AlertTriangle } from 'lucide-svelte';

	export let data;
	$: course = data.course;

	$: requiredField = [
		course.title,
		course.description,
		course.imageUrl,
		course.price,
		course.category,
		course.expand?.['chapters(course)']?.some((chapter: any) => chapter.isPublished)
	];
	$: totalFields = requiredField.length;
	$: completedFields = requiredField.filter(Boolean).length;

	$: completionText = `(${completedFields}/${totalFields})`;
	$: isComplete = requiredField.every(Boolean);
</script>

{#if !course.isPublished}
	<Alert.Root class="bg-yellow-200/80 border border-yellow-300 rounded-none ">
		<AlertTriangle class="size-4" />
		<Alert.Title>Heads up!</Alert.Title>
		<Alert.Description
			>This course is unpublished , It will not be visible to the students</Alert.Description
		>
	</Alert.Root>
{/if}
