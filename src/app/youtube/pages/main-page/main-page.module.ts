import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page.component';
import { MainPageRoutingModule } from './main-page-routing.module';
import { YoutubeModule } from '../../youtube.module';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  declarations: [MainPageComponent],
  imports: [CommonModule, MainPageRoutingModule, YoutubeModule, SharedModule],
})
export class MainPageModule {}
