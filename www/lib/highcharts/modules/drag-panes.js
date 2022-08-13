/*
 Highcharts JS v7.0.0 (2018-12-11)
 Drag-panes module

 (c) 2010-2018 Highsoft AS
 Author: Kacper Madej

 License: www.highcharts.com/license
*/
(function(g){"object"===typeof module&&module.exports?module.exports=g:"function"===typeof define&&define.amd?define(function(){return g}):g("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(g){(function(b){var g=b.hasTouch,x=b.merge,u=b.wrap,y=b.isNumber,e=b.addEvent,v=b.relativeLength,z=b.objectEach,m=b.Axis,w=b.Pointer;x(!0,m.prototype.defaultYAxisOptions,{minLength:"10%",maxLength:"100%",resize:{controlledAxis:{next:[],prev:[]},enabled:!1,cursor:"ns-resize",lineColor:"#cccccc",lineDashStyle:"Solid",
lineWidth:4,x:0,y:0}});b.AxisResizer=function(a){this.init(a)};b.AxisResizer.prototype={init:function(a,c){this.axis=a;this.options=a.options.resize;this.render();c||this.addMouseEvents()},render:function(){var a=this.axis,c=a.chart,d=this.options,b=d.x,e=d.y,k=Math.min(Math.max(a.top+a.height+e,c.plotTop),c.plotTop+c.plotHeight),l={};c.styledMode||(l={cursor:d.cursor,stroke:d.lineColor,"stroke-width":d.lineWidth,dashstyle:d.lineDashStyle});this.lastPos=k-e;this.controlLine||(this.controlLine=c.renderer.path().addClass("highcharts-axis-resizer"));
this.controlLine.add(a.axisGroup);d=c.styledMode?this.controlLine.strokeWidth():d.lineWidth;l.d=c.renderer.crispLine(["M",a.left+b,k,"L",a.left+a.width+b,k],d);this.controlLine.attr(l)},addMouseEvents:function(){var a=this,c=a.controlLine.element,d=a.axis.chart.container,b=[],t,k,l;a.mouseMoveHandler=t=function(c){a.onMouseMove(c)};a.mouseUpHandler=k=function(c){a.onMouseUp(c)};a.mouseDownHandler=l=function(c){a.onMouseDown(c)};b.push(e(d,"mousemove",t),e(d.ownerDocument,"mouseup",k),e(c,"mousedown",
l));g&&b.push(e(d,"touchmove",t),e(d.ownerDocument,"touchend",k),e(c,"touchstart",l));a.eventsToUnbind=b},onMouseMove:function(a){a.touches&&0===a.touches[0].pageX||!this.grabbed||(this.hasDragged=!0,this.updateAxes(this.axis.chart.pointer.normalize(a).chartY-this.options.y))},onMouseUp:function(a){this.hasDragged&&this.updateAxes(this.axis.chart.pointer.normalize(a).chartY-this.options.y);this.grabbed=this.hasDragged=this.axis.chart.activeResizer=null},onMouseDown:function(){this.axis.chart.pointer.reset(!1,
0);this.grabbed=this.axis.chart.activeResizer=!0},updateAxes:function(a){var c=this,d=c.axis.chart,b=c.options.controlledAxis,e=0===b.next.length?[d.yAxis.indexOf(c.axis)+1]:b.next,b=[c.axis].concat(b.prev),k=[],l=!1,g=d.plotTop,m=d.plotHeight,q=g+m,p;a=Math.max(Math.min(a,q),g);p=a-c.lastPos;1>p*p||([b,e].forEach(function(b,e){b.forEach(function(b,h){var f=(b=y(b)?d.yAxis[b]:e||h?d.get(b):b)&&b.options,n,r;f&&"navigator-y-axis"!==f.id&&(h=b.top,r=Math.round(v(f.minLength,m)),n=Math.round(v(f.maxLength,
m)),e?(p=a-c.lastPos,f=Math.round(Math.min(Math.max(b.len-p,r),n)),h=b.top+p,h+f>q&&(n=q-f-h,a+=n,h+=n),h<g&&(h=g,h+f>q&&(f=m)),f===r&&(l=!0),k.push({axis:b,options:{top:Math.round(h),height:f}})):(f=Math.round(Math.min(Math.max(a-h,r),n)),f===n&&(l=!0),a=h+f,k.push({axis:b,options:{height:f}})))})}),l||(k.forEach(function(a){a.axis.update(a.options,!1)}),d.redraw(!1)))},destroy:function(){var a=this;delete a.axis.resizer;this.eventsToUnbind&&this.eventsToUnbind.forEach(function(a){a()});a.controlLine.destroy();
z(a,function(b,d){a[d]=null})}};m.prototype.keepProps.push("resizer");e(m,"afterRender",function(){var a=this.resizer,c=this.options.resize;c&&(c=!1!==c.enabled,a?c?a.init(this,!0):a.destroy():c&&(this.resizer=new b.AxisResizer(this)))});e(m,"destroy",function(a){!a.keepEvents&&this.resizer&&this.resizer.destroy()});u(w.prototype,"runPointActions",function(a){this.chart.activeResizer||a.apply(this,Array.prototype.slice.call(arguments,1))});u(w.prototype,"drag",function(a){this.chart.activeResizer||
a.apply(this,Array.prototype.slice.call(arguments,1))})})(g)});
//# sourceMappingURL=drag-panes.js.map