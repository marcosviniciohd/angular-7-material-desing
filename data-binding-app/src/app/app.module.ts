import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StringInterpolationComponent } from './string-interpolation/string-interpolation.component';
import { CardStringInterpolationComponent } from './card-string-interpolation/card-string-interpolation.component';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { StringInterpolationRevisionComponent } from './string-interpolation-revision/string-interpolation-revision.component';
import { PropertyBindingReviewComponent } from './property-binding-review/property-binding-review.component';
import { EventBindingReviewComponent } from './event-binding-review/event-binding-review.component';

@NgModule({
  declarations: [
    AppComponent,
    StringInterpolationComponent,
    CardStringInterpolationComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    StringInterpolationRevisionComponent,
    PropertyBindingReviewComponent,
    EventBindingReviewComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
