<template>
  <div class="stats">
    <table class="table is-fullwidth">
      <thead>
      <tr>
        <th>Stats</th>
        <th>Value</th>
      </tr>
      </thead>

      <tbody>
        <tr>
          <td>Number of Notes</td>
          <td>{{storeNotes.getNotesCount}}</td>
      </tr>
      <tr>
          <td>Number of Charcters in all notes</td>
          <td>{{storeNotes.getCharacterCount}}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
  import { useStoreNotes } from '../stores/storeNotes';
  const storeNotes = useStoreNotes()
</script>