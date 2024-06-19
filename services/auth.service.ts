import { Injectable, inject, signal} from "@angular/core";
import { Auth, authState, user } from "@angular/fire/auth";
import { signInWithEmailAndPassword, signOut, updateCurrentUser } from "firebase/auth";
import { Observable, filter, from, map } from "rxjs";
import { UserInterface } from "../interface/user.interface";

@Injectable({
    providedIn: "root"
}) 
export class AuthService{
    fireAuth = inject(Auth)
    
    user$ = authState(this.fireAuth).pipe(filter(user  =>  user !== null), map(user  =>  user!));


    constructor(){
    }

   


    currentUserSig = signal<UserInterface | null | undefined>(undefined)

    login(email:string, pass:string):Observable<void>{
        const promise = signInWithEmailAndPassword(this.fireAuth, email, pass)
        .then(()=>{})
        return from(promise);
    }

    logout(){
        signOut(this.fireAuth);
        console.log("Logout done");
    }

}