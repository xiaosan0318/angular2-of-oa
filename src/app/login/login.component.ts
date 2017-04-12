import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  username: string = "yezhengmao";
  password: string = "123456";
  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  login(){
    this.loginService.getTicket(this.username,this.password)
    .then(data => 
        {
          console.log(data);
          if(data['ticket']){
             this.loginService.getUserInfo(data['ticket']).then(response => 
             {
               console.log(response);
               this.loginService.getApproveCount("yezhengmao").then(res=> {console.log(res);});
             });
          }
        }
        );
        
  }
  

}
