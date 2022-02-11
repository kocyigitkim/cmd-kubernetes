
export class KubeResourceType {
    public Name: string;
    public ShortNames: string[];
    public ApiVersion: string;
    public Namespaced: Boolean;
    public Kind: string;
    public Verbs: string[];
    constructor(ins) {
        for (var k in ins)
            this[k] = ins[k];
        if (this.Verbs) {
            var v: string = this.Verbs as any;
            this.Verbs = [];
            v.substring(1, v.length - 2).split(' ').forEach(x => this.Verbs.push(x));
        }
        if ((this.Namespaced as any) === "true") {
            this.Namespaced = true;
        }
        else {
            this.Namespaced = false;
        }
        if (this.ShortNames) {
            this.ShortNames = (this.ShortNames as any).split(',');
        }
    }
}
