import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageStudentRoutingModule } from './manage-student-routing.module';
import { ShareModule } from 'src/app/shared/share.module';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


import { StudentComponent } from './components/student/student.component';
import { ParentComponent } from './components/parent/parent.component';
import { ManageStudentComponent } from './containers/manage-student/manage-student.component';


@NgModule({
  declarations: [
    StudentComponent,
    ParentComponent,
    ManageStudentComponent,
  ],
  imports: [
    CommonModule,
    ManageStudentRoutingModule,
    ShareModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatExpansionModule,
    MatDividerModule,
    MatProgressSpinnerModule
  ]
})
export class ManageStudentModule { }
