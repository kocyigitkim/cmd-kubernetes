export interface KubeLivenessProbe {
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
