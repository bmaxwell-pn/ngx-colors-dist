import { EventEmitter, Input, Output, Directive, HostListener, forwardRef, } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { formats } from '../helpers/formats';
import { ColorFormats } from '../enums/formats';
import * as i0 from "@angular/core";
import * as i1 from "../services/panel-factory.service";
import * as i2 from "../services/converter.service";
export class NgxColorsTriggerDirective {
    onClick() {
        this.openPanel();
    }
    constructor(triggerRef, panelFactory, service) {
        this.triggerRef = triggerRef;
        this.panelFactory = panelFactory;
        this.service = service;
        //Main input/output of the color picker
        // @Input() color = '#000000';
        // @Output() colorChange:EventEmitter<string> = new EventEmitter<string>();
        this.color = '';
        //This defines the type of animation for the palatte.(slide-in | popup)
        this.colorsAnimation = 'slide-in';
        this.position = 'bottom';
        this.attachTo = undefined;
        this.overlayClassName = undefined;
        this.colorPickerControls = 'default';
        this.acceptLabel = 'ACCEPT';
        this.cancelLabel = 'CANCEL';
        // This event is trigger every time the selected color change
        this.change = new EventEmitter();
        // This event is trigger every time the user change the color using the panel
        this.input = new EventEmitter();
        // This event is trigger every time the user change the color using the panel
        this.slider = new EventEmitter();
        this.close = new EventEmitter();
        this.open = new EventEmitter();
        this.isDisabled = false;
        this.onTouchedCallback = () => { };
        this.onChangeCallback = () => { };
    }
    ngOnDestroy() {
        if (this.panelRef) {
            this.panelFactory.removePanel();
        }
    }
    openPanel() {
        if (!this.isDisabled) {
            this.panelRef = this.panelFactory.createPanel(this.attachTo, this.overlayClassName);
            this.panelRef.instance.iniciate(this, this.triggerRef, this.color, this.palette, this.colorsAnimation, this.format, this.hideTextInput, this.hideColorPicker, this.acceptLabel, this.cancelLabel, this.colorPickerControls, this.position, this.formats);
        }
        this.open.emit(this.color);
    }
    closePanel() {
        this.panelFactory.removePanel();
        this.onTouchedCallback();
        this.close.emit(this.color);
    }
    setDisabledState(isDisabled) {
        this.isDisabled = isDisabled;
        this.triggerRef.nativeElement.style.opacity = isDisabled ? 0.5 : 1;
    }
    setColor(color, previewColor = "") {
        this.writeValue(color, previewColor);
        this.onChangeCallback(color);
        this.input.emit(color);
    }
    sliderChange(color) {
        this.slider.emit(color);
    }
    get value() {
        return this.color;
    }
    set value(value) {
        this.setColor(value);
        this.onChangeCallback(value);
    }
    writeValue(value, previewColor = "") {
        if (value !== this.color) {
            if (this.format) {
                let format = formats.indexOf(this.format.toLowerCase());
                value = this.service.stringToFormat(value, format);
            }
            this.color = value;
            let isCmyk = false;
            if (value && value.startsWith('cmyk')) {
                isCmyk = true;
                if (!previewColor) {
                    previewColor = this.service.stringToFormat(value, ColorFormats.RGBA);
                }
            }
            this.change.emit(isCmyk ? previewColor : value);
        }
    }
    registerOnChange(fn) {
        this.onChangeCallback = fn;
    }
    registerOnTouched(fn) {
        this.onTouchedCallback = fn;
    }
}
NgxColorsTriggerDirective.ɵfac = function NgxColorsTriggerDirective_Factory(t) { return new (t || NgxColorsTriggerDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.PanelFactoryService), i0.ɵɵdirectiveInject(i2.ConverterService)); };
NgxColorsTriggerDirective.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: NgxColorsTriggerDirective, selectors: [["", "ngx-colors-trigger", ""]], hostBindings: function NgxColorsTriggerDirective_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("click", function NgxColorsTriggerDirective_click_HostBindingHandler() { return ctx.onClick(); });
    } }, inputs: { colorsAnimation: "colorsAnimation", palette: "palette", format: "format", formats: "formats", position: "position", hideTextInput: "hideTextInput", hideColorPicker: "hideColorPicker", attachTo: "attachTo", overlayClassName: "overlayClassName", colorPickerControls: "colorPickerControls", acceptLabel: "acceptLabel", cancelLabel: "cancelLabel" }, outputs: { change: "change", input: "input", slider: "slider", close: "close", open: "open" }, features: [i0.ɵɵProvidersFeature([
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => NgxColorsTriggerDirective),
                multi: true,
            },
        ])] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NgxColorsTriggerDirective, [{
        type: Directive,
        args: [{
                selector: '[ngx-colors-trigger]',
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => NgxColorsTriggerDirective),
                        multi: true,
                    },
                ],
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i1.PanelFactoryService }, { type: i2.ConverterService }]; }, { colorsAnimation: [{
            type: Input
        }], palette: [{
            type: Input
        }], format: [{
            type: Input
        }], formats: [{
            type: Input
        }], position: [{
            type: Input
        }], hideTextInput: [{
            type: Input
        }], hideColorPicker: [{
            type: Input
        }], attachTo: [{
            type: Input
        }], overlayClassName: [{
            type: Input
        }], colorPickerControls: [{
            type: Input
        }], acceptLabel: [{
            type: Input
        }], cancelLabel: [{
            type: Input
        }], change: [{
            type: Output
        }], input: [{
            type: Output
        }], slider: [{
            type: Output
        }], close: [{
            type: Output
        }], open: [{
            type: Output
        }], onClick: [{
            type: HostListener,
            args: ['click']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWNvbG9ycy10cmlnZ2VyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1jb2xvcnMvc3JjL2xpYi9kaXJlY3RpdmVzL25neC1jb2xvcnMtdHJpZ2dlci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUNOLFNBQVMsRUFHVCxZQUFZLEVBQ1osVUFBVSxHQUVYLE1BQU0sZUFBZSxDQUFDO0FBR3ZCLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUd6RSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDN0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGtCQUFrQixDQUFDOzs7O0FBWWhELE1BQU0sT0FBTyx5QkFBeUI7SUFtQ2IsT0FBTztRQUM1QixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUNELFlBQ1UsVUFBc0IsRUFDdEIsWUFBaUMsRUFDakMsT0FBeUI7UUFGekIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixpQkFBWSxHQUFaLFlBQVksQ0FBcUI7UUFDakMsWUFBTyxHQUFQLE9BQU8sQ0FBa0I7UUF0Q25DLHVDQUF1QztRQUN2Qyw4QkFBOEI7UUFDOUIsMkVBQTJFO1FBRTNFLFVBQUssR0FBRyxFQUFFLENBQUM7UUFFWCx1RUFBdUU7UUFDOUQsb0JBQWUsR0FBeUIsVUFBVSxDQUFDO1FBT25ELGFBQVEsR0FBcUIsUUFBUSxDQUFDO1FBR3RDLGFBQVEsR0FBdUIsU0FBUyxDQUFDO1FBQ3pDLHFCQUFnQixHQUF1QixTQUFTLENBQUM7UUFDakQsd0JBQW1CLEdBQzFCLFNBQVMsQ0FBQztRQUNILGdCQUFXLEdBQVcsUUFBUSxDQUFDO1FBQy9CLGdCQUFXLEdBQVcsUUFBUSxDQUFDO1FBQ3hDLDZEQUE2RDtR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O3VGQUVVLHlCQUF5QjtjQVZyQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtnQkFDaEMsU0FBUyxFQUFFO29CQUNUO3dCQUNFLE9BQU8sRUFBRSxpQkFBaUI7d0JBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLDBCQUEwQixDQUFDO3dCQUN4RCxLQUFLLEVBQUUsSUFBSTtxQkFDWjtpQkFDRjthQUNGOzhIQVdVLGVBQWU7a0JBQXZCLEtBQUs7WUFHRyxPQUFPO2tCQUFmLEtBQUs7WUFFRyxNQUFNO2tCQUFkLEtBQUs7WUFDRyxPQUFPO2tCQUFmLEtBQUs7WUFDRyxRQUFRO2tCQUFoQixLQUFLO1lBQ0csYUFBYTtrQkFBckIsS0FBSztZQUNHLGVBQWU7a0JBQXZCLEtBQUs7WUFDRyxRQUFRO2tCQUFoQixLQUFLO1lBQ0csZ0JBQWdCO2tCQUF4QixLQUFLO1lBQ0csbUJBQW1CO2tCQUEzQixLQUFLO1lBRUcsV0FBVztrQkFBbkIsS0FBSztZQUNHLFdBQVc7a0JBQW5CLEtBQUs7WUFFSSxNQUFNO2tCQUFmLE1BQU07WUFFRyxLQUFLO2tCQUFkLE1BQU07WUFFRyxNQUFNO2tCQUFmLE1BQU07WUFDRyxLQUFLO2tCQUFkLE1BQU07WUFDRyxJQUFJO2tCQUFiLE1BQU07WUFFZ0IsT0FBTztrQkFBN0IsWUFBWTttQkFBQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgT3V0cHV0LFxyXG4gIERpcmVjdGl2ZSxcclxuICBFbGVtZW50UmVmLFxyXG4gIENvbXBvbmVudFJlZixcclxuICBIb3N0TGlzdGVuZXIsXHJcbiAgZm9yd2FyZFJlZixcclxuICBPbkRlc3Ryb3ksXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBhbmVsRmFjdG9yeVNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9wYW5lbC1mYWN0b3J5LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQYW5lbENvbXBvbmVudCB9IGZyb20gJy4uL2NvbXBvbmVudHMvcGFuZWwvcGFuZWwuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBOZ3hDb2xvcnNDb2xvciB9IGZyb20gJy4uL2NsYXNlcy9jb2xvcic7XHJcbmltcG9ydCB7IENvbnZlcnRlclNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9jb252ZXJ0ZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IGZvcm1hdHMgfSBmcm9tICcuLi9oZWxwZXJzL2Zvcm1hdHMnO1xyXG5pbXBvcnQgeyBDb2xvckZvcm1hdHMgfSBmcm9tICcuLi9lbnVtcy9mb3JtYXRzJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW25neC1jb2xvcnMtdHJpZ2dlcl0nLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTmd4Q29sb3JzVHJpZ2dlckRpcmVjdGl2ZSksXHJcbiAgICAgIG11bHRpOiB0cnVlLFxyXG4gICAgfSxcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmd4Q29sb3JzVHJpZ2dlckRpcmVjdGl2ZVxyXG4gIGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uRGVzdHJveVxyXG57XHJcbiAgLy9NYWluIGlucHV0L291dHB1dCBvZiB0aGUgY29sb3IgcGlja2VyXHJcbiAgLy8gQElucHV0KCkgY29sb3IgPSAnIzAwMDAwMCc7XHJcbiAgLy8gQE91dHB1dCgpIGNvbG9yQ2hhbmdlOkV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XHJcblxyXG4gIGNvbG9yID0gJyc7XHJcblxyXG4gIC8vVGhpcyBkZWZpbmVzIHRoZSB0eXBlIG9mIGFuaW1hdGlvbiBmb3IgdGhlIHBhbGF0dGUuKHNsaWRlLWluIHwgcG9wdXApXHJcbiAgQElucHV0KCkgY29sb3JzQW5pbWF0aW9uOiAnc2xpZGUtaW4nIHwgJ3BvcHVwJyA9ICdzbGlkZS1pbic7XHJcblxyXG4gIC8vVGhpcyBpcyB1c2VkIHRvIHNldCBhIGN1c3RvbSBwYWxldHRlIG9mIGNvbG9ycyBpbiB0aGUgcGFuZWw7XHJcbiAgQElucHV0KCkgcGFsZXR0ZTogQXJyYXk8c3RyaW5nPiB8IEFycmF5PE5neENvbG9yc0NvbG9yPjtcclxuXHJcbiAgQElucHV0KCkgZm9ybWF0OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgZm9ybWF0czogc3RyaW5nW107XHJcbiAgQElucHV0KCkgcG9zaXRpb246ICd0b3AnIHwgJ2JvdHRvbScgPSAnYm90dG9tJztcclxuICBASW5wdXQoKSBoaWRlVGV4dElucHV0OiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGhpZGVDb2xvclBpY2tlcjogYm9vbGVhbjtcclxuICBASW5wdXQoKSBhdHRhY2hUbzogc3RyaW5nIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xyXG4gIEBJbnB1dCgpIG92ZXJsYXlDbGFzc05hbWU6IHN0cmluZyB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcclxuICBASW5wdXQoKSBjb2xvclBpY2tlckNvbnRyb2xzOiAnZGVmYXVsdCcgfCAnb25seS1hbHBoYScgfCAnbm8tYWxwaGEnID1cclxuICAgICdkZWZhdWx0JztcclxuICBASW5wdXQoKSBhY2NlcHRMYWJlbDogc3RyaW5nID0gJ0FDQ0VQVCc7XHJcbiAgQElucHV0KCkgY2FuY2VsTGFiZWw6IHN0cmluZyA9ICdDQU5DRUwnO1xyXG4gIC8vIFRoaXMgZXZlbnQgaXMgdHJpZ2dlciBldmVyeSB0aW1lIHRoZSBzZWxlY3RlZCBjb2xvciBjaGFuZ2VcclxuICBAT3V0cHV0KCkgY2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xyXG4gIC8vIFRoaXMgZXZlbnQgaXMgdHJpZ2dlciBldmVyeSB0aW1lIHRoZSB1c2VyIGNoYW5nZSB0aGUgY29sb3IgdXNpbmcgdGhlIHBhbmVsXHJcbiAgQE91dHB1dCgpIGlucHV0OiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xyXG4gIC8vIFRoaXMgZXZlbnQgaXMgdHJpZ2dlciBldmVyeSB0aW1lIHRoZSB1c2VyIGNoYW5nZSB0aGUgY29sb3IgdXNpbmcgdGhlIHBhbmVsXHJcbiAgQE91dHB1dCgpIHNsaWRlcjogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcclxuICBAT3V0cHV0KCkgY2xvc2U6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XHJcbiAgQE91dHB1dCgpIG9wZW46IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJykgb25DbGljaygpIHtcclxuICAgIHRoaXMub3BlblBhbmVsKCk7XHJcbiAgfVxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSB0cmlnZ2VyUmVmOiBFbGVtZW50UmVmLFxyXG4gICAgcHJpdmF0ZSBwYW5lbEZhY3Rvcnk6IFBhbmVsRmFjdG9yeVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHNlcnZpY2U6IENvbnZlcnRlclNlcnZpY2VcclxuICApIHt9XHJcblxyXG4gIHBhbmVsUmVmOiBDb21wb25lbnRSZWY8UGFuZWxDb21wb25lbnQ+O1xyXG4gIGlzRGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgb25Ub3VjaGVkQ2FsbGJhY2s6ICgpID0+IHZvaWQgPSAoKSA9PiB7fTtcclxuICBvbkNoYW5nZUNhbGxiYWNrOiAoXzogYW55KSA9PiB2b2lkID0gKCkgPT4ge307XHJcblxyXG4gIHB1YmxpYyBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnBhbmVsUmVmKSB7XHJcbiAgICAgIHRoaXMucGFuZWxGYWN0b3J5LnJlbW92ZVBhbmVsKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb3BlblBhbmVsKCkge1xyXG4gICAgaWYgKCF0aGlzLmlzRGlzYWJsZWQpIHtcclxuICAgICAgdGhpcy5wYW5lbFJlZiA9IHRoaXMucGFuZWxGYWN0b3J5LmNyZWF0ZVBhbmVsKFxyXG4gICAgICAgIHRoaXMuYXR0YWNoVG8sXHJcbiAgICAgICAgdGhpcy5vdmVybGF5Q2xhc3NOYW1lXHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMucGFuZWxSZWYuaW5zdGFuY2UuaW5pY2lhdGUoXHJcbiAgICAgICAgdGhpcyxcclxuICAgICAgICB0aGlzLnRyaWdnZXJSZWYsXHJcbiAgICAgICAgdGhpcy5jb2xvcixcclxuICAgICAgICB0aGlzLnBhbGV0dGUsXHJcbiAgICAgICAgdGhpcy5jb2xvcnNBbmltYXRpb24sXHJcbiAgICAgICAgdGhpcy5mb3JtYXQsXHJcbiAgICAgICAgdGhpcy5oaWRlVGV4dElucHV0LFxyXG4gICAgICAgIHRoaXMuaGlkZUNvbG9yUGlja2VyLFxyXG4gICAgICAgIHRoaXMuYWNjZXB0TGFiZWwsXHJcbiAgICAgICAgdGhpcy5jYW5jZWxMYWJlbCxcclxuICAgICAgICB0aGlzLmNvbG9yUGlja2VyQ29udHJvbHMsXHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbixcclxuICAgICAgICB0aGlzLmZvcm1hdHNcclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIHRoaXMub3Blbi5lbWl0KHRoaXMuY29sb3IpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNsb3NlUGFuZWwoKSB7XHJcbiAgICB0aGlzLnBhbmVsRmFjdG9yeS5yZW1vdmVQYW5lbCgpO1xyXG4gICAgdGhpcy5vblRvdWNoZWRDYWxsYmFjaygpO1xyXG4gICAgdGhpcy5jbG9zZS5lbWl0KHRoaXMuY29sb3IpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgdGhpcy5pc0Rpc2FibGVkID0gaXNEaXNhYmxlZDtcclxuICAgIHRoaXMudHJpZ2dlclJlZi5uYXRpdmVFbGVtZW50LnN0eWxlLm9wYWNpdHkgPSBpc0Rpc2FibGVkID8gMC41IDogMTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXRDb2xvcihjb2xvciwgcHJldmlld0NvbG9yID0gXCJcIikge1xyXG4gICAgdGhpcy53cml0ZVZhbHVlKGNvbG9yLCBwcmV2aWV3Q29sb3IpO1xyXG4gICAgdGhpcy5vbkNoYW5nZUNhbGxiYWNrKGNvbG9yKTtcclxuICAgIHRoaXMuaW5wdXQuZW1pdChjb2xvcik7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2xpZGVyQ2hhbmdlKGNvbG9yKSB7XHJcbiAgICB0aGlzLnNsaWRlci5lbWl0KGNvbG9yKTtcclxuICB9XHJcblxyXG4gIGdldCB2YWx1ZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuY29sb3I7XHJcbiAgfVxyXG5cclxuICBzZXQgdmFsdWUodmFsdWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5zZXRDb2xvcih2YWx1ZSk7XHJcbiAgICB0aGlzLm9uQ2hhbmdlQ2FsbGJhY2sodmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgd3JpdGVWYWx1ZSh2YWx1ZSwgcHJldmlld0NvbG9yID0gXCJcIikge1xyXG4gICAgaWYgKHZhbHVlICE9PSB0aGlzLmNvbG9yKSB7XHJcbiAgICAgIGlmICh0aGlzLmZvcm1hdCkge1xyXG4gICAgICAgIGxldCBmb3JtYXQgPSBmb3JtYXRzLmluZGV4T2YodGhpcy5mb3JtYXQudG9Mb3dlckNhc2UoKSk7XHJcbiAgICAgICAgdmFsdWUgPSB0aGlzLnNlcnZpY2Uuc3RyaW5nVG9Gb3JtYXQodmFsdWUsIGZvcm1hdCk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5jb2xvciA9IHZhbHVlO1xyXG5cclxuICAgICAgbGV0IGlzQ215ayA9IGZhbHNlO1xyXG4gICAgICBpZiggdmFsdWUgJiYgdmFsdWUuc3RhcnRzV2l0aCgnY215aycpKSB7XHJcbiAgICAgICAgaXNDbXlrID0gdHJ1ZTtcclxuICAgICAgICBpZiggIXByZXZpZXdDb2xvciApIHtcclxuICAgICAgICAgIHByZXZpZXdDb2xvciA9IHRoaXMuc2VydmljZS5zdHJpbmdUb0Zvcm1hdCh2YWx1ZSwgQ29sb3JGb3JtYXRzLlJHQkEpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5jaGFuZ2UuZW1pdCggaXNDbXlrID8gcHJldmlld0NvbG9yIDogdmFsdWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KSB7XHJcbiAgICB0aGlzLm9uQ2hhbmdlQ2FsbGJhY2sgPSBmbjtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpIHtcclxuICAgIHRoaXMub25Ub3VjaGVkQ2FsbGJhY2sgPSBmbjtcclxuICB9XHJcbn1cclxuIl19