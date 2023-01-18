<template>
    <div class="card has-background-success-dark p-4 mb-5">
      <div class="field">
        <div class="control">
          <textarea
            class="textarea"
            v-model = "modelValue"
            placeholder="Add a new note"
            ref="textareaRef"
            @input="$emit('update:modelValue',modelValue)"
          />
        </div>
      </div>

      <div class="field is-grouped is-grouped-right">
        <div class="control">
            <slot name="buttons"/>
        </div>
      </div>
    </div>
</template>

<script setup>
import {ref} from 'vue';
const props = defineProps({
    modelValue: {
        type: String,
        required: true
    }
})
const emit = defineEmits(['update:modelValue'])
//
const textareaRef = ref(null)
// focus text area
const focusTextarea = () => {
    textareaRef.value.focus()
}

defineExpose({
    focusTextarea
})
</script>