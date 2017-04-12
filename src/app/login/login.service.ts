import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import "rxjs/add/operator/toPromise";
import 'rxjs/add/operator/map';

/**
* This class provides the Login service with methods to read names and add names.
*/
@Injectable()
export class LoginService {
/**
* Creates a new LoginService with the injected Http.
* @param {Http} http - The injected Http.
* @constructor
*/
    constructor(private http: Http) {}

    getTicket(username: string, password: string){
        var url = "http://localhost:9090/mobileApi/getServiceTicket?username="+username+"&password="+password;
        //return this.http.get(url).toPromise().then(response=> response.json()).catch(this.handleError);
        return new Promise((resolve) => { 
            this.http.get(url)
                .map(res => res.json())
                .subscribe(data => {
                    resolve(data);
                })
    })
    }

    getUserInfo(token: string){
        var url = "http://localhost:9090/mobileApi/getUserInfo?token="+token;
        //return this.http.get(url).toPromise().then(response=> response.json()).catch(this.handleError);
        return new Promise((resolve) => { 
            this.http.get(url)
                .map(res => res.json())
                .subscribe(data => {
                    resolve(data);
                })
    })
    }

    getApproveCount(username:string){
        var url = "http://localhost:9090/mobileApi/getApproveCount?username="+username;
        //return this.http.get(url).toPromise().then(response=> response.json()).catch(this.handleError);
        return new Promise((resolve) => { 
            this.http.get(url)
                .map(res => res.json())
                .subscribe(data => {
                    console.log(data);

                    resolve(data);
                })
    })
    };
    


/**
* Handle HTTP error
*/
    private handleError (error: any) {
        let errMsg = (error.message) ? error.message :
        error.status ? `error.status - error.statusText` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}