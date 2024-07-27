<script lang="ts">
	import { BarChart, Compass, Layout, List } from 'lucide-svelte';
	import SidebarItem from './SidebarItem.svelte';
	const routes = [
		{
			icon: List,
			label: 'Courses',
			href: '/teacher/courses'
		},
		{
			icon: BarChart,
			label: 'Analytics',
			href: '/teacher/analytics'
		}
	];
</script>

<div class="flex flex-col w-full">
	{#each routes as { href, icon, label }}
		<SidebarItem {href} {icon} {label} />
	{/each}
</div>
