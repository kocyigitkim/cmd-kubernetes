import { KubeAnnotations } from "./KubeAnnotations";
import { KubeLabels } from "./KubeLabels";
import { KubeObject } from "./KubeObject";


export interface KubePersistentVolumeClaim extends KubeObject {
    metadata: {
        annotations: KubeAnnotations;
        labels: KubeLabels;
        name: string;
        namespace: string;
    };
    spec: {
        accessModes: string[];
        resources: {
            requests: {
                storage: string;
            };
        };
        volumeName: string;
    };
    status?: {
        phase: string;
    };
}
