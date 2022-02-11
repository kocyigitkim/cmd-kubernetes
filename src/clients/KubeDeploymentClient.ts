import { KubeDeployment } from "../Implementations/KubeDeployment";
import { KubeObjectClient } from "./KubeObjectClient";


export class KubeDeploymentClient extends KubeObjectClient<KubeDeployment> {
    constructor(stdout: Function) {
        super(stdout, "deployment");
    }
}
