import { Injectable } from '@angular/core';
import { IPaymentRequest } from './IPaymentRequest';
interface _Window extends Window {
  webpayCheckout: (paymentRequest: IPaymentRequest) => void;

}
declare var window: _Window;

@Injectable({
  providedIn: 'root'
})
export class NgInterswitchService {

  constructor() { }

  async loadAPI(): Promise<void>{
    return new Promise(resolve => {
      const script = window.document.createElement('script');
      window.document.head.appendChild(script);
      const onLoadFunc = () => {
        script.removeEventListener('load', onLoadFunc);
        resolve();
      };
      script.addEventListener('load', onLoadFunc);
      script.setAttribute('src', 'https://qa.interswitchng.com/collections/public/javascripts/inline-checkout.js');
    });
  }
}
