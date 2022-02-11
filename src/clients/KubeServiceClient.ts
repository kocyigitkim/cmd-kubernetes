import { KubeService } from "../Implementations/KubeService";
import { KubeObjectClient } from "./KubeObjectClient";


export class KubeServiceClient extends KubeObjectClient<KubeService> {
    constructor(stdout: Function) {
        super(stdout, "service");
    }
}
