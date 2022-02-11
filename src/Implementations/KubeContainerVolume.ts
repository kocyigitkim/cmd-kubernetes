export interface KubeContainerVolume {
    name: string;
    hostPath?: {
        path: string;
    };
    emptyDir?: {};
    persistentVolumeClaim?: {
        claimName: string;
    };
    configMap?: {
        name: string;
        items?: {
            key: string;
            path: string;
        }[];
    };
    secret?: {
        secretName: string;
        items?: {
            key: string;
            path: string;
        }[];
    };
}
