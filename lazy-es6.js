"use strict";
class FnParam {
    constructor() {
        this.params = [];
    }
}

class Lazy {
    constructor() {
        this.fnArray = [];
    }
    add(...args) {
        const fnParam = new FnParam();
        fnParam.fn = args[0];
        for (let i = 1; i < args.length; i++) {
            fnParam.params.push(args[i]);
        }
        this.fnArray.push(fnParam);
        return this;
    }
    evaluate(target) {
        const result = [];
        target.forEach(tvalue => {
            let response = tvalue;
            this.fnArray.forEach((fp) => {
                const inputParams = [...fp.params, response];
                response = fp.fn.apply(null, inputParams);
            });
            result.push(response);
        });
        return result;
    }
}
