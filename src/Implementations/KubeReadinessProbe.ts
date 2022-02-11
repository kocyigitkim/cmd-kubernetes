export interface KubeReadinessProbe {
    exec?: {
        command: string[];
    };
    httpGet?: {
        path: string;
        port: number;
        scheme: string;
    };
    initialDelaySeconds?: number;
    timeoutSeconds?: number;
}
