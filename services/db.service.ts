import { Injectable, inject } from "@angular/core";
import { FirebaseApp } from "@angular/fire/app";
import { Firestore, FirestoreModule, collectionData } from "@angular/fire/firestore";
import { DocumentData, DocumentReference, addDoc, collection, deleteDoc, doc, onSnapshot, orderBy, query, setDoc } from "firebase/firestore";
import { Observable } from "rxjs";
import { GreenGasData } from "../interface/greenGas.interface";
import { SaleData } from "../interface/sale.interface";



@Injectable({
    providedIn: "root"
}) 
export class DbService{
    db = inject(Firestore)

    addGreenGasData(key:string, data:GreenGasData):Promise<boolean>{
        // console.log("key :"+key);
        // console.log("data: "+data);
        const ref = doc(this.db,"GreenGas",key);
        //return addDoc(ref, data);
        return new Promise((resolve, rejects)=>{
            setDoc(ref,data, {merge: false}).then(()=>{
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
    }


    deleteGreenGas(key:string):Promise<void>{
        const ref = doc(this.db,"GreenGas",key );
        return deleteDoc(ref);
    }


    loadSalesData(site:string):Observable<SaleData[]>{
        const dataRef = collection(this.db,site);
        const queryAll = query(dataRef, orderBy('date', 'desc'));
        return collectionData(queryAll);
    }

    addSalesData(site:string,key:string,data:any):Promise<boolean>{
        const ref = doc(this.db,site,key);
        return new Promise((resolve, rejects)=>{
            setDoc(ref,data, {merge: false}).then(()=>{
              resolve(true);
            },(err)=>{
                rejects(err);
            });
        }); 
    }


    deleteSalesData(site:string,key:string):Promise<void>{
        const ref = doc(this.db,site,key );
        return deleteDoc(ref);
    }



  
   
}