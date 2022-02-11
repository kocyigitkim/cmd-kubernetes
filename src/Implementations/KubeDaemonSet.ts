import { KubeAffinity } from "./KubeAffinity";
import { KubeAnnotations } from "./KubeAnnotations";
import { KubeContainer } from "./KubeContainer";
import { KubeContainerVolume } from "./KubeContainerVolume";
import { KubeLabels } from "./KubeLabels";
import { KubeObject } from "./KubeObject";
import { KubeOwnerReference } from "./KubeOwnerReference";
import { KubeSecurityContext } from "./KubeSecurityContext";
import { KubeToleration } from "./KubeToleration";
import { KubeCondition } from "./KubeCondition";


export interface KubeDaemonSet extends KubeObject {
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
        selector: {
            matchLabels?: KubeLabels;
        };
        template: {
            metadata: {
                labels?: KubeLabels;
                annotations?: KubeAnnotations;
            };
            spec: {
                volumes?: KubeContainerVolume[];
                containers?: KubeContainer[];
                restartPolicy?: string;
                terminationGracePeriodSeconds?: number;
                dnsPolicy?: string;
                serviceAccountName?: string;
                automountServiceAccountToken?: boolean;
                nodeName?: string;
                hostNetwork?: boolean;
                hostPID?: boolean;
                hostIPC?: boolean;
                securityContext?: KubeSecurityContext;
                imagePullSecrets?: {
                    name: string;
                }[];
                hostname?: string;
                subdomain?: string;
                affinity?: KubeAffinity;
                tolerations?: KubeToleration[];
                priorityClassName?: string;
                priority?: number;
            };
        };
    };
    status?: {
        currentNumberScheduled: number;
        numberMisscheduled: number;
        desiredNumberScheduled: number;
        numberReady: number;
        observedGeneration: number;
        conditions: KubeCondition[];
    };
}
