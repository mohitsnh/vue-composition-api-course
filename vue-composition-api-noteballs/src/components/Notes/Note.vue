<template>
    <div
      class="card mb-4"
    >
      <div class="card-content">
        <div class="content">
          {{ note.content }}
        </div>
        <div class="has-text-right has-text-grey-light mt-2">
        <small>{{ characterLength }}</small>
        </div>
      </div>
      <footer class="card-footer">
        <a href="#" class="card-footer-item">Edit</a>
        <a  @click.prevent="handleDeleteClicked" href="#" class="card-footer-item">Delete</a>
      </footer>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { defineEmits } from 'vue';

const emit = defineEmits(['deleteClick'])
const props = defineProps({
    note: {
        type: Object,
        required: true
    }
})
const characterLength = computed( ()=>{
  let length = props.note.content.length
  let description = length>1 ? 'charachters' : 'charachter'
  return `${length} ${description}`
}
)

const handleDeleteClicked = () => {
  emit("deleteClick", props.note.id)
} 
</script>