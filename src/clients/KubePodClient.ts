import { KubePod } from "../Implementations/KubePod";
import { KubeObjectClient } from "./KubeObjectClient";


export class KubePodClient extends KubeObjectClient<KubePod> {
    constructor(stdout: Function) {
        super(stdout, "pod");
    }
}
