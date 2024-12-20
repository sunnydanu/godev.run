<script setup lang="ts">
import InputCopyable from '../../components/InputCopyable.vue';
import {
  convertMacCISCO, convertMacCanonical,
  convertMacCanonicalIEEE, convertMacCanonicalIETF,
  convertMacToEUI64CISCO, convertMacToEUI64CanonicalIEEE,
  convertMacToEUI64CanonicalIETF, convertMacToLinkLocalIPv6,
  convertMacToNumber,
} from './mac-address-converter.service';

const input = ref('AA:BB:CC:DD:EE:FF');

const formats = computed(() => [
  {
    label: 'Canonical IETF Format:',
    value: convertMacCanonicalIETF(input.value),
  },
  {
    label: 'Canonical Format:',
    value: convertMacCanonical(input.value),
  },
  {
    label: 'Canonical IEEE Format:',
    value: convertMacCanonicalIEEE(input.value),
  },
  {
    label: 'Cisco:',
    value: convertMacCISCO(input.value),
  },
  {
    label: 'Hex:',
    value: convertMacToNumber(input.value).toString(16),
  },
  {
    label: 'Decimal:',
    value: convertMacToNumber(input.value).toString(10),
  },
  {
    label: 'EUI-64 Canonical IETF Format:',
    value: convertMacToEUI64CanonicalIETF(input.value, false),
  },
  {
    label: 'EUI-64 Canonical IEEE Format:',
    value: convertMacToEUI64CanonicalIEEE(input.value, false),
  },
  {
    label: 'EUI-64 Cisco:',
    value: convertMacToEUI64CISCO(input.value, false),
  },
  {
    label: 'EUI-64 IPv6 Canonical IETF Format:',
    value: convertMacToEUI64CanonicalIETF(input.value, true),
  },
  {
    label: 'EUI-64 IPv6 Canonical IEEE Format:',
    value: convertMacToEUI64CanonicalIEEE(input.value, true),
  },
  {
    label: 'EUI-64 IPv6 Cisco:',
    value: convertMacToEUI64CISCO(input.value, true),
  },
  {
    label: 'Link-Local IPv6:',
    value: convertMacToLinkLocalIPv6(input.value),
  },
]);

const inputLabelAlignmentConfig = {
  labelPosition: 'left',
  labelWidth: '120px',
  labelAlign: 'right',
};
</script>

<template>
  <c-card>
    <c-input-text
      v-model:value="input"
      label="MAC address:"
      size="large"
      placeholder="Type a MAC address"
      clearable
      autocomplete="off"
      autocorrect="off"
      autocapitalize="off"
      spellcheck="false"
      mb-5
    />

    <div my-16px divider />

    <InputCopyable
      v-for="format in formats"
      :key="format.label"
      :value="format.value"
      :label="format.label"
      v-bind="inputLabelAlignmentConfig"
      mb-1
    />
  </c-card>
</template>
