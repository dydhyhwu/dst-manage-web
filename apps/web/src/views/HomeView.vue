<script setup lang="ts">
    import { ref } from 'vue';
    import CustomBadge from '@/components/customBadge.vue';

    const address = ref('c_connect("127.0.0.1", "10999")');
</script>

<template>
    <q-page-container>
        <q-card bordered style="width: 450px">
            <q-card-section class="row items-center">
                <q-icon class="q-mx-sm" color="positive" name="circle"></q-icon>
                <div>海难三合一</div>
                <q-space></q-space>
                <q-btn color="primary" size="sm" flat>停止</q-btn>
                <q-btn color="primary" size="sm" flat>更多</q-btn>
            </q-card-section>

            <q-separator inset></q-separator>

            <q-card-section>
                <div class="row items-center">
                    <custom-badge class="q-mx-sm" left-text="类型" right-text="普通"></custom-badge>
                    <custom-badge class="q-mx-sm" left-text="模式" right-text="生存"></custom-badge>
                    <custom-badge class="q-mx-sm" left-text="洞穴" right-text="无"></custom-badge>
                    <custom-badge class="q-mx-sm" left-text="春季" right-text="39天"></custom-badge>
                </div>

                <div class="q-ma-sm text-caption">快来玩呀，太好玩了</div>

                <div class="row items-center">
                    <q-field borderless readonly dense>
                        <template #control>
                            <div class="self-center no-outline text-caption">{{ address }}</div>
                        </template>
                        <template #append>
                            <q-btn size="xs" icon="copy_all" unelevated round>
                                <q-tooltip>复制直连地址</q-tooltip>
                            </q-btn>
                        </template>
                    </q-field>

                    <q-space></q-space>

                    <q-chip dense>
                        <q-avatar icon="people" color="primary" text-color="white"></q-avatar>
                        10/16
                    </q-chip>
                </div>
            </q-card-section>
        </q-card>
    </q-page-container>
</template>
