import { KubePersistentVolume } from "../Implementations/KubePersistentVolume";
import { KubeObjectClient } from "./KubeObjectClient";


export class KubePersistentVolumeClient extends KubeObjectClient<KubePersistentVolume> {
    constructor(stdout: Function) {
        super(stdout, "persistentvolume");
    }
}
