import { KubeReplicationController } from "../Implementations/KubeReplicationController";
import { KubeObjectClient } from "./KubeObjectClient";


export class KubeReplicationControllerClient extends KubeObjectClient<KubeReplicationController> {
    constructor(stdout: Function) {
        super(stdout, "replicationcontroller");
    }
}
