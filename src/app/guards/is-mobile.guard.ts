import { Injectable } from '@angular/core';
import {
  CanLoad,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class IsMobileGuard implements CanLoad {
  canLoad(): boolean {
    return window.innerWidth < 992;
  }
}
