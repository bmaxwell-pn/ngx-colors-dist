import { ColorFormats } from '../enums/formats';
export function isDescendantOrSame(nodeParent, nodeTarget) {
    return nodeParent == nodeTarget || Array.from(nodeParent.childNodes).some(c => isDescendantOrSame(c, nodeTarget));
}
export function getFormat(format) {
    var result;
    switch (format) {
        case 'cmyk':
            result = ColorFormats.CMYK;
            break;
        case 'rgba':
            result = ColorFormats.RGBA;
            break;
        case 'hsla':
            result = ColorFormats.HSLA;
            break;
        case 'hex':
            result = ColorFormats.HEX;
            break;
    }
    return result;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscGVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1jb2xvcnMvc3JjL2xpYi9oZWxwZXJzL2hlbHBlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBR2hELE1BQU0sVUFBVSxrQkFBa0IsQ0FBQyxVQUFlLEVBQUUsVUFBZTtJQUNqRSxPQUFPLFVBQVUsSUFBSSxVQUFVLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxFQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUE7QUFFbEgsQ0FBQztBQUNELE1BQU0sVUFBVSxTQUFTLENBQUMsTUFBYTtJQUNyQyxJQUFJLE1BQW1CLENBQUM7SUFDeEIsUUFBTyxNQUFNLEVBQUM7UUFDWixLQUFLLE1BQU07WUFDVCxNQUFNLEdBQUcsWUFBWSxDQUFDLElBQUksQ0FBQztZQUMzQixNQUFNO1FBQ1IsS0FBSyxNQUFNO1lBQ1QsTUFBTSxHQUFHLFlBQVksQ0FBQyxJQUFJLENBQUM7WUFDM0IsTUFBTTtRQUNSLEtBQUssTUFBTTtZQUNULE1BQU0sR0FBRyxZQUFZLENBQUMsSUFBSSxDQUFDO1lBQzNCLE1BQU07UUFDUixLQUFLLEtBQUs7WUFDUixNQUFNLEdBQUcsWUFBWSxDQUFDLEdBQUcsQ0FBQztZQUMxQixNQUFNO0tBQ1Q7SUFDRCxPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29sb3JGb3JtYXRzIH0gZnJvbSAnLi4vZW51bXMvZm9ybWF0cyc7XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzRGVzY2VuZGFudE9yU2FtZShub2RlUGFyZW50OiBhbnksIG5vZGVUYXJnZXQ6IGFueSk6IGJvb2xlYW4ge1xyXG4gIHJldHVybiBub2RlUGFyZW50ID09IG5vZGVUYXJnZXQgfHwgQXJyYXkuZnJvbShub2RlUGFyZW50LmNoaWxkTm9kZXMpLnNvbWUoYyA9PiBpc0Rlc2NlbmRhbnRPclNhbWUoYyxub2RlVGFyZ2V0KSlcclxuXHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEZvcm1hdChmb3JtYXQ6c3RyaW5nKTpDb2xvckZvcm1hdHN7XHJcbiAgdmFyIHJlc3VsdDpDb2xvckZvcm1hdHM7XHJcbiAgc3dpdGNoKGZvcm1hdCl7XHJcbiAgICBjYXNlICdjbXlrJzpcclxuICAgICAgcmVzdWx0ID0gQ29sb3JGb3JtYXRzLkNNWUs7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAncmdiYSc6XHJcbiAgICAgIHJlc3VsdCA9IENvbG9yRm9ybWF0cy5SR0JBO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgJ2hzbGEnOlxyXG4gICAgICByZXN1bHQgPSBDb2xvckZvcm1hdHMuSFNMQTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlICdoZXgnOlxyXG4gICAgICByZXN1bHQgPSBDb2xvckZvcm1hdHMuSEVYO1xyXG4gICAgICBicmVhaztcclxuICB9XHJcbiAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG4iXX0=