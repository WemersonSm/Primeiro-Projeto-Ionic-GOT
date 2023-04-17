import { Continents } from './../continents';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  contients: Array<Continents> = []; 
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.list();
  }

  list(): any {
    return this.activatedRoute.data.subscribe(({ data }) => {
      this.contients = data;
      console.log(data)
    })
  }

}
