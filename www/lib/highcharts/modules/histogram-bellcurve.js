/*
  Highcharts JS v7.0.0 (2018-12-11)

 (c) 2010-2018 Highsoft AS
 Author: Sebastian Domas

 License: www.highcharts.com/license
*/
(function(b){"object"===typeof module&&module.exports?module.exports=b:"function"===typeof define&&define.amd?define(function(){return b}):b("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(b){var f=function(a){var b=a.Series,g=a.addEvent;return{init:function(){b.prototype.init.apply(this,arguments);this.initialised=!1;this.baseSeries=null;this.eventRemovers=[];this.addEvents()},setDerivedData:a.noop,setBaseSeries:function(){var l=this.chart,a=this.options.baseSeries;this.baseSeries=
a&&(l.series[a]||l.get(a))||null},addEvents:function(){var a=this,b;b=g(this.chart,"afterLinkSeries",function(){a.setBaseSeries();a.baseSeries&&!a.initialised&&(a.setDerivedData(),a.addBaseSeriesEvents(),a.initialised=!0)});this.eventRemovers.push(b)},addBaseSeriesEvents:function(){var a=this,b,e;b=g(a.baseSeries,"updatedData",function(){a.setDerivedData()});e=g(a.baseSeries,"destroy",function(){a.baseSeries=null;a.initialised=!1});a.eventRemovers.push(b,e)},destroy:function(){this.eventRemovers.forEach(function(a){a()});
b.prototype.destroy.apply(this,arguments)}}}(b);(function(a,b){function g(a){return function(c){for(var d=1;a[d]<=c;)d++;return a[--d]}}var l=a.objectEach,k=a.seriesType,e=a.correctFloat,q=a.isNumber,p=a.arrayMax,r=a.arrayMin;a=a.merge;var h={"square-root":function(a){return Math.round(Math.sqrt(a.options.data.length))},sturges:function(a){return Math.ceil(Math.log(a.options.data.length)*Math.LOG2E)},rice:function(a){return Math.ceil(2*Math.pow(a.options.data.length,1/3))}};k("histogram","column",
{binsNumber:"square-root",binWidth:void 0,pointPadding:0,groupPadding:0,grouping:!1,pointPlacement:"between",tooltip:{headerFormat:"",pointFormat:'\x3cspan style\x3d"font-size: 10px"\x3e{point.x} - {point.x2}\x3c/span\x3e\x3cbr/\x3e\x3cspan style\x3d"color:{point.color}"\x3e\u25cf\x3c/span\x3e {series.name} \x3cb\x3e{point.y}\x3c/b\x3e\x3cbr/\x3e'}},a(b,{setDerivedData:function(){var a=this.derivedData(this.baseSeries.yData,this.binsNumber(),this.options.binWidth);this.setData(a,!1)},derivedData:function(a,
d,b){var c=p(a),h=r(a),n=[],m={},k=[],f;b=this.binWidth=e(q(b)?b||1:(c-h)/d);for(d=h;d<c;d=e(d+b))n.push(d),m[d]=0;0!==m[h]&&(n.push(e(h)),m[e(h)]=0);f=g(n.map(function(a){return parseFloat(a)}));a.forEach(function(a){a=e(f(a));m[a]++});l(m,function(a,c){k.push({x:Number(c),y:a,x2:e(Number(c)+b)})});k.sort(function(a,c){return a.x-c.x});return k},binsNumber:function(){var a=this.options.binsNumber,b=h[a]||"function"===typeof a&&a;return Math.ceil(b&&b(this.baseSeries)||(q(a)?a:h["square-root"](this.baseSeries)))}}))})(b,
f);(function(a,b){function g(a){var b=a.length;a=a.reduce(function(a,b){return a+b},0);return 0<b&&a/b}function l(a,b){var c=a.length;b=p(b)?b:g(a);a=a.reduce(function(a,c){c-=b;return a+c*c},0);return 1<c&&Math.sqrt(a/(c-1))}function k(a,b,c){a-=b;return Math.exp(-(a*a)/(2*c*c))/(c*Math.sqrt(2*Math.PI))}var e=a.seriesType,f=a.correctFloat,p=a.isNumber;a=a.merge;e("bellcurve","areaspline",{intervals:3,pointsInInterval:3,marker:{enabled:!1}},a(b,{setMean:function(){this.mean=f(g(this.baseSeries.yData))},
setStandardDeviation:function(){this.standardDeviation=f(l(this.baseSeries.yData,this.mean))},setDerivedData:function(){1<this.baseSeries.yData.length&&(this.setMean(),this.setStandardDeviation(),this.setData(this.derivedData(this.mean,this.standardDeviation),!1))},derivedData:function(a,b){var c=this.options.intervals,d=this.options.pointsInInterval,e=a-c*b,c=c*d*2+1,d=b/d,g=[],f;for(f=0;f<c;f++)g.push([e,k(e,a,b)]),e+=d;return g}}))})(b,f)});
//# sourceMappingURL=histogram-bellcurve.js.map