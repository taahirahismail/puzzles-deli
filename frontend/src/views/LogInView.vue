<template>
    <div>
        <form @submit.prevent="login">
            <input type="text" v-model="email" placeholder="email">
            <input type="text" v-model="password" placeholder="password">
            <button type="submit">Login</button>
        </form>
    </div>
</template>