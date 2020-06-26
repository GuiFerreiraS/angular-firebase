import { TaskService } from './task.service';
import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatListModule } from '@angular/material/list';
import { MatLineModule } from '@angular/material/core';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

import { AppComponent } from './app.component';
import { importExpr } from '@angular/compiler/src/output/output_ast';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TaskItemComponent } from './task-item/task-item.component';
import { TaskListComponent } from './task-list/task-list.component';


@NgModule({
  declarations: [
    AppComponent,
    TaskItemComponent,
    TaskListComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    BrowserAnimationsModule,
    MatLineModule,
    MatToolbarModule,
    MatSlideToggleModule,
    MatListModule
  ],
  providers: [
    TaskService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
