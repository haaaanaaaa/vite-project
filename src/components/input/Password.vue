<script setup>
const props = defineProps({
  id: String,
  title: String,
  modelValue: String,
});
const emit = defineEmits(["update:modelValue"]);
</script>

<template>
  <div class="form-outline mb-4">
    <input
      type="password"
      :id="props.id"
      :value="modelValue"
      @input="($event) => emit('update:modelValue', $event.target.value)"
      class="form-control form-control-lg"
    />
    <label class="form-label" :for="props.id">{{ props.title }}</label>
  </div>
</template>

<style scoped></style>
