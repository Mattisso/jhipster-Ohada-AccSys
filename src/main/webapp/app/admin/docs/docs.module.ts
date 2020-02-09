import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JhipsterOhadaAccSysSharedModule } from 'app/shared/shared.module';

import { DocsComponent } from './docs.component';

import { docsRoute } from './docs.route';

@NgModule({
  imports: [JhipsterOhadaAccSysSharedModule, RouterModule.forChild([docsRoute])],
  declarations: [DocsComponent]
})
export class DocsModule {}
