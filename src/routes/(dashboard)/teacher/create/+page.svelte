<script lang="ts">
	import * as Form from '$lib/components/ui/form';
	import Input from '$lib/components/ui/input/input.svelte';
	import { titleSchema } from '$lib/schema.js';
	import { superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';

	export let data;

	const form = superForm(data.form, {
		validators: zodClient(titleSchema)
	});
	const { form: formData, enhance, delayed, submitting } = form;
</script>

<div class="max-w-5xl mx-auto flex md:items-center md:justify-center h-full border p-6">
	<div>
		<h1 class="text-2xl">Name your course</h1>
		<p class="text-sm text-mute-foreground">
			What would you like to cname your course? Don't worry you can change this later.
		</p>
		<form action="/teacher/create" use:enhance method="POST" class="space-y-8 mt-8">
			<Form.Field {form} name="title">
				<Form.Control let:attrs>
					<Form.Label>Title</Form.Label>
					<Input {...attrs} bind:value={$formData.title} />
				</Form.Control>
				<Form.FieldErrors />
			</Form.Field>
		</form>
	</div>
</div>
