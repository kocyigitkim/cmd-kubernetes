import { KubeAnnotations } from "./KubeAnnotations";
import { KubeLabels } from "./KubeLabels";
import { KubeObject } from "./KubeObject";


export interface KubePersistentVolume extends KubeObject {
    metadata: {
        annotations: KubeAnnotations;
        labels: KubeLabels;
        name: string;
        namespace: string;
    };
    spec: {
        accessModes: string[];
        capacity: {
            storage: string;
        };
        hostPath: {
            path: string;
        };
        nfs: {
            path: string;
            server: string;
        };
        persistentVolumeReclaimPolicy: string;
        storageClassName: string;
    };
    status?: {
        phase: string;
    };
}
