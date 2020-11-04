import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { SampleApplicationSharedModule } from 'app/shared/shared.module';
import { SampleApplicationCoreModule } from 'app/core/core.module';
import { SampleApplicationAppRoutingModule } from './app-routing.module';
import { SampleApplicationHomeModule } from './home/home.module';
import { SampleApplicationEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    SampleApplicationSharedModule,
    SampleApplicationCoreModule,
    SampleApplicationHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    SampleApplicationEntityModule,
    SampleApplicationAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent],
})
export class SampleApplicationAppModule {}
