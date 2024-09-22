import { Injectable } from "@angular/core";
/**
 * @bref this class will provide data related to online scada system of INEL GAS
 * @info under development not implementted
 */
@Injectable({providedIn: 'root'})
export class GasCoreSevice{
    getSite_endpoint = 'https://www.inelgas.com/API2.ashx/GetSiteList';
    getData_endpoint = 'https://www.inelgas.com/API2.ashx/GetData?{"streamId":"1001_1","start":1388549700000,"end":1388556000000,"returnNoData":1}';




}


class GascoreEndpoint{
    static BASE_URL = "https://www.inelgas.com";

    static getLoginUrl():any {
        return this.BASE_URL+"/login";
    }

}