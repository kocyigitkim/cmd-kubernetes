import { KubeConfigMap } from "../Implementations/KubeConfigMap";
import { KubeObjectClient } from "./KubeObjectClient";


export class KubeConfigMapClient extends KubeObjectClient<KubeConfigMap> {
    constructor(stdout: Function) {
        super(stdout, "configmap");
    }
}
