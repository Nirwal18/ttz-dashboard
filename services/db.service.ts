import { Injectable, inject } from "@angular/core";
import { FirebaseApp } from "@angular/fire/app";
import { Firestore, FirestoreModule, collectionData } from "@angular/fire/firestore";
import { addDoc, collection, orderBy, query } from "firebase/firestore";
import { Observable } from "rxjs";
import { GreenGasData } from "../interface/greenGas.interface";

@Injectable({
    providedIn: "root"
}) 
export class DbService{
    db = inject(Firestore)


    addGreenGasData(data:GreenGasData){
        const ref = collection(this.db,"GreenGas");
        addDoc(ref, data).then((currentRef)=>{
            alert("data added sucessfully");
            console.log(currentRef);
        })

    }

    getGreenGasData():Observable<GreenGasData[]>{
        const dataRef = collection(this.db,"GreenGas");
        const queryAll = query(dataRef, orderBy('date', 'desc'));
        return collectionData(queryAll) as Observable<GreenGasData[]>;
    }

   
}