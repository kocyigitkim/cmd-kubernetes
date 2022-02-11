import { KubeAffinity } from "./KubeAffinity";
import { KubeAnnotations } from "./KubeAnnotations";
import { KubeContainer } from "./KubeContainer";
import { KubeContainerVolume } from "./KubeContainerVolume";
import { KubeHostAlias } from "./KubeHostAlias";
import { KubeLabels } from "./KubeLabels";
import { KubeNodeSelector } from "./KubeNodeSelector";
import { KubeObject } from "./KubeObject";
import { KubeOwnerReference } from "./KubeOwnerReference";
import { KubeSecurityContext } from "./KubeSecurityContext";
import { KubeToleration } from "./KubeToleration";
import { KubeCondition } from "./KubeCondition";


export interface KubePod extends KubeObject {
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
        volumes?: KubeContainerVolume[];
        containers?: KubeContainer[];
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
        dnsPolicy?: string;
        serviceAccountName?: string;
        automountServiceAccountToken?: boolean;
        nodeSelector?: KubeNodeSelector;
        hostAliases?: KubeHostAlias[];
    };
    status?: {
        phase: string;
        conditions?: KubeCondition[];
        hostIP?: string;
        podIP?: string;
        startTime?: string;
        containerStatuses?: {
            name: string;
            state: {
                running?: {
                    startedAt: string;
                };
            };
            lastState?: {
                terminated?: {
                    exitCode: number;
                    reason: string;
                    startedAt: string;
                    finishedAt: string;
                };
            };
            ready: boolean;
            restartCount: number;
            image: string;
            imageID: string;
            containerID: string;
        }[];
    };
}



