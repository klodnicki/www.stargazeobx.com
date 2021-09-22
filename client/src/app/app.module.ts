import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { NavComponent } from './nav/nav.component';
import { BlockComponent } from './common/block/block.component';
import { BlockSideTitleComponent } from './common/block-side-title/block-side-title.component';
import { FooterComponent } from './footer/footer.component';
import { AmenitiesComponent } from './pages/amenities/amenities.component';
import { Error404Component } from './pages/error404/error404.component';
import { ParallaxerComponent } from './common/parallaxer/parallaxer.component';
import { ParallaxLayerComponent } from './common/parallaxer/parallax-layer/parallax-layer.component';
import { FittedImageComponent } from './common/fitted-image/fitted-image.component';
import { ParallaxBackgroundComponent } from './common/parallaxer/parallax-background/parallax-background.component';
import { CenterBlockComponent } from './common/center-block/center-block.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LayoutComponent,
    NavComponent,
    BlockComponent,
    BlockSideTitleComponent,
    FooterComponent,
    AmenitiesComponent,
    Error404Component,
    ParallaxerComponent,
    ParallaxLayerComponent,
    FittedImageComponent,
    ParallaxBackgroundComponent,
    CenterBlockComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
