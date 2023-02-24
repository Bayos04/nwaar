import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToTopComponent } from './to-top/to-top.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [ToTopComponent, NavComponent, HeaderComponent],
  imports: [CommonModule, FormsModule, IonicModule],
  exports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ToTopComponent,
    NavComponent,
    HeaderComponent,
  ],
})
export class ComponentsModule {}
