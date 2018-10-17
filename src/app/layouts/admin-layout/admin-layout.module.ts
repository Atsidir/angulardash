import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { ChartsModule } from 'ng2-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { ApiService } from '../../api.service';
import { TrackerComponent } from '../../tracker/tracker.component';
import {HttpClientModule} from '@angular/common/http';
import { TrackermapComponent } from '../../tracker/trackermap/trackermap.component';
import { TrackertableComponent } from '../../tracker/trackertable/trackertable.component';
import { TrackercategoryComponent } from '../../tracker/trackercategory/trackercategory.component';
import {DataTablesModule} from 'angular-datatables';
import { MachinecontrolComponent } from '../../machine/machinecontrol/machinecontrol.component';
import { MachinepageComponent } from '../../machine/machinepage/machinepage.component';
import { MachinepartstableComponent } from '../../machine/machinepartstable/machinepartstable.component';
import { MachinetableComponent } from '../../machine/machinetable/machinetable.component';
import { MachinechartComponent } from '../../machine/machinechart/machinechart.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    DataTablesModule,
    ChartsModule,
    HttpClientModule,
    NgbModule,
    ToastrModule.forRoot()
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    TrackerComponent,
    TrackermapComponent,
    TrackertableComponent,
    TrackercategoryComponent,
    MachinecontrolComponent,
    MachinepageComponent,
    MachinepartstableComponent,
    MachinetableComponent,
    MachinechartComponent,
  ],
  providers: [ApiService]
})

export class AdminLayoutModule {}
