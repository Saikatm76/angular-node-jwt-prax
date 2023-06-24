import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchoolRoutingModule } from './school-routing.module';
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

import { ClassComponent } from './components/class/class.component';
import { SubjectComponent } from './components/subject/subject.component';
import { SchoolComponent } from './containers/school/school.component';


@NgModule({
  declarations: [
    ClassComponent,
    SubjectComponent,
    SchoolComponent,
  ],
  imports: [
    CommonModule,
    ShareModule,
    SchoolRoutingModule,
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
export class SchoolModule { }
