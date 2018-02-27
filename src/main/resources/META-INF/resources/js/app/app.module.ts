import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule,BrowserAnimationsModule } from './animations/src/animations';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SplitButtonRoutingModule } from './splitbutton-routing.module';

import { InputTextModule, ButtonModule, RadioButtonModule, ChartModule, AutoCompleteModule, 
	CheckboxModule, CardModule, CalendarModule, ChipsModule, ColorPickerModule, DropdownModule, 
	EditorModule, InputSwitchModule, InputTextareaModule, ListboxModule, InputMaskModule, MultiSelectModule,
	PasswordModule, RatingModule, SliderModule, SpinnerModule, SelectButtonModule, ToggleButtonModule,
	MessagesModule, MessageModule } from 'primeng-wl/primeng';

import {TriStateCheckboxModule} from 'primeng-wl/tristatecheckbox';
import {SplitButtonModule} from 'primeng-wl/splitbutton';

@NgModule({
	imports: [		
		SplitButtonRoutingModule,
		BrowserModule,
		 NoopAnimationsModule,
		 BrowserAnimationsModule,
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
		TriStateCheckboxModule,
		MessagesModule, 
		MessageModule,
		SplitButtonModule
				
		
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