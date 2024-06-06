import { Injectable, inject, signal} from "@angular/core";
import { Auth, user } from "@angular/fire/auth";
import { signInWithEmailAndPassword, signOut, updateCurrentUser } from "firebase/auth";
import { Observable, from } from "rxjs";
import { UserInterface } from "../interface/user.interface";

@Injectable({
    providedIn: "root"
}) 
export class AuthService{
    fireAuth = inject(Auth)
    //user$ = this.fireAuth.onAuthStateChanged(()=>{});


    currentUserSig = signal<UserInterface | null | undefined>(undefined)

    login(email:string, pass:string):Observable<void>{
        const promise = signInWithEmailAndPassword(this.fireAuth, email, pass)
        .then(()=>{})
        return from(promise);
    }

    logout(){
        signOut(this.fireAuth);
    }

}