import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'signature',
  templateUrl: './signature.component.html',
  styleUrls: ['./signature.component.less']
})
export class SignatureComponent implements OnInit {

  public profilePicture:object;
  public profileInfo:object;
  
  constructor() { }
  
  getProfilePicSize() {
    return {
      width: '126px',
      height: '126px'
    }
  }
  ngOnInit() {
    this.profilePicture = {
      src: 'https://www.neomind.com.br/fusion/assinatura/maria-agostini.jpg',
      size: this.getProfilePicSize()
    }

    this.profileInfo = {
      name: 'MARIA EUGÊNIA AGOSTINI',
      role: 'Analista de RH'
    }
  }


}
