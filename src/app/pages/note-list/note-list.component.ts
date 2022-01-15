import {
  animate,
  query,
  stagger,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/shared/note.model';
import { NotesService } from 'src/app/shared/notes.service';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.scss'],
  animations: [
    trigger('itemAnim', [
      //entry animation
      transition('void=>*', [
        style({
          height: 0,
          opacity: 0,
          transform: 'scale(0.85)',
          'margin-bottom': 0,

          paddingTop: 0,
          paddingBottom: 0,
          paddingRight: 0,
          paddingLeft: 0,
        }),
        animate(
          '50ms',
          style({
            height: '*',
            'margin-bottom': 0,
            paddingTop: '*',
            paddingBottom: '*',
            paddingRight: '*',
            paddingLeft: '*',
          })
        ),
        animate(68),
      ]),

      transition('*=>void', [
        animate(
          '50ms',
          style({
            transform: 'scale(1.05)',
          })
        ),
        animate(
          '50ms',
          style({
            transform: 'scale(1)',
            opacity: 0.75,
          })
        ),
        animate(
          '50ms ease-out',
          style({
            transform: 'scale(0.68)',
            opacity: 0,
          })
        ),
        animate(
          '150ms ease-out',
          style({
            height: 0,
            transform: 'scale(0.85)',
            'margin-bottom': 0,
            paddingTop: 0,
            paddingBottom: 0,
            paddingRight: 0,
            paddingLeft: 0,
          })
        ),
      ]),
    ]),
    trigger('listAnim', [
      transition('*=>*', [
        query(
          ':enter',
          [
            style({
              opacity: 0,
              height: 0,
            }),
            stagger(100, [animate('0.3s ease')]),
          ],
          { optional: true }
        ),
      ]),
    ]),
  ],
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
