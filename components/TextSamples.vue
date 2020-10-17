<template>
  <div class="flex flex-wrap justify-center mt-4 lg:mt-0">
    <TextSample
      text-key="tilos"
    >
      <template v-slot:icon>
        <font-awesome-icon
          class="text-yellow-500"
          icon="sun"
        />
      </template>
    </TextSample>
    <TextSample
      text-key="1990"
    >
      <template v-slot:icon>
        <font-awesome-icon
          class="text-red-500"
          icon="ship"
        />
      </template>
    </TextSample>
    <TextSample
      text-key="dinner"
    >
      <template v-slot:icon>
        <font-awesome-icon
          class="text-gray-500"
          icon="utensils"
        />
      </template>
    </TextSample>
  </div>
</template>

<script lang="ts">
import TextSample from "./TextSample.vue";

export default {
  components: { TextSample },
};
</script>

<style>

</style>
