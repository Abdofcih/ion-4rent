import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanLoad, Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad  {
  constructor(private userService:UserService,private router: Router){}
  canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean{
    let url: string = route.path;
    console.log('Url:'+ url);

    if(this.userService.logedUser)
      return true;
      
      this.router.navigate(['/','login']);
      return false;
      
  }
}
