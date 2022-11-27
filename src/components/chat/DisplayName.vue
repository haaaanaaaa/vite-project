<script setup>
const props = defineProps({
  modelValue: String,
});
const emit = defineEmits(["update:modelValue"]);
</script>

<template>
  <h5 class="card-title">
    <label for="display-name" class="form-label">あなたのお名前</label>
    <input
      id="display-name"
      class="form-control form-control-lg"
      type="text"
      name="displayName"
      :value="props.modelValue"
      @change="(e) => emit('update', e.target.value)"
    />
  </h5>
</template>

<style scoped></style>
