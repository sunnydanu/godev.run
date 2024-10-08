<script setup lang="ts">
import { onMounted, ref } from 'vue';

const peerShareContainer = ref<HTMLElement | null>(null);
const route = useRoute(); // Access the current route

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
  const isReceive = route.path === '/peer-share/receive';
  const htmlFile = isReceive && route.query.s ? '/receive/' : '/';

  // Fetch the React index.html
  fetch(`/peer-share${htmlFile}index.html`)
    .then(response => response.text())
    .then((html) => {
      if (peerShareContainer.value) {
        // Insert the HTML into the container
        peerShareContainer.value.innerHTML = html;
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
  <div ref="peerShareContainer" />
</template>
