<script setup lang="ts">
import { compareSync, hashSync } from 'bcryptjs';
import { useCopy } from '@/composable/copy';

const input = ref('');
const saltCount = ref(10);
const hashed = computed(() => hashSync(input.value, saltCount.value));
const { copy } = useCopy({ source: hashed, text: 'Hashed string copied to the clipboard' });

const compareString = ref('');
const compareHash = ref('');
const compareMatch = computed(() => compareSync(compareString.value, compareHash.value));
</script>

<template>
  <n-card title="Hash">
    <n-form label-width="120">
      <n-form-item label="Your string: " label-placement="left">
        <n-input
          v-model:value="input"
          placeholder="Your string to bcrypt..."
          autocomplete="off"
          autocorrect="off"
          autocapitalize="off"
          spellcheck="false"
        />
      </n-form-item>
      <n-form-item label="Salt count: " label-placement="left">
        <n-input-number v-model:value="saltCount" placeholder="Salt rounds..." :max="10" :min="0" w-full />
      </n-form-item>
      <n-input :value="hashed" readonly style="text-align: center" />
    </n-form>
    <br>
    <n-space justify="center">
      <n-button secondary @click="copy">
        Copy hash
      </n-button>
    </n-space>
  </n-card>

  <n-card title="Compare string with hash">
    <n-form label-width="120">
      <n-form-item label="Your string: " label-placement="left">
        <n-input
          v-model:value="compareString"
          placeholder="Your string to compare..."
          autocomplete="off"
          autocorrect="off"
          autocapitalize="off"
          spellcheck="false"
        />
      </n-form-item>
      <n-form-item label="Your hash: " label-placement="left">
        <n-input
          v-model:value="compareHash"
          placeholder="Your hash to compare..."
          autocomplete="off"
          autocorrect="off"
          autocapitalize="off"
          spellcheck="false"
        />
      </n-form-item>
      <n-form-item label="Do they match ? " label-placement="left" :show-feedback="false">
        <n-tag v-if="compareMatch" :bordered="false" type="success" round>
          Yes
        </n-tag>
        <n-tag v-else :bordered="false" type="error" round>
          No
        </n-tag>
      </n-form-item>
    </n-form>
  </n-card>
</template>
