import { Injectable, } from "@angular/core";
import { PanelComponent } from "../components/panel/panel.component";
import { OVERLAY_STYLES } from "./overlay-styles";
import * as i0 from "@angular/core";
export class PanelFactoryService {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwtZmFjdG9yeS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWNvbG9ycy9zcmMvbGliL3NlcnZpY2VzL3BhbmVsLWZhY3Rvcnkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsVUFBVSxHQVVYLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUNyRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7O0FBR2xELE1BQU0sT0FBTyxtQkFBbUI7SUFDOUIsWUFDVSxRQUFrQyxFQUNsQyxjQUE4QixFQUM5QixRQUFrQjtRQUZsQixhQUFRLEdBQVIsUUFBUSxDQUEwQjtRQUNsQyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtJQUN6QixDQUFDO0lBTUosV0FBVyxDQUNULFFBQTRCLEVBQzVCLGdCQUFvQztRQUVwQyxJQUFJLElBQUksQ0FBQyxZQUFZLElBQUksU0FBUyxFQUFFO1lBQ2xDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNwQjtRQUNELE1BQU0sT0FBTyxHQUNYLElBQUksQ0FBQyxRQUFRLENBQUMsdUJBQXVCLENBQUMsY0FBYyxDQUFDLENBQUM7UUFFeEQsSUFBSSxDQUFDLFlBQVksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzNELE1BQU0sT0FBTyxHQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBaUM7YUFDakUsU0FBUyxDQUFDLENBQUMsQ0FBZ0IsQ0FBQztRQUUvQixJQUFJLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEdBQUcsb0JBQW9CLENBQUM7UUFDdkMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDN0MsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFZLEVBQUUsRUFBRTtZQUNuRCxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEQsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLFFBQVEsRUFBRTtZQUNaLFFBQVEsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUM3RDthQUFNO1lBQ0wsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3pDO1FBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFbEMsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzNCLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMzRCxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzVCLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDeEIsQ0FBQzs7c0ZBL0NVLG1CQUFtQjt5RUFBbkIsbUJBQW1CLFdBQW5CLG1CQUFtQjt1RkFBbkIsbUJBQW1CO2NBRC9CLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEluamVjdGFibGUsXHJcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG4gIEluamVjdG9yLFxyXG4gIEluamVjdCxcclxuICBUZW1wbGF0ZVJlZixcclxuICBUeXBlLFxyXG4gIENvbXBvbmVudEZhY3RvcnksXHJcbiAgQXBwbGljYXRpb25SZWYsXHJcbiAgRW1iZWRkZWRWaWV3UmVmLFxyXG4gIENvbXBvbmVudFJlZixcclxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcclxuaW1wb3J0IHsgUGFuZWxDb21wb25lbnQgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9wYW5lbC9wYW5lbC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgT1ZFUkxBWV9TVFlMRVMgfSBmcm9tIFwiLi9vdmVybGF5LXN0eWxlc1wiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgUGFuZWxGYWN0b3J5U2VydmljZSB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcbiAgICBwcml2YXRlIGFwcGxpY2F0aW9uUmVmOiBBcHBsaWNhdGlvblJlZixcclxuICAgIHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yXHJcbiAgKSB7fVxyXG5cclxuICBjb21wb25lbnRSZWY6IENvbXBvbmVudFJlZjxQYW5lbENvbXBvbmVudD47XHJcbiAgX2ZhY3Rvcnk6IENvbXBvbmVudEZhY3Rvcnk8UGFuZWxDb21wb25lbnQ+O1xyXG4gIG92ZXJsYXk7XHJcblxyXG4gIGNyZWF0ZVBhbmVsKFxyXG4gICAgYXR0YWNoVG86IHN0cmluZyB8IHVuZGVmaW5lZCxcclxuICAgIG92ZXJsYXlDbGFzc05hbWU6IHN0cmluZyB8IHVuZGVmaW5lZFxyXG4gICk6IENvbXBvbmVudFJlZjxQYW5lbENvbXBvbmVudD4ge1xyXG4gICAgaWYgKHRoaXMuY29tcG9uZW50UmVmICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aGlzLnJlbW92ZVBhbmVsKCk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBmYWN0b3J5OiBDb21wb25lbnRGYWN0b3J5PFBhbmVsQ29tcG9uZW50PiA9XHJcbiAgICAgIHRoaXMucmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoUGFuZWxDb21wb25lbnQpO1xyXG5cclxuICAgIHRoaXMuY29tcG9uZW50UmVmID0gZmFjdG9yeS5jcmVhdGUodGhpcy5pbmplY3Rvcik7XHJcbiAgICB0aGlzLmFwcGxpY2F0aW9uUmVmLmF0dGFjaFZpZXcodGhpcy5jb21wb25lbnRSZWYuaG9zdFZpZXcpO1xyXG4gICAgY29uc3QgZG9tRWxlbSA9ICh0aGlzLmNvbXBvbmVudFJlZi5ob3N0VmlldyBhcyBFbWJlZGRlZFZpZXdSZWY8YW55PilcclxuICAgICAgLnJvb3ROb2Rlc1swXSBhcyBIVE1MRWxlbWVudDtcclxuXHJcbiAgICB0aGlzLm92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgdGhpcy5vdmVybGF5LmlkID0gXCJuZ3gtY29sb3JzLW92ZXJsYXlcIjtcclxuICAgIHRoaXMub3ZlcmxheS5jbGFzc0xpc3QuYWRkKFwibmd4LWNvbG9ycy1vdmVybGF5XCIpO1xyXG4gICAgdGhpcy5vdmVybGF5LmNsYXNzTGlzdC5hZGQob3ZlcmxheUNsYXNzTmFtZSk7XHJcbiAgICBPYmplY3Qua2V5cyhPVkVSTEFZX1NUWUxFUykuZm9yRWFjaCgoYXR0cjogc3RyaW5nKSA9PiB7XHJcbiAgICAgIHRoaXMub3ZlcmxheS5zdHlsZVthdHRyXSA9IE9WRVJMQVlfU1RZTEVTW2F0dHJdO1xyXG4gICAgfSk7XHJcbiAgICBpZiAoYXR0YWNoVG8pIHtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYXR0YWNoVG8pLmFwcGVuZENoaWxkKHRoaXMub3ZlcmxheSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMub3ZlcmxheSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLm92ZXJsYXkuYXBwZW5kQ2hpbGQoZG9tRWxlbSk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuY29tcG9uZW50UmVmO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlUGFuZWwoKSB7XHJcbiAgICB0aGlzLmFwcGxpY2F0aW9uUmVmLmRldGFjaFZpZXcodGhpcy5jb21wb25lbnRSZWYuaG9zdFZpZXcpO1xyXG4gICAgdGhpcy5jb21wb25lbnRSZWYuZGVzdHJveSgpO1xyXG4gICAgdGhpcy5vdmVybGF5LnJlbW92ZSgpO1xyXG4gIH1cclxufVxyXG4iXX0=