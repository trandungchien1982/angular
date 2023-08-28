import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }

  info(msg: string) {
    console.log('[INFO] ' + new Date() + ' ' + msg);
  }

  warn(msg: string) {
    console.log('[WARN] '  + new Date() + ' ' + msg);
  }

  error(msg: string) {
    console.log('[ERROR] '  + new Date() + ' ' + msg);
  }
}
