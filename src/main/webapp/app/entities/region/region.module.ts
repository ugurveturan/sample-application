import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SampleApplicationSharedModule } from 'app/shared/shared.module';
import { RegionComponent } from './region.component';
import { RegionDetailComponent } from './region-detail.component';
import { RegionUpdateComponent } from './region-update.component';
import { RegionDeleteDialogComponent } from './region-delete-dialog.component';
import { regionRoute } from './region.route';

@NgModule({
  imports: [SampleApplicationSharedModule, RouterModule.forChild(regionRoute)],
  declarations: [RegionComponent, RegionDetailComponent, RegionUpdateComponent, RegionDeleteDialogComponent],
  entryComponents: [RegionDeleteDialogComponent],
})
export class SampleApplicationRegionModule {}
