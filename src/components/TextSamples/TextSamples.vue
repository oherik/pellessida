<template>
  <div>
    <TextSample
      title="Tilos"
    >
      <template v-slot:icon>
        <font-awesome-icon
          class="text-yellow-400"
          icon="sun"
        />
      </template>
    </TextSample>
    <p
      v-for="paragraph in tilos"
      :key="paragraph[0]"
    >
      {{ paragraph }}
    </p>
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
