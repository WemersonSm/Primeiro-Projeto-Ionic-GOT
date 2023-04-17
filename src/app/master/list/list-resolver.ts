import { ListService } from './list.service';
import { Character } from './../character';
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ListResolver implements Resolve<Character[]> {

    constructor(private service: ListService) { }

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot):
        Character[] | Observable<Character[]> |
        Promise<Character[]> {
        return this.service.list();
    }

}
