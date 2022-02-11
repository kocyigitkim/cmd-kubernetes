import { KubeContainerPort } from "./KubeContainerPort";
import { KubeContainerVolumeMount } from "./KubeContainerVolumeMount";
import { KubeEnvironment } from "./KubeEnvironment";
import { KubeLifecycleMethod } from "./KubeLifecycleMethod";
import { KubeLivenessProbe } from "./KubeLivenessProbe";
import { KubeReadinessProbe } from "./KubeReadinessProbe";
import { KubeResources } from "./KubeResources";
import { KubeSecurityContext } from "./KubeSecurityContext";


export interface KubeContainer {
    name: string;
    image: string;
    imagePullPolicy?: string;
    command?: string[];
    args?: string[];
    ports?: KubeContainerPort[];
    env?: KubeEnvironment[];
    resources?: KubeResources;
    volumeMounts?: KubeContainerVolumeMount[];
    livenessProbe?: KubeLivenessProbe;
    readinessProbe?: KubeReadinessProbe;
    lifecycle?: {
        postStart?: KubeLifecycleMethod;
        preStop?: KubeLifecycleMethod;
    };
    readinessGates?: {
        conditionType: string;
        status: string;
    }[];
    securityContext?: KubeSecurityContext;
    stdin?: boolean;
    stdinOnce?: boolean;
    terminationMessagePath?: string;
    terminationMessagePolicy?: string;
    terminationGracePeriodSeconds?: number;
}
