import * as i0 from '@angular/core';
import { EventEmitter, Injectable, Directive, Input, Output, HostListener, Component, ViewEncapsulation, ViewChild, HostBinding, forwardRef, Host, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { trigger, transition, query, style, stagger, animate, keyframes } from '@angular/animations';
import * as i2 from '@angular/common';
import { CommonModule } from '@angular/common';

const formats = ['hex', 'rgba', 'hsla', 'cmyk'];

var ColorFormats;
(function (ColorFormats) {
    ColorFormats[ColorFormats["HEX"] = 0] = "HEX";
    ColorFormats[ColorFormats["RGBA"] = 1] = "RGBA";
    ColorFormats[ColorFormats["HSLA"] = 2] = "HSLA";
    ColorFormats[ColorFormats["CMYK"] = 3] = "CMYK";
})(ColorFormats || (ColorFormats = {}));

const defaultColors = [
    {
        color: "rojo", preview: "#E57373", variants: ["#FFEBEE", "#FFCDD2", "#EF9A9A", "#E57373", "#EF5350", "#F44336", "#E53935", "#D32F2F", "#C62828"]
    },
    {
        color: "rosa", preview: "#F06292", variants: ["#FCE4EC", "#F8BBD0", "#F48FB1", "#F06292", "#EC407A", "#E91E63", "#D81B60", "#C2185B", "#AD1457"]
    },
    {
        color: "purpura", preview: "#BA68C8", variants: ["#F3E5F5", "#E1BEE7", "#CE93D8", "#BA68C8", "#AB47BC", "#9C27B0", "#8E24AA", "#7B1FA2", "#6A1B9A"]
    },
    {
        color: "purpura oscuro", preview: "#9575CD", variants: ["#EDE7F6", "#D1C4E9", "#B39DDB", "#9575CD", "#7E57C2", "#673AB7", "#5E35B1", "#512DA8", "#4527A0"]
    },
    {
        color: "indigo", preview: "#7986CB", variants: ["#E8EAF6", "#C5CAE9", "#9FA8DA", "#7986CB", "#5C6BC0", "#3F51B5", "#3949AB", "#303F9F", "#283593"]
    },
    {
        color: "azul", preview: "#64B5F6", variants: ["#E3F2FD", "#BBDEFB", "#90CAF9", "#64B5F6", "#42A5F5", "#2196F3", "#1E88E5", "#1976D2", "#1565C0"]
    },
    {
        color: "celeste", preview: "#4FC3F7", variants: ["#E1F5FE", "#B3E5FC", "#81D4FA", "#4FC3F7", "#29B6F6", "#03A9F4", "#039BE5", "#0288D1", "#0277BD"]
    },
    {
        color: "cyan", preview: "#4DD0E1", variants: ["#E0F7FA", "#B2EBF2", "#80DEEA", "#4DD0E1", "#26C6DA", "#00BCD4", "#00ACC1", "#0097A7", "#00838F"]
    },
    {
        color: "color", preview: "#4DB6AC", variants: ["#E0F2F1", "#B2DFDB", "#80CBC4", "#4DB6AC", "#26A69A", "#009688", "#00897B", "#00796B", "#00695C"]
    },
    {
        color: "verde", preview: "#81C784", variants: ["#E8F5E9", "#C8E6C9", "#A5D6A7", "#81C784", "#66BB6A", "#4CAF50", "#43A047", "#388E3C", "#2E7D32"]
    },
    {
        color: "verde claro", preview: "#AED581", variants: ["#F1F8E9", "#DCEDC8", "#C5E1A5", "#AED581", "#9CCC65", "#8BC34A", "#7CB342", "#689F38", "#558B2F"]
    },
    {
        color: "lima", preview: "#DCE775", variants: ["#F9FBE7", "#F0F4C3", "#E6EE9C", "#DCE775", "#D4E157", "#CDDC39", "#C0CA33", "#AFB42B", "#9E9D24"]
    },
    {
        color: "amarillo", preview: "#FFF176", variants: ["#FFFDE7", "#FFF9C4", "#FFF59D", "#FFF176", "#FFEE58", "#FFEB3B", "#FDD835", "#FBC02D", "#F9A825"]
    },
    {
        color: "ambar", preview: "#FFD54F", variants: ["#FFF8E1", "#FFECB3", "#FFE082", "#FFD54F", "#FFCA28", "#FFC107", "#FFB300", "#FFA000", "#FF8F00"]
    },
    {
        color: "naranja", preview: "#FFB74D", variants: ["#FFF3E0", "#FFE0B2", "#FFCC80", "#FFB74D", "#FFA726", "#FF9800", "#FB8C00", "#F57C00", "#EF6C00"]
    },
    {
        color: "naranja oscuro", preview: "#FF8A65", variants: ["#FBE9E7", "#FFCCBC", "#FFAB91", "#FF8A65", "#FF7043", "#FF5722", "#F4511E", "#E64A19", "#D84315"]
    },
    {
        color: "marron", preview: "#A1887F", variants: ["#EFEBE9", "#D7CCC8", "#BCAAA4", "#A1887F", "#8D6E63", "#795548", "#6D4C41", "#5D4037", "#4E342E"]
    },
    {
        color: "escala de grises", preview: "#E0E0E0", variants: ["#FFFFFF", "#FAFAFA", "#F5F5F5", "#EEEEEE", "#E0E0E0", "#BDBDBD", "#9E9E9E", "#757575", "#616161", "#424242", "#000000"]
    },
    {
        color: "azul gris", preview: "#90A4AE", variants: ["#ECEFF1", "#CFD8DC", "#B0BEC5", "#90A4AE", "#78909C", "#607D8B", "#546E7A", "#455A64", "#37474F"]
    }
];

class Rgba {
    constructor(r, g, b, a) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
    }
    denormalize() {
        this.r = Math.round(this.r * 255);
        this.g = Math.round(this.g * 255);
        this.b = Math.round(this.b * 255);
        return this;
    }
    toString() {
        this.denormalize();
        let output = 'rgb' +
            (this.a != 1 ? 'a(' : '(') +
            this.r + ', ' +
            this.g + ', ' +
            this.b +
            (this.a != 1 ? ', ' + this.a.toPrecision(2) + ')' : ')');
        return output;
    }
}
class Hsva {
    constructor(h, s, v, a) {
        this.h = h;
        this.s = s;
        this.v = v;
        this.a = a;
        this.onChange = new EventEmitter(true);
    }
    onColorChange(value) {
        this.s = value.s / value.rgX;
        this.v = value.v / value.rgY;
    }
    onHueChange(value) {
        this.h = value.v / value.rgX;
        // this.sliderH = this.hsva.h;
    }
    onValueChange(value) {
        this.v = value.v / value.rgX;
    }
    onAlphaChange(value) {
        this.a = value.v / value.rgX;
    }
}
class Hsla {
    constructor(h, s, l, a) {
        this.h = h;
        this.s = s;
        this.l = l;
        this.a = a;
    }
    denormalize() {
        this.h = Math.round(this.h * 360);
        this.s = Math.round(this.s * 100);
        this.l = Math.round(this.l * 100);
        return this;
    }
    toString() {
        let output = 'hsl' +
            (this.a != 1 ? 'a(' : '(') +
            this.h + ', ' +
            this.s + '%, ' +
            this.l + '%' +
            (this.a != 1 ? ', ' + this.a.toPrecision(2) + ')' : ')');
        return output;
    }
}
class Cmyk {
    constructor(c, m, y, k, a = 1) {
        this.c = c;
        this.m = m;
        this.y = y;
        this.k = k;
        this.a = a;
    }
    denormalize() {
        this.c = Math.round(this.c * 100);
        this.m = Math.round(this.m * 100);
        this.y = Math.round(this.y * 100);
        this.k = Math.round(this.k * 100);
        return this;
    }
    toString() {
        this.denormalize();
        let output = 'cmyk(' +
            this.c + ', ' +
            this.m + ', ' +
            this.y + ', ' +
            this.k + ')';
        return output;
    }
}

