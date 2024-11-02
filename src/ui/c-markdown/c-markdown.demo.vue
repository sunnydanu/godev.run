<script setup lang="ts">
const md = `
# GoDev.Run

## About
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl quis
mollis blandit, nunc nisl aliquam nunc, vitae aliquam nisl nunc vitae nisl.

- Lorem ipsum dolor sit amet, consectetur adipiscing elit.
- Sed euismod, nisl quis mollis blandit, nunc nisl aliquam nunc, vitae aliquam nisl nunc vitae nisl.

[GoDev.Run](https://godev.run)
`;
</script>

<template>
  <c-markdown :markdown="md" />
</template>
