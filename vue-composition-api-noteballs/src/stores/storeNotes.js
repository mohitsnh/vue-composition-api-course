// stores/counter.js
import { defineStore } from 'pinia'

export const useStoreNotes = defineStore('storeNotes', {
  state: () => {
    return { 
        notes: [
            {
            id: '1',
            content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem ipsa commodi sint ut ullam culpa nulla molestiae sunt quia qui maxime, enim quasi officiis aperiam fugit, corrupti omnis, eaque animi."
            },
            {
            id:  '2',
            content: "This is a note!"
            }
        ]
     }
  },
  actions: {
    addNote(newNoteContent) {
        let dateNow = new Date().getTime()
        let id = dateNow.toString()
        let note = {
            id,
            content: newNoteContent
        }
        this.notes.unshift(note)
    },
    deleteNote(idToDelete) {
        this.notes = this.notes.filter(note => { return note.id !== idToDelete})
    },
    updateNotes(id,content){
        let index = this.notes.findIndex(note => note.id==id)
        this.notes[index].content = content
    }
  },
  getters: {
    getNoteContent: (state) =>  {
      return (id) => {
        return state.notes.filter(note => {return note.id == id})[0].content
      }
    }
  }
})