class NgxColorsColor {
    constructor(params) {
        if (params) {
            this.preview = params.preview;
            this.variants = params.variants;
        }
    }
}

class ConverterService {
    // private active: ColorPickerComponent | null = null;
    constructor() { }
    // public setActive(active: ColorPickerComponent | null): void {
    //   this.active = active;
    // }
    toFormat(hsva, format) {
        var output = "";
        if (hsva) {
            switch (format) {
                case ColorFormats.HEX:
                    var rgba = this.hsvaToRgba(hsva);
                    rgba.denormalize();
                    var output = this.rgbaToHex(rgba, true);
                    break;
                case ColorFormats.HSLA:
                    var hsla = this.hsva2hsla(hsva);
                    hsla.denormalize();
                    var output = hsla.toString();
                    break;
                case ColorFormats.RGBA:
                    var rgba = this.hsvaToRgba(hsva);
                    var output = rgba.toString();
                    break;
                case ColorFormats.CMYK:
                    var cmyk = this.hsvaToCmyk(hsva);
                    var output = cmyk.toString();
                    break;
            }
        }
        return output;
    }
    stringToFormat(color, format) {
        var hsva = this.stringToHsva(color, true);
        return this.toFormat(hsva, format);
    }
    hsva2hsla(hsva) {
        const h = hsva.h, s = hsva.s, v = hsva.v, a = hsva.a;
        if (v === 0) {
            return new Hsla(h, 0, 0, a);
        }
        else if (s === 0 && v === 1) {
            return new Hsla(h, 1, 1, a);
        }
        else {
            const l = (v * (2 - s)) / 2;
            return new Hsla(h, (v * s) / (1 - Math.abs(2 * l - 1)), l, a);
        }
    }
    hsla2hsva(hsla) {
        const h = Math.min(hsla.h, 1), s = Math.min(hsla.s, 1);
        const l = Math.min(hsla.l, 1), a = Math.min(hsla.a, 1);
        if (l === 0) {
            return new Hsva(h, 0, 0, a);
        }
        else {
            const v = l + (s * (1 - Math.abs(2 * l - 1))) / 2;
            return new Hsva(h, (2 * (v - l)) / v, v, a);
        }
    }
    hsvaToRgba(hsva) {
        let r, g, b;
        const h = hsva.h, s = hsva.s, v = hsva.v, a = hsva.a;
        const i = Math.floor(h * 6);
        const f = h * 6 - i;
        const p = v * (1 - s);
        const q = v * (1 - f * s);
        const t = v * (1 - (1 - f) * s);
        switch (i % 6) {
            case 0:
                (r = v), (g = t), (b = p);
                break;
            case 1:
                (r = q), (g = v), (b = p);
                break;
            case 2:
                (r = p), (g = v), (b = t);
                break;
            case 3:
                (r = p), (g = q), (b = v);
                break;
            case 4:
                (r = t), (g = p), (b = v);
                break;
            case 5:
                (r = v), (g = p), (b = q);
                break;
            default:
                (r = 0), (g = 0), (b = 0);
        }
        return new Rgba(r, g, b, a);
    }
    cmykToRgb(cmyk) {
        const r = (1 - cmyk.c) * (1 - cmyk.k);
        const g = (1 - cmyk.m) * (1 - cmyk.k);
        const b = (1 - cmyk.y) * (1 - cmyk.k);
        return new Rgba(r, g, b, cmyk.a);
    }
    rgbaToCmyk(rgba) {
        const k = 1 - Math.max(rgba.r, rgba.g, rgba.b);
        if (k === 1) {
            return new Cmyk(0, 0, 0, 1, rgba.a);
        }
        else {
            const c = (1 - rgba.r - k) / (1 - k);
            const m = (1 - rgba.g - k) / (1 - k);
            const y = (1 - rgba.b - k) / (1 - k);
            return new Cmyk(c, m, y, k, rgba.a);
        }
    }
    hsvaToCmyk(hsva) {
        let rgba = this.hsvaToRgba(hsva);
        let cmyk = this.rgbaToCmyk(rgba);
        return cmyk;
    }
    rgbaToHsva(rgba) {
        let h, s;
        const r = Math.min(rgba.r, 1), g = Math.min(rgba.g, 1);
        const b = Math.min(rgba.b, 1), a = Math.min(rgba.a, 1);
        const max = Math.max(r, g, b), min = Math.min(r, g, b);
        const v = max, d = max - min;
        s = max === 0 ? 0 : d / max;
        if (max === min) {
            h = 0;
        }
        else {
            switch (max) {
                case r:
                    h = (g - b) / d + (g < b ? 6 : 0);
                    break;
                case g:
                    h = (b - r) / d + 2;
                    break;
                case b:
                    h = (r - g) / d + 4;
                    break;
                default:
                    h = 0;
            }
            h /= 6;
        }
        return new Hsva(h, s, v, a);
    }
    rgbaToHex(rgba, allowHex8) {
        /* tslint:disable:no-bitwise */
        let hex = "#" +
            ((1 << 24) | (rgba.r << 16) | (rgba.g << 8) | rgba.b)
                .toString(16)
                .substr(1);
        if (rgba.a != 1) {
            hex += ((1 << 8) | Math.round(rgba.a * 255)).toString(16).substr(1);
        }
        /* tslint:enable:no-bitwise */
        return hex;
    }
    normalizeCMYK(cmyk) {
        return new Cmyk(cmyk.c / 100, cmyk.m / 100, cmyk.y / 100, cmyk.k / 100, cmyk.a);
    }
    denormalizeCMYK(cmyk) {
        return new Cmyk(Math.floor(cmyk.c * 100), Math.floor(cmyk.m * 100), Math.floor(cmyk.y * 100), Math.floor(cmyk.k * 100), cmyk.a);
    }
    denormalizeRGBA(rgba) {
        return new Rgba(Math.round(rgba.r * 255), Math.round(rgba.g * 255), Math.round(rgba.b * 255), rgba.a);
    }
    stringToHsva(colorString = "", allowHex8 = true) {
        let hsva = null;
        colorString = (colorString || "").toLowerCase();
        const stringParsers = [
            {
                re: /(rgb)a?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*%?,\s*(\d{1,3})\s*%?(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
                parse: function (execResult) {
                    return new Rgba(parseInt(execResult[2], 10) / 255, parseInt(execResult[3], 10) / 255, parseInt(execResult[4], 10) / 255, isNaN(parseFloat(execResult[5])) ? 1 : parseFloat(execResult[5]));
                },
            },
            {
                re: /(hsl)a?\(\s*(\d{1,3})\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
                parse: function (execResult) {
                    return new Hsla(parseInt(execResult[2], 10) / 360, parseInt(execResult[3], 10) / 100, parseInt(execResult[4], 10) / 100, isNaN(parseFloat(execResult[5])) ? 1 : parseFloat(execResult[5]));
                },
            },
            {
                re: /cmyk?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*%?,\s*(\d{1,3})\s*%?(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
                parse: function (execResult) {
                    return new Cmyk(parseInt(execResult[1], 10) / 100, parseInt(execResult[2], 10) / 100, parseInt(execResult[3], 10) / 100, parseInt(execResult[4], 10) / 100);
                },
            },
        ];
        if (allowHex8) {
            stringParsers.push({
                re: /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})?$/,
                parse: function (execResult) {
                    return new Rgba(parseInt(execResult[1], 16) / 255, parseInt(execResult[2], 16) / 255, parseInt(execResult[3], 16) / 255, parseInt(execResult[4] || "FF", 16) / 255);
                },
            });
        }
        else {
            stringParsers.push({
                re: /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})$/,
                parse: function (execResult) {
                    return new Rgba(parseInt(execResult[1], 16) / 255, parseInt(execResult[2], 16) / 255, parseInt(execResult[3], 16) / 255, 1);
                },
            });
        }
        stringParsers.push({
            re: /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])$/,
            parse: function (execResult) {
                return new Rgba(parseInt(execResult[1] + execResult[1], 16) / 255, parseInt(execResult[2] + execResult[2], 16) / 255, parseInt(execResult[3] + execResult[3], 16) / 255, 1);
            },
        });
        for (const key in stringParsers) {
            if (stringParsers.hasOwnProperty(key)) {
                const parser = stringParsers[key];
                const match = parser.re.exec(colorString), color = match && parser.parse(match);
                if (color) {
                    if (color instanceof Rgba) {
                        hsva = this.rgbaToHsva(color);
                    }
                    else if (color instanceof Hsla) {
                        hsva = this.hsla2hsva(color);
                    }
                    else if (color instanceof Cmyk) {
                        let rgb = this.cmykToRgb(color);
                        hsva = this.rgbaToHsva(rgb);
                    }
                    return hsva;
                }
            }
        }
        return hsva;
    }
    outputFormat(hsva) {
        return this.hsvaToRgba(hsva).toString();
    }
    getFormatByString(color) {
        if (color) {
            color = color.toLowerCase();
            let regexHex = /(#([\da-f]{3}(?:[\da-f]{3})?(?:[\da-f]{2})?))/;
            let regexRGBA = /(rgba\((\d{1,3},\s?){3}(1|0?\.\d+)\)|rgb\(\d{1,3}(,\s?\d{1,3}){2}\))/;
            let regexHSLA = /(hsla\((\d{1,3}%?,\s?){3}(1|0?\.\d+)\)|hsl\(\d{1,3}%?(,\s?\d{1,3}%?){2}\))/;
            let regexCMYK = /(cmyk\(\d{1,3}(,\s?\d{1,3}){3}\))/;
            if (regexHex.test(color)) {
                return "hex";
            }
            else if (regexRGBA.test(color)) {
                return "rgba";
            }
            else if (regexHSLA.test(color)) {
                return "hsla";
            }
            else if (regexCMYK.test(color)) {
                return "cmyk";
            }
        }
        return "hex";
    }
}
ConverterService.ɵfac = function ConverterService_Factory(t) { return new (t || ConverterService)(); };
ConverterService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ConverterService, factory: ConverterService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ConverterService, [{
        type: Injectable
    }], function () { return []; }, null); })();

