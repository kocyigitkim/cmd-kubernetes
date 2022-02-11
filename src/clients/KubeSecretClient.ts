import { KubeSecret } from "../Implementations/KubeSecret";
import { KubeObjectClient } from "./KubeObjectClient";


export class KubeSecretClient extends KubeObjectClient<KubeSecret> {
    constructor(stdout: Function) {
        super(stdout, "secret");
    }
}
