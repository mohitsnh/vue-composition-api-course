// stores/counter.js
import { defineStore } from 'pinia'
import { collection, onSnapshot, 
  doc , addDoc , deleteDoc, updateDoc, 
   query, orderBy } 
   from "firebase/firestore";
import { db } from '@/js/firebase'


const collectionReference = collection(db, "notes")
const collectionReferenceQuery = query(collectionReference, orderBy("date","desc"));


export const useStoreNotes = defineStore('storeNotes', {
  state: () => {
    return { 
        notes: [

        ],
        showProgressBar: true
     }
  },
  actions: {
    async getNotes(){
      this.showProgressBar = true
      onSnapshot(collectionReferenceQuery, (querySnapshot) => {
        let notesArray = []
        querySnapshot.forEach((doc) => {
          let note = {
            id: doc.id,
            content: doc.data().content,
            date: doc.data().date
            }
            notesArray.push(note)
        })
          this.notes = notesArray
          this.showProgressBar = false
       
        
      })         
    },
    async addNote(newNoteContent) {
       let dateNow = new Date().getTime()
       let date = dateNow.toString()
       //this.notes.unshift(note)
       await addDoc(collectionReference, {
        content: newNoteContent,
        date
      });
        
    },
    async deleteNote(idToDelete) {
       // this.notes = this.notes.filter(note => { return note.id !== idToDelete})
       await deleteDoc(doc(collectionReference , idToDelete ));
    },
    async updateNotes(id,content){
        // let index = this.notes.findIndex(note => note.id==id)
        // this.notes[index].content = content
        await updateDoc(doc(collectionReference, id), {
          content
        });
    }
  },
  getters: {
    getNoteContent: (state) =>  {
      return (id) => {
        return state.notes.filter(note => {return note.id == id})[0].content
      }
    },
    getNotesCount: (state) => {
      return state.notes.length
    },
    getCharacterCount: (state) => {
      let count = 0;
      state.notes.forEach(note => {
        count += note.content.length
      })
      return count
    }

  }
})