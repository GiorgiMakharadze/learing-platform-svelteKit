<script lang="ts">
	import * as Alert from '$lib/components/ui/alert';
	import IconBadge from '$lib/components/IconBadge.svelte';
	import TitleForm from '$lib/components/TitleForm.svelte';
	import {
		AlertTriangle,
		CircleDollarSign,
		File,
		LayoutDashboard,
		ListChecks
	} from 'lucide-svelte';
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

<div class="p-6">
	<div class="flex items-center justify-between">
		<div class="flex flex-col gap-y-2">
			<h1 class="text-2xl font-medium">Course setup</h1>
			<span class="text-sm text-muted-foreground">
				complete all fields {completionText}
			</span>
		</div>
	</div>

	<div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
		<div>
			<div class="flex items-center gap-x-2">
				<IconBadge icon={LayoutDashboard} />
				<h2 class="text-xl">Customize your course</h2>
			</div>
			<TitleForm data={data.titleForm} />
		</div>
		<div class="space-y-6">
			<div>
				<div class="flex items-center gap-x-2">
					<IconBadge icon={ListChecks} />
					<h2 class="text-xl">Course chapters</h2>
				</div>
			</div>
			<div>
				<div class="flex items-center gap-x-2">
					<IconBadge icon={CircleDollarSign} />
					<h2 class="text-xl">Sell your course</h2>
				</div>
			</div>
			<div>
				<div class="flex items-center gap-x-2">
					<IconBadge icon={File} />
					<h2 class="text-xl">Resources & Attachments</h2>
				</div>
			</div>
		</div>
	</div>
</div>
