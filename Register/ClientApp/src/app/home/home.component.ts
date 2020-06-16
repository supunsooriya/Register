import { Component } from '@angular/core';
import {Register}  from './Register.service';
import { register } from './register';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {

  public reg = new register();
  /**
   *
   */
  constructor(
    private register_servise: Register
  ) {
    

  }
  SaveRegister(isValidSubmit) {
    
     this.register_servise.saveRegisterData(this.reg).subscribe(
        res => {
          console.log(res);
        }
       
      );
      }
}
