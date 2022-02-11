
export interface KubeCondition {
    type: string;
    status: string;
    lastProbeTime?: string;
    lastTransitionTime?: string;
    reason?: string;
    message?: string;
}
