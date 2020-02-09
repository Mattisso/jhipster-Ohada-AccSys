import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { JhipsterOhadaAccSysSharedModule } from 'app/shared/shared.module';
import { JhipsterOhadaAccSysCoreModule } from 'app/core/core.module';
import { JhipsterOhadaAccSysAppRoutingModule } from './app-routing.module';
import { JhipsterOhadaAccSysHomeModule } from './home/home.module';
import { JhipsterOhadaAccSysEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    JhipsterOhadaAccSysSharedModule,
    JhipsterOhadaAccSysCoreModule,
    JhipsterOhadaAccSysHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    JhipsterOhadaAccSysEntityModule,
    JhipsterOhadaAccSysAppRoutingModule
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [MainComponent]
})
export class JhipsterOhadaAccSysAppModule {}
