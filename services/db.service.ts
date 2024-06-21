import { Injectable, inject } from "@angular/core";
import { FirebaseApp } from "@angular/fire/app";
import { Firestore, FirestoreModule, collectionData } from "@angular/fire/firestore";
import { DocumentData, DocumentReference, DocumentSnapshot, addDoc, collection, deleteDoc, doc, getDoc, onSnapshot, orderBy, query, setDoc } from "firebase/firestore";
import { Observable } from "rxjs";
import { GreenGasData } from "../interface/greenGas.interface";
import { SaleData } from "../interface/sale.interface";
import { Site } from "../interface/site.class";



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
                this.updateAndCalculateTTZsalesData(key,data);
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

    loadDocument(site:string, key:string):Promise<DocumentSnapshot>{
        const ref = doc(this.db,site,key);
        return getDoc(ref);

    }

    saveDocument(site:string, key:string, data:any):Promise<void>{
        const ref = doc(this.db, site, key);
        //return addDoc(ref, data);
        return setDoc(ref,data, {merge: false});
    }

    updateAndCalculateTTZsalesData(key:string, data:SaleData){
        let ttzSite = "TTZ-Sales";
        //let key = "19-08-2024";

        //let data:SaleData = {date:"19-08-2024", siteName: "Agra", industrial:0 ,commertial:0 , dpng:0 , cng:0}

        return this.loadDocument(ttzSite, key)
        .then((value)=>{
            console.log("TTZ data:");
            console.log(value.data());
            if(value.data()==undefined){
                return this.saveDocument(ttzSite, key,data);
            }else{
                const ttzData = value.data() as SaleData;
                let newData = {
                    date: key, siteName:ttzSite, 
                    industrial:ttzData.industrial + data.industrial, 
                    commertial:ttzData.commertial + data.commertial, 
                    dpng:ttzData.dpng + data.dpng, 
                    cng:ttzData.cng + data.cng
                };
                return this.saveDocument(ttzSite, key, newData);
            }
        });
     }

     loadSites():Observable<Site[]>{
        const dataRef = collection(this.db,"Sites");
        const queryAll = query(dataRef);
        return collectionData(queryAll);
     }

     addSite(data:Site){
        const ref = doc(this.db, "Sites", data.siteName);
        //return addDoc(ref, data);
        return setDoc(ref,data, {merge: false});
     }

     deleteSite(key:string){
        const ref = doc(this.db,"Sites",key );
        return deleteDoc(ref);
     }

}