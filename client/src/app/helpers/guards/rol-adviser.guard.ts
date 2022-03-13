import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SecurityService } from 'src/app/services/security.service';

@Injectable({
  providedIn: 'root'
})
export class RolAdviserGuard implements CanActivate {
  constructor(private secService: SecurityService, private route: Router){

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (this.secService.getRol() == 2 || this.secService.getRol() == 3) {
      return true;
    } else {
      this.route.navigate(['/home'])
      return false
    }
  }

}
