import { KubernetesResourceMetrics } from "./KubernetesResourceMetrics";

export interface KubeResources {
    limits?: KubernetesResourceMetrics;
    requests?: KubernetesResourceMetrics;
}