class SliderPosition {
    constructor(h, s, v, a) {
        this.h = h;
        this.s = s;
        this.v = v;
        this.a = a;
    }
}
class SliderDimension {
    constructor(h, s, v, a) {
        this.h = h;
        this.s = s;
        this.v = v;
        this.a = a;
    }
}

class SliderDirective {
    mouseDown(event) {
        this.start(event);
    }
    touchStart(event) {
        this.start(event);
    }
    constructor(elRef) {
        this.elRef = elRef;
        this.dragEnd = new EventEmitter();
        this.dragStart = new EventEmitter();
        this.newValue = new EventEmitter();
        this.listenerMove = (event) => this.move(event);
        this.listenerStop = () => this.stop();
    }
    move(event) {
        event.preventDefault();
        this.setCursor(event);
    }
    start(event) {
        this.setCursor(event);
        event.stopPropagation();
        document.addEventListener('mouseup', this.listenerStop);
        document.addEventListener('touchend', this.listenerStop);
        document.addEventListener('mousemove', this.listenerMove);
        document.addEventListener('touchmove', this.listenerMove);
        this.dragStart.emit();
    }
    stop() {
        document.removeEventListener('mouseup', this.listenerStop);
        document.removeEventListener('touchend', this.listenerStop);
        document.removeEventListener('mousemove', this.listenerMove);
        document.removeEventListener('touchmove', this.listenerMove);
        this.dragEnd.emit();
    }
    getX(event) {
        const position = this.elRef.nativeElement.getBoundingClientRect();
        const pageX = (event.pageX !== undefined) ? event.pageX : event.touches[0].pageX;
        return pageX - position.left - window.pageXOffset;
    }
    getY(event) {
        const position = this.elRef.nativeElement.getBoundingClientRect();
        const pageY = (event.pageY !== undefined) ? event.pageY : event.touches[0].pageY;
        return pageY - position.top - window.pageYOffset;
    }
    setCursor(event) {
        const width = this.elRef.nativeElement.offsetWidth;
        const height = this.elRef.nativeElement.offsetHeight;
        const x = Math.max(0, Math.min(this.getX(event), width));
        const y = Math.max(0, Math.min(this.getY(event), height));
        if (this.rgX !== undefined && this.rgY !== undefined) {
            this.newValue.emit({ s: x / width, v: (1 - y / height), rgX: this.rgX, rgY: this.rgY });
        }
        else if (this.rgX === undefined && this.rgY !== undefined) {
            this.newValue.emit({ v: y / height, rgY: this.rgY });
        }
        else if (this.rgX !== undefined && this.rgY === undefined) {
            this.newValue.emit({ v: x / width, rgX: this.rgX });
        }
    }
}
SliderDirective.ɵfac = function SliderDirective_Factory(t) { return new (t || SliderDirective)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
SliderDirective.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: SliderDirective, selectors: [["", "slider", ""]], hostBindings: function SliderDirective_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("mousedown", function SliderDirective_mousedown_HostBindingHandler($event) { return ctx.mouseDown($event); })("touchstart", function SliderDirective_touchstart_HostBindingHandler($event) { return ctx.touchStart($event); });
    } }, inputs: { rgX: "rgX", rgY: "rgY", slider: "slider" }, outputs: { dragEnd: "dragEnd", dragStart: "dragStart", newValue: "newValue" } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SliderDirective, [{
        type: Directive,
        args: [{
                selector: '[slider]'
            }]
    }], function () { return [{ type: i0.ElementRef }]; }, { rgX: [{
            type: Input
        }], rgY: [{
            type: Input
        }], slider: [{
            type: Input
        }], dragEnd: [{
            type: Output
        }], dragStart: [{
            type: Output
        }], newValue: [{
            type: Output
        }], mouseDown: [{
            type: HostListener,
            args: ['mousedown', ['$event']]
        }], touchStart: [{
            type: HostListener,
            args: ['touchstart', ['$event']]
        }] }); })();

