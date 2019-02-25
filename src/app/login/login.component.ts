import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  message='';
  userName='';
  password='';
  constructor(private http: HttpClient, private router: Router){}

  ngOnInit() {
  }
  login(){
    const param={
      username: this.userName,
      password:this.password
    };
    this.http.post('http://www.saigontech.edu.vn/restful-api/login.php', param)
              .subscribe(result => {
                if(result['errorCode']===1) {
                  this.message=result['errorMessage'];
                }
                else {
                  this.message='';
                  this.router.navigate(['/dashboard']);
                }
              });
  }

}
