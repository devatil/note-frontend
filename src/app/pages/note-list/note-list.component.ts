import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/shared/note.model';
import { NotesService } from 'src/app/shared/notes.service';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.scss'],
})
export class NoteListComponent implements OnInit {
  notes: Note[] = new Array<Note>();

  cardTitle = 'Abc';
  constructor(private noteServise: NotesService) {}

  ngOnInit(): void {
    this.notes = this.noteServise.getAll();
  }

  deleteNote(id: number) {
    this.noteServise.delete(id);
  }
}
