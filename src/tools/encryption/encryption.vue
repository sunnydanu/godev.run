<script setup lang="ts">
import { computed, ref } from 'vue';
import { AES, RC4, Rabbit, TripleDES, enc } from 'crypto-js';
import { computedCatch } from '@/composable/computed/catchedComputed';

const algos = { AES, TripleDES, Rabbit, RC4 };

const cypherInput = ref('Hello World!');
const cypherAlgo = ref<keyof typeof algos>('AES');
const cypherSecret = ref('16bit secret key');
const cypherInitializationVector = ref('1234567812345678');

const cypherOutput = computed(() => {
  let cfg = {};

  if (cypherAlgo.value === 'AES' || cypherAlgo.value === 'TripleDES') {
    cfg = { iv: enc.Utf8.parse(cypherInitializationVector.value) };
  }
  return algos[cypherAlgo.value].encrypt(cypherInput.value, enc.Utf8.parse(cypherSecret.value), cfg).toString();
});

const decryptInput = ref('DX+W8WBHbt08XoJNV8bcoQ==');
const decryptAlgo = ref<keyof typeof algos>('AES');
const decryptSecret = ref('16bit secret key');
const decryptInitializationVector = ref('1234567812345678');
const [decryptOutput, decryptError] = computedCatch(() => {
  let cfg = {};
  if (decryptAlgo.value === 'AES' || decryptAlgo.value === 'TripleDES') {
    cfg = { iv: enc.Utf8.parse(decryptInitializationVector.value) };
  }
  return algos[decryptAlgo.value]
    .decrypt(decryptInput.value, enc.Utf8.parse(decryptSecret.value), cfg)
    .toString(enc.Utf8);
}, {
  defaultValue: '',
  defaultErrorMessage: 'Unable to decrypt your text',
});
</script>

<template>
  <c-card title="Encrypt">
    <div flex gap-3>
      <c-input-text
        v-model:value="cypherInput"
        label="Your text:"
        placeholder="The string to cypher"
        rows="4"
        multiline
        raw-text
        monospace
        autosize
        flex-1
      />
      <div flex flex-1 flex-col gap-2>
        <c-input-text v-model:value="cypherSecret" label="Your secret key:" clearable raw-text />

        <c-select
          v-model:value="cypherAlgo"
          label="Encryption algorithm:"
          :options="Object.keys(algos).map((label) => ({ label, value: label }))"
        />
      </div>
    </div>
    <c-input-text
      label="Your text encrypted:"
      :value="cypherOutput"
      rows="3"
      placeholder="Your string hash"
      multiline
      monospace
      readonly
      autosize
      mt-5
    />
  </c-card>
  <c-card title="Decrypt">
    <div flex gap-3>
      <c-input-text
        v-model:value="decryptInput"
        label="Your encrypted text:"
        placeholder="The string to cypher"
        rows="4"
        multiline
        raw-text
        monospace
        autosize
        flex-1
      />
      <div flex flex-1 flex-col gap-2>
        <c-input-text v-model:value="decryptSecret" label="Your secret key:" clearable raw-text />

        <c-select
          v-model:value="decryptAlgo"
          label="Encryption algorithm:"
          :options="Object.keys(algos).map((label) => ({ label, value: label }))"
        />
      </div>
    </div>
    <c-alert v-if="decryptError" type="error" mt-12 title="Error while decrypting">
      {{ decryptError }}
    </c-alert>
    <c-input-text
      v-else
      label="Your decrypted text:"
      :value="decryptOutput"
      placeholder="Your string hash"
      rows="3"
      multiline
      monospace
      readonly
      autosize
      mt-5
    />
  </c-card>
</template>
