import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Continents } from '../continents';
//import { ListServiceContinents } from './list.service';
import { ListcontinentsService } from './listcontinents.service';

@Injectable({
  providedIn: 'root'
})
export class ListResolverResolver implements Resolve<Continents[]> {
  constructor(private service: ListcontinentsService) { }
  resolve(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): 
    Continents[] | Observable<Continents[]> | 
    Promise<Continents[]> {
    return this.service.listContinent();
  }

}

