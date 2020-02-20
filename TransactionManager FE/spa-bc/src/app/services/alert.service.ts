import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';


export interface AlertMessage {
  alertType: string;
  message: string;
}


@Injectable({
  providedIn: 'root'
})
export class AlertService {

  private subject = new Subject<any>();

  sendAlert(tipoAlert: string, messaggio: string) {
    const alertMessage: AlertMessage = {
      alertType: tipoAlert,
      message: messaggio
    };
    this.subject.next(alertMessage);
  }

  eraseAlert() {
    this.subject.next();
  }

  getAlert(): Observable<any> {
    return this.subject.asObservable();
  }

}
