export interface KubeLifecycleMethod {
    exec?: {
        command: string[];
    };
    httpGet?: {
        path: string;
        port: number;
        scheme: string;
    };
    tcpSocket?: {
        port: number;
    };
}
