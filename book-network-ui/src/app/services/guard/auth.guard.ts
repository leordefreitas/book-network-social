import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {TokenService} from "../token/token.service";

export const authGuard: CanActivateFn = () => {
  const tokenService = inject(TokenService);
  const router = inject(Router);
  if(tokenService.isTokenNotValid()) {
    router.navigate(["login"])
    return false;
  }
  return true;
};
