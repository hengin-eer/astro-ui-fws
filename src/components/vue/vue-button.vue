<script lang="js">
export default {
    data() {
        return {
            count: 0
        }
    },
    methods: {
        increment() {
            this.count++
        }
    }
}
</script>

<template>
    <div class="flex flex-col">
        <h2 class="text-4xl font-bold text-green-500">
            Vue
        </h2>
        <div class="pt-6">
            <p class="pb-4 text-xl text-white">
                Count: {{ count }}
            </p>
            <button class="px-2 py-1 text-white bg-green-500 rounded-lg hover:bg-green-600" @click="increment">
                Vue Button
            </button>
        </div>
    </div>
</template>