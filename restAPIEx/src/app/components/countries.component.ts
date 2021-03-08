import { HttpErrorResponse } from "@angular/common/http";
import { Component } from "@angular/core";
import { Country } from "../modal/countries.modal";
import { countriesService } from "../service/countries.service";

@Component({
    selector : "countries",
    templateUrl: "./countries.component.html"
})

export class countriesComponent{
    public data: Country[];
    constructor(private service:countriesService){}

    ngOnInit(){
        this.service.getCountries().subscribe((posResp)=>{
            this.data = posResp;
        },(errResp:HttpErrorResponse)=>{
            console.log(errResp);
        });
    };
}