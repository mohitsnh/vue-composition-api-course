<template>
  <div class="notes">
    <AddEditNote v-model="notesValue" ref="addEditNoteRef">
      <template #buttons>
        <button @click="addNote" class="button is-link has-background-success" :disabled="!notesValue">
            Add New Note
          </button>
      </template>
    </AddEditNote>
    <Note v-for="note in storeNotes.notes"
      :key="note.id"
      :note="note"
      />

  </div>
</template>
<script setup>
//imports
import { ref } from 'vue';
import Note from '@/components/Notes/Note.vue';
import AddEditNote from '@/components/Notes/AddEditNote.vue';
import { useStoreNotes} from '@/stores/storeNotes';
// ref variables
const addEditNoteRef = ref(null)
const notesValue = ref('')
//
const storeNotes = useStoreNotes()

const addNote = () => {
  
  storeNotes.addNote(notesValue.value)
  notesValue.value = ''
  addEditNoteRef.value.focusTextarea()
}

</script>