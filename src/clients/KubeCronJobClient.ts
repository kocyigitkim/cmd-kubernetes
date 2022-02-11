import { KubeCronJob } from "../Implementations/KubeCronJob";
import { KubeObjectClient } from "./KubeObjectClient";


export class KubeCronJobClient extends KubeObjectClient<KubeCronJob> {
    constructor(stdout: Function) {
        super(stdout, "cronjob");
    }
}
