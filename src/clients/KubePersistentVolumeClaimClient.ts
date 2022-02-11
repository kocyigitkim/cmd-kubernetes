import { KubePersistentVolumeClaim } from "../Implementations/KubePersistentVolumeClaim";
import { KubeObjectClient } from "./KubeObjectClient";


export class KubePersistentVolumeClaimClient extends KubeObjectClient<KubePersistentVolumeClaim> {
    constructor(stdout: Function) {
        super(stdout, "persistentvolumeclaim");
    }
}
