import { Character } from './../character';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  characteres: Array<Character> = [];

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.list();
  }

  list(): any {
    return this.activatedRoute.data.subscribe(({ data }) => {
      this.characteres = data;
    })
  }
}
