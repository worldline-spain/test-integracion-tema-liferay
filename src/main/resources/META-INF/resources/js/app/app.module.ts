import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
// import { NoopAnimationsModule } from '@angular/platform-browser/animations';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { InputTextModule, ButtonModule, RadioButtonModule, ChartModule, AutoCompleteModule, 
	CheckboxModule, CardModule, CalendarModule, ChipsModule, ColorPickerModule, DropdownModule, 
	EditorModule, InputSwitchModule, InputTextareaModule, ListboxModule, InputMaskModule, MultiSelectModule,
	PasswordModule, RatingModule, SliderModule, SpinnerModule, SelectButtonModule, ToggleButtonModule } from 'primeng-wl/primeng';

import {TriStateCheckboxModule} from 'primeng-wl/tristatecheckbox';

@NgModule({
	imports: [
		BrowserModule,
		// NoopAnimationsModule,
		// BrowserAnimationsModule,
		InputTextModule,
		ButtonModule,
		RadioButtonModule,
		FormsModule,
		ChartModule,
		AutoCompleteModule,
		CheckboxModule,
		CardModule,
		CalendarModule,
		ChipsModule,
		ColorPickerModule,
		DropdownModule,
		EditorModule,
		InputSwitchModule,
		InputTextareaModule,
		ListboxModule,
		InputMaskModule,
		MultiSelectModule,
		PasswordModule,
		RatingModule,
		SliderModule,
		SpinnerModule,
		SelectButtonModule,
		ToggleButtonModule,
		TriStateCheckboxModule

	],
	declarations: [AppComponent],
	entryComponents: [AppComponent],
	bootstrap: [], // Don't bootstrap any component statically (see ngDoBootstrap() below)
	providers: [],
	exports: []
})
export class AppModule {
	// Avoid bootstraping any component statically because we need to attach to
	// the portlet's DOM, which is different for each portlet instance and,
	// thus, cannot be determined until the page is rendered (during runtime).
	ngDoBootstrap() { }
}