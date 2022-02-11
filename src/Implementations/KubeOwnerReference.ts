export interface KubeOwnerReference {
    apiVersion?: string;
    kind?: string;
    name?: string;
    uid?: string;
    controller?: boolean;
    blockOwnerDeletion?: boolean;
}
