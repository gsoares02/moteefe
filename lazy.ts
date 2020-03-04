class FnParam {
    public fn: any;
    public params: any[] = [];
}

class Lazy {
    private fnArray: FnParam[] = [];

    public add(...args: any[]) {
        const fnParam = new FnParam();
        fnParam.fn = args[0];

        for (let i = 1; i < args.length; i++){
            fnParam.params.push(args[i]);
        }

        this.fnArray.push(fnParam);
        return this;
    }

    public evaluate(target: any[]) {
        const result: any[] = [];
        target.forEach(tvalue => {
            let response = tvalue;
            this.fnArray.forEach((fp: FnParam) => {
                const inputParams = [...fp.params, response];
                response = fp.fn.apply(null, inputParams);
            });
            result.push(response);
        });
        return result;
    }
}
