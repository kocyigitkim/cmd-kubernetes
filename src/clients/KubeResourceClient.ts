import { KubeObject } from "../Implementations/KubeObject";
import { KubeObjectClient } from "./KubeObjectClient";


export class KubeResourceClient extends KubeObjectClient<KubeObject> {
    constructor(name: string, stdout: Function) {
        super(stdout, name);
    }
}
