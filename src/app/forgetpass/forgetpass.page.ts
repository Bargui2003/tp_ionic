import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgetpass',
  templateUrl: './forgetpass.page.html',
  styleUrls: ['./forgetpass.page.scss'],
})
export class ForgetpassPage implements OnInit {
  constructor() { }

  ngOnInit() {
  }
  user = { email: '' };
  submit() {
    alert("vérifier votre email")
    
  }
}
