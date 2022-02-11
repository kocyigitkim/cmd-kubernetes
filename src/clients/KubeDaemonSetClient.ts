import { KubeDaemonSet } from "../Implementations/KubeDaemonSet";
import { KubeObjectClient } from "./KubeObjectClient";


export class KubeDaemonSetClient extends KubeObjectClient<KubeDaemonSet> {
    constructor(stdout: Function) {
        super(stdout, "daemonset");
    }
}
