import { Injectable, inject } from "@angular/core";
import { FirebaseApp } from "@angular/fire/app";
import { Firestore, FirestoreModule, collectionData } from "@angular/fire/firestore";
import { DocumentData, DocumentReference, addDoc, collection, doc, onSnapshot, orderBy, query, setDoc } from "firebase/firestore";
import { Observable } from "rxjs";
import { GreenGasData } from "../interface/greenGas.interface";
import { rejects } from "assert";

@Injectable({
    providedIn: "root"
}) 
export class DbService{
    db = inject(Firestore)


    addGreenGasData(key:string, data:GreenGasData):Promise<boolean>{
        const ref = doc(this.db,"GreenGas",key);
        //return addDoc(ref, data);
        return new Promise((resolve, rejects)=>{
            setDoc(ref,data).then(()=>{
              resolve(true);
            },(err)=>{
                rejects(err);
            });
        })
    }

    loadAllGreenGasData():Observable<GreenGasData[]>{
        const dataRef = collection(this.db,"GreenGas");
        const queryAll = query(dataRef, orderBy('date', 'desc'));

        return collectionData(queryAll);
    
        //return collectionData(queryAll) as Observable<GreenGasData[]>;
    }

   
}