import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Pfpage2Page } from './pfpage2.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { RouterModule } from '@angular/router';
import { Pfpage2PageRoutingModule } from './pfpage2-routing.module';
import { ColorPickerModule } from 'ngx-color-picker';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Pfpage2PageRoutingModule,
    RouterModule.forChild([{ path: '', component: Pfpage2Page }]),
    ColorPickerModule
  ],
  declarations: [Pfpage2Page]
})
export class Pfpage2PageModule {}
