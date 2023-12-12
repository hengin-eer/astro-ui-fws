<script>
    let count = 0;
    function addCount() {
        count += 1;
    }
</script>

<div class="flex flex-col">
    <h2 class="text-4xl font-bold text-orange-500">
        Svelte
    </h2>
    <div class="pt-6">
        <p class="pb-4 text-xl text-white">
            Count: {count}
        </p>
        <button class="px-2 py-1 text-white bg-orange-500 rounded-lg hover:bg-orange-600" on:click={addCount}>
            Svelte Button
        </button>
    </div>
</div>
