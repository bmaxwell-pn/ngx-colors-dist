import { NgModule } from "@angular/core";
import { NgxColorsComponent } from "./ngx-colors.component";
import { CommonModule } from "@angular/common";
import { ColorPickerComponent } from "./components/color-picker/color-picker.component";
import { ConverterService } from "./services/converter.service";
import { SliderDirective } from "./directives/slider.directive";
import { PanelComponent } from "./components/panel/panel.component";
import { PanelFactoryService } from "./services/panel-factory.service";
import { NgxColorsTriggerDirective } from "./directives/ngx-colors-trigger.directive";
import * as i0 from "@angular/core";
export class NgxColorsModule {
}
NgxColorsModule.ɵfac = function NgxColorsModule_Factory(t) { return new (t || NgxColorsModule)(); };
NgxColorsModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: NgxColorsModule });
NgxColorsModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [ConverterService, PanelFactoryService], imports: [CommonModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NgxColorsModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    NgxColorsComponent,
                    ColorPickerComponent,
                    SliderDirective,
                    PanelComponent,
                    NgxColorsTriggerDirective,
                ],
                imports: [CommonModule],
                providers: [ConverterService, PanelFactoryService],
                exports: [NgxColorsComponent, NgxColorsTriggerDirective],
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NgxColorsModule, { declarations: [NgxColorsComponent,
        ColorPickerComponent,
        SliderDirective,
        PanelComponent,
        NgxColorsTriggerDirective], imports: [CommonModule], exports: [NgxColorsComponent, NgxColorsTriggerDirective] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWNvbG9ycy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtY29sb3JzL3NyYy9saWIvbmd4LWNvbG9ycy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDeEYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDaEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUNwRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN2RSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQzs7QUFjdEYsTUFBTSxPQUFPLGVBQWU7OzhFQUFmLGVBQWU7aUVBQWYsZUFBZTtzRUFIZixDQUFDLGdCQUFnQixFQUFFLG1CQUFtQixDQUFDLFlBRHhDLFlBQVk7dUZBSVgsZUFBZTtjQVozQixRQUFRO2VBQUM7Z0JBQ1IsWUFBWSxFQUFFO29CQUNaLGtCQUFrQjtvQkFDbEIsb0JBQW9CO29CQUNwQixlQUFlO29CQUNmLGNBQWM7b0JBQ2QseUJBQXlCO2lCQUMxQjtnQkFDRCxPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7Z0JBQ3ZCLFNBQVMsRUFBRSxDQUFDLGdCQUFnQixFQUFFLG1CQUFtQixDQUFDO2dCQUNsRCxPQUFPLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSx5QkFBeUIsQ0FBQzthQUN6RDs7d0ZBQ1ksZUFBZSxtQkFWeEIsa0JBQWtCO1FBQ2xCLG9CQUFvQjtRQUNwQixlQUFlO1FBQ2YsY0FBYztRQUNkLHlCQUF5QixhQUVqQixZQUFZLGFBRVosa0JBQWtCLEVBQUUseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBOZ3hDb2xvcnNDb21wb25lbnQgfSBmcm9tIFwiLi9uZ3gtY29sb3JzLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XHJcbmltcG9ydCB7IEJyb3dzZXJBbmltYXRpb25zTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvYW5pbWF0aW9uc1wiO1xyXG5pbXBvcnQgeyBDb2xvclBpY2tlckNvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvY29sb3ItcGlja2VyL2NvbG9yLXBpY2tlci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgQ29udmVydGVyU2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2VzL2NvbnZlcnRlci5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFNsaWRlckRpcmVjdGl2ZSB9IGZyb20gXCIuL2RpcmVjdGl2ZXMvc2xpZGVyLmRpcmVjdGl2ZVwiO1xyXG5pbXBvcnQgeyBQYW5lbENvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvcGFuZWwvcGFuZWwuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFBhbmVsRmFjdG9yeVNlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy9wYW5lbC1mYWN0b3J5LnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgTmd4Q29sb3JzVHJpZ2dlckRpcmVjdGl2ZSB9IGZyb20gXCIuL2RpcmVjdGl2ZXMvbmd4LWNvbG9ycy10cmlnZ2VyLmRpcmVjdGl2ZVwiO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIE5neENvbG9yc0NvbXBvbmVudCxcclxuICAgIENvbG9yUGlja2VyQ29tcG9uZW50LFxyXG4gICAgU2xpZGVyRGlyZWN0aXZlLFxyXG4gICAgUGFuZWxDb21wb25lbnQsXHJcbiAgICBOZ3hDb2xvcnNUcmlnZ2VyRGlyZWN0aXZlLFxyXG4gIF0sXHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXHJcbiAgcHJvdmlkZXJzOiBbQ29udmVydGVyU2VydmljZSwgUGFuZWxGYWN0b3J5U2VydmljZV0sXHJcbiAgZXhwb3J0czogW05neENvbG9yc0NvbXBvbmVudCwgTmd4Q29sb3JzVHJpZ2dlckRpcmVjdGl2ZV0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3hDb2xvcnNNb2R1bGUge31cclxuIl19