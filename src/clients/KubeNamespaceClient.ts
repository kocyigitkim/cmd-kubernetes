import { KubeNamespace } from "../Implementations/KubeNamespace";
import { KubeObjectClient } from "./KubeObjectClient";


export class KubeNamespaceClient extends KubeObjectClient<KubeNamespace> {
    constructor(stdout: Function) {
        super(stdout, "namespace");
    }
}
