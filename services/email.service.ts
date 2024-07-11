import { HttpClient, HttpHeaders } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";


@Injectable({providedIn:"root"})
export class EmailService{

    // under development

    http = inject(HttpClient);

    email_endpoint1 = "https://script.google.com/macros/s/AKfycbyIjOh19kg8THjA9FQeF4OjLZ-fpDIAwRPb-FTI5Iw/dev";
    email_endpoint = "https://script.google.com/macros/s/AKfycbwB8lVWvvNOMncyeKKhASOrhLYqTlWpuddfCyXtcM90AbpUrg1eXWn__R6j7ENvpF6d/exec";


    sendEmail(to:string, cc:string, subject:string, msg:string){

        const postData = {TO:to, CC:cc, SUBJECT:subject, EMAIL_BODY:msg };

        const httpOptions = {headers:new HttpHeaders({
            'Access-Control-Allow-Origin':'*',
            'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE, PATCH'
        })};

        return this.http.post(this.email_endpoint, postData, httpOptions)
        .subscribe({
            next: data=>{
                console.log(data);
            },
            error:error=> {
                console.error(error.message);
            },
        });
    }


    sendEmai2(){
        fetch(this.email_endpoint,
            {
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                method: "POST",
                mode:"no-cors",
                body: JSON.stringify({a: 1, b: 2})
            })
            .then(function(res){ console.log(res) })
    }
}