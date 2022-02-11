export interface KubeServicePort {
    name?: string;
    port: number;
    protocol?: string;
    targetPort?: number;
    nodePort?: number;
}
