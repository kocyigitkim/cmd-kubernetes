import { KubeAnnotations } from "./KubeAnnotations";
import { KubeLabels } from "./KubeLabels";
import { KubeObject } from "./KubeObject";
import { KubeOwnerReference } from "./KubeOwnerReference";



export interface KubeConfigMap extends KubeObject {
    metadata: {
        name: string;
        namespace?: string;
        labels?: KubeLabels;
        annotations?: KubeAnnotations;
        ownerReferences?: KubeOwnerReference[];
        creationTimestamp?: string;
        selfLink?: string;
        uid?: string;
        resourceVersion?: string;
        generation?: number;
        finalizers?: string[];
        deletionGracePeriodSeconds?: number;
        deletionTimestamp?: string;
    };
    data?: {
        [key: string]: string;
    };
}
