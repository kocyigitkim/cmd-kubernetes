export interface KubeSecurityContext {
    capabilities?: {
        add?: string[];
        drop?: string[];
    };
    privileged?: boolean;
    seLinuxOptions?: {
        level?: string;
        role?: string;
        type?: string;
        user?: string;
    };
    runAsUser?: number;
    runAsNonRoot?: boolean;
    readOnlyRootFilesystem?: boolean;
}
