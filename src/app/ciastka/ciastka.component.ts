import { Component, OnInit } from '@angular/core';
import { CiastkaService } from '../core/services/ciastka.service';

@Component({
  selector: 'app-ciastka',
  templateUrl: './ciastka.component.html',
  styleUrls: ['./ciastka.component.scss']
})
export class CiastkaComponent implements OnInit {

  constructor(private ciastkaService: CiastkaService) { }

  ngOnInit() {
    this.ciastkaService.getCiatka().subscribe(console.log);
  }

}
