<script lang="ts">
	export let data;
</script>

<div class="flex items-center justify-center min-h-screen bg-gray-100 p-4">
	<div class="bg-white p-8 rounded-lg shadow-lg text-center max-w-lg w-full">
		<h2 class="text-3xl font-semibold text-gray-800 mb-6">User Information</h2>
		<div class="flex flex-col items-start space-y-4">
			<div class="flex items-center">
				<svg class="w-6 h-6 text-gray-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 11c1.38 0 2.5-1.12 2.5-2.5S13.38 6 12 6 9.5 7.12 9.5 8.5 10.62 11 12 11zm0 0c3.314 0 6-2.686 6-6 0-3.314-2.686-6-6-6S6 1.686 6 5c0 3.314 2.686 6 6 6zm0 0v8m0 4h-6m6 0h6m-6 0c-1.105 0-2-.895-2-2v-2c0-1.105.895-2 2-2s2 .895 2 2v2c0 1.105-.895 2-2 2z"></path></svg>
				<p class="text-lg text-gray-600"><span class="font-semibold">ID:</span> {data.user?.id}</p>
			</div>
			<div class="flex items-center">
				<svg class="w-6 h-6 text-gray-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14.76V15c0 1.105-.895 2-2 2H6c-1.105 0-2-.895-2-2v-1.5c0-.276.224-.5.5-.5h4c.276 0 .5-.224.5-.5v-.74M16 14.76V15c0 1.105-.895 2-2 2h-4c-1.105 0-2-.895-2-2v-1.5c0-.276.224-.5.5-.5h4c.276 0 .5-.224.5-.5v-.74M20 14.76V15c0 1.105-.895 2-2 2h-4c-1.105 0-2-.895-2-2v-1.5c0-.276.224-.5.5-.5h4c.276 0 .5-.224.5-.5v-.74"></path></svg>
				<p class="text-lg text-gray-600"><span class="font-semibold">Username:</span> {data.user?.username}</p>
			</div>
			<div class="flex items-center">
				<svg class="w-6 h-6 text-gray-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 14v6a2 2 0 01-2 2H4a2 2 0 01-2-2v-6m16-5h-1l-1-2H6L5 9H4M2 9h20"></path></svg>
				<p class="text-lg text-gray-600"><span class="font-semibold">Email:</span> {data.user?.email}</p>
			</div>
			<div class="flex items-center">
				<svg class="w-6 h-6 text-gray-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 8V6a6 6 0 1112 0v2m-6 0v4m0 0a2 2 0 104 0v-4m0 0a2 2 0 11-4 0v4"></path></svg>
				<p class="text-lg text-gray-600"><span class="font-semibold">First Name:</span> {data.user?.firstName}</p>
			</div>
			<div class="flex items-center">
				<svg class="w-6 h-6 text-gray-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 8V6a6 6 0 1112 0v2m-6 0v4m0 0a2 2 0 104 0v-4m0 0a2 2 0 11-4 0v4"></path></svg>
				<p class="text-lg text-gray-600"><span class="font-semibold">Last Name:</span> {data.user?.lastName}</p>
			</div>
			<div class="flex items-center">
				<svg class="w-6 h-6 text-gray-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 8V6a6 6 0 1112 0v2m-6 0v4m0 0a2 2 0 104 0v-4m0 0a2 2 0 11-4 0v4"></path></svg>
				<p class="text-lg text-gray-600"><span class="font-semibold">Verification:</span> {data.user?.verified ? 'Verified' : 'Not Verified'}</p>
			</div>
		</div>
	</div>
</div>
