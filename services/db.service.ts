import { Injectable, inject } from "@angular/core";
import { FirebaseApp } from "@angular/fire/app";
import { Firestore, FirestoreModule, collectionData } from "@angular/fire/firestore";
import { DocumentData, DocumentReference, DocumentSnapshot, addDoc, collection, deleteDoc, doc, getDoc, onSnapshot, orderBy, query, setDoc } from "firebase/firestore";
import { Observable } from "rxjs";
import { GreenGasData } from "../interface/greenGas.interface";
import { SaleData } from "../interface/sale.interface";
import { Site } from "../model/site";
import { Customer } from "../interface/customer.interface";



@Injectable({
    providedIn: "root"
}) 
export class DbService{
    db = inject(Firestore)


    private DB_PATH = {
        CUSTOMERS   : "Customers",
        GREEN_GAS   : "GreenGas",
        SITES       : "Sites",

    }

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
        const dataRef = collection(this.db,this.DB_PATH.SITES);
        const queryAll = query(dataRef);
        return collectionData(queryAll);
     }

     addSite(site:Site){
        const ref = doc(this.db, this.DB_PATH.SITES, site.name);
        //return addDoc(ref, data);
        return setDoc(ref,site, {merge: false});
     }

     deleteSite(key:string){
        const ref = doc(this.db,this.DB_PATH.SITES,key );
        return deleteDoc(ref);
     }

     loadCustomers():Observable<Customer[]>{
        const dataRef = collection(this.db,this.DB_PATH.CUSTOMERS);
        const queryAll = query(dataRef);
        return collectionData(queryAll);
     }

     addCustomer(customer:Customer){
        const ref = doc(this.db, this.DB_PATH.CUSTOMERS, customer.bp.toString());
        //return addDoc(ref, data);
        return setDoc(ref,customer, {merge: false});
     }

     deleteCustomer(customer:Customer){
        const ref = doc(this.db,this.DB_PATH.CUSTOMERS,customer.bp.toString() );
        return deleteDoc(ref);
     }

}