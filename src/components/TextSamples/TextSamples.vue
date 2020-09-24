<template>
  <div>
    <TextSample
      title="Tilos"
      :text="tilos"
    >
      <template v-slot:icon>
        <font-awesome-icon
          class="text-yellow-400"
          icon="sun"
        />
      </template>
    </TextSample>
  </div>
</template>

<script lang="ts">
import TextSample from "./TextSample.vue";
import { tilos } from "./texts";

export default {
  components: { TextSample },
  data() {
    return {
      tilos,
    };
  },
};
</script>

<style>

</style>
