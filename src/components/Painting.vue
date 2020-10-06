<template>
  <div class="w-48 mt-2 h-40 z-0 absolute inset-x-0 top-1 mx-auto">
    <div
      :class="[
        'w-12 h-12 border-2 border-solid border-gray-600 absolute',
        'z-0 top-4 left-34 rotate-45 m-auto left-0 right-0',
      ]"
    />
    <div
      :class="[
        'shadow-lg absolute w-full mt-6 border-8 border-solid',
        'bg-white border-frame h-full',
      ]"
    >
      <img
        src="@/assets/images/painting-by-copywriter.png"
        class="p-3 h-full shadow-md"
        alt="Painting by copywriter"
      />
    </div>
  </div>
</template>

<style scoped>
.border-frame {
  border-top-color: #b89675;
  border-right-color: #7b654f;
  border-bottom-color: #7b654f;
  border-left-color: #a67c52;
}

.rotate-45 {
  transform: rotate(45deg);
}
</style>
