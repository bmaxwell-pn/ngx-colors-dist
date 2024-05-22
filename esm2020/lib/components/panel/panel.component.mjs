import { Component, ViewChild, HostListener, HostBinding, } from '@angular/core';
import { trigger, transition, query, style, stagger, animate, keyframes, } from '@angular/animations';
import { ColorFormats } from '../../enums/formats';
import { defaultColors } from '../../helpers/default-colors';
import { formats } from '../../helpers/formats';
import { Hsva } from '../../clases/formats';
import { NgxColorsColor } from '../../clases/color';
import * as i0 from "@angular/core";
import * as i1 from "../../services/converter.service";
import * as i2 from "@angular/common";
import * as i3 from "../color-picker/color-picker.component";
const _c0 = ["dialog"];
function PanelComponent_ng_container_2_ng_container_2_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 11);
} }
function PanelComponent_ng_container_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 8)(2, "div", 9);
    i0.ɵɵlistener("click", function PanelComponent_ng_container_2_ng_container_2_Template_div_click_2_listener() { const restoredCtx = i0.ɵɵrestoreView(_r12); const color_r8 = restoredCtx.$implicit; const ctx_r11 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r11.onColorClick(color_r8)); });
    i0.ɵɵtemplate(3, PanelComponent_ng_container_2_ng_container_2_div_3_Template, 1, 0, "div", 10);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const color_r8 = ctx.$implicit;
    const i_r9 = ctx.index;
    const ctx_r5 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("colornull", !color_r8);
    i0.ɵɵproperty("ngStyle", ctx_r5.getBackgroundColor(color_r8));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", i_r9 == ctx_r5.indexSeleccionado);
} }
function PanelComponent_ng_container_2_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 17);
} if (rf & 2) {
    const ctx_r13 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngStyle", ctx_r13.getBackgroundColor(ctx_r13.color));
} }
function PanelComponent_ng_container_2_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 12);
    i0.ɵɵlistener("click", function PanelComponent_ng_container_2_div_3_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r15); const ctx_r14 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r14.addColor()); });
    i0.ɵɵtemplate(1, PanelComponent_ng_container_2_div_3_div_1_Template, 1, 1, "div", 13);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(2, "svg", 14);
    i0.ɵɵelement(3, "path", 15)(4, "path", 16);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r6.indexSeleccionado === undefined);
} }
function PanelComponent_ng_container_2_color_picker_4_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "color-picker", 18);
    i0.ɵɵlistener("colorChange", function PanelComponent_ng_container_2_color_picker_4_Template_color_picker_colorChange_0_listener($event) { i0.ɵɵrestoreView(_r17); const ctx_r16 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r16.onChangeColorPicker($event)); })("onAlphaChange", function PanelComponent_ng_container_2_color_picker_4_Template_color_picker_onAlphaChange_0_listener($event) { i0.ɵɵrestoreView(_r17); const ctx_r18 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r18.onAlphaChange($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("controls", ctx_r7.colorPickerControls)("color", ctx_r7.hsva);
} }
function PanelComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 4);
    i0.ɵɵtemplate(2, PanelComponent_ng_container_2_ng_container_2_Template, 4, 4, "ng-container", 5);
    i0.ɵɵtemplate(3, PanelComponent_ng_container_2_div_3_Template, 5, 1, "div", 6);
    i0.ɵɵtemplate(4, PanelComponent_ng_container_2_color_picker_4_Template, 1, 2, "color-picker", 7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("@colorsAnimation", ctx_r1.colorsAnimationEffect);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r1.palette);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r1.hideColorPicker && ctx_r1.colorPickerControls != "only-alpha");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r1.hideColorPicker && ctx_r1.colorPickerControls == "only-alpha");
} }
function PanelComponent_ng_container_3_ng_container_7_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 11);
} }
const _c1 = function (a0) { return { background: a0 }; };
function PanelComponent_ng_container_3_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    const _r23 = i0.ɵɵgetCurrentView();
    i0.ɵɵnamespaceSVG();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 8)(2, "div", 24);
    i0.ɵɵlistener("click", function PanelComponent_ng_container_3_ng_container_7_Template_div_click_2_listener() { const restoredCtx = i0.ɵɵrestoreView(_r23); const variant_r20 = restoredCtx.$implicit; const ctx_r22 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r22.changeColor(variant_r20)); });
    i0.ɵɵtemplate(3, PanelComponent_ng_container_3_ng_container_7_div_3_Template, 1, 0, "div", 10);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const variant_r20 = ctx.$implicit;
    const ctx_r19 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("colornull", !variant_r20);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(4, _c1, variant_r20));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r19.isSelected(variant_r20));
} }
function PanelComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r25 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 4)(2, "div", 19)(3, "div", 20);
    i0.ɵɵlistener("click", function PanelComponent_ng_container_3_Template_div_click_3_listener() { i0.ɵɵrestoreView(_r25); const ctx_r24 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r24.onClickBack()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(4, "svg", 21);
    i0.ɵɵelement(5, "path", 22)(6, "path", 23);
    i0.ɵɵelementEnd()()();
    i0.ɵɵtemplate(7, PanelComponent_ng_container_3_ng_container_7_Template, 4, 6, "ng-container", 5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("@colorsAnimation", ctx_r2.colorsAnimationEffect);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngForOf", ctx_r2.variants);
} }
function PanelComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    const _r27 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 25)(2, "div", 26);
    i0.ɵɵlistener("click", function PanelComponent_ng_container_4_Template_div_click_2_listener() { i0.ɵɵrestoreView(_r27); const ctx_r26 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r26.onClickBack()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(3, "svg", 21);
    i0.ɵɵelement(4, "path", 22)(5, "path", 23);
    i0.ɵɵelementEnd()();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(6, "button", 27);
    i0.ɵɵlistener("click", function PanelComponent_ng_container_4_Template_button_click_6_listener() { i0.ɵɵrestoreView(_r27); const ctx_r28 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r28.emitClose("cancel")); });
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "button", 27);
    i0.ɵɵlistener("click", function PanelComponent_ng_container_4_Template_button_click_8_listener() { i0.ɵɵrestoreView(_r27); const ctx_r29 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r29.emitClose("accept")); });
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "div", 28)(11, "color-picker", 29);
    i0.ɵɵlistener("sliderChange", function PanelComponent_ng_container_4_Template_color_picker_sliderChange_11_listener($event) { i0.ɵɵrestoreView(_r27); const ctx_r30 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r30.onChangeColorPicker($event)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate1(" ", ctx_r3.cancelLabel, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r3.acceptLabel, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("controls", ctx_r3.colorPickerControls)("color", ctx_r3.hsva);
} }
function PanelComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r33 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 30)(1, "p", 31);
    i0.ɵɵlistener("click", function PanelComponent_div_5_Template_p_click_1_listener() { i0.ɵɵrestoreView(_r33); const ctx_r32 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r32.nextFormat()); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 32)(4, "input", 33, 34);
    i0.ɵɵlistener("keyup", function PanelComponent_div_5_Template_input_keyup_4_listener() { i0.ɵɵrestoreView(_r33); const _r31 = i0.ɵɵreference(5); const ctx_r34 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r34.changeColorManual(_r31.value)); })("keydown.enter", function PanelComponent_div_5_Template_input_keydown_enter_4_listener() { i0.ɵɵrestoreView(_r33); const ctx_r35 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r35.emitClose("accept")); });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r4.colorFormats[ctx_r4.format]);
    i0.ɵɵadvance(2);
    i0.ɵɵstyleProp("font-size", ctx_r4.color && ctx_r4.color.length > 23 ? 9 : 10, "px")("letter-spacing", ctx_r4.color && ctx_r4.color.length > 16 ? 0 : 1.5, "px");
    i0.ɵɵproperty("placeholder", ctx_r4.placeholder)("value", ctx_r4.color);
} }
export class PanelComponent {
    click(event) {
        if (this.isOutside(event)) {
            this.emitClose('cancel');
        }
    }
    onScroll() {
        this.onScreenMovement();
    }
    onResize() {
        this.onScreenMovement();
    }
    constructor(service, cdr) {
        this.service = service;
        this.cdr = cdr;
        this.color = '#000000';
        this.previewColor = '#000000';
        this.hsva = new Hsva(0, 1, 1, 1);
        this.colorsAnimationEffect = 'slide-in';
        this.palette = defaultColors;
        this.variants = [];
        this.userFormats = [];
        this.colorFormats = formats;
        this.format = ColorFormats.HEX;
        this.formatMap = {
            'hex': ColorFormats.HEX,
            'rgba': ColorFormats.RGBA,
            'hsla': ColorFormats.HSLA,
            'cmyk': ColorFormats.CMYK
        };
        this.canChangeFormat = true;
        this.menu = 1;
        this.hideColorPicker = false;
        this.hideTextInput = false;
        this.colorPickerControls = 'default';
        this.placeholder = '#FFFFFF';
    }
    ngOnInit() {
        this.setPosition();
        this.hsva = this.service.stringToHsva(this.color);
        this.indexSeleccionado = this.findIndexSelectedColor(this.palette);
    }
    ngAfterViewInit() {
        this.setPositionY();
    }
    onScreenMovement() {
        this.setPosition();
        this.setPositionY();
        if (!this.panelRef.nativeElement.style.transition) {
            this.panelRef.nativeElement.style.transition = 'transform 0.5s ease-out';
        }
    }
    findIndexSelectedColor(colors) {
        let resultIndex = undefined;
        if (this.color) {
            for (let i = 0; i < colors.length; i++) {
                const color = colors[i];
                if (typeof color == 'string') {
                    if (this.service.stringToFormat(this.color, ColorFormats.HEX) ==
                        this.service.stringToFormat(color, ColorFormats.HEX)) {
                        resultIndex = i;
                    }
                }
                else if (color === undefined) {
                    this.color = undefined;
                }
                else {
                    if (this.findIndexSelectedColor(color.variants) != undefined) {
                        resultIndex = i;
                    }
                }
            }
        }
        return resultIndex;
    }
    iniciate(triggerInstance, triggerElementRef, color, palette, animation, format, hideTextInput, hideColorPicker, acceptLabel, cancelLabel, colorPickerControls, position, userFormats = []) {
        this.colorPickerControls = colorPickerControls;
        this.triggerInstance = triggerInstance;
        this.TriggerBBox = triggerElementRef;
        this.color = color;
        this.hideColorPicker = hideColorPicker;
        this.hideTextInput = hideTextInput;
        this.acceptLabel = acceptLabel;
        this.cancelLabel = cancelLabel;
        if (userFormats.length) {
            const allFormatsValid = userFormats.every(frt => formats.includes(frt));
            if (allFormatsValid) {
                this.colorFormats = userFormats;
            }
        }
        if (format) {
            if (this.colorFormats.includes(format)) {
                this.format = this.colorFormats.indexOf(format.toLowerCase());
                this.canChangeFormat = false;
                if (this.service.getFormatByString(this.color) != format.toLowerCase()) {
                    this.setColor(this.service.stringToHsva(this.color));
                }
            }
            else {
                console.error('Format provided is invalid, using HEX');
                this.format = ColorFormats.HEX;
            }
        }
        else {
            this.format = this.colorFormats.indexOf(this.service.getFormatByString(this.color));
            if (this.format < 0) {
                this.format = 0;
            }
        }
        this.previewColor = this.color;
        this.palette = palette ?? defaultColors;
        this.colorsAnimationEffect = animation;
        if (position == 'top') {
            let TriggerBBox = this.TriggerBBox.nativeElement.getBoundingClientRect();
            this.positionString =
                'transform: translateY(calc( -100% - ' + TriggerBBox.height + 'px ))';
        }
    }
    setPosition() {
        if (this.TriggerBBox) {
            const panelWidth = 250;
            const viewportOffset = this.TriggerBBox.nativeElement.getBoundingClientRect();
            this.top = viewportOffset.top + viewportOffset.height;
            if (viewportOffset.left + panelWidth > window.innerWidth) {
                this.left =
                    viewportOffset.right < panelWidth
                        ? window.innerWidth / 2 - panelWidth / 2
                        : viewportOffset.right - panelWidth;
            }
            else {
                this.left = viewportOffset.left;
            }
        }
    }
    setPositionY() {
        const triggerBBox = this.TriggerBBox.nativeElement.getBoundingClientRect();
        const panelBBox = this.panelRef.nativeElement.getBoundingClientRect();
        const panelHeight = panelBBox.height;
        // Check for space below the trigger
        if (triggerBBox.bottom + panelHeight > window.innerHeight) {
            // there is no space, move panel over the trigger
            this.positionString =
                triggerBBox.top < panelBBox.height
                    ? 'transform: translateY(-' + triggerBBox.bottom + 'px );'
                    : 'transform: translateY(calc( -100% - ' +
                        triggerBBox.height +
                        'px ));';
        }
        else {
            this.positionString = '';
        }
        this.cdr.detectChanges();
    }
    hasVariant(color) {
        if (!this.previewColor) {
            return false;
        }
        return (typeof color != 'string' &&
            color.variants.some((v) => v.toUpperCase() == this.previewColor.toUpperCase()));
    }
    isSelected(color) {
        if (!this.previewColor) {
            return false;
        }
        return (typeof color == 'string' &&
            color.toUpperCase() == this.previewColor.toUpperCase());
    }
    getBackgroundColor(color) {
        if (typeof color == 'string') {
            return { background: color };
        }
        else {
            return { background: color?.preview };
        }
    }
    onAlphaChange(event) {
        this.palette = this.ChangeAlphaOnPalette(event, this.palette);
    }
    ChangeAlphaOnPalette(alpha, colors) {
        var result = [];
        for (let i = 0; i < colors.length; i++) {
            const color = colors[i];
            if (typeof color == 'string') {
                let newColor = this.service.stringToHsva(color);
                newColor.onAlphaChange(alpha);
                result.push(this.service.toFormat(newColor, this.format));
            }
            else {
                let newColor = new NgxColorsColor();
                let newColorPreview = this.service.stringToHsva(color.preview);
                newColorPreview.onAlphaChange(alpha);
                newColor.preview = this.service.toFormat(newColorPreview, this.format);
                newColor.variants = this.ChangeAlphaOnPalette(alpha, color.variants);
                result.push(newColor);
            }
        }
        return result;
    }
    /**
     * Change color from default colors
     * @param string color
     */
    changeColor(color) {
        this.setColor(this.service.stringToHsva(color));
        // this.triggerInstance.onChange();
        this.emitClose('accept');
    }
    onChangeColorPicker(event) {
        this.temporalColor = event;
        this.color = this.service.toFormat(event, this.format);
        // this.setColor(event);
        this.triggerInstance.sliderChange(this.service.toFormat(event, this.format));
    }
    changeColorManual(color) {
        this.previewColor = color;
        this.color = color;
        this.hsva = this.service.stringToHsva(color);
        this.setPreviewColor(this.hsva);
        this.temporalColor = this.hsva;
        this.triggerInstance.setColor(this.color, this.previewColor);
        // this.triggerInstance.onChange();
    }
    setColor(value, colorIndex = -1) {
        this.hsva = value;
        let formatName = this.colorFormats[this.format];
        let index = colorIndex;
        if (index < 0) {
            index = this.formatMap[formatName];
        }
        this.color = this.service.toFormat(value, index);
        this.setPreviewColor(value);
        this.triggerInstance.setColor(this.color, this.previewColor);
    }
    setPreviewColor(value) {
        this.previewColor = value
            ? this.service.hsvaToRgba(value).toString()
            : undefined;
    }
    onChange() {
        // this.triggerInstance.onChange();
    }
    onColorClick(color) {
        if (typeof color == 'string' || color === undefined) {
            this.changeColor(color);
        }
        else {
            this.variants = color.variants;
            this.menu = 2;
        }
    }
    addColor() {
        this.menu = 3;
        this.backupColor = this.color;
        // this.color = "#FF0000";
        this.temporalColor = this.service.stringToHsva(this.color);
    }
    nextFormat() {
        if (this.canChangeFormat) {
            this.format = (this.format + 1) % this.colorFormats.length;
            let formatName = this.colorFormats[this.format];
            let index = this.formatMap[formatName];
            this.setColor(this.hsva, index);
            this.placeholder = this.service.toFormat(new Hsva(0, 0, 1, 1), index);
        }
    }
    emitClose(status) {
        if (this.menu == 3) {
            if (status == 'cancel') {
            }
            else if (status == 'accept') {
                this.setColor(this.temporalColor);
            }
        }
        this.triggerInstance.closePanel();
    }
    onClickBack() {
        if (this.menu == 3) {
            this.color = this.backupColor;
            this.hsva = this.service.stringToHsva(this.color);
        }
        this.indexSeleccionado = this.findIndexSelectedColor(this.palette);
        this.menu = 1;
    }
    isOutside(event) {
        return event.target.classList.contains('ngx-colors-overlay');
    }
}
PanelComponent.ɵfac = function PanelComponent_Factory(t) { return new (t || PanelComponent)(i0.ɵɵdirectiveInject(i1.ConverterService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
PanelComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PanelComponent, selectors: [["ngx-colors-panel"]], viewQuery: function PanelComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.panelRef = _t.first);
    } }, hostVars: 4, hostBindings: function PanelComponent_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("mousedown", function PanelComponent_mousedown_HostBindingHandler($event) { return ctx.click($event); }, false, i0.ɵɵresolveDocument)("scroll", function PanelComponent_scroll_HostBindingHandler() { return ctx.onScroll(); }, false, i0.ɵɵresolveDocument)("resize", function PanelComponent_resize_HostBindingHandler() { return ctx.onResize(); }, false, i0.ɵɵresolveWindow);
    } if (rf & 2) {
        i0.ɵɵstyleProp("top", ctx.top, "px")("left", ctx.left, "px");
    } }, decls: 6, vars: 6, consts: [[1, "opened"], ["dialog", ""], [4, "ngIf"], ["class", "manual-input-wrapper", 4, "ngIf"], [1, "colors"], [4, "ngFor", "ngForOf"], ["style", "background: rgb(245 245 245); position: relative", "class", "circle button", 3, "click", 4, "ngIf"], [3, "controls", "color", "colorChange", "onAlphaChange", 4, "ngIf"], [1, "circle", "wrapper", "color"], [1, "circle", "color", "circle-border", 3, "ngStyle", "click"], ["class", "selected", 4, "ngIf"], [1, "selected"], [1, "circle", "button", 2, "background", "rgb(245 245 245)", "position", "relative", 3, "click"], ["style", "\n            position: absolute;\n            height: 7px;\n            width: 7px;\n            border: 1px solid rgba(0, 0, 0, 0.03);\n            border-radius: 100%;\n            top: 0;\n            right: 0;\n          ", 3, "ngStyle", 4, "ngIf"], ["xmlns", "http://www.w3.org/2000/svg", "height", "24px", "viewBox", "0 0 24 24", "width", "24px", "fill", "#222222"], ["d", "M24 24H0V0h24v24z", "fill", "none", "opacity", ".87"], ["d", "M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z"], [2, "position", "absolute", "height", "7px", "width", "7px", "border", "1px solid rgba(0, 0, 0, 0.03)", "border-radius", "100%", "top", "0", "right", "0", 3, "ngStyle"], [3, "controls", "color", "colorChange", "onAlphaChange"], [1, "circle", "wrapper"], [1, "add", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24"], ["d", "M0 0h24v24H0z", "fill", "none"], ["d", "M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"], [1, "circle", "circle-border", 3, "ngStyle", "click"], [1, "nav-wrapper"], [1, "round-button", "button", 2, "float", "left", 3, "click"], [2, "float", "right", 3, "click"], [1, "color-picker-wrapper"], [3, "controls", "color", "sliderChange"], [1, "manual-input-wrapper"], [2, "cursor", "pointer", 3, "click"], [1, "g-input"], ["type", "text", 3, "placeholder", "value", "keyup", "keydown.enter"], ["paintInput", ""]], template: function PanelComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0, 1);
        i0.ɵɵtemplate(2, PanelComponent_ng_container_2_Template, 5, 4, "ng-container", 2);
        i0.ɵɵtemplate(3, PanelComponent_ng_container_3_Template, 8, 2, "ng-container", 2);
        i0.ɵɵtemplate(4, PanelComponent_ng_container_4_Template, 12, 4, "ng-container", 2);
        i0.ɵɵtemplate(5, PanelComponent_div_5_Template, 6, 7, "div", 3);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵstyleMap(ctx.positionString);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.menu == 1);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.menu == 2);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.menu == 3);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.hideTextInput);
    } }, dependencies: [i2.NgForOf, i2.NgIf, i2.NgStyle, i3.ColorPickerComponent], styles: ["[_nghost-%COMP%]{position:fixed;z-index:2001}.hidden[_ngcontent-%COMP%]{display:none}.button[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}.top[_ngcontent-%COMP%]{transform:translateY(-100%)}.opened[_ngcontent-%COMP%]{box-sizing:border-box;box-shadow:0 2px 4px -1px #0003,0 4px 5px #00000024,0 1px 10px #0000001f;background:#fff;width:250px;border-radius:5px;position:absolute}.opened[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border:none;font-family:inherit;font-size:12px;background-color:unset;-webkit-user-select:none;user-select:none;padding:10px;letter-spacing:1px;color:#222;border-radius:3px;line-height:20px}.opened[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, .opened[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]:hover{background-color:#0000000d;transition:opacity .2s cubic-bezier(.35,0,.25,1),background-color .2s cubic-bezier(.35,0,.25,1);transition-property:opacity,background-color;transition-duration:.2s,.2s;transition-timing-function:cubic-bezier(.35,0,.25,1),cubic-bezier(.35,0,.25,1);transition-delay:0s,0s}.opened[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus{outline:none}.opened[_ngcontent-%COMP%]   .colors[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;align-items:center;margin:15px}.opened[_ngcontent-%COMP%]   .colors[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]{height:34px;width:34px;box-sizing:border-box;border-radius:100%;cursor:pointer}.opened[_ngcontent-%COMP%]   .colors[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]   .add[_ngcontent-%COMP%]{font-size:20px;line-height:45px;text-align:center}.opened[_ngcontent-%COMP%]   .colors[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]   .selected[_ngcontent-%COMP%]{border:2px solid white;border-radius:100%;height:28px;width:28px;box-sizing:border-box;margin:2px}.opened[_ngcontent-%COMP%]   .colors[_ngcontent-%COMP%]   .circle.colornull[_ngcontent-%COMP%]{background:linear-gradient(135deg,rgba(236,236,236,.7) 0%,rgba(236,236,236,.7) 45%,#de0f00 50%,rgba(236,236,236,.7) 55%,rgba(236,236,236,.7) 100%)}.opened[_ngcontent-%COMP%]   .colors[_ngcontent-%COMP%]   .circle.wrapper[_ngcontent-%COMP%]{margin:0 5px 5px;flex:34px 0 0}.opened[_ngcontent-%COMP%]   .colors[_ngcontent-%COMP%]   .circle.button[_ngcontent-%COMP%]{margin:0 5px 5px}.opened[_ngcontent-%COMP%]   .colors[_ngcontent-%COMP%]   .circle.wrapper.color[_ngcontent-%COMP%]{background-image:linear-gradient(45deg,#ccc 25%,transparent 25%),linear-gradient(-45deg,#ccc 25%,transparent 25%),linear-gradient(45deg,transparent 75%,#ccc 75%),linear-gradient(-45deg,transparent 75%,#ccc 75%);background-size:16px 16px;background-position:0 0,0 8px,8px -8px,-8px 0px}.opened[_ngcontent-%COMP%]   .colors[_ngcontent-%COMP%]   .circle-border[_ngcontent-%COMP%]{border:1px solid rgba(0,0,0,.03)}.opened[_ngcontent-%COMP%]   .color-picker-wrapper[_ngcontent-%COMP%]{margin:5px 15px}.opened[_ngcontent-%COMP%]   .nav-wrapper[_ngcontent-%COMP%]{overflow:hidden;margin:5px}.opened[_ngcontent-%COMP%]   .nav-wrapper[_ngcontent-%COMP%]   .round-button[_ngcontent-%COMP%]{padding:5px 0;width:40px;height:40px;box-sizing:border-box;border-radius:100%;text-align:center;line-height:45px}.opened[_ngcontent-%COMP%]   .manual-input-wrapper[_ngcontent-%COMP%]{display:flex;margin:15px;font-family:sans-serif}.opened[_ngcontent-%COMP%]   .manual-input-wrapper[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;text-align:center;font-size:10px;letter-spacing:1.5px;text-transform:uppercase;line-height:48px;width:145px;-webkit-touch-callout:none;-webkit-user-select:none;user-select:none}.opened[_ngcontent-%COMP%]   .manual-input-wrapper[_ngcontent-%COMP%]   .g-input[_ngcontent-%COMP%]{border:1px solid #e8ebed;height:45px;border-radius:5px;width:100%}.opened[_ngcontent-%COMP%]   .manual-input-wrapper[_ngcontent-%COMP%]   .g-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{font-size:9px;border:none;width:100%;text-transform:uppercase;outline:none;text-align:center;letter-spacing:1px;color:#595b65;height:100%;border-radius:5px;margin:0;padding:0}"], data: { animation: [
            trigger('colorsAnimation', [
                transition('void => slide-in', [
                    // Initially all colors are hidden
                    query(':enter', style({ opacity: 0 }), { optional: true }),
                    //slide-in animation
                    query(':enter', stagger('10ms', [
                        animate('.3s ease-in', keyframes([
                            style({ opacity: 0, transform: 'translatex(-50%)', offset: 0 }),
                            style({
                                opacity: 0.5,
                                transform: 'translatex(-10px) scale(1.1)',
                                offset: 0.3,
                            }),
                            style({ opacity: 1, transform: 'translatex(0)', offset: 1 }),
                        ])),
                    ]), { optional: true }),
                ]),
                //popup animation
                transition('void => popup', [
                    query(':enter', style({ opacity: 0, transform: 'scale(0)' }), {
                        optional: true,
                    }),
                    query(':enter', stagger('10ms', [
                        animate('500ms ease-out', keyframes([
                            style({ opacity: 0.5, transform: 'scale(.5)', offset: 0.3 }),
                            style({ opacity: 1, transform: 'scale(1.1)', offset: 0.8 }),
                            style({ opacity: 1, transform: 'scale(1)', offset: 1 }),
                        ])),
                    ]), { optional: true }),
                ]),
            ]),
        ] } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PanelComponent, [{
        type: Component,
        args: [{ selector: 'ngx-colors-panel', animations: [
                    trigger('colorsAnimation', [
                        transition('void => slide-in', [
                            // Initially all colors are hidden
                            query(':enter', style({ opacity: 0 }), { optional: true }),
                            //slide-in animation
                            query(':enter', stagger('10ms', [
                                animate('.3s ease-in', keyframes([
                                    style({ opacity: 0, transform: 'translatex(-50%)', offset: 0 }),
                                    style({
                                        opacity: 0.5,
                                        transform: 'translatex(-10px) scale(1.1)',
                                        offset: 0.3,
                                    }),
                                    style({ opacity: 1, transform: 'translatex(0)', offset: 1 }),
                                ])),
                            ]), { optional: true }),
                        ]),
                        //popup animation
                        transition('void => popup', [
                            query(':enter', style({ opacity: 0, transform: 'scale(0)' }), {
                                optional: true,
                            }),
                            query(':enter', stagger('10ms', [
                                animate('500ms ease-out', keyframes([
                                    style({ opacity: 0.5, transform: 'scale(.5)', offset: 0.3 }),
                                    style({ opacity: 1, transform: 'scale(1.1)', offset: 0.8 }),
                                    style({ opacity: 1, transform: 'scale(1)', offset: 1 }),
                                ])),
                            ]), { optional: true }),
                        ]),
                    ]),
                ], template: "<div class=\"opened\" [style]=\"positionString\" #dialog>\r\n  <ng-container *ngIf=\"menu == 1\">\r\n    <div class=\"colors\" [@colorsAnimation]=\"colorsAnimationEffect\">\r\n      <ng-container *ngFor=\"let color of palette; let i = index\">\r\n        <div class=\"circle wrapper color\">\r\n          <div\r\n            (click)=\"onColorClick(color)\"\r\n            class=\"circle color circle-border\"\r\n            [class.colornull]=\"!color\"\r\n            [ngStyle]=\"getBackgroundColor(color)\"\r\n          >\r\n            <div *ngIf=\"i == this.indexSeleccionado\" class=\"selected\"></div>\r\n          </div>\r\n        </div>\r\n      </ng-container>\r\n      <div\r\n        style=\"background: rgb(245 245 245); position: relative\"\r\n        (click)=\"addColor()\"\r\n        *ngIf=\"!hideColorPicker && this.colorPickerControls != 'only-alpha'\"\r\n        class=\"circle button\"\r\n      >\r\n        <div\r\n          *ngIf=\"this.indexSeleccionado === undefined\"\r\n          style=\"\r\n            position: absolute;\r\n            height: 7px;\r\n            width: 7px;\r\n            border: 1px solid rgba(0, 0, 0, 0.03);\r\n            border-radius: 100%;\r\n            top: 0;\r\n            right: 0;\r\n          \"\r\n          [ngStyle]=\"getBackgroundColor(color)\"\r\n        ></div>\r\n        <svg\r\n          xmlns=\"http://www.w3.org/2000/svg\"\r\n          height=\"24px\"\r\n          viewBox=\"0 0 24 24\"\r\n          width=\"24px\"\r\n          fill=\"#222222\"\r\n        >\r\n          <path d=\"M24 24H0V0h24v24z\" fill=\"none\" opacity=\".87\" />\r\n          <path d=\"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z\" />\r\n        </svg>\r\n        <!-- <div class=\"add\">\r\n          <icons icon=\"add\"></icons>\r\n        </div> -->\r\n      </div>\r\n      <color-picker\r\n        *ngIf=\"!hideColorPicker && this.colorPickerControls == 'only-alpha'\"\r\n        [controls]=\"colorPickerControls\"\r\n        [color]=\"hsva\"\r\n        (colorChange)=\"onChangeColorPicker($event)\"\r\n        (onAlphaChange)=\"onAlphaChange($event)\"\r\n      ></color-picker>\r\n    </div>\r\n  </ng-container>\r\n  <ng-container *ngIf=\"menu == 2\">\r\n    <div class=\"colors\" [@colorsAnimation]=\"colorsAnimationEffect\">\r\n      <div class=\"circle wrapper\">\r\n        <div (click)=\"onClickBack()\" class=\"add\">\r\n          <svg\r\n            xmlns=\"http://www.w3.org/2000/svg\"\r\n            width=\"24\"\r\n            height=\"24\"\r\n            viewBox=\"0 0 24 24\"\r\n          >\r\n            <path d=\"M0 0h24v24H0z\" fill=\"none\" />\r\n            <path\r\n              d=\"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z\"\r\n            />\r\n          </svg>\r\n        </div>\r\n      </div>\r\n\r\n      <ng-container *ngFor=\"let variant of variants\">\r\n        <div class=\"circle wrapper color\">\r\n          <div\r\n            [class.colornull]=\"!variant\"\r\n            (click)=\"changeColor(variant)\"\r\n            class=\"circle circle-border\"\r\n            [ngStyle]=\"{ background: variant }\"\r\n          >\r\n            <div *ngIf=\"isSelected(variant)\" class=\"selected\"></div>\r\n          </div>\r\n        </div>\r\n      </ng-container>\r\n    </div>\r\n  </ng-container>\r\n  <ng-container *ngIf=\"menu == 3\">\r\n    <div class=\"nav-wrapper\">\r\n      <div\r\n        (click)=\"onClickBack()\"\r\n        class=\"round-button button\"\r\n        style=\"float: left\"\r\n      >\r\n        <svg\r\n          xmlns=\"http://www.w3.org/2000/svg\"\r\n          width=\"24\"\r\n          height=\"24\"\r\n          viewBox=\"0 0 24 24\"\r\n        >\r\n          <path d=\"M0 0h24v24H0z\" fill=\"none\" />\r\n          <path\r\n            d=\"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z\"\r\n          />\r\n        </svg>\r\n      </div>\r\n      <button (click)=\"emitClose('cancel')\" style=\"float: right\">\r\n        {{ cancelLabel }}\r\n      </button>\r\n      <button (click)=\"emitClose('accept')\" style=\"float: right\">\r\n        {{ acceptLabel }}\r\n      </button>\r\n    </div>\r\n    <div class=\"color-picker-wrapper\">\r\n      <!-- <span [(colorPicker)]=\"color\"></span> -->\r\n      <color-picker\r\n        [controls]=\"colorPickerControls\"\r\n        [color]=\"hsva\"\r\n        (sliderChange)=\"onChangeColorPicker($event)\"\r\n      ></color-picker>\r\n    </div>\r\n  </ng-container>\r\n  <div class=\"manual-input-wrapper\" *ngIf=\"!hideTextInput\">\r\n    <p (click)=\"nextFormat()\" style=\"cursor: pointer;\">{{ colorFormats[format] }}</p>\r\n    <div class=\"g-input\">\r\n      <input\r\n        [placeholder]=\"placeholder\"\r\n        type=\"text\"\r\n        [value]=\"color\"\r\n        [style.font-size.px]=\"color && color.length > 23 ? 9 : 10\"\r\n        [style.letter-spacing.px]=\"color && color.length > 16 ? 0 : 1.5\"\r\n        (keyup)=\"changeColorManual(paintInput.value)\"\r\n        (keydown.enter)=\"emitClose('accept')\"\r\n        #paintInput\r\n      />\r\n    </div>\r\n  </div>\r\n</div>\r\n", styles: [":host{position:fixed;z-index:2001}.hidden{display:none}.button{display:flex;align-items:center;justify-content:center}.top{transform:translateY(-100%)}.opened{box-sizing:border-box;box-shadow:0 2px 4px -1px #0003,0 4px 5px #00000024,0 1px 10px #0000001f;background:#fff;width:250px;border-radius:5px;position:absolute}.opened button{border:none;font-family:inherit;font-size:12px;background-color:unset;-webkit-user-select:none;user-select:none;padding:10px;letter-spacing:1px;color:#222;border-radius:3px;line-height:20px}.opened button:hover,.opened .button:hover{background-color:#0000000d;transition:opacity .2s cubic-bezier(.35,0,.25,1),background-color .2s cubic-bezier(.35,0,.25,1);transition-property:opacity,background-color;transition-duration:.2s,.2s;transition-timing-function:cubic-bezier(.35,0,.25,1),cubic-bezier(.35,0,.25,1);transition-delay:0s,0s}.opened button:focus{outline:none}.opened .colors{display:flex;flex-wrap:wrap;align-items:center;margin:15px}.opened .colors .circle{height:34px;width:34px;box-sizing:border-box;border-radius:100%;cursor:pointer}.opened .colors .circle .add{font-size:20px;line-height:45px;text-align:center}.opened .colors .circle .selected{border:2px solid white;border-radius:100%;height:28px;width:28px;box-sizing:border-box;margin:2px}.opened .colors .circle.colornull{background:linear-gradient(135deg,rgba(236,236,236,.7) 0%,rgba(236,236,236,.7) 45%,#de0f00 50%,rgba(236,236,236,.7) 55%,rgba(236,236,236,.7) 100%)}.opened .colors .circle.wrapper{margin:0 5px 5px;flex:34px 0 0}.opened .colors .circle.button{margin:0 5px 5px}.opened .colors .circle.wrapper.color{background-image:linear-gradient(45deg,#ccc 25%,transparent 25%),linear-gradient(-45deg,#ccc 25%,transparent 25%),linear-gradient(45deg,transparent 75%,#ccc 75%),linear-gradient(-45deg,transparent 75%,#ccc 75%);background-size:16px 16px;background-position:0 0,0 8px,8px -8px,-8px 0px}.opened .colors .circle-border{border:1px solid rgba(0,0,0,.03)}.opened .color-picker-wrapper{margin:5px 15px}.opened .nav-wrapper{overflow:hidden;margin:5px}.opened .nav-wrapper .round-button{padding:5px 0;width:40px;height:40px;box-sizing:border-box;border-radius:100%;text-align:center;line-height:45px}.opened .manual-input-wrapper{display:flex;margin:15px;font-family:sans-serif}.opened .manual-input-wrapper p{margin:0;text-align:center;font-size:10px;letter-spacing:1.5px;text-transform:uppercase;line-height:48px;width:145px;-webkit-touch-callout:none;-webkit-user-select:none;user-select:none}.opened .manual-input-wrapper .g-input{border:1px solid #e8ebed;height:45px;border-radius:5px;width:100%}.opened .manual-input-wrapper .g-input input{font-size:9px;border:none;width:100%;text-transform:uppercase;outline:none;text-align:center;letter-spacing:1px;color:#595b65;height:100%;border-radius:5px;margin:0;padding:0}\n"] }]
    }], function () { return [{ type: i1.ConverterService }, { type: i0.ChangeDetectorRef }]; }, { click: [{
            type: HostListener,
            args: ['document:mousedown', ['$event']]
        }], onScroll: [{
            type: HostListener,
            args: ['document:scroll']
        }], onResize: [{
            type: HostListener,
            args: ['window:resize']
        }], top: [{
            type: HostBinding,
            args: ['style.top.px']
        }], left: [{
            type: HostBinding,
            args: ['style.left.px']
        }], panelRef: [{
            type: ViewChild,
            args: ['dialog']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWNvbG9ycy9zcmMvbGliL2NvbXBvbmVudHMvcGFuZWwvcGFuZWwuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWNvbG9ycy9zcmMvbGliL2NvbXBvbmVudHMvcGFuZWwvcGFuZWwuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFNVCxTQUFTLEVBRVQsWUFBWSxFQUNaLFdBQVcsR0FDWixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQ0wsT0FBTyxFQUNQLFVBQVUsRUFDVixLQUFLLEVBQ0wsS0FBSyxFQUNMLE9BQU8sRUFDUCxPQUFPLEVBQ1AsU0FBUyxHQUNWLE1BQU0scUJBQXFCLENBQUM7QUFFN0IsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRW5ELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFaEQsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzVDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7OztJQ2pCeEMsMEJBQWdFOzs7O0lBUnRFLDZCQUEyRDtJQUN6RCw4QkFBa0MsYUFBQTtJQUU5QiwrT0FBUyxlQUFBLDhCQUFtQixDQUFBLElBQUM7SUFLN0IsOEZBQWdFO0lBQ2xFLGlCQUFNLEVBQUE7SUFFViwwQkFBZTs7Ozs7SUFOVCxlQUEwQjtJQUExQixzQ0FBMEI7SUFDMUIsNkRBQXFDO0lBRS9CLGVBQWlDO0lBQWpDLHVEQUFpQzs7O0lBVTNDLDBCQVlPOzs7SUFETCxtRUFBcUM7Ozs7SUFqQnpDLCtCQUtDO0lBSEMsMEtBQVMsZUFBQSxrQkFBVSxDQUFBLElBQUM7SUFJcEIscUZBWU87SUFDUCxtQkFNQztJQU5ELCtCQU1DO0lBQ0MsMkJBQXdELGVBQUE7SUFFMUQsaUJBQU0sRUFBQTs7O0lBckJILGVBQTBDO0lBQTFDLDZEQUEwQzs7OztJQTBCL0Msd0NBTUM7SUFGQyw4TUFBZSxlQUFBLG1DQUEyQixDQUFBLElBQUMscU1BQzFCLGVBQUEsNkJBQXFCLENBQUEsSUFESztJQUU1QyxpQkFBZTs7O0lBSmQscURBQWdDLHNCQUFBOzs7SUFqRHRDLDZCQUFnQztJQUM5Qiw4QkFBK0Q7SUFDN0QsZ0dBV2U7SUFDZiw4RUFnQ007SUFDTixnR0FNZ0I7SUFDbEIsaUJBQU07SUFDUiwwQkFBZTs7O0lBdERPLGVBQTBDO0lBQTFDLCtEQUEwQztJQUM1QixlQUFZO0lBQVosd0NBQVk7SUFlekMsZUFBa0U7SUFBbEUsNEZBQWtFO0lBK0JsRSxlQUFrRTtJQUFsRSw0RkFBa0U7OztJQWtDL0QsMEJBQXdEOzs7Ozs7SUFSOUQsb0JBQStDO0lBQS9DLDZCQUErQztJQUM3Qyw4QkFBa0MsY0FBQTtJQUc5QixrUEFBUyxlQUFBLGdDQUFvQixDQUFBLElBQUM7SUFJOUIsOEZBQXdEO0lBQzFELGlCQUFNLEVBQUE7SUFFViwwQkFBZTs7OztJQVJULGVBQTRCO0lBQTVCLHlDQUE0QjtJQUc1QixpRUFBbUM7SUFFN0IsZUFBeUI7SUFBekIsc0RBQXlCOzs7O0lBMUJ6Qyw2QkFBZ0M7SUFDOUIsOEJBQStELGNBQUEsY0FBQTtJQUV0RCxtS0FBUyxlQUFBLHFCQUFhLENBQUEsSUFBQztJQUMxQixtQkFLQztJQUxELCtCQUtDO0lBQ0MsMkJBQXNDLGVBQUE7SUFJeEMsaUJBQU0sRUFBQSxFQUFBO0lBSVYsZ0dBV2U7SUFDakIsaUJBQU07SUFDUiwwQkFBZTs7O0lBOUJPLGVBQTBDO0lBQTFDLCtEQUEwQztJQWlCMUIsZUFBVztJQUFYLHlDQUFXOzs7O0lBY2pELDZCQUFnQztJQUM5QiwrQkFBeUIsY0FBQTtJQUVyQixtS0FBUyxlQUFBLHFCQUFhLENBQUEsSUFBQztJQUl2QixtQkFLQztJQUxELCtCQUtDO0lBQ0MsMkJBQXNDLGVBQUE7SUFJeEMsaUJBQU0sRUFBQTtJQUVSLG9CQUEyRDtJQUEzRCxrQ0FBMkQ7SUFBbkQsc0tBQVMsZUFBQSxrQkFBVSxRQUFRLENBQUMsQ0FBQSxJQUFDO0lBQ25DLFlBQ0Y7SUFBQSxpQkFBUztJQUNULGtDQUEyRDtJQUFuRCxzS0FBUyxlQUFBLGtCQUFVLFFBQVEsQ0FBQyxDQUFBLElBQUM7SUFDbkMsWUFDRjtJQUFBLGlCQUFTLEVBQUE7SUFFWCxnQ0FBa0Msd0JBQUE7SUFLOUIsaU1BQWdCLGVBQUEsbUNBQTJCLENBQUEsSUFBQztJQUM3QyxpQkFBZSxFQUFBO0lBRXBCLDBCQUFlOzs7SUFkVCxlQUNGO0lBREUsbURBQ0Y7SUFFRSxlQUNGO0lBREUsbURBQ0Y7SUFLRSxlQUFnQztJQUFoQyxxREFBZ0Msc0JBQUE7Ozs7SUFNdEMsK0JBQXlELFlBQUE7SUFDcEQsd0pBQVMsZUFBQSxvQkFBWSxDQUFBLElBQUM7SUFBMEIsWUFBMEI7SUFBQSxpQkFBSTtJQUNqRiwrQkFBcUIsb0JBQUE7SUFPakIsNExBQVMsZUFBQSxxQ0FBbUMsQ0FBQSxJQUFDLCtKQUM1QixlQUFBLGtCQUFVLFFBQVEsQ0FBQyxDQUFBLElBRFM7SUFOL0MsaUJBU0UsRUFBQSxFQUFBOzs7SUFYK0MsZUFBMEI7SUFBMUIsd0RBQTBCO0lBTXpFLGVBQTBEO0lBQTFELG9GQUEwRCw0RUFBQTtJQUgxRCxnREFBMkIsdUJBQUE7O0FEOUNuQyxNQUFNLE9BQU8sY0FBYztJQUV6QixLQUFLLENBQUMsS0FBSztRQUNULElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUN6QixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQzFCO0lBQ0gsQ0FBQztJQUdELFFBQVE7UUFDTixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFLRCxZQUNTLE9BQXlCLEVBQ3hCLEdBQXNCO1FBRHZCLFlBQU8sR0FBUCxPQUFPLENBQWtCO1FBQ3hCLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBR3pCLFVBQUssR0FBRyxTQUFTLENBQUM7UUFDbEIsaUJBQVksR0FBVyxTQUFTLENBQUM7UUFDakMsU0FBSSxHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRTVCLDBCQUFxQixHQUFHLFVBQVUsQ0FBQztRQUVuQyxZQUFPLEdBQUcsYUFBYSxDQUFDO1FBQ3hCLGFBQVEsR0FBRyxFQUFFLENBQUM7UUFFZCxnQkFBVyxHQUFhLEVBQUUsQ0FBQztRQUMzQixpQkFBWSxHQUFHLE9BQU8sQ0FBQztRQUN2QixXQUFNLEdBQWlCLFlBQVksQ0FBQyxHQUFHLENBQUM7UUFDeEMsY0FBUyxHQUFHO1lBQ2pCLEtBQUssRUFBRSxZQUFZLENBQUMsR0FBRztZQUN2QixNQUFNLEVBQUUsWUFBWSxDQUFDLElBQUk7WUFDekIsTUFBTSxFQUFFLFlBQVksQ0FBQyxJQUFJO1lBQ3pCLE1BQU0sRUFBRSxZQUFZLENBQUMsSUFBSTtTQUMxQixDQUFBO1FBRU0sb0JBQWUsR0FBWSxJQUFJLENBQUM7UUFFaEMsU0FBSSxHQUFHLENBQUMsQ0FBQztRQUVULG9CQUFlLEdBQVksS0FBSyxDQUFDO1FBQ2pDLGtCQUFhLEdBQVksS0FBSyxDQUFDO1FBRy9CLHdCQUFtQixHQUEwQyxTQUFTLENBQUM7UUFRdkUsZ0JBQVcsR0FBRyxTQUFTLENBQUM7SUFyQzVCLENBQUM7SUF1Q0csUUFBUTtRQUNiLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNyRSxDQUFDO0lBQ00sZUFBZTtRQUNwQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVPLGdCQUFnQjtRQUN0QixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFO1lBQ2pELElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcseUJBQXlCLENBQUM7U0FDMUU7SUFDSCxDQUFDO0lBRU8sc0JBQXNCLENBQUMsTUFBTTtRQUNuQyxJQUFJLFdBQVcsR0FBRyxTQUFTLENBQUM7UUFDNUIsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2QsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ3RDLE1BQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDeEIsSUFBSSxPQUFPLEtBQUssSUFBSSxRQUFRLEVBQUU7b0JBQzVCLElBQ0UsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxZQUFZLENBQUMsR0FBRyxDQUFDO3dCQUN6RCxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsWUFBWSxDQUFDLEdBQUcsQ0FBQyxFQUNwRDt3QkFDQSxXQUFXLEdBQUcsQ0FBQyxDQUFDO3FCQUNqQjtpQkFDRjtxQkFBTSxJQUFJLEtBQUssS0FBSyxTQUFTLEVBQUU7b0JBQzlCLElBQUksQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO2lCQUN4QjtxQkFBTTtvQkFDTCxJQUFJLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksU0FBUyxFQUFFO3dCQUM1RCxXQUFXLEdBQUcsQ0FBQyxDQUFDO3FCQUNqQjtpQkFDRjthQUNGO1NBQ0Y7UUFDRCxPQUFPLFdBQVcsQ0FBQztJQUNyQixDQUFDO0lBRU0sUUFBUSxDQUNiLGVBQTBDLEVBQzFDLGlCQUFpQixFQUNqQixLQUFLLEVBQ0wsT0FBTyxFQUNQLFNBQVMsRUFDVCxNQUFjLEVBQ2QsYUFBc0IsRUFDdEIsZUFBd0IsRUFDeEIsV0FBbUIsRUFDbkIsV0FBbUIsRUFDbkIsbUJBQTBELEVBQzFELFFBQTBCLEVBQzFCLGNBQXdCLEVBQUU7UUFFMUIsSUFBSSxDQUFDLG1CQUFtQixHQUFHLG1CQUFtQixDQUFDO1FBQy9DLElBQUksQ0FBQyxlQUFlLEdBQUcsZUFBZSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxXQUFXLEdBQUcsaUJBQWlCLENBQUM7UUFDckMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLGVBQWUsR0FBRyxlQUFlLENBQUM7UUFDdkMsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7UUFDbkMsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFDL0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFFL0IsSUFBRyxXQUFXLENBQUMsTUFBTSxFQUFFO1lBQ3JCLE1BQU0sZUFBZSxHQUFHLFdBQVcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDeEUsSUFBSSxlQUFlLEVBQUc7Z0JBQ3BCLElBQUksQ0FBQyxZQUFZLEdBQUcsV0FBVyxDQUFDO2FBQ2pDO1NBQ0Y7UUFFRCxJQUFJLE1BQU0sRUFBRTtZQUNWLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUU7Z0JBQ3RDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7Z0JBQzlELElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO2dCQUM3QixJQUNFLElBQUksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLE1BQU0sQ0FBQyxXQUFXLEVBQUUsRUFDbEU7b0JBQ0EsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztpQkFDdEQ7YUFDRjtpQkFBTTtnQkFDTCxPQUFPLENBQUMsS0FBSyxDQUFDLHVDQUF1QyxDQUFDLENBQUM7Z0JBQ3ZELElBQUksQ0FBQyxNQUFNLEdBQUcsWUFBWSxDQUFDLEdBQUcsQ0FBQzthQUNoQztTQUNGO2FBQU07WUFDTCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDcEYsSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRztnQkFDcEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7YUFDakI7U0FDRjtRQUVELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUMvQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sSUFBSSxhQUFhLENBQUM7UUFDeEMsSUFBSSxDQUFDLHFCQUFxQixHQUFHLFNBQVMsQ0FBQztRQUN2QyxJQUFJLFFBQVEsSUFBSSxLQUFLLEVBQUU7WUFDckIsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMscUJBQXFCLEVBQUUsQ0FBQztZQUN6RSxJQUFJLENBQUMsY0FBYztnQkFDakIsc0NBQXNDLEdBQUcsV0FBVyxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUM7U0FDekU7SUFDSCxDQUFDO0lBRU0sV0FBVztRQUNoQixJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDcEIsTUFBTSxVQUFVLEdBQUcsR0FBRyxDQUFDO1lBQ3ZCLE1BQU0sY0FBYyxHQUNsQixJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1lBQ3pELElBQUksQ0FBQyxHQUFHLEdBQUcsY0FBYyxDQUFDLEdBQUcsR0FBRyxjQUFjLENBQUMsTUFBTSxDQUFDO1lBQ3RELElBQUksY0FBYyxDQUFDLElBQUksR0FBRyxVQUFVLEdBQUcsTUFBTSxDQUFDLFVBQVUsRUFBRTtnQkFDeEQsSUFBSSxDQUFDLElBQUk7b0JBQ1AsY0FBYyxDQUFDLEtBQUssR0FBRyxVQUFVO3dCQUMvQixDQUFDLENBQUMsTUFBTSxDQUFDLFVBQVUsR0FBRyxDQUFDLEdBQUcsVUFBVSxHQUFHLENBQUM7d0JBQ3hDLENBQUMsQ0FBQyxjQUFjLENBQUMsS0FBSyxHQUFHLFVBQVUsQ0FBQzthQUN6QztpQkFBTTtnQkFDTCxJQUFJLENBQUMsSUFBSSxHQUFHLGNBQWMsQ0FBQyxJQUFJLENBQUM7YUFDakM7U0FDRjtJQUNILENBQUM7SUFFTyxZQUFZO1FBQ2xCLE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLHFCQUFxQixFQUFFLENBQUM7UUFDM0UsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMscUJBQXFCLEVBQUUsQ0FBQztRQUN0RSxNQUFNLFdBQVcsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDO1FBQ3JDLG9DQUFvQztRQUNwQyxJQUFJLFdBQVcsQ0FBQyxNQUFNLEdBQUcsV0FBVyxHQUFHLE1BQU0sQ0FBQyxXQUFXLEVBQUU7WUFDekQsaURBQWlEO1lBQ2pELElBQUksQ0FBQyxjQUFjO2dCQUNqQixXQUFXLENBQUMsR0FBRyxHQUFHLFNBQVMsQ0FBQyxNQUFNO29CQUNoQyxDQUFDLENBQUMseUJBQXlCLEdBQUcsV0FBVyxDQUFDLE1BQU0sR0FBRyxPQUFPO29CQUMxRCxDQUFDLENBQUMsc0NBQXNDO3dCQUN0QyxXQUFXLENBQUMsTUFBTTt3QkFDbEIsUUFBUSxDQUFDO1NBQ2hCO2FBQU07WUFDTCxJQUFJLENBQUMsY0FBYyxHQUFHLEVBQUUsQ0FBQztTQUMxQjtRQUNELElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVNLFVBQVUsQ0FBQyxLQUFLO1FBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3RCLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFDRCxPQUFPLENBQ0wsT0FBTyxLQUFLLElBQUksUUFBUTtZQUN4QixLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDakIsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUMxRCxDQUNGLENBQUM7SUFDSixDQUFDO0lBRU0sVUFBVSxDQUFDLEtBQUs7UUFDckIsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDdEIsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUNELE9BQU8sQ0FDTCxPQUFPLEtBQUssSUFBSSxRQUFRO1lBQ3hCLEtBQUssQ0FBQyxXQUFXLEVBQUUsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUN2RCxDQUFDO0lBQ0osQ0FBQztJQUVNLGtCQUFrQixDQUFDLEtBQUs7UUFDN0IsSUFBSSxPQUFPLEtBQUssSUFBSSxRQUFRLEVBQUU7WUFDNUIsT0FBTyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsQ0FBQztTQUM5QjthQUFNO1lBQ0wsT0FBTyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLENBQUM7U0FDdkM7SUFDSCxDQUFDO0lBRU0sYUFBYSxDQUFDLEtBQUs7UUFDeEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBRU8sb0JBQW9CLENBQzFCLEtBQUssRUFDTCxNQUFzQztRQUV0QyxJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDaEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDdEMsTUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3hCLElBQUksT0FBTyxLQUFLLElBQUksUUFBUSxFQUFFO2dCQUM1QixJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDaEQsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDOUIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7YUFDM0Q7aUJBQU07Z0JBQ0wsSUFBSSxRQUFRLEdBQUcsSUFBSSxjQUFjLEVBQUUsQ0FBQztnQkFDcEMsSUFBSSxlQUFlLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUMvRCxlQUFlLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNyQyxRQUFRLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3ZFLFFBQVEsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ3JFLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDdkI7U0FDRjtRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFFRDs7O09BR0c7SUFDSSxXQUFXLENBQUMsS0FBYTtRQUM5QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDaEQsbUNBQW1DO1FBQ25DLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVNLG1CQUFtQixDQUFDLEtBQVc7UUFDcEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7UUFDM0IsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3ZELHdCQUF3QjtRQUN4QixJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FDL0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FDMUMsQ0FBQztJQUNKLENBQUM7SUFFTSxpQkFBaUIsQ0FBQyxLQUFhO1FBQ3BDLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBQzFCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQy9CLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzdELG1DQUFtQztJQUNyQyxDQUFDO0lBRUQsUUFBUSxDQUFDLEtBQVcsRUFBRSxhQUFxQixDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7UUFFbEIsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDaEQsSUFBSSxLQUFLLEdBQUcsVUFBVSxDQUFBO1FBQ3RCLElBQUksS0FBSyxHQUFHLENBQUMsRUFBQztZQUNaLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQ3BDO1FBRUQsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBRUQsZUFBZSxDQUFDLEtBQVc7UUFDekIsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLO1lBQ3ZCLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxRQUFRLEVBQUU7WUFDM0MsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUNoQixDQUFDO0lBRUQsUUFBUTtRQUNOLG1DQUFtQztJQUNyQyxDQUFDO0lBRU0sWUFBWSxDQUFDLEtBQUs7UUFDdkIsSUFBSSxPQUFPLEtBQUssSUFBSSxRQUFRLElBQUksS0FBSyxLQUFLLFNBQVMsRUFBRTtZQUNuRCxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3pCO2FBQU07WUFDTCxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUM7WUFDL0IsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7U0FDZjtJQUNILENBQUM7SUFFTSxRQUFRO1FBQ2IsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7UUFDZCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDOUIsMEJBQTBCO1FBQzFCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFFTSxVQUFVO1FBQ2YsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDO1lBRTNELElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2hELElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUM7WUFFdkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ2hDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQ3RDLElBQUksSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUNwQixLQUFLLENBQ04sQ0FBQztTQUNIO0lBQ0gsQ0FBQztJQUVNLFNBQVMsQ0FBQyxNQUEyQjtRQUMxQyxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxFQUFFO1lBQ2xCLElBQUksTUFBTSxJQUFJLFFBQVEsRUFBRTthQUN2QjtpQkFBTSxJQUFJLE1BQU0sSUFBSSxRQUFRLEVBQUU7Z0JBQzdCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2FBQ25DO1NBQ0Y7UUFDRCxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3BDLENBQUM7SUFFTSxXQUFXO1FBQ2hCLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLEVBQUU7WUFDbEIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1lBQzlCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ25EO1FBQ0QsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbkUsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7SUFDaEIsQ0FBQztJQUVELFNBQVMsQ0FBQyxLQUFLO1FBQ2IsT0FBTyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsb0JBQW9CLENBQUMsQ0FBQztJQUMvRCxDQUFDOzs0RUExV1UsY0FBYztpRUFBZCxjQUFjOzs7Ozs7eUdBQWQsaUJBQWEseUdBQWIsY0FBVSx5R0FBVixjQUFVOzs7O1FDbEZ2QixpQ0FBcUQ7UUFDbkQsaUZBdURlO1FBQ2YsaUZBK0JlO1FBQ2Ysa0ZBa0NlO1FBQ2YsK0RBY007UUFDUixpQkFBTTs7UUEzSWMsaUNBQXdCO1FBQzNCLGVBQWU7UUFBZixvQ0FBZTtRQXdEZixlQUFlO1FBQWYsb0NBQWU7UUFnQ2YsZUFBZTtRQUFmLG9DQUFlO1FBbUNLLGVBQW9CO1FBQXBCLHlDQUFvQjtvaklEMUYzQztZQUNWLE9BQU8sQ0FBQyxpQkFBaUIsRUFBRTtnQkFDekIsVUFBVSxDQUFDLGtCQUFrQixFQUFFO29CQUM3QixrQ0FBa0M7b0JBQ2xDLEtBQUssQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7b0JBQzFELG9CQUFvQjtvQkFDcEIsS0FBSyxDQUNILFFBQVEsRUFDUixPQUFPLENBQUMsTUFBTSxFQUFFO3dCQUNkLE9BQU8sQ0FDTCxhQUFhLEVBQ2IsU0FBUyxDQUFDOzRCQUNSLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQzs0QkFDL0QsS0FBSyxDQUFDO2dDQUNKLE9BQU8sRUFBRSxHQUFHO2dDQUNaLFNBQVMsRUFBRSw4QkFBOEI7Z0NBQ3pDLE1BQU0sRUFBRSxHQUFHOzZCQUNaLENBQUM7NEJBQ0YsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsZUFBZSxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQzt5QkFDN0QsQ0FBQyxDQUNIO3FCQUNGLENBQUMsRUFDRixFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FDbkI7aUJBQ0YsQ0FBQztnQkFDRixpQkFBaUI7Z0JBQ2pCLFVBQVUsQ0FBQyxlQUFlLEVBQUU7b0JBQzFCLEtBQUssQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLENBQUMsRUFBRTt3QkFDNUQsUUFBUSxFQUFFLElBQUk7cUJBQ2YsQ0FBQztvQkFDRixLQUFLLENBQ0gsUUFBUSxFQUNSLE9BQU8sQ0FBQyxNQUFNLEVBQUU7d0JBQ2QsT0FBTyxDQUNMLGdCQUFnQixFQUNoQixTQUFTLENBQUM7NEJBQ1IsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQzs0QkFDNUQsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQzs0QkFDM0QsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQzt5QkFDeEQsQ0FBQyxDQUNIO3FCQUNGLENBQUMsRUFDRixFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FDbkI7aUJBQ0YsQ0FBQzthQUNILENBQUM7U0FDSDt1RkFFVSxjQUFjO2NBcEQxQixTQUFTOzJCQUNFLGtCQUFrQixjQUdoQjtvQkFDVixPQUFPLENBQUMsaUJBQWlCLEVBQUU7d0JBQ3pCLFVBQVUsQ0FBQyxrQkFBa0IsRUFBRTs0QkFDN0Isa0NBQWtDOzRCQUNsQyxLQUFLLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDOzRCQUMxRCxvQkFBb0I7NEJBQ3BCLEtBQUssQ0FDSCxRQUFRLEVBQ1IsT0FBTyxDQUFDLE1BQU0sRUFBRTtnQ0FDZCxPQUFPLENBQ0wsYUFBYSxFQUNiLFNBQVMsQ0FBQztvQ0FDUixLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7b0NBQy9ELEtBQUssQ0FBQzt3Q0FDSixPQUFPLEVBQUUsR0FBRzt3Q0FDWixTQUFTLEVBQUUsOEJBQThCO3dDQUN6QyxNQUFNLEVBQUUsR0FBRztxQ0FDWixDQUFDO29DQUNGLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7aUNBQzdELENBQUMsQ0FDSDs2QkFDRixDQUFDLEVBQ0YsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQ25CO3lCQUNGLENBQUM7d0JBQ0YsaUJBQWlCO3dCQUNqQixVQUFVLENBQUMsZUFBZSxFQUFFOzRCQUMxQixLQUFLLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxDQUFDLEVBQUU7Z0NBQzVELFFBQVEsRUFBRSxJQUFJOzZCQUNmLENBQUM7NEJBQ0YsS0FBSyxDQUNILFFBQVEsRUFDUixPQUFPLENBQUMsTUFBTSxFQUFFO2dDQUNkLE9BQU8sQ0FDTCxnQkFBZ0IsRUFDaEIsU0FBUyxDQUFDO29DQUNSLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUM7b0NBQzVELEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUM7b0NBQzNELEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7aUNBQ3hELENBQUMsQ0FDSDs2QkFDRixDQUFDLEVBQ0YsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQ25CO3lCQUNGLENBQUM7cUJBQ0gsQ0FBQztpQkFDSDttR0FJRCxLQUFLO2tCQURKLFlBQVk7bUJBQUMsb0JBQW9CLEVBQUUsQ0FBQyxRQUFRLENBQUM7WUFROUMsUUFBUTtrQkFEUCxZQUFZO21CQUFDLGlCQUFpQjtZQUsvQixRQUFRO2tCQURQLFlBQVk7bUJBQUMsZUFBZTtZQUtPLEdBQUc7a0JBQXRDLFdBQVc7bUJBQUMsY0FBYztZQUNVLElBQUk7a0JBQXhDLFdBQVc7bUJBQUMsZUFBZTtZQUNQLFFBQVE7a0JBQTVCLFNBQVM7bUJBQUMsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIE9uSW5pdCxcclxuICBJbnB1dCxcclxuICBPdXRwdXQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIFZpZXdDaGlsZCxcclxuICBFbGVtZW50UmVmLFxyXG4gIEhvc3RMaXN0ZW5lcixcclxuICBIb3N0QmluZGluZyxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtcclxuICB0cmlnZ2VyLFxyXG4gIHRyYW5zaXRpb24sXHJcbiAgcXVlcnksXHJcbiAgc3R5bGUsXHJcbiAgc3RhZ2dlcixcclxuICBhbmltYXRlLFxyXG4gIGtleWZyYW1lcyxcclxufSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcclxuaW1wb3J0IHsgaXNEZXNjZW5kYW50T3JTYW1lIH0gZnJvbSAnLi4vLi4vaGVscGVycy9oZWxwZXJzJztcclxuaW1wb3J0IHsgQ29sb3JGb3JtYXRzIH0gZnJvbSAnLi4vLi4vZW51bXMvZm9ybWF0cyc7XHJcbmltcG9ydCB7IENvbnZlcnRlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jb252ZXJ0ZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IGRlZmF1bHRDb2xvcnMgfSBmcm9tICcuLi8uLi9oZWxwZXJzL2RlZmF1bHQtY29sb3JzJztcclxuaW1wb3J0IHsgZm9ybWF0cyB9IGZyb20gJy4uLy4uL2hlbHBlcnMvZm9ybWF0cyc7XHJcbmltcG9ydCB7IE5neENvbG9yc1RyaWdnZXJEaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9kaXJlY3RpdmVzL25neC1jb2xvcnMtdHJpZ2dlci5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBIc3ZhIH0gZnJvbSAnLi4vLi4vY2xhc2VzL2Zvcm1hdHMnO1xyXG5pbXBvcnQgeyBOZ3hDb2xvcnNDb2xvciB9IGZyb20gJy4uLy4uL2NsYXNlcy9jb2xvcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ25neC1jb2xvcnMtcGFuZWwnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9wYW5lbC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vcGFuZWwuY29tcG9uZW50LnNjc3MnXSxcclxuICBhbmltYXRpb25zOiBbXHJcbiAgICB0cmlnZ2VyKCdjb2xvcnNBbmltYXRpb24nLCBbXHJcbiAgICAgIHRyYW5zaXRpb24oJ3ZvaWQgPT4gc2xpZGUtaW4nLCBbXHJcbiAgICAgICAgLy8gSW5pdGlhbGx5IGFsbCBjb2xvcnMgYXJlIGhpZGRlblxyXG4gICAgICAgIHF1ZXJ5KCc6ZW50ZXInLCBzdHlsZSh7IG9wYWNpdHk6IDAgfSksIHsgb3B0aW9uYWw6IHRydWUgfSksXHJcbiAgICAgICAgLy9zbGlkZS1pbiBhbmltYXRpb25cclxuICAgICAgICBxdWVyeShcclxuICAgICAgICAgICc6ZW50ZXInLFxyXG4gICAgICAgICAgc3RhZ2dlcignMTBtcycsIFtcclxuICAgICAgICAgICAgYW5pbWF0ZShcclxuICAgICAgICAgICAgICAnLjNzIGVhc2UtaW4nLFxyXG4gICAgICAgICAgICAgIGtleWZyYW1lcyhbXHJcbiAgICAgICAgICAgICAgICBzdHlsZSh7IG9wYWNpdHk6IDAsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZXgoLTUwJSknLCBvZmZzZXQ6IDAgfSksXHJcbiAgICAgICAgICAgICAgICBzdHlsZSh7XHJcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNSxcclxuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRleCgtMTBweCkgc2NhbGUoMS4xKScsXHJcbiAgICAgICAgICAgICAgICAgIG9mZnNldDogMC4zLFxyXG4gICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICBzdHlsZSh7IG9wYWNpdHk6IDEsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZXgoMCknLCBvZmZzZXQ6IDEgfSksXHJcbiAgICAgICAgICAgICAgXSlcclxuICAgICAgICAgICAgKSxcclxuICAgICAgICAgIF0pLFxyXG4gICAgICAgICAgeyBvcHRpb25hbDogdHJ1ZSB9XHJcbiAgICAgICAgKSxcclxuICAgICAgXSksXHJcbiAgICAgIC8vcG9wdXAgYW5pbWF0aW9uXHJcbiAgICAgIHRyYW5zaXRpb24oJ3ZvaWQgPT4gcG9wdXAnLCBbXHJcbiAgICAgICAgcXVlcnkoJzplbnRlcicsIHN0eWxlKHsgb3BhY2l0eTogMCwgdHJhbnNmb3JtOiAnc2NhbGUoMCknIH0pLCB7XHJcbiAgICAgICAgICBvcHRpb25hbDogdHJ1ZSxcclxuICAgICAgICB9KSxcclxuICAgICAgICBxdWVyeShcclxuICAgICAgICAgICc6ZW50ZXInLFxyXG4gICAgICAgICAgc3RhZ2dlcignMTBtcycsIFtcclxuICAgICAgICAgICAgYW5pbWF0ZShcclxuICAgICAgICAgICAgICAnNTAwbXMgZWFzZS1vdXQnLFxyXG4gICAgICAgICAgICAgIGtleWZyYW1lcyhbXHJcbiAgICAgICAgICAgICAgICBzdHlsZSh7IG9wYWNpdHk6IDAuNSwgdHJhbnNmb3JtOiAnc2NhbGUoLjUpJywgb2Zmc2V0OiAwLjMgfSksXHJcbiAgICAgICAgICAgICAgICBzdHlsZSh7IG9wYWNpdHk6IDEsIHRyYW5zZm9ybTogJ3NjYWxlKDEuMSknLCBvZmZzZXQ6IDAuOCB9KSxcclxuICAgICAgICAgICAgICAgIHN0eWxlKHsgb3BhY2l0eTogMSwgdHJhbnNmb3JtOiAnc2NhbGUoMSknLCBvZmZzZXQ6IDEgfSksXHJcbiAgICAgICAgICAgICAgXSlcclxuICAgICAgICAgICAgKSxcclxuICAgICAgICAgIF0pLFxyXG4gICAgICAgICAgeyBvcHRpb25hbDogdHJ1ZSB9XHJcbiAgICAgICAgKSxcclxuICAgICAgXSksXHJcbiAgICBdKSxcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGFuZWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50Om1vdXNlZG93bicsIFsnJGV2ZW50J10pXHJcbiAgY2xpY2soZXZlbnQpIHtcclxuICAgIGlmICh0aGlzLmlzT3V0c2lkZShldmVudCkpIHtcclxuICAgICAgdGhpcy5lbWl0Q2xvc2UoJ2NhbmNlbCcpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6c2Nyb2xsJylcclxuICBvblNjcm9sbCgpIHtcclxuICAgIHRoaXMub25TY3JlZW5Nb3ZlbWVudCgpO1xyXG4gIH1cclxuICBASG9zdExpc3RlbmVyKCd3aW5kb3c6cmVzaXplJylcclxuICBvblJlc2l6ZSgpIHtcclxuICAgIHRoaXMub25TY3JlZW5Nb3ZlbWVudCgpO1xyXG4gIH1cclxuXHJcbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS50b3AucHgnKSBwdWJsaWMgdG9wOiBudW1iZXI7XHJcbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS5sZWZ0LnB4JykgcHVibGljIGxlZnQ6IG51bWJlcjtcclxuICBAVmlld0NoaWxkKCdkaWFsb2cnKSBwYW5lbFJlZjogRWxlbWVudFJlZjtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBzZXJ2aWNlOiBDb252ZXJ0ZXJTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmXHJcbiAgKSB7fVxyXG5cclxuICBwdWJsaWMgY29sb3IgPSAnIzAwMDAwMCc7XHJcbiAgcHVibGljIHByZXZpZXdDb2xvcjogc3RyaW5nID0gJyMwMDAwMDAnO1xyXG4gIHB1YmxpYyBoc3ZhID0gbmV3IEhzdmEoMCwgMSwgMSwgMSk7XHJcblxyXG4gIHB1YmxpYyBjb2xvcnNBbmltYXRpb25FZmZlY3QgPSAnc2xpZGUtaW4nO1xyXG5cclxuICBwdWJsaWMgcGFsZXR0ZSA9IGRlZmF1bHRDb2xvcnM7XHJcbiAgcHVibGljIHZhcmlhbnRzID0gW107XHJcblxyXG4gIHB1YmxpYyB1c2VyRm9ybWF0czogc3RyaW5nW10gPSBbXTtcclxuICBwdWJsaWMgY29sb3JGb3JtYXRzID0gZm9ybWF0cztcclxuICBwdWJsaWMgZm9ybWF0OiBDb2xvckZvcm1hdHMgPSBDb2xvckZvcm1hdHMuSEVYO1xyXG4gIHB1YmxpYyBmb3JtYXRNYXAgPSB7XHJcbiAgICAnaGV4JzogQ29sb3JGb3JtYXRzLkhFWCxcclxuICAgICdyZ2JhJzogQ29sb3JGb3JtYXRzLlJHQkEsXHJcbiAgICAnaHNsYSc6IENvbG9yRm9ybWF0cy5IU0xBLFxyXG4gICAgJ2NteWsnOiBDb2xvckZvcm1hdHMuQ01ZS1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNhbkNoYW5nZUZvcm1hdDogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gIHB1YmxpYyBtZW51ID0gMTtcclxuXHJcbiAgcHVibGljIGhpZGVDb2xvclBpY2tlcjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHB1YmxpYyBoaWRlVGV4dElucHV0OiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHVibGljIGFjY2VwdExhYmVsOiBzdHJpbmc7XHJcbiAgcHVibGljIGNhbmNlbExhYmVsOiBzdHJpbmc7XHJcbiAgcHVibGljIGNvbG9yUGlja2VyQ29udHJvbHM6ICdkZWZhdWx0JyB8ICdvbmx5LWFscGhhJyB8ICduby1hbHBoYScgPSAnZGVmYXVsdCc7XHJcbiAgcHJpdmF0ZSB0cmlnZ2VySW5zdGFuY2U6IE5neENvbG9yc1RyaWdnZXJEaXJlY3RpdmU7XHJcbiAgcHJpdmF0ZSBUcmlnZ2VyQkJveDtcclxuICBwdWJsaWMgaXNTZWxlY3RlZENvbG9ySW5QYWxldHRlOiBib29sZWFuO1xyXG4gIHB1YmxpYyBpbmRleFNlbGVjY2lvbmFkbztcclxuICBwdWJsaWMgcG9zaXRpb25TdHJpbmc7XHJcbiAgcHVibGljIHRlbXBvcmFsQ29sb3I7XHJcbiAgcHVibGljIGJhY2t1cENvbG9yO1xyXG4gIHB1YmxpYyBwbGFjZWhvbGRlciA9ICcjRkZGRkZGJztcclxuXHJcbiAgcHVibGljIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5zZXRQb3NpdGlvbigpO1xyXG4gICAgdGhpcy5oc3ZhID0gdGhpcy5zZXJ2aWNlLnN0cmluZ1RvSHN2YSh0aGlzLmNvbG9yKTtcclxuICAgIHRoaXMuaW5kZXhTZWxlY2Npb25hZG8gPSB0aGlzLmZpbmRJbmRleFNlbGVjdGVkQ29sb3IodGhpcy5wYWxldHRlKTtcclxuICB9XHJcbiAgcHVibGljIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIHRoaXMuc2V0UG9zaXRpb25ZKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uU2NyZWVuTW92ZW1lbnQoKSB7XHJcbiAgICB0aGlzLnNldFBvc2l0aW9uKCk7XHJcbiAgICB0aGlzLnNldFBvc2l0aW9uWSgpO1xyXG4gICAgaWYgKCF0aGlzLnBhbmVsUmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUudHJhbnNpdGlvbikge1xyXG4gICAgICB0aGlzLnBhbmVsUmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUudHJhbnNpdGlvbiA9ICd0cmFuc2Zvcm0gMC41cyBlYXNlLW91dCc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGZpbmRJbmRleFNlbGVjdGVkQ29sb3IoY29sb3JzKTogbnVtYmVyIHtcclxuICAgIGxldCByZXN1bHRJbmRleCA9IHVuZGVmaW5lZDtcclxuICAgIGlmICh0aGlzLmNvbG9yKSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29sb3JzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgY29sb3IgPSBjb2xvcnNbaV07XHJcbiAgICAgICAgaWYgKHR5cGVvZiBjb2xvciA9PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICB0aGlzLnNlcnZpY2Uuc3RyaW5nVG9Gb3JtYXQodGhpcy5jb2xvciwgQ29sb3JGb3JtYXRzLkhFWCkgPT1cclxuICAgICAgICAgICAgdGhpcy5zZXJ2aWNlLnN0cmluZ1RvRm9ybWF0KGNvbG9yLCBDb2xvckZvcm1hdHMuSEVYKVxyXG4gICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdEluZGV4ID0gaTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKGNvbG9yID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgIHRoaXMuY29sb3IgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGlmICh0aGlzLmZpbmRJbmRleFNlbGVjdGVkQ29sb3IoY29sb3IudmFyaWFudHMpICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXN1bHRJbmRleCA9IGk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0SW5kZXg7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaW5pY2lhdGUoXHJcbiAgICB0cmlnZ2VySW5zdGFuY2U6IE5neENvbG9yc1RyaWdnZXJEaXJlY3RpdmUsXHJcbiAgICB0cmlnZ2VyRWxlbWVudFJlZixcclxuICAgIGNvbG9yLFxyXG4gICAgcGFsZXR0ZSxcclxuICAgIGFuaW1hdGlvbixcclxuICAgIGZvcm1hdDogc3RyaW5nLFxyXG4gICAgaGlkZVRleHRJbnB1dDogYm9vbGVhbixcclxuICAgIGhpZGVDb2xvclBpY2tlcjogYm9vbGVhbixcclxuICAgIGFjY2VwdExhYmVsOiBzdHJpbmcsXHJcbiAgICBjYW5jZWxMYWJlbDogc3RyaW5nLFxyXG4gICAgY29sb3JQaWNrZXJDb250cm9sczogJ2RlZmF1bHQnIHwgJ29ubHktYWxwaGEnIHwgJ25vLWFscGhhJyxcclxuICAgIHBvc2l0aW9uOiAndG9wJyB8ICdib3R0b20nLFxyXG4gICAgdXNlckZvcm1hdHM6IHN0cmluZ1tdID0gW10sXHJcbiAgKSB7XHJcbiAgICB0aGlzLmNvbG9yUGlja2VyQ29udHJvbHMgPSBjb2xvclBpY2tlckNvbnRyb2xzO1xyXG4gICAgdGhpcy50cmlnZ2VySW5zdGFuY2UgPSB0cmlnZ2VySW5zdGFuY2U7XHJcbiAgICB0aGlzLlRyaWdnZXJCQm94ID0gdHJpZ2dlckVsZW1lbnRSZWY7XHJcbiAgICB0aGlzLmNvbG9yID0gY29sb3I7XHJcbiAgICB0aGlzLmhpZGVDb2xvclBpY2tlciA9IGhpZGVDb2xvclBpY2tlcjtcclxuICAgIHRoaXMuaGlkZVRleHRJbnB1dCA9IGhpZGVUZXh0SW5wdXQ7XHJcbiAgICB0aGlzLmFjY2VwdExhYmVsID0gYWNjZXB0TGFiZWw7XHJcbiAgICB0aGlzLmNhbmNlbExhYmVsID0gY2FuY2VsTGFiZWw7XHJcblxyXG4gICAgaWYodXNlckZvcm1hdHMubGVuZ3RoKSB7XHJcbiAgICAgIGNvbnN0IGFsbEZvcm1hdHNWYWxpZCA9IHVzZXJGb3JtYXRzLmV2ZXJ5KGZydCA9PiBmb3JtYXRzLmluY2x1ZGVzKGZydCkpO1xyXG4gICAgICBpZiggYWxsRm9ybWF0c1ZhbGlkICkge1xyXG4gICAgICAgIHRoaXMuY29sb3JGb3JtYXRzID0gdXNlckZvcm1hdHM7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoZm9ybWF0KSB7XHJcbiAgICAgIGlmICh0aGlzLmNvbG9yRm9ybWF0cy5pbmNsdWRlcyhmb3JtYXQpKSB7XHJcbiAgICAgICAgdGhpcy5mb3JtYXQgPSB0aGlzLmNvbG9yRm9ybWF0cy5pbmRleE9mKGZvcm1hdC50b0xvd2VyQ2FzZSgpKTtcclxuICAgICAgICB0aGlzLmNhbkNoYW5nZUZvcm1hdCA9IGZhbHNlO1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgIHRoaXMuc2VydmljZS5nZXRGb3JtYXRCeVN0cmluZyh0aGlzLmNvbG9yKSAhPSBmb3JtYXQudG9Mb3dlckNhc2UoKVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgdGhpcy5zZXRDb2xvcih0aGlzLnNlcnZpY2Uuc3RyaW5nVG9Ic3ZhKHRoaXMuY29sb3IpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRm9ybWF0IHByb3ZpZGVkIGlzIGludmFsaWQsIHVzaW5nIEhFWCcpO1xyXG4gICAgICAgIHRoaXMuZm9ybWF0ID0gQ29sb3JGb3JtYXRzLkhFWDtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5mb3JtYXQgPSB0aGlzLmNvbG9yRm9ybWF0cy5pbmRleE9mKHRoaXMuc2VydmljZS5nZXRGb3JtYXRCeVN0cmluZyh0aGlzLmNvbG9yKSk7XHJcbiAgICAgIGlmKCB0aGlzLmZvcm1hdCA8IDAgKSB7XHJcbiAgICAgICAgdGhpcy5mb3JtYXQgPSAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5wcmV2aWV3Q29sb3IgPSB0aGlzLmNvbG9yO1xyXG4gICAgdGhpcy5wYWxldHRlID0gcGFsZXR0ZSA/PyBkZWZhdWx0Q29sb3JzO1xyXG4gICAgdGhpcy5jb2xvcnNBbmltYXRpb25FZmZlY3QgPSBhbmltYXRpb247XHJcbiAgICBpZiAocG9zaXRpb24gPT0gJ3RvcCcpIHtcclxuICAgICAgbGV0IFRyaWdnZXJCQm94ID0gdGhpcy5UcmlnZ2VyQkJveC5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICB0aGlzLnBvc2l0aW9uU3RyaW5nID1cclxuICAgICAgICAndHJhbnNmb3JtOiB0cmFuc2xhdGVZKGNhbGMoIC0xMDAlIC0gJyArIFRyaWdnZXJCQm94LmhlaWdodCArICdweCApKSc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0UG9zaXRpb24oKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5UcmlnZ2VyQkJveCkge1xyXG4gICAgICBjb25zdCBwYW5lbFdpZHRoID0gMjUwO1xyXG4gICAgICBjb25zdCB2aWV3cG9ydE9mZnNldCA9XHJcbiAgICAgICAgdGhpcy5UcmlnZ2VyQkJveC5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICB0aGlzLnRvcCA9IHZpZXdwb3J0T2Zmc2V0LnRvcCArIHZpZXdwb3J0T2Zmc2V0LmhlaWdodDtcclxuICAgICAgaWYgKHZpZXdwb3J0T2Zmc2V0LmxlZnQgKyBwYW5lbFdpZHRoID4gd2luZG93LmlubmVyV2lkdGgpIHtcclxuICAgICAgICB0aGlzLmxlZnQgPVxyXG4gICAgICAgICAgdmlld3BvcnRPZmZzZXQucmlnaHQgPCBwYW5lbFdpZHRoXHJcbiAgICAgICAgICAgID8gd2luZG93LmlubmVyV2lkdGggLyAyIC0gcGFuZWxXaWR0aCAvIDJcclxuICAgICAgICAgICAgOiB2aWV3cG9ydE9mZnNldC5yaWdodCAtIHBhbmVsV2lkdGg7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5sZWZ0ID0gdmlld3BvcnRPZmZzZXQubGVmdDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRQb3NpdGlvblkoKTogdm9pZCB7XHJcbiAgICBjb25zdCB0cmlnZ2VyQkJveCA9IHRoaXMuVHJpZ2dlckJCb3gubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIGNvbnN0IHBhbmVsQkJveCA9IHRoaXMucGFuZWxSZWYubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIGNvbnN0IHBhbmVsSGVpZ2h0ID0gcGFuZWxCQm94LmhlaWdodDtcclxuICAgIC8vIENoZWNrIGZvciBzcGFjZSBiZWxvdyB0aGUgdHJpZ2dlclxyXG4gICAgaWYgKHRyaWdnZXJCQm94LmJvdHRvbSArIHBhbmVsSGVpZ2h0ID4gd2luZG93LmlubmVySGVpZ2h0KSB7XHJcbiAgICAgIC8vIHRoZXJlIGlzIG5vIHNwYWNlLCBtb3ZlIHBhbmVsIG92ZXIgdGhlIHRyaWdnZXJcclxuICAgICAgdGhpcy5wb3NpdGlvblN0cmluZyA9XHJcbiAgICAgICAgdHJpZ2dlckJCb3gudG9wIDwgcGFuZWxCQm94LmhlaWdodFxyXG4gICAgICAgICAgPyAndHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0nICsgdHJpZ2dlckJCb3guYm90dG9tICsgJ3B4ICk7J1xyXG4gICAgICAgICAgOiAndHJhbnNmb3JtOiB0cmFuc2xhdGVZKGNhbGMoIC0xMDAlIC0gJyArXHJcbiAgICAgICAgICAgIHRyaWdnZXJCQm94LmhlaWdodCArXHJcbiAgICAgICAgICAgICdweCApKTsnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5wb3NpdGlvblN0cmluZyA9ICcnO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGhhc1ZhcmlhbnQoY29sb3IpOiBib29sZWFuIHtcclxuICAgIGlmICghdGhpcy5wcmV2aWV3Q29sb3IpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgdHlwZW9mIGNvbG9yICE9ICdzdHJpbmcnICYmXHJcbiAgICAgIGNvbG9yLnZhcmlhbnRzLnNvbWUoXHJcbiAgICAgICAgKHYpID0+IHYudG9VcHBlckNhc2UoKSA9PSB0aGlzLnByZXZpZXdDb2xvci50b1VwcGVyQ2FzZSgpXHJcbiAgICAgIClcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaXNTZWxlY3RlZChjb2xvcikge1xyXG4gICAgaWYgKCF0aGlzLnByZXZpZXdDb2xvcikge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICB0eXBlb2YgY29sb3IgPT0gJ3N0cmluZycgJiZcclxuICAgICAgY29sb3IudG9VcHBlckNhc2UoKSA9PSB0aGlzLnByZXZpZXdDb2xvci50b1VwcGVyQ2FzZSgpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldEJhY2tncm91bmRDb2xvcihjb2xvcikge1xyXG4gICAgaWYgKHR5cGVvZiBjb2xvciA9PSAnc3RyaW5nJykge1xyXG4gICAgICByZXR1cm4geyBiYWNrZ3JvdW5kOiBjb2xvciB9O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHsgYmFja2dyb3VuZDogY29sb3I/LnByZXZpZXcgfTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBvbkFscGhhQ2hhbmdlKGV2ZW50KSB7XHJcbiAgICB0aGlzLnBhbGV0dGUgPSB0aGlzLkNoYW5nZUFscGhhT25QYWxldHRlKGV2ZW50LCB0aGlzLnBhbGV0dGUpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBDaGFuZ2VBbHBoYU9uUGFsZXR0ZShcclxuICAgIGFscGhhLFxyXG4gICAgY29sb3JzOiBBcnJheTxzdHJpbmcgfCBOZ3hDb2xvcnNDb2xvcj5cclxuICApOiBBcnJheTxhbnk+IHtcclxuICAgIHZhciByZXN1bHQgPSBbXTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29sb3JzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IGNvbG9yID0gY29sb3JzW2ldO1xyXG4gICAgICBpZiAodHlwZW9mIGNvbG9yID09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgbGV0IG5ld0NvbG9yID0gdGhpcy5zZXJ2aWNlLnN0cmluZ1RvSHN2YShjb2xvcik7XHJcbiAgICAgICAgbmV3Q29sb3Iub25BbHBoYUNoYW5nZShhbHBoYSk7XHJcbiAgICAgICAgcmVzdWx0LnB1c2godGhpcy5zZXJ2aWNlLnRvRm9ybWF0KG5ld0NvbG9yLCB0aGlzLmZvcm1hdCkpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGxldCBuZXdDb2xvciA9IG5ldyBOZ3hDb2xvcnNDb2xvcigpO1xyXG4gICAgICAgIGxldCBuZXdDb2xvclByZXZpZXcgPSB0aGlzLnNlcnZpY2Uuc3RyaW5nVG9Ic3ZhKGNvbG9yLnByZXZpZXcpO1xyXG4gICAgICAgIG5ld0NvbG9yUHJldmlldy5vbkFscGhhQ2hhbmdlKGFscGhhKTtcclxuICAgICAgICBuZXdDb2xvci5wcmV2aWV3ID0gdGhpcy5zZXJ2aWNlLnRvRm9ybWF0KG5ld0NvbG9yUHJldmlldywgdGhpcy5mb3JtYXQpO1xyXG4gICAgICAgIG5ld0NvbG9yLnZhcmlhbnRzID0gdGhpcy5DaGFuZ2VBbHBoYU9uUGFsZXR0ZShhbHBoYSwgY29sb3IudmFyaWFudHMpO1xyXG4gICAgICAgIHJlc3VsdC5wdXNoKG5ld0NvbG9yKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENoYW5nZSBjb2xvciBmcm9tIGRlZmF1bHQgY29sb3JzXHJcbiAgICogQHBhcmFtIHN0cmluZyBjb2xvclxyXG4gICAqL1xyXG4gIHB1YmxpYyBjaGFuZ2VDb2xvcihjb2xvcjogc3RyaW5nKTogdm9pZCB7XHJcbiAgICB0aGlzLnNldENvbG9yKHRoaXMuc2VydmljZS5zdHJpbmdUb0hzdmEoY29sb3IpKTtcclxuICAgIC8vIHRoaXMudHJpZ2dlckluc3RhbmNlLm9uQ2hhbmdlKCk7XHJcbiAgICB0aGlzLmVtaXRDbG9zZSgnYWNjZXB0Jyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb25DaGFuZ2VDb2xvclBpY2tlcihldmVudDogSHN2YSkge1xyXG4gICAgdGhpcy50ZW1wb3JhbENvbG9yID0gZXZlbnQ7XHJcbiAgICB0aGlzLmNvbG9yID0gdGhpcy5zZXJ2aWNlLnRvRm9ybWF0KGV2ZW50LCB0aGlzLmZvcm1hdCk7XHJcbiAgICAvLyB0aGlzLnNldENvbG9yKGV2ZW50KTtcclxuICAgIHRoaXMudHJpZ2dlckluc3RhbmNlLnNsaWRlckNoYW5nZShcclxuICAgICAgdGhpcy5zZXJ2aWNlLnRvRm9ybWF0KGV2ZW50LCB0aGlzLmZvcm1hdClcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY2hhbmdlQ29sb3JNYW51YWwoY29sb3I6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgdGhpcy5wcmV2aWV3Q29sb3IgPSBjb2xvcjtcclxuICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcclxuICAgIHRoaXMuaHN2YSA9IHRoaXMuc2VydmljZS5zdHJpbmdUb0hzdmEoY29sb3IpO1xyXG4gICAgdGhpcy5zZXRQcmV2aWV3Q29sb3IodGhpcy5oc3ZhKTtcclxuICAgIHRoaXMudGVtcG9yYWxDb2xvciA9IHRoaXMuaHN2YTtcclxuICAgIHRoaXMudHJpZ2dlckluc3RhbmNlLnNldENvbG9yKHRoaXMuY29sb3IsIHRoaXMucHJldmlld0NvbG9yKTtcclxuICAgIC8vIHRoaXMudHJpZ2dlckluc3RhbmNlLm9uQ2hhbmdlKCk7XHJcbiAgfVxyXG5cclxuICBzZXRDb2xvcih2YWx1ZTogSHN2YSwgY29sb3JJbmRleDogbnVtYmVyID0gLTEpIHtcclxuICAgIHRoaXMuaHN2YSA9IHZhbHVlO1xyXG5cclxuICAgIGxldCBmb3JtYXROYW1lID0gdGhpcy5jb2xvckZvcm1hdHNbdGhpcy5mb3JtYXRdO1xyXG4gICAgbGV0IGluZGV4ID0gY29sb3JJbmRleFxyXG4gICAgaWYoIGluZGV4IDwgMCl7XHJcbiAgICAgIGluZGV4ID0gdGhpcy5mb3JtYXRNYXBbZm9ybWF0TmFtZV07XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHRoaXMuY29sb3IgPSB0aGlzLnNlcnZpY2UudG9Gb3JtYXQodmFsdWUsIGluZGV4KTtcclxuICAgIHRoaXMuc2V0UHJldmlld0NvbG9yKHZhbHVlKTtcclxuICAgIHRoaXMudHJpZ2dlckluc3RhbmNlLnNldENvbG9yKHRoaXMuY29sb3IsIHRoaXMucHJldmlld0NvbG9yKTtcclxuICB9XHJcblxyXG4gIHNldFByZXZpZXdDb2xvcih2YWx1ZTogSHN2YSkge1xyXG4gICAgdGhpcy5wcmV2aWV3Q29sb3IgPSB2YWx1ZVxyXG4gICAgICA/IHRoaXMuc2VydmljZS5oc3ZhVG9SZ2JhKHZhbHVlKS50b1N0cmluZygpXHJcbiAgICAgIDogdW5kZWZpbmVkO1xyXG4gIH1cclxuICBoc3ZhVG9SZ2JhO1xyXG4gIG9uQ2hhbmdlKCkge1xyXG4gICAgLy8gdGhpcy50cmlnZ2VySW5zdGFuY2Uub25DaGFuZ2UoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBvbkNvbG9yQ2xpY2soY29sb3IpIHtcclxuICAgIGlmICh0eXBlb2YgY29sb3IgPT0gJ3N0cmluZycgfHwgY29sb3IgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aGlzLmNoYW5nZUNvbG9yKGNvbG9yKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMudmFyaWFudHMgPSBjb2xvci52YXJpYW50cztcclxuICAgICAgdGhpcy5tZW51ID0gMjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBhZGRDb2xvcigpIHtcclxuICAgIHRoaXMubWVudSA9IDM7XHJcbiAgICB0aGlzLmJhY2t1cENvbG9yID0gdGhpcy5jb2xvcjtcclxuICAgIC8vIHRoaXMuY29sb3IgPSBcIiNGRjAwMDBcIjtcclxuICAgIHRoaXMudGVtcG9yYWxDb2xvciA9IHRoaXMuc2VydmljZS5zdHJpbmdUb0hzdmEodGhpcy5jb2xvcik7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbmV4dEZvcm1hdCgpIHtcclxuICAgIGlmICh0aGlzLmNhbkNoYW5nZUZvcm1hdCkge1xyXG4gICAgICB0aGlzLmZvcm1hdCA9ICh0aGlzLmZvcm1hdCArIDEpICUgdGhpcy5jb2xvckZvcm1hdHMubGVuZ3RoO1xyXG5cclxuICAgICAgbGV0IGZvcm1hdE5hbWUgPSB0aGlzLmNvbG9yRm9ybWF0c1t0aGlzLmZvcm1hdF07XHJcbiAgICAgIGxldCBpbmRleCA9IHRoaXMuZm9ybWF0TWFwW2Zvcm1hdE5hbWVdO1xyXG5cclxuICAgICAgdGhpcy5zZXRDb2xvcih0aGlzLmhzdmEsIGluZGV4KTtcclxuICAgICAgdGhpcy5wbGFjZWhvbGRlciA9IHRoaXMuc2VydmljZS50b0Zvcm1hdChcclxuICAgICAgICBuZXcgSHN2YSgwLCAwLCAxLCAxKSxcclxuICAgICAgICBpbmRleFxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGVtaXRDbG9zZShzdGF0dXM6ICdjYW5jZWwnIHwgJ2FjY2VwdCcpIHtcclxuICAgIGlmICh0aGlzLm1lbnUgPT0gMykge1xyXG4gICAgICBpZiAoc3RhdHVzID09ICdjYW5jZWwnKSB7XHJcbiAgICAgIH0gZWxzZSBpZiAoc3RhdHVzID09ICdhY2NlcHQnKSB7XHJcbiAgICAgICAgdGhpcy5zZXRDb2xvcih0aGlzLnRlbXBvcmFsQ29sb3IpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLnRyaWdnZXJJbnN0YW5jZS5jbG9zZVBhbmVsKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb25DbGlja0JhY2soKSB7XHJcbiAgICBpZiAodGhpcy5tZW51ID09IDMpIHtcclxuICAgICAgdGhpcy5jb2xvciA9IHRoaXMuYmFja3VwQ29sb3I7XHJcbiAgICAgIHRoaXMuaHN2YSA9IHRoaXMuc2VydmljZS5zdHJpbmdUb0hzdmEodGhpcy5jb2xvcik7XHJcbiAgICB9XHJcbiAgICB0aGlzLmluZGV4U2VsZWNjaW9uYWRvID0gdGhpcy5maW5kSW5kZXhTZWxlY3RlZENvbG9yKHRoaXMucGFsZXR0ZSk7XHJcbiAgICB0aGlzLm1lbnUgPSAxO1xyXG4gIH1cclxuXHJcbiAgaXNPdXRzaWRlKGV2ZW50KSB7XHJcbiAgICByZXR1cm4gZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnbmd4LWNvbG9ycy1vdmVybGF5Jyk7XHJcbiAgfVxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJvcGVuZWRcIiBbc3R5bGVdPVwicG9zaXRpb25TdHJpbmdcIiAjZGlhbG9nPlxyXG4gIDxuZy1jb250YWluZXIgKm5nSWY9XCJtZW51ID09IDFcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJjb2xvcnNcIiBbQGNvbG9yc0FuaW1hdGlvbl09XCJjb2xvcnNBbmltYXRpb25FZmZlY3RcIj5cclxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgY29sb3Igb2YgcGFsZXR0ZTsgbGV0IGkgPSBpbmRleFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGUgd3JhcHBlciBjb2xvclwiPlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAoY2xpY2spPVwib25Db2xvckNsaWNrKGNvbG9yKVwiXHJcbiAgICAgICAgICAgIGNsYXNzPVwiY2lyY2xlIGNvbG9yIGNpcmNsZS1ib3JkZXJcIlxyXG4gICAgICAgICAgICBbY2xhc3MuY29sb3JudWxsXT1cIiFjb2xvclwiXHJcbiAgICAgICAgICAgIFtuZ1N0eWxlXT1cImdldEJhY2tncm91bmRDb2xvcihjb2xvcilcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiaSA9PSB0aGlzLmluZGV4U2VsZWNjaW9uYWRvXCIgY2xhc3M9XCJzZWxlY3RlZFwiPjwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgc3R5bGU9XCJiYWNrZ3JvdW5kOiByZ2IoMjQ1IDI0NSAyNDUpOyBwb3NpdGlvbjogcmVsYXRpdmVcIlxyXG4gICAgICAgIChjbGljayk9XCJhZGRDb2xvcigpXCJcclxuICAgICAgICAqbmdJZj1cIiFoaWRlQ29sb3JQaWNrZXIgJiYgdGhpcy5jb2xvclBpY2tlckNvbnRyb2xzICE9ICdvbmx5LWFscGhhJ1wiXHJcbiAgICAgICAgY2xhc3M9XCJjaXJjbGUgYnV0dG9uXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgICpuZ0lmPVwidGhpcy5pbmRleFNlbGVjY2lvbmFkbyA9PT0gdW5kZWZpbmVkXCJcclxuICAgICAgICAgIHN0eWxlPVwiXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgaGVpZ2h0OiA3cHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiA3cHg7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4wMyk7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICBcIlxyXG4gICAgICAgICAgW25nU3R5bGVdPVwiZ2V0QmFja2dyb3VuZENvbG9yKGNvbG9yKVwiXHJcbiAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgIDxzdmdcclxuICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgaGVpZ2h0PVwiMjRweFwiXHJcbiAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcclxuICAgICAgICAgIHdpZHRoPVwiMjRweFwiXHJcbiAgICAgICAgICBmaWxsPVwiIzIyMjIyMlwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHBhdGggZD1cIk0yNCAyNEgwVjBoMjR2MjR6XCIgZmlsbD1cIm5vbmVcIiBvcGFjaXR5PVwiLjg3XCIgLz5cclxuICAgICAgICAgIDxwYXRoIGQ9XCJNMTYuNTkgOC41OUwxMiAxMy4xNyA3LjQxIDguNTkgNiAxMGw2IDYgNi02LTEuNDEtMS40MXpcIiAvPlxyXG4gICAgICAgIDwvc3ZnPlxyXG4gICAgICAgIDwhLS0gPGRpdiBjbGFzcz1cImFkZFwiPlxyXG4gICAgICAgICAgPGljb25zIGljb249XCJhZGRcIj48L2ljb25zPlxyXG4gICAgICAgIDwvZGl2PiAtLT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxjb2xvci1waWNrZXJcclxuICAgICAgICAqbmdJZj1cIiFoaWRlQ29sb3JQaWNrZXIgJiYgdGhpcy5jb2xvclBpY2tlckNvbnRyb2xzID09ICdvbmx5LWFscGhhJ1wiXHJcbiAgICAgICAgW2NvbnRyb2xzXT1cImNvbG9yUGlja2VyQ29udHJvbHNcIlxyXG4gICAgICAgIFtjb2xvcl09XCJoc3ZhXCJcclxuICAgICAgICAoY29sb3JDaGFuZ2UpPVwib25DaGFuZ2VDb2xvclBpY2tlcigkZXZlbnQpXCJcclxuICAgICAgICAob25BbHBoYUNoYW5nZSk9XCJvbkFscGhhQ2hhbmdlKCRldmVudClcIlxyXG4gICAgICA+PC9jb2xvci1waWNrZXI+XHJcbiAgICA8L2Rpdj5cclxuICA8L25nLWNvbnRhaW5lcj5cclxuICA8bmctY29udGFpbmVyICpuZ0lmPVwibWVudSA9PSAyXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29sb3JzXCIgW0Bjb2xvcnNBbmltYXRpb25dPVwiY29sb3JzQW5pbWF0aW9uRWZmZWN0XCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGUgd3JhcHBlclwiPlxyXG4gICAgICAgIDxkaXYgKGNsaWNrKT1cIm9uQ2xpY2tCYWNrKClcIiBjbGFzcz1cImFkZFwiPlxyXG4gICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgd2lkdGg9XCIyNFwiXHJcbiAgICAgICAgICAgIGhlaWdodD1cIjI0XCJcclxuICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNMCAwaDI0djI0SDB6XCIgZmlsbD1cIm5vbmVcIiAvPlxyXG4gICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgIGQ9XCJNMjAgMTFINy44M2w1LjU5LTUuNTlMMTIgNGwtOCA4IDggOCAxLjQxLTEuNDFMNy44MyAxM0gyMHYtMnpcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgdmFyaWFudCBvZiB2YXJpYW50c1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGUgd3JhcHBlciBjb2xvclwiPlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBbY2xhc3MuY29sb3JudWxsXT1cIiF2YXJpYW50XCJcclxuICAgICAgICAgICAgKGNsaWNrKT1cImNoYW5nZUNvbG9yKHZhcmlhbnQpXCJcclxuICAgICAgICAgICAgY2xhc3M9XCJjaXJjbGUgY2lyY2xlLWJvcmRlclwiXHJcbiAgICAgICAgICAgIFtuZ1N0eWxlXT1cInsgYmFja2dyb3VuZDogdmFyaWFudCB9XCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGRpdiAqbmdJZj1cImlzU2VsZWN0ZWQodmFyaWFudClcIiBjbGFzcz1cInNlbGVjdGVkXCI+PC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICA8L2Rpdj5cclxuICA8L25nLWNvbnRhaW5lcj5cclxuICA8bmctY29udGFpbmVyICpuZ0lmPVwibWVudSA9PSAzXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwibmF2LXdyYXBwZXJcIj5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIChjbGljayk9XCJvbkNsaWNrQmFjaygpXCJcclxuICAgICAgICBjbGFzcz1cInJvdW5kLWJ1dHRvbiBidXR0b25cIlxyXG4gICAgICAgIHN0eWxlPVwiZmxvYXQ6IGxlZnRcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICB3aWR0aD1cIjI0XCJcclxuICAgICAgICAgIGhlaWdodD1cIjI0XCJcclxuICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxwYXRoIGQ9XCJNMCAwaDI0djI0SDB6XCIgZmlsbD1cIm5vbmVcIiAvPlxyXG4gICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgZD1cIk0yMCAxMUg3LjgzbDUuNTktNS41OUwxMiA0bC04IDggOCA4IDEuNDEtMS40MUw3LjgzIDEzSDIwdi0yelwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvc3ZnPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGJ1dHRvbiAoY2xpY2spPVwiZW1pdENsb3NlKCdjYW5jZWwnKVwiIHN0eWxlPVwiZmxvYXQ6IHJpZ2h0XCI+XHJcbiAgICAgICAge3sgY2FuY2VsTGFiZWwgfX1cclxuICAgICAgPC9idXR0b24+XHJcbiAgICAgIDxidXR0b24gKGNsaWNrKT1cImVtaXRDbG9zZSgnYWNjZXB0JylcIiBzdHlsZT1cImZsb2F0OiByaWdodFwiPlxyXG4gICAgICAgIHt7IGFjY2VwdExhYmVsIH19XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29sb3ItcGlja2VyLXdyYXBwZXJcIj5cclxuICAgICAgPCEtLSA8c3BhbiBbKGNvbG9yUGlja2VyKV09XCJjb2xvclwiPjwvc3Bhbj4gLS0+XHJcbiAgICAgIDxjb2xvci1waWNrZXJcclxuICAgICAgICBbY29udHJvbHNdPVwiY29sb3JQaWNrZXJDb250cm9sc1wiXHJcbiAgICAgICAgW2NvbG9yXT1cImhzdmFcIlxyXG4gICAgICAgIChzbGlkZXJDaGFuZ2UpPVwib25DaGFuZ2VDb2xvclBpY2tlcigkZXZlbnQpXCJcclxuICAgICAgPjwvY29sb3ItcGlja2VyPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9uZy1jb250YWluZXI+XHJcbiAgPGRpdiBjbGFzcz1cIm1hbnVhbC1pbnB1dC13cmFwcGVyXCIgKm5nSWY9XCIhaGlkZVRleHRJbnB1dFwiPlxyXG4gICAgPHAgKGNsaWNrKT1cIm5leHRGb3JtYXQoKVwiIHN0eWxlPVwiY3Vyc29yOiBwb2ludGVyO1wiPnt7IGNvbG9yRm9ybWF0c1tmb3JtYXRdIH19PC9wPlxyXG4gICAgPGRpdiBjbGFzcz1cImctaW5wdXRcIj5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgW3BsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyXCJcclxuICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgW3ZhbHVlXT1cImNvbG9yXCJcclxuICAgICAgICBbc3R5bGUuZm9udC1zaXplLnB4XT1cImNvbG9yICYmIGNvbG9yLmxlbmd0aCA+IDIzID8gOSA6IDEwXCJcclxuICAgICAgICBbc3R5bGUubGV0dGVyLXNwYWNpbmcucHhdPVwiY29sb3IgJiYgY29sb3IubGVuZ3RoID4gMTYgPyAwIDogMS41XCJcclxuICAgICAgICAoa2V5dXApPVwiY2hhbmdlQ29sb3JNYW51YWwocGFpbnRJbnB1dC52YWx1ZSlcIlxyXG4gICAgICAgIChrZXlkb3duLmVudGVyKT1cImVtaXRDbG9zZSgnYWNjZXB0JylcIlxyXG4gICAgICAgICNwYWludElucHV0XHJcbiAgICAgIC8+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcbiJdfQ==