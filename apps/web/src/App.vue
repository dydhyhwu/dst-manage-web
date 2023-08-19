<script setup lang="ts"></script>

<template>
    <q-layout view="hHh LpR lff">
        <q-header>
            <q-toolbar>
                <q-toolbar-title shrink>饥荒面板</q-toolbar-title>
                <q-space></q-space>
                <q-btn unelevated>存档</q-btn>
                <q-btn unelevated>模组</q-btn>
                <q-btn unelevated>服务器列表</q-btn>
                <q-separator class="q-my-sm" dark spaced vertical></q-separator>
                <q-btn icon="settings" unelevated round size="sm"></q-btn>
                <q-separator class="q-my-sm" dark spaced vertical></q-separator>

                <q-btn unelevated>管理员</q-btn>
            </q-toolbar>
        </q-header>

        <div class="q-pa-sm">
            <router-view></router-view>
        </div>
    </q-layout>
</template>
