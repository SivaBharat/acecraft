
import { Component,OnInit } from '@angular/core';
import { ServiceService } from 'src/services/service.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  
  notes:any[]=[]
  constructor(private service:ServiceService) {}
  ngOnInit() {
    this.service.getNotes().subscribe((res) => {
      this.notes = res;
    });
  }  
}
