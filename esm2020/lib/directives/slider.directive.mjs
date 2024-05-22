import { Input, Directive, Output, EventEmitter, HostListener } from '@angular/core';
import * as i0 from "@angular/core";
export class SliderDirective {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1jb2xvcnMvc3JjL2xpYi9kaXJlY3RpdmVzL3NsaWRlci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQWMsTUFBTSxlQUFlLENBQUM7O0FBSy9GLE1BQU0sT0FBTyxlQUFlO0lBY2EsU0FBUyxDQUFDLEtBQVU7UUFDekQsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNwQixDQUFDO0lBRXVDLFVBQVUsQ0FBQyxLQUFVO1FBQzNELElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDcEIsQ0FBQztJQUVELFlBQW9CLEtBQWlCO1FBQWpCLFVBQUssR0FBTCxLQUFLLENBQVk7UUFiM0IsWUFBTyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDN0IsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFFL0IsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFXM0MsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLEtBQVUsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUVyRCxJQUFJLENBQUMsWUFBWSxHQUFHLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN4QyxDQUFDO0lBRU8sSUFBSSxDQUFDLEtBQVU7UUFDckIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBRXZCLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDeEIsQ0FBQztJQUVPLEtBQUssQ0FBQyxLQUFVO1FBQ3RCLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFdEIs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dmVudEVtaXR0ZXIsIEhvc3RMaXN0ZW5lciwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgICBzZWxlY3RvcjogJ1tzbGlkZXJdJ1xyXG4gIH0pXHJcbiAgZXhwb3J0IGNsYXNzIFNsaWRlckRpcmVjdGl2ZSB7XHJcbiAgICBwcml2YXRlIGxpc3RlbmVyTW92ZTogYW55O1xyXG4gICAgcHJpdmF0ZSBsaXN0ZW5lclN0b3A6IGFueTtcclxuICBcclxuICAgIEBJbnB1dCgpIHJnWDogbnVtYmVyO1xyXG4gICAgQElucHV0KCkgcmdZOiBudW1iZXI7XHJcbiAgXHJcbiAgICBASW5wdXQoKSBzbGlkZXI6IHN0cmluZztcclxuICBcclxuICAgIEBPdXRwdXQoKSBkcmFnRW5kID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgQE91dHB1dCgpIGRyYWdTdGFydCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBcclxuICAgIEBPdXRwdXQoKSBuZXdWYWx1ZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIFxyXG4gICAgQEhvc3RMaXN0ZW5lcignbW91c2Vkb3duJywgWyckZXZlbnQnXSkgbW91c2VEb3duKGV2ZW50OiBhbnkpOiB2b2lkIHtcclxuICAgICAgdGhpcy5zdGFydChldmVudCk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBASG9zdExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgWyckZXZlbnQnXSkgdG91Y2hTdGFydChldmVudDogYW55KTogdm9pZCB7XHJcbiAgICAgIHRoaXMuc3RhcnQoZXZlbnQpO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBlbFJlZjogRWxlbWVudFJlZikge1xyXG4gICAgICB0aGlzLmxpc3RlbmVyTW92ZSA9IChldmVudDogYW55KSA9PiB0aGlzLm1vdmUoZXZlbnQpO1xyXG4gIFxyXG4gICAgICB0aGlzLmxpc3RlbmVyU3RvcCA9ICgpID0+IHRoaXMuc3RvcCgpO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgcHJpdmF0ZSBtb3ZlKGV2ZW50OiBhbnkpOiB2b2lkIHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICBcclxuICAgICAgdGhpcy5zZXRDdXJzb3IoZXZlbnQpO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgcHJpdmF0ZSBzdGFydChldmVudDogYW55KTogdm9pZCB7XHJcbiAgICAgIHRoaXMuc2V0Q3Vyc29yKGV2ZW50KTtcclxuICBcclxuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgXHJcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLmxpc3RlbmVyU3RvcCk7XHJcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdGhpcy5saXN0ZW5lclN0b3ApO1xyXG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLmxpc3RlbmVyTW92ZSk7XHJcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMubGlzdGVuZXJNb3ZlKTtcclxuICBcclxuICAgICAgdGhpcy5kcmFnU3RhcnQuZW1pdCgpO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgcHJpdmF0ZSBzdG9wKCk6IHZvaWQge1xyXG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5saXN0ZW5lclN0b3ApO1xyXG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRoaXMubGlzdGVuZXJTdG9wKTtcclxuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5saXN0ZW5lck1vdmUpO1xyXG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0aGlzLmxpc3RlbmVyTW92ZSk7XHJcbiAgXHJcbiAgICAgIHRoaXMuZHJhZ0VuZC5lbWl0KCk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBwcml2YXRlIGdldFgoZXZlbnQ6IGFueSk6IG51bWJlciB7XHJcbiAgICAgIGNvbnN0IHBvc2l0aW9uID0gdGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gIFxyXG4gICAgICBjb25zdCBwYWdlWCA9IChldmVudC5wYWdlWCAhPT0gdW5kZWZpbmVkKSA/IGV2ZW50LnBhZ2VYIDogZXZlbnQudG91Y2hlc1swXS5wYWdlWDtcclxuICBcclxuICAgICAgcmV0dXJuIHBhZ2VYIC0gcG9zaXRpb24ubGVmdCAtIHdpbmRvdy5wYWdlWE9mZnNldDtcclxuICAgIH1cclxuICBcclxuICAgIHByaXZhdGUgZ2V0WShldmVudDogYW55KTogbnVtYmVyIHtcclxuICAgICAgY29uc3QgcG9zaXRpb24gPSB0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgXHJcbiAgICAgIGNvbnN0IHBhZ2VZID0gKGV2ZW50LnBhZ2VZICE9PSB1bmRlZmluZWQpID8gZXZlbnQucGFnZVkgOiBldmVudC50b3VjaGVzWzBdLnBhZ2VZO1xyXG4gIFxyXG4gICAgICByZXR1cm4gcGFnZVkgLSBwb3NpdGlvbi50b3AgLSB3aW5kb3cucGFnZVlPZmZzZXQ7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBwcml2YXRlIHNldEN1cnNvcihldmVudDogYW55KTogdm9pZCB7XHJcbiAgICAgIGNvbnN0IHdpZHRoID0gdGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoO1xyXG4gICAgICBjb25zdCBoZWlnaHQgPSB0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xyXG4gIFxyXG4gICAgICBjb25zdCB4ID0gTWF0aC5tYXgoMCwgTWF0aC5taW4odGhpcy5nZXRYKGV2ZW50KSwgd2lkdGgpKTtcclxuICAgICAgY29uc3QgeSA9IE1hdGgubWF4KDAsIE1hdGgubWluKHRoaXMuZ2V0WShldmVudCksIGhlaWdodCkpO1xyXG4gIFxyXG4gICAgICBpZiAodGhpcy5yZ1ggIT09IHVuZGVmaW5lZCAmJiB0aGlzLnJnWSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgdGhpcy5uZXdWYWx1ZS5lbWl0KHsgczogeCAvIHdpZHRoLCB2OiAoMSAtIHkgLyBoZWlnaHQpLCByZ1g6IHRoaXMucmdYLCByZ1k6IHRoaXMucmdZIH0pO1xyXG4gICAgICB9IGVsc2UgaWYgKHRoaXMucmdYID09PSB1bmRlZmluZWQgJiYgdGhpcy5yZ1kgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHRoaXMubmV3VmFsdWUuZW1pdCh7IHY6IHkgLyBoZWlnaHQsIHJnWTogdGhpcy5yZ1kgfSk7XHJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5yZ1ggIT09IHVuZGVmaW5lZCAmJiB0aGlzLnJnWSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgdGhpcy5uZXdWYWx1ZS5lbWl0KHsgdjogeCAvIHdpZHRoLCByZ1g6IHRoaXMucmdYIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSJdfQ==