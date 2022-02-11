import { KubeIngress } from "../Implementations/KubeIngress";
import { KubeObjectClient } from "./KubeObjectClient";


export class KubeIngressClient extends KubeObjectClient<KubeIngress> {
    constructor(stdout: Function) {
        super(stdout, "ingress");
    }
}