const _c0$2 = ["hueSlider"];
const _c1$1 = ["alphaSlider"];
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
class ColorPickerComponent {
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
ColorPickerComponent.ɵfac = function ColorPickerComponent_Factory(t) { return new (t || ColorPickerComponent)(i0.ɵɵdirectiveInject(ConverterService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
ColorPickerComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ColorPickerComponent, selectors: [["color-picker"]], viewQuery: function ColorPickerComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0$2, 5);
        i0.ɵɵviewQuery(_c1$1, 5);
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
    } }, dependencies: [i2.NgIf, i2.NgStyle, SliderDirective], styles: [".color-picker{position:relative;z-index:1000;width:220px;height:auto;cursor:default;-webkit-touch-callout:none;-webkit-user-select:none;user-select:none;touch-action:none}.color-picker *{box-sizing:border-box;margin:0;font-size:11px}.color-picker input{width:0;height:26px;min-width:0;font-size:13px;text-align:center;color:#000}.color-picker input:invalid,.color-picker input:-moz-ui-invalid,.color-picker input:-moz-submit-invalid{box-shadow:none}.color-picker input::-webkit-inner-spin-button,.color-picker input::-webkit-outer-spin-button{margin:0;-webkit-appearance:none}.color-picker .sliderCursor{width:10px;border-radius:5px;position:absolute;margin-top:-3px;border:1px solid black}.color-picker .sliderCursor>div{border:2px solid white;border-radius:5px}.color-picker .sliderCursor>div>div{border-radius:5px;border:1px solid black;height:24px}.color-picker .cursor{position:absolute;width:21px;border:3px solid black;border-radius:100%;margin:-2px 0 0 -2px}.color-picker .cursor>div{height:15px;border:3px solid white;border-radius:100%}.color-picker .box{display:flex;padding:4px 8px}.color-picker .left{position:relative;padding:16px 8px}.color-picker .right{flex:1 1 auto;display:flex;flex-direction:column;gap:10px;padding:12px 8px}.color-picker .hue-alpha{display:flex;align-items:center;margin-bottom:3px}.color-picker .hue{direction:ltr;width:100%;height:24px;border:none;border-radius:5px;position:relative;cursor:pointer;background-size:100% 100%;background:linear-gradient(to right,red 0%,#ff0 17%,lime 33%,cyan 50%,blue 66%,#f0f 83%,red 100%)}.color-picker .alpha{direction:ltr;position:relative;width:100%;height:24px;border:none;border-radius:5px;cursor:pointer;background-image:linear-gradient(45deg,#ccc 25%,transparent 25%),linear-gradient(-45deg,#ccc 25%,transparent 25%),linear-gradient(45deg,transparent 75%,#ccc 75%),linear-gradient(-45deg,transparent 75%,#ccc 75%);background-size:16px 16px;background-position:0 0,0 8px,8px -8px,-8px 0px}.color-picker .alpha-gradient{width:100%;height:100%;border-radius:5px;position:absolute}.color-picker .selected-color{position:absolute;top:16px;left:8px;width:40px;height:40px;box-shadow:0 1px 1px 1px #00000026;border-radius:50%}.color-picker .selected-color-background{width:40px;height:40px;border-radius:50%;background-image:linear-gradient(45deg,#ccc 25%,transparent 25%),linear-gradient(-45deg,#ccc 25%,transparent 25%),linear-gradient(45deg,transparent 75%,#ccc 75%),linear-gradient(-45deg,transparent 75%,#ccc 75%);background-size:16px 16px;background-position:0 0,0 8px,8px -8px,-8px 0px}.color-picker .saturation-lightness{direction:ltr;cursor:crosshair;width:100%;position:relative;height:130px;border:none;touch-action:manipulation;background-image:linear-gradient(to top,#000 0%,transparent 100%),linear-gradient(to right,#fff 0%,transparent 100%)}\n"], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ColorPickerComponent, [{
        type: Component,
        args: [{ selector: "color-picker", encapsulation: ViewEncapsulation.None, template: "<div #dialogPopup class=\"color-picker\" (click)=\"$event.stopPropagation()\">\r\n  <div\r\n    class=\"saturation-lightness\"\r\n    *ngIf=\"this.controls != 'only-alpha'\"\r\n    [slider]\r\n    [rgX]=\"1\"\r\n    [rgY]=\"1\"\r\n    [style.background-color]=\"hueSliderColor\"\r\n    (newValue)=\"onSliderChange('saturation-lightness', $event)\"\r\n  >\r\n    <div class=\"cursor\" [style.top.px]=\"slider?.v\" [style.left.px]=\"slider?.s\">\r\n      <div></div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"hue-alpha box\">\r\n    <div class=\"left\" *ngIf=\"this.controls != 'only-alpha'\">\r\n      <div class=\"selected-color-background\"></div>\r\n      <div\r\n        class=\"selected-color\"\r\n        [style.background-color]=\"selectedColor\"\r\n      ></div>\r\n    </div>\r\n\r\n    <div class=\"right\">\r\n      <div\r\n        *ngIf=\"this.controls != 'only-alpha'\"\r\n        #hueSlider\r\n        class=\"hue\"\r\n        [slider]\r\n        [rgX]=\"1\"\r\n        (newValue)=\"onSliderChange('hue', $event)\"\r\n      >\r\n        <div class=\"sliderCursor\" [style.left.px]=\"slider?.h\">\r\n          <div><div></div></div>\r\n        </div>\r\n      </div>\r\n\r\n      <div\r\n        *ngIf=\"this.controls != 'no-alpha'\"\r\n        #alphaSlider\r\n        class=\"alpha\"\r\n        [slider]\r\n        [rgX]=\"1\"\r\n        (newValue)=\"onSliderChange('alpha', $event)\"\r\n      >\r\n        <div\r\n          class=\"alpha-gradient\"\r\n          [ngStyle]=\"getBackgroundColor(alphaSliderColor)\"\r\n        ></div>\r\n        <div class=\"sliderCursor\" [style.left.px]=\"slider?.a\">\r\n          <div><div></div></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n", styles: [".color-picker{position:relative;z-index:1000;width:220px;height:auto;cursor:default;-webkit-touch-callout:none;-webkit-user-select:none;user-select:none;touch-action:none}.color-picker *{box-sizing:border-box;margin:0;font-size:11px}.color-picker input{width:0;height:26px;min-width:0;font-size:13px;text-align:center;color:#000}.color-picker input:invalid,.color-picker input:-moz-ui-invalid,.color-picker input:-moz-submit-invalid{box-shadow:none}.color-picker input::-webkit-inner-spin-button,.color-picker input::-webkit-outer-spin-button{margin:0;-webkit-appearance:none}.color-picker .sliderCursor{width:10px;border-radius:5px;position:absolute;margin-top:-3px;border:1px solid black}.color-picker .sliderCursor>div{border:2px solid white;border-radius:5px}.color-picker .sliderCursor>div>div{border-radius:5px;border:1px solid black;height:24px}.color-picker .cursor{position:absolute;width:21px;border:3px solid black;border-radius:100%;margin:-2px 0 0 -2px}.color-picker .cursor>div{height:15px;border:3px solid white;border-radius:100%}.color-picker .box{display:flex;padding:4px 8px}.color-picker .left{position:relative;padding:16px 8px}.color-picker .right{flex:1 1 auto;display:flex;flex-direction:column;gap:10px;padding:12px 8px}.color-picker .hue-alpha{display:flex;align-items:center;margin-bottom:3px}.color-picker .hue{direction:ltr;width:100%;height:24px;border:none;border-radius:5px;position:relative;cursor:pointer;background-size:100% 100%;background:linear-gradient(to right,red 0%,#ff0 17%,lime 33%,cyan 50%,blue 66%,#f0f 83%,red 100%)}.color-picker .alpha{direction:ltr;position:relative;width:100%;height:24px;border:none;border-radius:5px;cursor:pointer;background-image:linear-gradient(45deg,#ccc 25%,transparent 25%),linear-gradient(-45deg,#ccc 25%,transparent 25%),linear-gradient(45deg,transparent 75%,#ccc 75%),linear-gradient(-45deg,transparent 75%,#ccc 75%);background-size:16px 16px;background-position:0 0,0 8px,8px -8px,-8px 0px}.color-picker .alpha-gradient{width:100%;height:100%;border-radius:5px;position:absolute}.color-picker .selected-color{position:absolute;top:16px;left:8px;width:40px;height:40px;box-shadow:0 1px 1px 1px #00000026;border-radius:50%}.color-picker .selected-color-background{width:40px;height:40px;border-radius:50%;background-image:linear-gradient(45deg,#ccc 25%,transparent 25%),linear-gradient(-45deg,#ccc 25%,transparent 25%),linear-gradient(45deg,transparent 75%,#ccc 75%),linear-gradient(-45deg,transparent 75%,#ccc 75%);background-size:16px 16px;background-position:0 0,0 8px,8px -8px,-8px 0px}.color-picker .saturation-lightness{direction:ltr;cursor:crosshair;width:100%;position:relative;height:130px;border:none;touch-action:manipulation;background-image:linear-gradient(to top,#000 0%,transparent 100%),linear-gradient(to right,#fff 0%,transparent 100%)}\n"] }]
    }], function () { return [{ type: ConverterService }, { type: i0.ChangeDetectorRef }]; }, { color: [{
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

const _c0$1 = ["dialog"];
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
class PanelComponent {
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
PanelComponent.ɵfac = function PanelComponent_Factory(t) { return new (t || PanelComponent)(i0.ɵɵdirectiveInject(ConverterService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
PanelComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PanelComponent, selectors: [["ngx-colors-panel"]], viewQuery: function PanelComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0$1, 5);
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
    } }, dependencies: [i2.NgForOf, i2.NgIf, i2.NgStyle, ColorPickerComponent], styles: ["[_nghost-%COMP%]{position:fixed;z-index:2001}.hidden[_ngcontent-%COMP%]{display:none}.button[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}.top[_ngcontent-%COMP%]{transform:translateY(-100%)}.opened[_ngcontent-%COMP%]{box-sizing:border-box;box-shadow:0 2px 4px -1px #0003,0 4px 5px #00000024,0 1px 10px #0000001f;background:#fff;width:250px;border-radius:5px;position:absolute}.opened[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border:none;font-family:inherit;font-size:12px;background-color:unset;-webkit-user-select:none;user-select:none;padding:10px;letter-spacing:1px;color:#222;border-radius:3px;line-height:20px}.opened[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, .opened[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]:hover{background-color:#0000000d;transition:opacity .2s cubic-bezier(.35,0,.25,1),background-color .2s cubic-bezier(.35,0,.25,1);transition-property:opacity,background-color;transition-duration:.2s,.2s;transition-timing-function:cubic-bezier(.35,0,.25,1),cubic-bezier(.35,0,.25,1);transition-delay:0s,0s}.opened[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus{outline:none}.opened[_ngcontent-%COMP%]   .colors[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;align-items:center;margin:15px}.opened[_ngcontent-%COMP%]   .colors[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]{height:34px;width:34px;box-sizing:border-box;border-radius:100%;cursor:pointer}.opened[_ngcontent-%COMP%]   .colors[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]   .add[_ngcontent-%COMP%]{font-size:20px;line-height:45px;text-align:center}.opened[_ngcontent-%COMP%]   .colors[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]   .selected[_ngcontent-%COMP%]{border:2px solid white;border-radius:100%;height:28px;width:28px;box-sizing:border-box;margin:2px}.opened[_ngcontent-%COMP%]   .colors[_ngcontent-%COMP%]   .circle.colornull[_ngcontent-%COMP%]{background:linear-gradient(135deg,rgba(236,236,236,.7) 0%,rgba(236,236,236,.7) 45%,#de0f00 50%,rgba(236,236,236,.7) 55%,rgba(236,236,236,.7) 100%)}.opened[_ngcontent-%COMP%]   .colors[_ngcontent-%COMP%]   .circle.wrapper[_ngcontent-%COMP%]{margin:0 5px 5px;flex:34px 0 0}.opened[_ngcontent-%COMP%]   .colors[_ngcontent-%COMP%]   .circle.button[_ngcontent-%COMP%]{margin:0 5px 5px}.opened[_ngcontent-%COMP%]   .colors[_ngcontent-%COMP%]   .circle.wrapper.color[_ngcontent-%COMP%]{background-image:linear-gradient(45deg,#ccc 25%,transparent 25%),linear-gradient(-45deg,#ccc 25%,transparent 25%),linear-gradient(45deg,transparent 75%,#ccc 75%),linear-gradient(-45deg,transparent 75%,#ccc 75%);background-size:16px 16px;background-position:0 0,0 8px,8px -8px,-8px 0px}.opened[_ngcontent-%COMP%]   .colors[_ngcontent-%COMP%]   .circle-border[_ngcontent-%COMP%]{border:1px solid rgba(0,0,0,.03)}.opened[_ngcontent-%COMP%]   .color-picker-wrapper[_ngcontent-%COMP%]{margin:5px 15px}.opened[_ngcontent-%COMP%]   .nav-wrapper[_ngcontent-%COMP%]{overflow:hidden;margin:5px}.opened[_ngcontent-%COMP%]   .nav-wrapper[_ngcontent-%COMP%]   .round-button[_ngcontent-%COMP%]{padding:5px 0;width:40px;height:40px;box-sizing:border-box;border-radius:100%;text-align:center;line-height:45px}.opened[_ngcontent-%COMP%]   .manual-input-wrapper[_ngcontent-%COMP%]{display:flex;margin:15px;font-family:sans-serif}.opened[_ngcontent-%COMP%]   .manual-input-wrapper[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;text-align:center;font-size:10px;letter-spacing:1.5px;text-transform:uppercase;line-height:48px;width:145px;-webkit-touch-callout:none;-webkit-user-select:none;user-select:none}.opened[_ngcontent-%COMP%]   .manual-input-wrapper[_ngcontent-%COMP%]   .g-input[_ngcontent-%COMP%]{border:1px solid #e8ebed;height:45px;border-radius:5px;width:100%}.opened[_ngcontent-%COMP%]   .manual-input-wrapper[_ngcontent-%COMP%]   .g-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{font-size:9px;border:none;width:100%;text-transform:uppercase;outline:none;text-align:center;letter-spacing:1px;color:#595b65;height:100%;border-radius:5px;margin:0;padding:0}"], data: { animation: [
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
    }], function () { return [{ type: ConverterService }, { type: i0.ChangeDetectorRef }]; }, { click: [{
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

const OVERLAY_STYLES = {
    position: 'fixed',
    height: '100%',
    width: '100%',
    'z-index': 2000,
    top: 0,
    left: 0,
};

class PanelFactoryService {
    constructor(resolver, applicationRef, injector) {
        this.resolver = resolver;
        this.applicationRef = applicationRef;
        this.injector = injector;
    }
    createPanel(attachTo, overlayClassName) {
        if (this.componentRef != undefined) {
            this.removePanel();
        }
        const factory = this.resolver.resolveComponentFactory(PanelComponent);
        this.componentRef = factory.create(this.injector);
        this.applicationRef.attachView(this.componentRef.hostView);
        const domElem = this.componentRef.hostView
            .rootNodes[0];
        this.overlay = document.createElement("div");
        this.overlay.id = "ngx-colors-overlay";
        this.overlay.classList.add("ngx-colors-overlay");
        this.overlay.classList.add(overlayClassName);
        Object.keys(OVERLAY_STYLES).forEach((attr) => {
            this.overlay.style[attr] = OVERLAY_STYLES[attr];
        });
        if (attachTo) {
            document.getElementById(attachTo).appendChild(this.overlay);
        }
        else {
            document.body.appendChild(this.overlay);
        }
        this.overlay.appendChild(domElem);
        return this.componentRef;
    }
    removePanel() {
        this.applicationRef.detachView(this.componentRef.hostView);
        this.componentRef.destroy();
        this.overlay.remove();
    }
}
PanelFactoryService.ɵfac = function PanelFactoryService_Factory(t) { return new (t || PanelFactoryService)(i0.ɵɵinject(i0.ComponentFactoryResolver), i0.ɵɵinject(i0.ApplicationRef), i0.ɵɵinject(i0.Injector)); };
PanelFactoryService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: PanelFactoryService, factory: PanelFactoryService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PanelFactoryService, [{
        type: Injectable
    }], function () { return [{ type: i0.ComponentFactoryResolver }, { type: i0.ApplicationRef }, { type: i0.Injector }]; }, null); })();

class NgxColorsTriggerDirective {
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
NgxColorsTriggerDirective.ɵfac = function NgxColorsTriggerDirective_Factory(t) { return new (t || NgxColorsTriggerDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(PanelFactoryService), i0.ɵɵdirectiveInject(ConverterService)); };
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
    }], function () { return [{ type: i0.ElementRef }, { type: PanelFactoryService }, { type: ConverterService }]; }, { colorsAnimation: [{
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

const _c0 = function (a0) { return { background: a0 }; };
class NgxColorsComponent {
    constructor(cdRef, triggerDirective) {
        this.cdRef = cdRef;
        this.triggerDirective = triggerDirective;
        this.triggerDirectiveColorChangeSubscription = null;
        //IO color
        this.color = this.triggerDirective.color;
    }
    ngOnInit() {
        this.triggerDirectiveColorChangeSubscription =
            this.triggerDirective.change.subscribe((color) => {
                this.color = color;
                this.cdRef.markForCheck();
            });
    }
    ngOnDestroy() {
        if (this.triggerDirectiveColorChangeSubscription) {
            this.triggerDirectiveColorChangeSubscription.unsubscribe();
        }
    }
}
NgxColorsComponent.ɵfac = function NgxColorsComponent_Factory(t) { return new (t || NgxColorsComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(NgxColorsTriggerDirective, 1)); };
NgxColorsComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: NgxColorsComponent, selectors: [["ngx-colors"]], decls: 4, vars: 5, consts: [[1, "app-color-picker"], [1, "preview"], [1, "preview-background"], [1, "circle", 3, "ngStyle"]], template: function NgxColorsComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
        i0.ɵɵelement(3, "div", 3);
        i0.ɵɵelementEnd()()();
    } if (rf & 2) {
        i0.ɵɵadvance(3);
        i0.ɵɵclassProp("colornull", !ctx.color);
        i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(3, _c0, ctx.color));
    } }, dependencies: [i2.NgStyle], styles: ["[_nghost-%COMP%]   .app-color-picker[_ngcontent-%COMP%]{line-height:1px;font-family:sans-serif}[_nghost-%COMP%]   .app-color-picker[_ngcontent-%COMP%]   .preview[_ngcontent-%COMP%]{margin:2px;display:inline-block;box-sizing:border-box;border-radius:100%;background:white;cursor:pointer;padding:3px;box-shadow:0 1px 1px #0003,0 1px 1px 1px #00000024,0 1px 1px 1px #0000001f}[_nghost-%COMP%]   .app-color-picker[_ngcontent-%COMP%]   .preview[_ngcontent-%COMP%]   .preview-background[_ngcontent-%COMP%]{background-image:linear-gradient(45deg,#ccc 25%,transparent 25%),linear-gradient(-45deg,#ccc 25%,transparent 25%),linear-gradient(45deg,transparent 75%,#ccc 75%),linear-gradient(-45deg,transparent 75%,#ccc 75%);background-size:16px 16px;background-position:0 0,0 8px,8px -8px,-8px 0px;border-radius:100%}[_nghost-%COMP%]   .app-color-picker[_ngcontent-%COMP%]   .preview[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]{height:20px;width:20px;box-sizing:border-box;border-radius:100%;cursor:pointer}[_nghost-%COMP%]   .app-color-picker[_ngcontent-%COMP%]   .preview[_ngcontent-%COMP%]   .circle.colornull[_ngcontent-%COMP%]{background:linear-gradient(135deg,rgba(236,236,236,.7) 0%,rgba(236,236,236,.7) 45%,#de0f00 50%,rgba(236,236,236,.7) 55%,rgba(236,236,236,.7) 100%)}[_nghost-%COMP%]   .app-color-picker[_ngcontent-%COMP%]   .preview[_ngcontent-%COMP%]   .noselected[_ngcontent-%COMP%]{background-image:linear-gradient(45deg,#ccc 25%,transparent 25%),linear-gradient(-45deg,#ccc 25%,transparent 25%),linear-gradient(45deg,transparent 75%,#ccc 75%),linear-gradient(-45deg,transparent 75%,#ccc 75%);background-size:16px 16px;background-position:0 0,0 8px,8px -8px,-8px 0px}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NgxColorsComponent, [{
        type: Component,
        args: [{ selector: 'ngx-colors', template: "<div class=\"app-color-picker\">\r\n  <div class=\"preview\">\r\n    <div class=\"preview-background\">\r\n      <div\r\n        class=\"circle\"\r\n        [class.colornull]=\"!color\"\r\n        [ngStyle]=\"{ background: color }\"\r\n      ></div>\r\n    </div>\r\n  </div>\r\n</div>\r\n", styles: [":host .app-color-picker{line-height:1px;font-family:sans-serif}:host .app-color-picker .preview{margin:2px;display:inline-block;box-sizing:border-box;border-radius:100%;background:white;cursor:pointer;padding:3px;box-shadow:0 1px 1px #0003,0 1px 1px 1px #00000024,0 1px 1px 1px #0000001f}:host .app-color-picker .preview .preview-background{background-image:linear-gradient(45deg,#ccc 25%,transparent 25%),linear-gradient(-45deg,#ccc 25%,transparent 25%),linear-gradient(45deg,transparent 75%,#ccc 75%),linear-gradient(-45deg,transparent 75%,#ccc 75%);background-size:16px 16px;background-position:0 0,0 8px,8px -8px,-8px 0px;border-radius:100%}:host .app-color-picker .preview .circle{height:20px;width:20px;box-sizing:border-box;border-radius:100%;cursor:pointer}:host .app-color-picker .preview .circle.colornull{background:linear-gradient(135deg,rgba(236,236,236,.7) 0%,rgba(236,236,236,.7) 45%,#de0f00 50%,rgba(236,236,236,.7) 55%,rgba(236,236,236,.7) 100%)}:host .app-color-picker .preview .noselected{background-image:linear-gradient(45deg,#ccc 25%,transparent 25%),linear-gradient(-45deg,#ccc 25%,transparent 25%),linear-gradient(45deg,transparent 75%,#ccc 75%),linear-gradient(-45deg,transparent 75%,#ccc 75%);background-size:16px 16px;background-position:0 0,0 8px,8px -8px,-8px 0px}\n"] }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: NgxColorsTriggerDirective, decorators: [{
                type: Host
            }] }]; }, null); })();

