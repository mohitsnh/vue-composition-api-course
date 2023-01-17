<template>
  <div class="notes">

    <div class="card has-background-success-dark p-4 mb-5">
      <div class="field">
        <div class="control">
          <textarea
          v-model = "notesValue"
            class="textarea"
            placeholder="Add a new note"
            ref="notesRef"
          />
        </div>
      </div>

      <div class="field is-grouped is-grouped-right">
        <div class="control">
          <button @click="addNote" class="button is-link has-background-success" :disabled="!notesValue">
            Add New Note
          </button>
        </div>
      </div>
    </div>
    <Note v-for="note in notes"
      :key="note.id"
      :note="note"
      @deleteClick = "deleteNote"/>

  </div>
</template>
<script setup>
//imports
import { ref } from 'vue';
import Note from '@/components/Notes/Note.vue';
// ref variables
const notesRef = ref(null)
const notesValue = ref('')
const notes = ref([
  {
    id: '1',
    content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem ipsa commodi sint ut ullam culpa nulla molestiae sunt quia qui maxime, enim quasi officiis aperiam fugit, corrupti omnis, eaque animi."
  },
  {
    id:  '2',
    content: "This is a shorter note!"
  }
])
const addNote = () => {
  let dateNow = new Date().getTime()
  let id = dateNow.toString()
  let note = {
    id,
    content: notesValue.value
  }
  notes.value.unshift(note)
  notesValue.value = ''
  notesRef.value.focus()
}
const deleteNote = idToDelete => {
  notes.value = notes.value.filter(note => { return note.id !== idToDelete})
}
</script>