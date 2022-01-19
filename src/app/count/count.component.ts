import { Component, OnInit } from '@angular/core';

import { Section } from '../section';
import { SectionsService } from '../sections.service';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.css']
})
export class CountComponent implements OnInit {

  constructor(
    private sectionService:SectionsService
  ) { }

  ngOnInit(): void {
    this.getCounts();
  }

  sections: Section[] = [];

  getCounts() : void {
    this.sectionService.getCounts()
    .subscribe(sections => this.sections = sections);
  }

}
