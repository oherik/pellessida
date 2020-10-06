<template>
  <div class="flex flex-wrap justify-center mt-4 md:mt-0">
    <TextSample
      title="Båtluff i Grekland"
      :text="tilos"
    >
      <template v-slot:icon>
        <font-awesome-icon
          class="text-yellow-500"
          icon="sun"
        />
      </template>
    </TextSample>
    <TextSample
      title="På kryssning 1990"
      :text="ferry"
    >
      <template v-slot:icon>
        <font-awesome-icon
          class="text-red-500"
          icon="ship"
        />
      </template>
    </TextSample>
    <TextSample
      title="En underlig middag – för vissa"
      :text="dinner"
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
import { tilos, dinner, ferry } from "../assets/texts";
import TextSample from "../components/TextSample.vue";

export default {
  components: { TextSample },
  data() {
    return {
      tilos,
      dinner,
      ferry,
    };
  },
};
</script>

<style>

</style>
