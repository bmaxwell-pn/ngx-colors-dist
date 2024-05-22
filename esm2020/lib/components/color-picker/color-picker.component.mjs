import { Component, ViewChild, ViewEncapsulation, Input, Output, EventEmitter, } from "@angular/core";
import { Hsva } from "../../clases/formats";
import { SliderDimension, SliderPosition } from "../../clases/slider";
import * as i0 from "@angular/core";
import * as i1 from "../../services/converter.service";
import * as i2 from "@angular/common";
import * as i3 from "../../directives/slider.directive";
const _c0 = ["hueSlider"];
const _c1 = ["alphaSlider"];
function ColorPickerComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵlistener("newValue", function ColorPickerComponent_div_2_Template_div_newValue_0_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r5 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r5.onSliderChange("saturation-lightness", $event)); });
    i0.ɵɵelementStart(1, "div", 9);
    i0.ɵɵelement(2, "div");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("background-color", ctx_r1.hueSliderColor);
    i0.ɵɵproperty("rgX", 1)("rgY", 1);
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("top", ctx_r1.slider == null ? null : ctx_r1.slider.v, "px")("left", ctx_r1.slider == null ? null : ctx_r1.slider.s, "px");
} }
function ColorPickerComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵelement(1, "div", 11)(2, "div", 12);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵstyleProp("background-color", ctx_r2.selectedColor);
} }
function ColorPickerComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 13, 14);
    i0.ɵɵlistener("newValue", function ColorPickerComponent_div_6_Template_div_newValue_0_listener($event) { i0.ɵɵrestoreView(_r9); const ctx_r8 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r8.onSliderChange("hue", $event)); });
    i0.ɵɵelementStart(2, "div", 15)(3, "div");
    i0.ɵɵelement(4, "div");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵproperty("rgX", 1);
    i0.ɵɵadvance(2);
    i0.ɵɵstyleProp("left", ctx_r3.slider == null ? null : ctx_r3.slider.h, "px");
} }
function ColorPickerComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 16, 17);
    i0.ɵɵlistener("newValue", function ColorPickerComponent_div_7_Template_div_newValue_0_listener($event) { i0.ɵɵrestoreView(_r12); const ctx_r11 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r11.onSliderChange("alpha", $event)); });
    i0.ɵɵelement(2, "div", 18);
    i0.ɵɵelementStart(3, "div", 15)(4, "div");
    i0.ɵɵelement(5, "div");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵproperty("rgX", 1);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngStyle", ctx_r4.getBackgroundColor(ctx_r4.alphaSliderColor));
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("left", ctx_r4.slider == null ? null : ctx_r4.slider.a, "px");
} }
export class ColorPickerComponent {
    constructor(service, cdr) {
        this.service = service;
        this.cdr = cdr;
        //IO color
        this.color = new Hsva(0, 1, 1, 1);
        this.controls = "default";
        this.sliderChange = new EventEmitter(false);
        this.onAlphaChange = new EventEmitter(false);
        //Event triggered when any slider change
        // @Output() colorSelectedChange:EventEmitter<Hsva> = new EventEmitter<Hsva>(false);
        this.hsva = new Hsva(0, 1, 1, 1);
        this.selectedColor = "#000000";
        this.fallbackColor = "#000000";
    }
    ngOnInit() {
        if (!this.color) {
            this.color = new Hsva(0, 1, 1, 1);
        }
        this.slider = new SliderPosition(0, 0, 0, 0);
        this.update();
    }
    ngOnDestroy() { }
    ngOnChanges(changes) {
        if (changes.color && this.color) {
            this.update();
        }
    }
    ngAfterViewInit() {
        const hueWidth = this.hueSlider?.nativeElement.offsetWidth || 140;
        const alphaWidth = this.alphaSlider?.nativeElement.offsetWidth || 140;
        this.sliderDimMax = new SliderDimension(hueWidth, 220, 130, alphaWidth);
        this.update();
    }
    onSliderChange(type, event) {
        switch (type) {
            case "saturation-lightness":
                this.hsva.onColorChange(event);
                break;
            case "hue":
                this.hsva.onHueChange(event);
                break;
            case "alpha":
                this.hsva.onAlphaChange(event);
                this.onAlphaChange.emit(event);
                break;
            case "value":
                this.hsva.onValueChange(event);
                break;
        }
        // this.sHue = this.hsva.h;
        this.update();
        this.setColor(this.outputColor);
    }
    setColor(color) {
        this.color = color;
        this.sliderChange.emit(this.color);
    }
    getBackgroundColor(color) {
        return {
            background: "linear-gradient(90deg, rgba(36,0,0,0) 0%, " + color + " 100%)",
        };
    }
    update() {
        this.hsva = this.color;
        if (this.sliderDimMax) {
            let rgba = this.service.hsvaToRgba(this.hsva).denormalize();
            let hue = this.service
                .hsvaToRgba(new Hsva(this.hsva.h, 1, 1, 1))
                .denormalize();
            this.hueSliderColor = "rgb(" + hue.r + "," + hue.g + "," + hue.b + ")";
            this.alphaSliderColor =
                "rgb(" + rgba.r + "," + rgba.g + "," + rgba.b + ")";
            this.outputColor = this.hsva;
            this.selectedColor = this.service.hsvaToRgba(this.hsva).toString();
            this.slider = new SliderPosition(
            // (this.sHue || this.hsva.h) * this.sliderDimMax.h - 8,
            this.hsva.h * this.sliderDimMax.h - 5, this.hsva.s * this.sliderDimMax.s - 8, (1 - this.hsva.v) * this.sliderDimMax.v - 8, this.hsva.a * this.sliderDimMax.a - 5);
            this.cdr.detectChanges();
        }
    }
}
ColorPickerComponent.ɵfac = function ColorPickerComponent_Factory(t) { return new (t || ColorPickerComponent)(i0.ɵɵdirectiveInject(i1.ConverterService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
ColorPickerComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ColorPickerComponent, selectors: [["color-picker"]], viewQuery: function ColorPickerComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 5);
        i0.ɵɵviewQuery(_c1, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.hueSlider = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.alphaSlider = _t.first);
    } }, inputs: { color: "color", controls: "controls" }, outputs: { sliderChange: "sliderChange", onAlphaChange: "onAlphaChange" }, features: [i0.ɵɵNgOnChangesFeature], decls: 8, vars: 4, consts: [[1, "color-picker", 3, "click"], ["dialogPopup", ""], ["class", "saturation-lightness", 3, "slider", "rgX", "rgY", "background-color", "newValue", 4, "ngIf"], [1, "hue-alpha", "box"], ["class", "left", 4, "ngIf"], [1, "right"], ["class", "hue", 3, "slider", "rgX", "newValue", 4, "ngIf"], ["class", "alpha", 3, "slider", "rgX", "newValue", 4, "ngIf"], [1, "saturation-lightness", 3, "slider", "rgX", "rgY", "newValue"], [1, "cursor"], [1, "left"], [1, "selected-color-background"], [1, "selected-color"], [1, "hue", 3, "slider", "rgX", "newValue"], ["hueSlider", ""], [1, "sliderCursor"], [1, "alpha", 3, "slider", "rgX", "newValue"], ["alphaSlider", ""], [1, "alpha-gradient", 3, "ngStyle"]], template: function ColorPickerComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0, 1);
        i0.ɵɵlistener("click", function ColorPickerComponent_Template_div_click_0_listener($event) { return $event.stopPropagation(); });
        i0.ɵɵtemplate(2, ColorPickerComponent_div_2_Template, 3, 8, "div", 2);
        i0.ɵɵelementStart(3, "div", 3);
        i0.ɵɵtemplate(4, ColorPickerComponent_div_4_Template, 3, 2, "div", 4);
        i0.ɵɵelementStart(5, "div", 5);
        i0.ɵɵtemplate(6, ColorPickerComponent_div_6_Template, 5, 3, "div", 6);
        i0.ɵɵtemplate(7, ColorPickerComponent_div_7_Template, 6, 4, "div", 7);
        i0.ɵɵelementEnd()()();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.controls != "only-alpha");
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.controls != "only-alpha");
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.controls != "only-alpha");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.controls != "no-alpha");
    } }, dependencies: [i2.NgIf, i2.NgStyle, i3.SliderDirective], styles: [".color-picker{position:relative;z-index:1000;width:220px;height:auto;cursor:default;-webkit-touch-callout:none;-webkit-user-select:none;user-select:none;touch-action:none}.color-picker *{box-sizing:border-box;margin:0;font-size:11px}.color-picker input{width:0;height:26px;min-width:0;font-size:13px;text-align:center;color:#000}.color-picker input:invalid,.color-picker input:-moz-ui-invalid,.color-picker input:-moz-submit-invalid{box-shadow:none}.color-picker input::-webkit-inner-spin-button,.color-picker input::-webkit-outer-spin-button{margin:0;-webkit-appearance:none}.color-picker .sliderCursor{width:10px;border-radius:5px;position:absolute;margin-top:-3px;border:1px solid black}.color-picker .sliderCursor>div{border:2px solid white;border-radius:5px}.color-picker .sliderCursor>div>div{border-radius:5px;border:1px solid black;height:24px}.color-picker .cursor{position:absolute;width:21px;border:3px solid black;border-radius:100%;margin:-2px 0 0 -2px}.color-picker .cursor>div{height:15px;border:3px solid white;border-radius:100%}.color-picker .box{display:flex;padding:4px 8px}.color-picker .left{position:relative;padding:16px 8px}.color-picker .right{flex:1 1 auto;display:flex;flex-direction:column;gap:10px;padding:12px 8px}.color-picker .hue-alpha{display:flex;align-items:center;margin-bottom:3px}.color-picker .hue{direction:ltr;width:100%;height:24px;border:none;border-radius:5px;position:relative;cursor:pointer;background-size:100% 100%;background:linear-gradient(to right,red 0%,#ff0 17%,lime 33%,cyan 50%,blue 66%,#f0f 83%,red 100%)}.color-picker .alpha{direction:ltr;position:relative;width:100%;height:24px;border:none;border-radius:5px;cursor:pointer;background-image:linear-gradient(45deg,#ccc 25%,transparent 25%),linear-gradient(-45deg,#ccc 25%,transparent 25%),linear-gradient(45deg,transparent 75%,#ccc 75%),linear-gradient(-45deg,transparent 75%,#ccc 75%);background-size:16px 16px;background-position:0 0,0 8px,8px -8px,-8px 0px}.color-picker .alpha-gradient{width:100%;height:100%;border-radius:5px;position:absolute}.color-picker .selected-color{position:absolute;top:16px;left:8px;width:40px;height:40px;box-shadow:0 1px 1px 1px #00000026;border-radius:50%}.color-picker .selected-color-background{width:40px;height:40px;border-radius:50%;background-image:linear-gradient(45deg,#ccc 25%,transparent 25%),linear-gradient(-45deg,#ccc 25%,transparent 25%),linear-gradient(45deg,transparent 75%,#ccc 75%),linear-gradient(-45deg,transparent 75%,#ccc 75%);background-size:16px 16px;background-position:0 0,0 8px,8px -8px,-8px 0px}.color-picker .saturation-lightness{direction:ltr;cursor:crosshair;width:100%;position:relative;height:130px;border:none;touch-action:manipulation;background-image:linear-gradient(to top,#000 0%,transparent 100%),linear-gradient(to right,#fff 0%,transparent 100%)}\n"], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ColorPickerComponent, [{
        type: Component,
        args: [{ selector: "color-picker", encapsulation: ViewEncapsulation.None, template: "<div #dialogPopup class=\"color-picker\" (click)=\"$event.stopPropagation()\">\r\n  <div\r\n    class=\"saturation-lightness\"\r\n    *ngIf=\"this.controls != 'only-alpha'\"\r\n    [slider]\r\n    [rgX]=\"1\"\r\n    [rgY]=\"1\"\r\n    [style.background-color]=\"hueSliderColor\"\r\n    (newValue)=\"onSliderChange('saturation-lightness', $event)\"\r\n  >\r\n    <div class=\"cursor\" [style.top.px]=\"slider?.v\" [style.left.px]=\"slider?.s\">\r\n      <div></div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"hue-alpha box\">\r\n    <div class=\"left\" *ngIf=\"this.controls != 'only-alpha'\">\r\n      <div class=\"selected-color-background\"></div>\r\n      <div\r\n        class=\"selected-color\"\r\n        [style.background-color]=\"selectedColor\"\r\n      ></div>\r\n    </div>\r\n\r\n    <div class=\"right\">\r\n      <div\r\n        *ngIf=\"this.controls != 'only-alpha'\"\r\n        #hueSlider\r\n        class=\"hue\"\r\n        [slider]\r\n        [rgX]=\"1\"\r\n        (newValue)=\"onSliderChange('hue', $event)\"\r\n      >\r\n        <div class=\"sliderCursor\" [style.left.px]=\"slider?.h\">\r\n          <div><div></div></div>\r\n        </div>\r\n      </div>\r\n\r\n      <div\r\n        *ngIf=\"this.controls != 'no-alpha'\"\r\n        #alphaSlider\r\n        class=\"alpha\"\r\n        [slider]\r\n        [rgX]=\"1\"\r\n        (newValue)=\"onSliderChange('alpha', $event)\"\r\n      >\r\n        <div\r\n          class=\"alpha-gradient\"\r\n          [ngStyle]=\"getBackgroundColor(alphaSliderColor)\"\r\n        ></div>\r\n        <div class=\"sliderCursor\" [style.left.px]=\"slider?.a\">\r\n          <div><div></div></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n", styles: [".color-picker{position:relative;z-index:1000;width:220px;height:auto;cursor:default;-webkit-touch-callout:none;-webkit-user-select:none;user-select:none;touch-action:none}.color-picker *{box-sizing:border-box;margin:0;font-size:11px}.color-picker input{width:0;height:26px;min-width:0;font-size:13px;text-align:center;color:#000}.color-picker input:invalid,.color-picker input:-moz-ui-invalid,.color-picker input:-moz-submit-invalid{box-shadow:none}.color-picker input::-webkit-inner-spin-button,.color-picker input::-webkit-outer-spin-button{margin:0;-webkit-appearance:none}.color-picker .sliderCursor{width:10px;border-radius:5px;position:absolute;margin-top:-3px;border:1px solid black}.color-picker .sliderCursor>div{border:2px solid white;border-radius:5px}.color-picker .sliderCursor>div>div{border-radius:5px;border:1px solid black;height:24px}.color-picker .cursor{position:absolute;width:21px;border:3px solid black;border-radius:100%;margin:-2px 0 0 -2px}.color-picker .cursor>div{height:15px;border:3px solid white;border-radius:100%}.color-picker .box{display:flex;padding:4px 8px}.color-picker .left{position:relative;padding:16px 8px}.color-picker .right{flex:1 1 auto;display:flex;flex-direction:column;gap:10px;padding:12px 8px}.color-picker .hue-alpha{display:flex;align-items:center;margin-bottom:3px}.color-picker .hue{direction:ltr;width:100%;height:24px;border:none;border-radius:5px;position:relative;cursor:pointer;background-size:100% 100%;background:linear-gradient(to right,red 0%,#ff0 17%,lime 33%,cyan 50%,blue 66%,#f0f 83%,red 100%)}.color-picker .alpha{direction:ltr;position:relative;width:100%;height:24px;border:none;border-radius:5px;cursor:pointer;background-image:linear-gradient(45deg,#ccc 25%,transparent 25%),linear-gradient(-45deg,#ccc 25%,transparent 25%),linear-gradient(45deg,transparent 75%,#ccc 75%),linear-gradient(-45deg,transparent 75%,#ccc 75%);background-size:16px 16px;background-position:0 0,0 8px,8px -8px,-8px 0px}.color-picker .alpha-gradient{width:100%;height:100%;border-radius:5px;position:absolute}.color-picker .selected-color{position:absolute;top:16px;left:8px;width:40px;height:40px;box-shadow:0 1px 1px 1px #00000026;border-radius:50%}.color-picker .selected-color-background{width:40px;height:40px;border-radius:50%;background-image:linear-gradient(45deg,#ccc 25%,transparent 25%),linear-gradient(-45deg,#ccc 25%,transparent 25%),linear-gradient(45deg,transparent 75%,#ccc 75%),linear-gradient(-45deg,transparent 75%,#ccc 75%);background-size:16px 16px;background-position:0 0,0 8px,8px -8px,-8px 0px}.color-picker .saturation-lightness{direction:ltr;cursor:crosshair;width:100%;position:relative;height:130px;border:none;touch-action:manipulation;background-image:linear-gradient(to top,#000 0%,transparent 100%),linear-gradient(to right,#fff 0%,transparent 100%)}\n"] }]
    }], function () { return [{ type: i1.ConverterService }, { type: i0.ChangeDetectorRef }]; }, { color: [{
            type: Input
        }], controls: [{
            type: Input
        }], sliderChange: [{
            type: Output
        }], onAlphaChange: [{
            type: Output
        }], hueSlider: [{
            type: ViewChild,
            args: ["hueSlider", { static: false }]
        }], alphaSlider: [{
            type: ViewChild,
            args: ["alphaSlider", { static: false }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sb3ItcGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1jb2xvcnMvc3JjL2xpYi9jb21wb25lbnRzL2NvbG9yLXBpY2tlci9jb2xvci1waWNrZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWNvbG9ycy9zcmMvbGliL2NvbXBvbmVudHMvY29sb3ItcGlja2VyL2NvbG9yLXBpY2tlci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUlULFNBQVMsRUFDVCxpQkFBaUIsRUFHakIsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEdBRWIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFjLElBQUksRUFBUSxNQUFNLHNCQUFzQixDQUFDO0FBRTlELE9BQU8sRUFBRSxlQUFlLEVBQUUsY0FBYyxFQUFFLE1BQU0scUJBQXFCLENBQUM7Ozs7Ozs7OztJQ2hCcEUsOEJBUUM7SUFEQywwS0FBWSxlQUFBLHNCQUFlLHNCQUFzQixTQUFTLENBQUEsSUFBQztJQUUzRCw4QkFBMkU7SUFDekUsc0JBQVc7SUFDYixpQkFBTSxFQUFBOzs7SUFMTix5REFBeUM7SUFGekMsdUJBQVMsVUFBQTtJQUtXLGVBQTBCO0lBQTFCLDJFQUEwQiw4REFBQTs7O0lBTTlDLCtCQUF3RDtJQUN0RCwwQkFBNkMsY0FBQTtJQUsvQyxpQkFBTTs7O0lBRkYsZUFBd0M7SUFBeEMsd0RBQXdDOzs7O0lBSzFDLG1DQU9DO0lBREMsMEtBQVksZUFBQSxzQkFBZSxLQUFLLFNBQVMsQ0FBQSxJQUFDO0lBRTFDLCtCQUFzRCxVQUFBO0lBQy9DLHNCQUFXO0lBQUEsaUJBQU0sRUFBQSxFQUFBOzs7SUFKeEIsdUJBQVM7SUFHaUIsZUFBMkI7SUFBM0IsNEVBQTJCOzs7O0lBS3ZELG1DQU9DO0lBREMsNEtBQVksZUFB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O2tCQUFyQixNQUFNO1lBQ0csYUFBYTtrQkFBdEIsTUFBTTtZQWdCb0MsU0FBUztrQkFBbkQsU0FBUzttQkFBQyxXQUFXLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO1lBQ0ksV0FBVztrQkFBdkQsU0FBUzttQkFBQyxhQUFhLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgT25Jbml0LFxyXG4gIE9uRGVzdHJveSxcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIFZpZXdDaGlsZCxcclxuICBWaWV3RW5jYXBzdWxhdGlvbixcclxuICBFbGVtZW50UmVmLFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIElucHV0LFxyXG4gIE91dHB1dCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgT25DaGFuZ2VzLFxyXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5pbXBvcnQgeyBDbXlrLCBIc2xhLCBIc3ZhLCBSZ2JhIH0gZnJvbSBcIi4uLy4uL2NsYXNlcy9mb3JtYXRzXCI7XHJcbmltcG9ydCB7IENvbG9yRm9ybWF0cyB9IGZyb20gXCIuLi8uLi9lbnVtcy9mb3JtYXRzXCI7XHJcbmltcG9ydCB7IFNsaWRlckRpbWVuc2lvbiwgU2xpZGVyUG9zaXRpb24gfSBmcm9tIFwiLi4vLi4vY2xhc2VzL3NsaWRlclwiO1xyXG5cclxuaW1wb3J0IHsgQ29udmVydGVyU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9jb252ZXJ0ZXIuc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwiY29sb3ItcGlja2VyXCIsXHJcbiAgdGVtcGxhdGVVcmw6IFwiLi9jb2xvci1waWNrZXIuY29tcG9uZW50Lmh0bWxcIixcclxuICBzdHlsZVVybHM6IFtcIi4vY29sb3ItcGlja2VyLmNvbXBvbmVudC5zY3NzXCJdLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb2xvclBpY2tlckNvbXBvbmVudFxyXG4gIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlc1xyXG57XHJcbiAgLy9JTyBjb2xvclxyXG4gIEBJbnB1dCgpIGNvbG9yOiBIc3ZhID0gbmV3IEhzdmEoMCwgMSwgMSwgMSk7XHJcbiAgQElucHV0KCkgY29udHJvbHM6IFwiZGVmYXVsdFwiIHwgXCJvbmx5LWFscGhhXCIgfCBcIm5vLWFscGhhXCIgPSBcImRlZmF1bHRcIjtcclxuICBAT3V0cHV0KCkgc2xpZGVyQ2hhbmdlOiBFdmVudEVtaXR0ZXI8SHN2YT4gPSBuZXcgRXZlbnRFbWl0dGVyPEhzdmE+KGZhbHNlKTtcclxuICBAT3V0cHV0KCkgb25BbHBoYUNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oZmFsc2UpO1xyXG4gIC8vRXZlbnQgdHJpZ2dlcmVkIHdoZW4gYW55IHNsaWRlciBjaGFuZ2VcclxuICAvLyBAT3V0cHV0KCkgY29sb3JTZWxlY3RlZENoYW5nZTpFdmVudEVtaXR0ZXI8SHN2YT4gPSBuZXcgRXZlbnRFbWl0dGVyPEhzdmE+KGZhbHNlKTtcclxuXHJcbiAgcHJpdmF0ZSBoc3ZhOiBIc3ZhID0gbmV3IEhzdmEoMCwgMSwgMSwgMSk7XHJcbiAgcHJpdmF0ZSBvdXRwdXRDb2xvcjogSHN2YTtcclxuICBwdWJsaWMgc2VsZWN0ZWRDb2xvcjogc3RyaW5nID0gXCIjMDAwMDAwXCI7XHJcbiAgcHJpdmF0ZSBmYWxsYmFja0NvbG9yOiBzdHJpbmcgPSBcIiMwMDAwMDBcIjtcclxuXHJcbiAgLy8gcHJpdmF0ZSBzSHVlOiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBzbGlkZXJEaW1NYXg6IFNsaWRlckRpbWVuc2lvbjtcclxuICBwdWJsaWMgc2xpZGVyOiBTbGlkZXJQb3NpdGlvbjtcclxuXHJcbiAgcHVibGljIGh1ZVNsaWRlckNvbG9yOiBzdHJpbmc7XHJcbiAgcHVibGljIGFscGhhU2xpZGVyQ29sb3I6IHN0cmluZztcclxuXHJcbiAgQFZpZXdDaGlsZChcImh1ZVNsaWRlclwiLCB7IHN0YXRpYzogZmFsc2UgfSkgaHVlU2xpZGVyOiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoXCJhbHBoYVNsaWRlclwiLCB7IHN0YXRpYzogZmFsc2UgfSkgYWxwaGFTbGlkZXI6IEVsZW1lbnRSZWY7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBzZXJ2aWNlOiBDb252ZXJ0ZXJTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmXHJcbiAgKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5jb2xvcikge1xyXG4gICAgICB0aGlzLmNvbG9yID0gbmV3IEhzdmEoMCwgMSwgMSwgMSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnNsaWRlciA9IG5ldyBTbGlkZXJQb3NpdGlvbigwLCAwLCAwLCAwKTtcclxuICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHt9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IGFueSk6IHZvaWQge1xyXG4gICAgaWYgKGNoYW5nZXMuY29sb3IgJiYgdGhpcy5jb2xvcikge1xyXG4gICAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgY29uc3QgaHVlV2lkdGggPSB0aGlzLmh1ZVNsaWRlcj8ubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aCB8fCAxNDA7XHJcbiAgICBjb25zdCBhbHBoYVdpZHRoID0gdGhpcy5hbHBoYVNsaWRlcj8ubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aCB8fCAxNDA7XHJcbiAgICB0aGlzLnNsaWRlckRpbU1heCA9IG5ldyBTbGlkZXJEaW1lbnNpb24oaHVlV2lkdGgsIDIyMCwgMTMwLCBhbHBoYVdpZHRoKTtcclxuICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb25TbGlkZXJDaGFuZ2UodHlwZTogc3RyaW5nLCBldmVudCkge1xyXG4gICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgIGNhc2UgXCJzYXR1cmF0aW9uLWxpZ2h0bmVzc1wiOlxyXG4gICAgICAgIHRoaXMuaHN2YS5vbkNvbG9yQ2hhbmdlKGV2ZW50KTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcImh1ZVwiOlxyXG4gICAgICAgIHRoaXMuaHN2YS5vbkh1ZUNoYW5nZShldmVudCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJhbHBoYVwiOlxyXG4gICAgICAgIHRoaXMuaHN2YS5vbkFscGhhQ2hhbmdlKGV2ZW50KTtcclxuICAgICAgICB0aGlzLm9uQWxwaGFDaGFuZ2UuZW1pdChldmVudCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJ2YWx1ZVwiOlxyXG4gICAgICAgIHRoaXMuaHN2YS5vblZhbHVlQ2hhbmdlKGV2ZW50KTtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICAgIC8vIHRoaXMuc0h1ZSA9IHRoaXMuaHN2YS5oO1xyXG4gICAgdGhpcy51cGRhdGUoKTtcclxuICAgIHRoaXMuc2V0Q29sb3IodGhpcy5vdXRwdXRDb2xvcik7XHJcbiAgfVxyXG5cclxuICBzZXRDb2xvcihjb2xvcikge1xyXG4gICAgdGhpcy5jb2xvciA9IGNvbG9yO1xyXG4gICAgdGhpcy5zbGlkZXJDaGFuZ2UuZW1pdCh0aGlzLmNvbG9yKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRCYWNrZ3JvdW5kQ29sb3IoY29sb3IpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGJhY2tncm91bmQ6XHJcbiAgICAgICAgXCJsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMzYsMCwwLDApIDAlLCBcIiArIGNvbG9yICsgXCIgMTAwJSlcIixcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHVwZGF0ZSgpOiB2b2lkIHtcclxuICAgIHRoaXMuaHN2YSA9IHRoaXMuY29sb3I7XHJcbiAgICBpZiAodGhpcy5zbGlkZXJEaW1NYXgpIHtcclxuICAgICAgbGV0IHJnYmEgPSB0aGlzLnNlcnZpY2UuaHN2YVRvUmdiYSh0aGlzLmhzdmEpLmRlbm9ybWFsaXplKCk7XHJcbiAgICAgIGxldCBodWUgPSB0aGlzLnNlcnZpY2VcclxuICAgICAgICAuaHN2YVRvUmdiYShuZXcgSHN2YSh0aGlzLmhzdmEuaCwgMSwgMSwgMSkpXHJcbiAgICAgICAgLmRlbm9ybWFsaXplKCk7XHJcblxyXG4gICAgICB0aGlzLmh1ZVNsaWRlckNvbG9yID0gXCJyZ2IoXCIgKyBodWUuciArIFwiLFwiICsgaHVlLmcgKyBcIixcIiArIGh1ZS5iICsgXCIpXCI7XHJcbiAgICAgIHRoaXMuYWxwaGFTbGlkZXJDb2xvciA9XHJcbiAgICAgICAgXCJyZ2IoXCIgKyByZ2JhLnIgKyBcIixcIiArIHJnYmEuZyArIFwiLFwiICsgcmdiYS5iICsgXCIpXCI7XHJcblxyXG4gICAgICB0aGlzLm91dHB1dENvbG9yID0gdGhpcy5oc3ZhO1xyXG4gICAgICB0aGlzLnNlbGVjdGVkQ29sb3IgPSB0aGlzLnNlcnZpY2UuaHN2YVRvUmdiYSh0aGlzLmhzdmEpLnRvU3RyaW5nKCk7XHJcblxyXG4gICAgICB0aGlzLnNsaWRlciA9IG5ldyBTbGlkZXJQb3NpdGlvbihcclxuICAgICAgICAvLyAodGhpcy5zSHVlIHx8IHRoaXMuaHN2YS5oKSAqIHRoaXMuc2xpZGVyRGltTWF4LmggLSA4LFxyXG4gICAgICAgIHRoaXMuaHN2YS5oICogdGhpcy5zbGlkZXJEaW1NYXguaCAtIDUsXHJcbiAgICAgICAgdGhpcy5oc3ZhLnMgKiB0aGlzLnNsaWRlckRpbU1heC5zIC0gOCxcclxuICAgICAgICAoMSAtIHRoaXMuaHN2YS52KSAqIHRoaXMuc2xpZGVyRGltTWF4LnYgLSA4LFxyXG4gICAgICAgIHRoaXMuaHN2YS5hICogdGhpcy5zbGlkZXJEaW1NYXguYSAtIDVcclxuICAgICAgKTtcclxuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCI8ZGl2ICNkaWFsb2dQb3B1cCBjbGFzcz1cImNvbG9yLXBpY2tlclwiIChjbGljayk9XCIkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcIj5cclxuICA8ZGl2XHJcbiAgICBjbGFzcz1cInNhdHVyYXRpb24tbGlnaHRuZXNzXCJcclxuICAgICpuZ0lmPVwidGhpcy5jb250cm9scyAhPSAnb25seS1hbHBoYSdcIlxyXG4gICAgW3NsaWRlcl1cclxuICAgIFtyZ1hdPVwiMVwiXHJcbiAgICBbcmdZXT1cIjFcIlxyXG4gICAgW3N0eWxlLmJhY2tncm91bmQtY29sb3JdPVwiaHVlU2xpZGVyQ29sb3JcIlxyXG4gICAgKG5ld1ZhbHVlKT1cIm9uU2xpZGVyQ2hhbmdlKCdzYXR1cmF0aW9uLWxpZ2h0bmVzcycsICRldmVudClcIlxyXG4gID5cclxuICAgIDxkaXYgY2xhc3M9XCJjdXJzb3JcIiBbc3R5bGUudG9wLnB4XT1cInNsaWRlcj8udlwiIFtzdHlsZS5sZWZ0LnB4XT1cInNsaWRlcj8uc1wiPlxyXG4gICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcblxyXG4gIDxkaXYgY2xhc3M9XCJodWUtYWxwaGEgYm94XCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwibGVmdFwiICpuZ0lmPVwidGhpcy5jb250cm9scyAhPSAnb25seS1hbHBoYSdcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cInNlbGVjdGVkLWNvbG9yLWJhY2tncm91bmRcIj48L2Rpdj5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzPVwic2VsZWN0ZWQtY29sb3JcIlxyXG4gICAgICAgIFtzdHlsZS5iYWNrZ3JvdW5kLWNvbG9yXT1cInNlbGVjdGVkQ29sb3JcIlxyXG4gICAgICA+PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwicmlnaHRcIj5cclxuICAgICAgPGRpdlxyXG4gICAgICAgICpuZ0lmPVwidGhpcy5jb250cm9scyAhPSAnb25seS1hbHBoYSdcIlxyXG4gICAgICAgICNodWVTbGlkZXJcclxuICAgICAgICBjbGFzcz1cImh1ZVwiXHJcbiAgICAgICAgW3NsaWRlcl1cclxuICAgICAgICBbcmdYXT1cIjFcIlxyXG4gICAgICAgIChuZXdWYWx1ZSk9XCJvblNsaWRlckNoYW5nZSgnaHVlJywgJGV2ZW50KVwiXHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwic2xpZGVyQ3Vyc29yXCIgW3N0eWxlLmxlZnQucHhdPVwic2xpZGVyPy5oXCI+XHJcbiAgICAgICAgICA8ZGl2PjxkaXY+PC9kaXY+PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdlxyXG4gICAgICAgICpuZ0lmPVwidGhpcy5jb250cm9scyAhPSAnbm8tYWxwaGEnXCJcclxuICAgICAgICAjYWxwaGFTbGlkZXJcclxuICAgICAgICBjbGFzcz1cImFscGhhXCJcclxuICAgICAgICBbc2xpZGVyXVxyXG4gICAgICAgIFtyZ1hdPVwiMVwiXHJcbiAgICAgICAgKG5ld1ZhbHVlKT1cIm9uU2xpZGVyQ2hhbmdlKCdhbHBoYScsICRldmVudClcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3M9XCJhbHBoYS1ncmFkaWVudFwiXHJcbiAgICAgICAgICBbbmdTdHlsZV09XCJnZXRCYWNrZ3JvdW5kQ29sb3IoYWxwaGFTbGlkZXJDb2xvcilcIlxyXG4gICAgICAgID48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwic2xpZGVyQ3Vyc29yXCIgW3N0eWxlLmxlZnQucHhdPVwic2xpZGVyPy5hXCI+XHJcbiAgICAgICAgICA8ZGl2PjxkaXY+PC9kaXY+PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG4iXX0=