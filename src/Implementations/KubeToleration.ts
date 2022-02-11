export interface KubeToleration {
    key: string;
    operator: string;
    value: string;
    effect: string;
    tolerationSeconds: number;
}
