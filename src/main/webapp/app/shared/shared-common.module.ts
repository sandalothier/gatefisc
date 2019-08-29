import { NgModule } from '@angular/core';

import { GatewayfiscSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [GatewayfiscSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [GatewayfiscSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class GatewayfiscSharedCommonModule {}
