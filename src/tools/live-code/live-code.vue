<script setup lang="ts">
import { onMounted, ref } from 'vue';

const liveCodeContainer = ref<HTMLElement | null>(null);

function executeScripts(html: string) {
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = html;

  const scripts = tempDiv.getElementsByTagName('script');
  for (const scriptElement of scripts) {
    const script = document.createElement('script');
    if (scriptElement.src) {
      // If the script has a src, set it and load it
      script.src = scriptElement.src;

      document.body.appendChild(script);
    }
    else {
      // If it's an inline script, execute it
      script.text = scriptElement.innerHTML;
      document.body.appendChild(script);
    }
  }
}
onMounted(() => {
  // Determine which HTML file to load based on the route and query parameters

  // Fetch the React index.html
  fetch('/livecodes/index.html')
    .then(response => response.text())
    .then((html) => {
      if (liveCodeContainer.value) {
        // Insert the HTML into the container
        liveCodeContainer.value.innerHTML = html;
        // Load React scripts dynamically

        executeScripts(html);
      }
    })
    .catch((error) => {
      console.error('Error loading React app:', error);
    });
});
</script>

<template>
  <div id="liveCodeContainer" ref="liveCodeContainer" />
</template>

<style lang="less" scoped>
#liveCodeContainer {
  height: 100vh;
  flex-grow: 1;
}
</style>
