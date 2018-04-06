import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';

export abstract class Logger {

  abstract get LogMessage(): Observable<any>;

  info: any;
  warn: any;
  error: any;
}

@Injectable()
export abstract class LoggerService implements Logger {

  abstract get LogMessage(): Observable<any>;

  info: any;
  warn: any;
  error: any;

  // log(type: string, args?: any): void {}
}

export let isDebugMode = !environment.production.valueOf();

const noop = void 0;

@Injectable()
export class ConsoleLoggerService implements Logger {
  private _LogMessage = new Subject<any>();
  get LogMessage() {
    return this._LogMessage.asObservable();
  }

  private logFn: Function = (t, p) => this.log(t, p);
  private infoFn: Function = p => this.logFn('info', p);
  private warnFn: Function = p => this.logFn('warn', p);
  private errorFn: Function = p => this.logFn('error', p);

  get info() {
    return this.infoFn;
  }

  get warn() {
    return this.warnFn;
  }

  get error() {
    return this.errorFn;
  }

  log(type: string, args?: any): void {
    if (isDebugMode) {
      const logFn: Function = (console)[type] || console.log || noop;
      logFn.apply(console, [args]);
      this._LogMessage.next({ type: type, payload: args });
    }
  }
}


