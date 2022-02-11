import { KubeReplicaSet } from "../Implementations/KubeReplicaSet";
import { KubeObjectClient } from "./KubeObjectClient";


export class KubeReplicaSetClient extends KubeObjectClient<KubeReplicaSet> {
    constructor(stdout: Function) {
        super(stdout, "replicaset");
    }
}
