import { Directive, HostBinding, Input, OnInit } from '@angular/core';

enum CardType {
  VISA = 'visa',
  MASTERCARD = 'mastercard',
  UNKNOWN = 'unknown'

}

@Directive({
  selector: '[appCardType]'
})
export class CardTypeDirective implements OnInit {
  @Input() set cardNumber(cardNumber: string) {
    this.imageSrc = `assets/card-types/${this.getCardType(cardNumber)}.png`
  };


  @HostBinding('src') imageSrc: string;

  constructor() { }


  ngOnInit() {
    console.log(this.cardNumber)
  }

  private getCardType(cardNumber: string = ''): CardType {
    if (cardNumber.startsWith('1')) {
      return CardType.VISA
    }

    if (cardNumber.startsWith('2')) {
      return CardType.MASTERCARD;
    }

    return CardType.UNKNOWN;
  }

}
