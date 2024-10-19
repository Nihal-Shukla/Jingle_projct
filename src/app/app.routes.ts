
import { Routes } from '@angular/router';
import { PaymentComponent } from './payment/payment.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DomesticComponent } from './domestic/domestic.component';
import { InternationalComponent } from './international/international.component';
import { PlaceComponent } from './place/place.component';
import { PackageComponent } from './package/package.component';
import { ContactComponent } from './contact/contact.component';


export const routes: Routes = [
{
    path:"",component:HomeComponent
},
{
    path:"about",component:AboutComponent
},
{
    path:"domestic",component:DomesticComponent
},
{
    path:"international",component:InternationalComponent
},
{
    path:"place",component:PlaceComponent
},
{
    path:"contact",component:ContactComponent
},
 {
    path:"package",component:PackageComponent
 },
 {
    path:"payment",component:PaymentComponent
 }
 
];
