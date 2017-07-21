import { Component, OnInit } from '@angular/core';
import { Http, RequestOptionsArgs, Headers } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit{
  name: string;
  password: string;
  param: any;
  constructor(private http: Http) {}

  ngOnInit(): void {
    this.name = 'mail@mail.ru';
    this.password = 'Pa$$w0rd';
  }

  register(): void {
    this.http
      .post('/api/Account/Register', {
        Email: this.name,
        Password: this.password,
        ConfirmPassword: this.password
      })
      .subscribe(
        result => {
          this.param = result.json();
          console.log(this.param);
        }
      );
  }

  getToken(): void {
    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    let body = `grant_type=password&UserName=${this.name}&Password=${this.password}`;
    body = decodeURI(body);
    this.http
      .post('/Token', body,
      {
        headers: headers
      })
      .subscribe(
        result => {
          this.param = result.json();
          console.log(this.param);
        }
      );
  }

  getValues(): void {
    const headers = new Headers();
    headers.append('Authorization', 'Bearer ' + 'i0GLl4XdUHDXmwSyL0HBBD9Y5fHgquAtf3DOZnQmImLdFl5jl7HpHA-YPhAS_90Dkm56ofyGMQZQam06RDzW-yCmloebZXHqAnlGRxL2IeS_gbjDykxXzW-FypJabRziR0AEJR6710CilxqaVcRhcMROS3f0kCBYzgmwOkPUVO_Sdxi_4X3q88UWjR4lmRXt95YGmWRunN5UdGf7TJmQVg6oT2I1vzmEMGZDfJNAe3p11bssORfxOum2Yd0ohkKn8OZfXWQX5-oW-fVTNturSswjdB9zGN5jioOK5nW_NDF1PQPcLUk8vOZtXmxAi9_gQzCPaWM-Ln-06g_jTugwB4ocl0hCZYOMxGdpwHqLg4wo6LSEjkQXWTJOlQDH_7gO6E1pgIvg2JHzFI4mOFsIJQte-LzhempEVM3oy5gso-tnjfV_uWxsKiXvt_F6UGB1DzRQ-jOtU-o4Fkvz0l2HzK-zjV6TN89EpztzjTpBCfSLDU5jr2Mh8m7LGTnYPqr8fJQSSC1FtyKGq__pAERXIA');
    this.http.get('/api/values', {headers: headers}).subscribe(result => {
      this.param = result.json();
      console.log(this.param);
    });
  }
}