class NgxColorsModule {
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

function validColorValidator() {
    return (control) => {
        const value = control.value;
        if (!value) {
            return null;
        }
        const rgbTest = /^\s*rgba?\(\s*(1?\d{1,2}|2[0-4]\d|25[0-5])\s*,\s*(1?\d{1,2}|2[0-4]\d|25[0-5])\s*,\s*(1?\d{1,2}|2[0-4]\d|25[0-5])\s*(,\s*(0\.\d{1,2}|1))?\s*\)\s*$/i;
        const hslTest = /^\s*hsla?\(\s*([0-2]?\d{1,2}|3[0-5]\d|360)\s*,\s*(0|[1-9]{1,2}|100)\%\s*,\s*(0|[1-9]{1,2}|100)\%\s*(,\s*(0\.\d{1,2}|1))?\s*\)\s*$/i;
        const hexTest = /^#([A-Fa-f0-9]{8}|[A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
        const colorValid = rgbTest.test(value) || hslTest.test(value) || hexTest.test(value);
        return !colorValid ? { invalidColor: true } : null;
    };
}

/*
 * Public API Surface of ngx-colors
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NgxColorsColor, NgxColorsComponent, NgxColorsModule, NgxColorsTriggerDirective, validColorValidator };
//# sourceMappingURL=ngx-colors.mjs.map
