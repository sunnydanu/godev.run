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
  fetch(`/peer_share${htmlFile}index.html`)
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
  <div ref="peerShareContainer" class="peerShareContainer" />
</template>

<style lang="less">
.peerShareContainer button.btn.btn-secondary,.peerShareContainer label.btn{
    line-height: 1;
    font-family: inherit;
    font-size: 14px;
    border: none;
    text-align: center;
    cursor: pointer;
    text-decoration: none;
    font-weight: 400;
    color:  #ffffffd1;
    padding: 0 14px;
    transition: background-color cubic-bezier(0.4, 0, 0.2, 1) 0.3s;
    background-color: rgba(255, 255, 255, 0.08);
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;

}

.peerShareContainer button.btn.btn-primary{
    line-height: 1;
    font-family: inherit;
    font-size: 14px;
    border: none;
    text-align: center;
    cursor: pointer;
    text-decoration: none;
    font-weight: 400;
    color: #1ea54c;
    padding: 0 14px;
    transition: background-color cubic-bezier(0.4, 0, 0.2, 1) 0.3s;
    background-color: #18a0582f;
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;

}
 .peerShareContainer .alert.alert-info, .peerShareContainer .alert.alert-success {
    line-height: 1;
    font-family: inherit;
    font-size: 14px;
    border: none;
    text-align: center;
    cursor: pointer;
    text-decoration: none;
    font-weight: 400;
    color: #1ea54c;
    transition: background-color cubic-bezier(0.4, 0, 0.2, 1) 0.3s;
    background-color: #18a0582f;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;

}

.peerShareContainer button.btn.btn-secondary:not(.disabled):active,
.peerShareContainer button.btn.btn-ghost:active,
.peerShareContainer label.btn:active {
    background-color: rgba(255, 255, 255, 0.24);
}

.peerShareContainer .btn:not(.btn-error):hover, .peerShareContainer .btn:focus,
.peerShareContainer .input:hover, .peerShareContainer input:focus,
.peerShareContainer .select:hover, .peerShareContainer .select:focus ,
.peerShareContainer option:hover,.peerShareContainer option:focus
  {
    outline: 1px solid #1ea54c;
}
.peerShareContainer button.btn.btn-secondary:focus,
.peerShareContainer button.btn.btn-secondary:hover,
.peerShareContainer button.btn.btn-ghost:focus,
.peerShareContainer button.btn.btn-ghost:hover,
.peerShareContainer label.btn:hover{
   background-color: rgba(255, 255, 255, 0.12)
}

.peerShareContainer button.btn.btn-primary:hover,
.peerShareContainer button.btn.btn-primary:focus,
.peerShareContainer .alert.alert-success:focus,
.peerShareContainer .alert.alert-info:focus{
    outline: 1px solid #1ea54c;
}

.peerShareContainer button.btn.btn-primary:not(.disabled):active,
.peerShareContainer button.btn.btn-primary:not(.disabled):hover,
.peerShareContainer .alert.alert-success:hover,
.peerShareContainer .alert.alert-info:hover{
    background-color: #00823a2f;
}

div.indicator .btn{
  background-color: inherit,
}

.peerShareContainer .btn.btn-error ,.peerShareContainer .alert.alert-error{
    background-color: #773138;
    color: #ff6877;
    outline-color: #773138;
    border-color: #773138;
}

.peerShareContainer .btn.btn-error:hover, .peerShareContainer .btn.btn-error:focus, .peerShareContainer .btn.btn-error:active{
    background-color: #772931;
    outline-color: #ff6877;
    border-color: #ff6877;
}
.peerShareContainer .border-black{
  border-color: #1ea54c;
}
</style>
