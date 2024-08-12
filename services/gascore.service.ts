import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class GasCoreSevice{
    getSite_endpoint = 'https://www.inelgas.com/API2.ashx/GetSiteList';
    getData_endpoint = 'https://www.inelgas.com/API2.ashx/GetData?{"streamId":"1001_1","start":1388549700000,"end":1388556000000,"returnNoData":1}';


}