import { KubeObject } from "./KubeObject";


export interface KubeObjectList<T extends KubeObject = KubeObject> {
    apiVersion: string;
    kind: string;
    metadata: {
        selfLink: string;
        resourceVersion: string;
    };
    items: T[];
}
