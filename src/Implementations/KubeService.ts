import { KubeAnnotations } from "./KubeAnnotations";
import { KubeLabels } from "./KubeLabels";
import { KubeObject } from "./KubeObject";
import { KubeOwnerReference } from "./KubeOwnerReference";
import { KubeServicePort } from "./KubeServicePort";


export interface KubeService extends KubeObject {
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
    spec: {
        ports?: KubeServicePort[];
        selector?: KubeLabels;
        clusterIP?: string;
        type?: string;
        externalIPs?: string[];
        sessionAffinity?: string;
        loadBalancerIP?: string;
        loadBalancerSourceRanges?: string[];
        externalName?: string;
        externalTrafficPolicy?: string;
        healthCheckNodePort?: number;
    };
    status?: {
        loadBalancer?: {
            ingress?: {
                ip?: string;
                hostname?: string;
            }[];
        };
    };
}
