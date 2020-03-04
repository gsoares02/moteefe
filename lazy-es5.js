"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

var FnParam = /** @class */ (function () {
    function FnParam() {
        this.params = [];
    }
    return FnParam;
}());

var Lazy = /** @class */ (function () {
    function Lazy() {
        this.fnArray = [];
    }
    Lazy.prototype.add = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var fnParam = new FnParam();
        fnParam.fn = args[0];
        for (var i = 1; i < args.length; i++) {
            fnParam.params.push(args[i]);
        }
        this.fnArray.push(fnParam);
        return this;
    };
    Lazy.prototype.evaluate = function (target) {
        var _this = this;
        var result = [];
        target.forEach(function (tvalue) {
            var response = tvalue;
            _this.fnArray.forEach(function (fp) {
                var inputParams = __spreadArrays(fp.params, [response]);
                response = fp.fn.apply(null, inputParams);
            });
            result.push(response);
        });
        return result;
    };
    return Lazy;
}());
