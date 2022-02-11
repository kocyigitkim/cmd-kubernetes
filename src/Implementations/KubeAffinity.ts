export interface KubeAffinity {
    nodeAffinity?: {
        requiredDuringSchedulingIgnoredDuringExecution?: {
            nodeSelectorTerms?: {
                matchExpressions?: {
                    key: string;
                    operator: string;
                    values: string[];
                }[];
            }[];
        };
    };
    podAffinity?: {
        preferredDuringSchedulingIgnoredDuringExecution?: {
            weight: number;
            podAffinityTerm: {
                labelSelector: {
                    matchExpressions: {
                        key: string;
                        operator: string;
                        values: string[];
                    }[];
                };
                namespaces: string[];
                topologyKey: string;
            }[];
        };
        requiredDuringSchedulingIgnoredDuringExecution?: {
            labelSelector: {
                matchExpressions: {
                    key: string;
                    operator: string;
                    values: string[];
                }[];
            };
            namespaces: string[];
            topologyKey: string;
        }[];
    };
    podAntiAffinity?: {
        preferredDuringSchedulingIgnoredDuringExecution?: {
            weight: number;
            podAffinityTerm: {
                labelSelector: {
                    matchExpressions: {
                        key: string;
                        operator: string;
                        values: string[];
                    }[];
                };
                namespaces: string[];
                topologyKey: string;
            }[];
        };
        requiredDuringSchedulingIgnoredDuringExecution?: {
            labelSelector: {
                matchExpressions: {
                    key: string;
                    operator: string;
                    values: string[];
                }[];
            };
            namespaces: string[];
            topologyKey: string;
        }[];
    };
}
