var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "@angular/core", "@angular/platform-browser", "./animations/src/animations", "@angular/forms", "./app.component", "./splitbutton-routing.module", "primeng-wl/primeng", "primeng-wl/tristatecheckbox", "primeng-wl/splitbutton"], function (require, exports, core_1, platform_browser_1, animations_1, forms_1, app_component_1, splitbutton_routing_module_1, primeng_1, tristatecheckbox_1, splitbutton_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AppModule = (function () {
        function AppModule() {
        }
        // Avoid bootstraping any component statically because we need to attach to
        // the portlet's DOM, which is different for each portlet instance and,
        // thus, cannot be determined until the page is rendered (during runtime).
        AppModule.prototype.ngDoBootstrap = function () { };
        return AppModule;
    }());
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                splitbutton_routing_module_1.SplitButtonRoutingModule,
                platform_browser_1.BrowserModule,
                animations_1.NoopAnimationsModule,
                animations_1.BrowserAnimationsModule,
                primeng_1.InputTextModule,
                primeng_1.ButtonModule,
                primeng_1.RadioButtonModule,
                forms_1.FormsModule,
                primeng_1.ChartModule,
                primeng_1.AutoCompleteModule,
                primeng_1.CheckboxModule,
                primeng_1.CardModule,
                primeng_1.CalendarModule,
                primeng_1.ChipsModule,
                primeng_1.ColorPickerModule,
                primeng_1.DropdownModule,
                primeng_1.EditorModule,
                primeng_1.InputSwitchModule,
                primeng_1.InputTextareaModule,
                primeng_1.ListboxModule,
                primeng_1.InputMaskModule,
                primeng_1.MultiSelectModule,
                primeng_1.PasswordModule,
                primeng_1.RatingModule,
                primeng_1.SliderModule,
                primeng_1.SpinnerModule,
                primeng_1.SelectButtonModule,
                primeng_1.ToggleButtonModule,
                tristatecheckbox_1.TriStateCheckboxModule,
                primeng_1.MessagesModule,
                primeng_1.MessageModule,
                splitbutton_1.SplitButtonModule
            ],
            declarations: [app_component_1.AppComponent],
            entryComponents: [app_component_1.AppComponent],
            bootstrap: [],
            providers: [],
            exports: []
        })
    ], AppModule);
    exports.AppModule = AppModule;
});
//# sourceMappingURL=app.module.js.map