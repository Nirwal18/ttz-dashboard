import { HttpClient, HttpHeaders } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";



@Injectable({providedIn:"root"})
export class EmailService{

    email_endpoint1 = "https://script.google.com/macros/s/AKfycbyIjOh19kg8THjA9FQeF4OjLZ-fpDIAwRPb-FTI5Iw/dev";
    email_endpoint = "https://script.google.com/macros/s/AKfycbwB8lVWvvNOMncyeKKhASOrhLYqTlWpuddfCyXtcM90AbpUrg1eXWn__R6j7ENvpF6d/exec";


    sendEmail(to:string, cc:string, subject:string, message:string, token:string){

        if(token.length <= 0){
            console.error("Token need to send email");
            return
        }

        console.log()
        fetch(this.email_endpoint,
            {
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                method: "POST",
                mode:"no-cors",
                body: JSON.stringify({to:to, cc: cc, subject: subject, message: message, token: token})
            })
            .then((res)=>{ 
                console.log(res);
            });
    }
}