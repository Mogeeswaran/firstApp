import { HttpErrorResponse } from "@angular/common/http";
import { Component } from "@angular/core";
import { SpinnerVisibilityService } from "ng-http-loader";
import { Customers } from "../model/customers.model";
import { customersService } from "../services/customers.service";

@Component({
    selector: "customers",
    templateUrl: "./customers.component.html"
})

export class customersComponent{
    public data: Customers;

    constructor(private service:customersService,
                private spinner:SpinnerVisibilityService){}
    ngOnInit(){
        this.spinner.show();
        this.service.getCustomer().subscribe((posResp)=>{
            this.data = posResp;
            this.spinner.hide();
        },(errResp:HttpErrorResponse)=>{
            console.log(errResp);
            this.spinner.hide();
        });
    }
};