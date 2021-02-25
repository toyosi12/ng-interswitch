# NG INTERSWITCH

[![Issues](	https://img.shields.io/github/issues/toyosi12/ng-interswitch)](https://github.com/toyosi12/laravel-interswitch/issues)
[![Forks](	https://img.shields.io/github/forks/toyosi12/ng-interswitch)](https://github.com/toyosi12/laravel-interswitch/network/members)
[![Stars](	https://img.shields.io/github/stars/toyosi12/ng-interswitch)](https://github.com/toyosi12/laravel-interswitch/stargazers)

> This is an angular library that makes interswitch payments integration very easy.

## INSTALLATION

npm and angular2+ are required

To install the latest version of ng-interswitch, simply run the command:

```sh
npm install --save ng-interswitch
```

## USAGE

### 1. Import the module
Import the module in your `app.module.ts` or any module in which the component is needed like so:

```ts
...
import { NgInterswitchModule } from 'ng-interswitch';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgInterswitchModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

### 2. Implement in your project
The **ng-interswitch** component is used. The are to ways to configure the component.
#### 1 . You can use the component properties directly like so:
```html
<ng-interswitch
  [merchantCode]="'XXXXXXX'"
  [payItemID]="'XXXXXXXXXXXXXXXXXXXXX'"
  [amount]="'1000'"
  [customerEmail]="'toyosioyelayo@gmail.com'"
  [customerName]="'Toyosi Oyelayo'"
  (paymentCallback)="paymentCallback($event)"
  [class]="'btn btn-danger'"
>Make Payment</ng-interswitch>
```

#### 2. If you are like me and you prefer to have the template as clean as possible, you can use the **paymentOptions property like so:
```html
<ng-interswitch
  [paymentOptions]="paymentOptions"
  (paymentCallback)="paymentCallback($event)"
  [class]="'btn btn-danger'"
>Make Payment</ng-interswitch>
```

You can hence define **paymentOptions** in your ts file like so:
```ts
  paymentOptions = {
    merchantCode: 'XXXXXXXXX',
    payItemID: 'XXXXXXXXXXXXXXXXXXXXX',
    amount: 1000,
    customerEmail: 'toyosioyelayo@gmail.com',
    customerName: 'Toyosi Oyelayo'
  }
```
The event **paymentCallback** is raised after a transaction is completed. You can get the result of a transaction from the event handler assigned to it. A sample event handler will be like so:
```ts
  paymentCallback(data){
    console.log('data: ', data);
  }
```

## AVAILABLE OPTIONS

|Field Name                   | Data Type           | Required            | Default Value       | Description         |
|-----------------------|----------------|---------------------|---------------------|---------------------|
|  `merchantCode `            | `string`       | true                |  undefined          | This can be found on your dashboard
|  `PayItemID `             | `string`       | true                |  undefined          | This can be found on your dashboard.
|  `payItemName`                | `string`       | false                |  undefined          | This is the name of the item the customer is paying for
|  `amount`                | `number`       | true                |  undefined          | This is the total amount being paid (in kobo). Don't forget to add the transaction charges as appropriate
|  `customerEmail`           | `string`     | true                |  undefined          | The email of the customer
|  `customerName`           | `string`       | false               |  ''                | The name of the customer
|  `customerID`              | `string`       | false               |  ''          | ID of the customer
|  `style`              | `object`       | false               |  {}          | CSS stylings, eg ```{color: '#000000'}``` 
|  `class`               | `string`       | false               |  undefined          | Text output of the component
|  `currency`           | `number`       | false               |  566              | ISO 4217 code of the currency being used
|  `siteRedirectURL`               | `string`       | false               |  current URL                | The redirect URL after a transaction is completed
|  `paymentMode`           | `string`       | false               |  "TEST"                 | The payment mode. This can be 'LIVE' or 'TEST'
|  `paymentOptions`     | `object`     | false               |  {}          | This is an object that can take all other payment options
|   `transactionReference` | `string` | false | randomly generated string | This is a unique identifier for a transaction. It is handled by the package, but you can decide to create yours

## TEST CARDS

| Type  |   Card Number |   Expiry Date |   Pin |   CVV |   OTP |
--------|---------------|---------------|-------|-------|-------|
| Verve  |   5060990580000217499 |   03/50 |   1111 |   111 |   123456 |
| Visa  |   4000000000000002 |   03/50 |   1234 |   111 |    |

## CONTRIBUTING
Please feel free to fork this package and contribute by submitting a pull request to enhance the functionalities.

 ## Star
 I'd love you star this repo. Also [follow me on twitter](https://twitter.com/dev_toyosi)
 
 ## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
