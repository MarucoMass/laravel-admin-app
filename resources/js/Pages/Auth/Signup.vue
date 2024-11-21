<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ref } from 'vue'
import {useForm} from '@inertiajs/vue3'


const form = useForm({
    first_name: '',
    last_name: '',
    email: '',
    password: ''
});

const errors = ref({});

const submit = () => {
    form.post('/signup', {
        onError: (error) => {
            errors.value = error;
            console.log("Errores del servidor:", error);
        },
        onSuccess: () => {
            console.log("Registro exitoso");
        }
    });
}


</script>

<template>
    <div class="h-dvh w-screen flex items-center justify-center">
        <Card class="mx-auto max-w-sm">
            <CardHeader>
                <CardTitle class="text-xl">
                    Sign Up
                </CardTitle>
                <CardDescription>
                    Enter your information to create an account
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form @submit.prevent="submit">
                    <div class="grid gap-4">
                        <div class="grid grid-cols-2 gap-4">
                            <div class="grid gap-2">
                                <Label for="first_name">First name</Label>
                                <Input id="first_name" v-model="form.first_name"
                                    :class="{'is-invalid' : errors.first_name}"  
                                    required
                                    autocomplete="false" 
                                    autofocus />
                                <span v-if="errors.first_name" class="text-red-700">{{ errors.first_name }}</span>
                            </div>
                            <div class="grid gap-2">
                                <Label for="last_name">Last name</Label>
                                <Input id="last_name" v-model="form.last_name"
                                    :class="{ 'is-invalid': errors.last_name }" required
                                    autocomplete="false" autofocus />
                                <span v-if="errors.last_name" class="text-red-700">{{ errors.last_name }}</span>
                            </div>
                        </div>
                        <div class="grid gap-2">
                            <Label for="email">Email</Label>
                            <Input id="email" type="email" v-model="form.email" :class="{ 'is-invalid': errors.email }" required />
                            <span v-if="errors.email" class="text-red-700">{{ errors.email }}</span>
                        </div>
                        <div class="grid gap-2">
                            <Label for="password">Password</Label>
                            <Input id="password" v-model="form.password" :class="{ 'is-invalid': errors.password }"
                                type="password" autocomplete="new-password"/>
                            <span v-if="errors.password" class="text-red-700">{{ errors.password }}</span>
                        </div>
                        <Button type="submit" class="w-full">
                            Create an account
                        </Button>
                        <Button variant="outline" class="w-full">
                            Sign up with GitHub
                        </Button>
                    </div>
                    <div class="mt-4 text-center text-sm">
                        Already have an account?
                        <a href="/login" class="underline">
                            Sign in
                        </a>
                    </div>
                </form>
            </CardContent>
        </Card>
    </div>
</template>