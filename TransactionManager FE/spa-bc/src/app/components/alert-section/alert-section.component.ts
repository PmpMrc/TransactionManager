import { Component, OnDestroy, Input } from '@angular/core';
import { AlertService, AlertMessage } from 'src/app/services/alert.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-alert-section',
  templateUrl: './alert-section.component.html',
  styleUrls: ['./alert-section.component.css']
})
export class AlertSectionComponent implements OnDestroy {

message: string;
errorSection = false;
successSection = false;
subscription: Subscription;

  constructor(private alertService: AlertService) {
    this.subscription = this.alertService.getAlert().subscribe( (alert: AlertMessage) => {
      if (alert) {
        if (alert.alertType === 'Success') {
          this.successSection = true;
          this.errorSection = false;
        } else {
          this.successSection = false;
          this.errorSection = true;
        }
        this.message = alert.message;
      } else {
        this.successSection = false;
        this.errorSection = false;
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }



}
