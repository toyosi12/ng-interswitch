import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgInterswitchService } from './ng-interswitch.service';
import { IPaymentRequest } from './IPaymentRequest';
import { IPaymentOptions } from './IPaymentOptions';
interface _Window extends Window{
  webpayCheckout: (paymentRequest: IPaymentRequest) => void;
}

declare var window: _Window;

@Component({
  selector: 'ng-interswitch',
  template: `
   <button [ngClass]="class" [ngStyle]="style" (click)="pay()"><ng-content></ng-content></button>
  `,
  styles: [
  ]
})
export class NgInterswitchComponent implements OnInit {

  @Input() payItemID: string;
  @Input() payItemName: string;
  @Input() transactionReference: string;
  @Input() amount: number;
  @Input() currency: number;
  @Input() customerName: string;
  @Input() customerEmail: string;
  @Input() customerID: string;
  @Input() merchantCode: string;
  @Input() siteRedirectURL: string;
  @Input() tokeniseCard: boolean;
  @Input() accessToken: boolean;
  @Input() paymentMode: string;
  @Input() paymentOptions: IPaymentOptions;
  @Input() class: string;
  @Input() style: object;
  @Output() paymentCallback: EventEmitter<any> = new EventEmitter<any>();

  constructor(private _ngInterswitchService: NgInterswitchService) { }

  ngOnInit(): void {
  }

  generateTransactionReference(): string{
    let transactionReference = '';
    let characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    for ( var i = 0; i < 10; i++ ) {
      transactionReference += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return transactionReference;
  }

  buildPaymentOptions(paymentOptions: IPaymentOptions): IPaymentRequest{
    let _paymentOptions: IPaymentRequest;
    _paymentOptions =  {
        pay_item_id: paymentOptions.payItemID,
        pay_item_name: paymentOptions.payItemName,
        txn_ref: paymentOptions.transactionReference || this.generateTransactionReference(),
        amount: paymentOptions.amount,
        currency: paymentOptions.currency || 566,
        cust_name: paymentOptions.customerName || '',
        cust_email: paymentOptions.customerEmail,
        cust_id: paymentOptions.customerID || '',
        merchant_code: paymentOptions.merchantCode || '',
        site_redirect_url: paymentOptions.siteRedirectURL || location.href,
        mode: paymentOptions.paymentMode || 'TEST',
        onComplete: null
    }
    return _paymentOptions;
  }

  validateOptions(paymentOptions: IPaymentRequest){
    if(!this.paymentCallback.observers.length){
      return 'NG-INTERSWITCH: A callback function is expected';
    }

    if(!paymentOptions.amount){
      return 'NG-INTERSWITCH: Amount is required';
    }

    if(!paymentOptions.merchant_code){
      return 'NG-INTERSWITCH: Merchant Code is required';
    }

    if(!paymentOptions.txn_ref){
      return 'NG-INTERSWITCH: Transaction reference is required';
    }

    if(!paymentOptions.cust_email){
      return 'NG-INTERSWITCH: Email is required';
    }

    if(!paymentOptions.pay_item_id){
      return 'NG-INTERSWITCH: Pay Item ID is required';
    }

    return '';
  }

  async pay(){
    let errorMessage = '';
    let paymentRequest: IPaymentRequest;
    if(this.paymentOptions !== undefined){
      /**
       * When payment options object is used
       */
      paymentRequest = this.buildPaymentOptions(this.paymentOptions);
    }else{
      /**
       * When component properties are used
       */
      paymentRequest = this.buildPaymentOptions(this);
    }

    errorMessage = this.validateOptions(paymentRequest);

    if(errorMessage !== ''){
      console.error(errorMessage);
      return errorMessage;
    }
    
    paymentRequest.onComplete = (...response) => {
      this.paymentCallback.emit(...response);
    };


    
    await this._ngInterswitchService.loadAPI();

    window.webpayCheckout(paymentRequest);
  }

}
