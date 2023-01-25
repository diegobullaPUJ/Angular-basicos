import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { HeroComponent } from './hero/hero.component';
import { ListComponent } from "./list/list.component";



@NgModule({
    declarations: [  //que contiene este modulo?
        HeroComponent,
        ListComponent
    ],
    exports: [ //cosas que quiero hacer publicas fuera de esta seccion
        ListComponent
    ],
    imports: [
        CommonModule
    ]
})
export class HeroesModule {}



