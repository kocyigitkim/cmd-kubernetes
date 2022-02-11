import { KubeJob } from "../Implementations/KubeJob";
import { KubeObjectClient } from "./KubeObjectClient";


export class KubeJobClient extends KubeObjectClient<KubeJob> {
    constructor(stdout: Function) {
        super(stdout, "job");
    }
}
