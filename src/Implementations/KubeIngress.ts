import { KubeAnnotations } from "./KubeAnnotations";
import { KubeLabels } from "./KubeLabels";
import { KubeObject } from "./KubeObject";


export interface KubeIngress extends KubeObject {
    spec: {
        rules: {
            host: string;
            http: {
                paths: {
                    path: string;
                    pathType: string;
                    backend: {
                        service?: {
                            name: string;
                            port: number | {
                                name: string;
                            };
                        };

                    };
                }[];
            }[];
        };
    };
    tls?: {
        hosts: string[];
        secretName: string;
    }[];
    metadata: {
        annotations: KubeAnnotations;
        labels: KubeLabels;
        name: string;
        namespace: string;
    };
    status?: {
        loadBalancer: {
            ingress: {
                hostname: string;
                ip: string;
            }[];
        };
    };
}
