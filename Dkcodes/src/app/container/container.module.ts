import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './container/container.component';
import { NavbarModule } from '../navbar/navbar/navbar.module';
import { HeaderModule } from '../header/header.module';
import { BodyModule } from '../body/body.module';



@NgModule({
  declarations: [
    ContainerComponent
  ],
  imports: [
    CommonModule,
    NavbarModule,
    HeaderModule,
    BodyModule
  ],
  exports: [ContainerComponent]
})
export class ContainerModule { }
