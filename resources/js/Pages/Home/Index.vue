<script setup>
// import Layout from './Layout'
import { Head } from '@inertiajs/vue3'
import Layout from '../../Layout/App.vue'
// defineProps({ user: Object })
</script>

<template>
    <Layout>

        <Head title="Welcome" />
        <h1 class="text-3xl text-red-600">Welcome</h1>
        <!-- <p>Hello {{ user.name }}, welcome to your first Inertia app!</p> -->
    </Layout>
</template>