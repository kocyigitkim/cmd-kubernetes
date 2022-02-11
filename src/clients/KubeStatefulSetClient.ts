import { KubeStatefulSet } from "../Implementations/KubeStatefulSet";
import { KubeObjectClient } from "./KubeObjectClient";


export class KubeStatefulSetClient extends KubeObjectClient<KubeStatefulSet> {
    constructor(stdout: Function) {
        super(stdout, "statefulset");
    }
}
