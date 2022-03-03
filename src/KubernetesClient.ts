import { KubeResourceType } from "./Implementations/KubeResourceType";
import { ShellProcess } from "cmd-execute";
import { KubeResourceClient } from "./clients/KubeResourceClient";
import { KubePodClient } from "./clients/KubePodClient";
import { KubeServiceClient } from "./clients/KubeServiceClient";
import { KubeDeploymentClient } from "./clients/KubeDeploymentClient";
import { KubeReplicaSetClient } from "./clients/KubeReplicaSetClient";
import { KubeStatefulSetClient } from "./clients/KubeStatefulSetClient";
import { KubePersistentVolumeClient } from "./clients/KubePersistentVolumeClient";
import { KubePersistentVolumeClaimClient } from "./clients/KubePersistentVolumeClaimClient";
import { KubeReplicationControllerClient } from "./clients/KubeReplicationControllerClient";
import { KubeDaemonSetClient } from "./clients/KubeDaemonSetClient";
import { KubeJobClient } from "./clients/KubeJobClient";
import { KubeCronJobClient } from "./clients/KubeCronJobClient";
import { KubeConfigMapClient } from "./clients/KubeConfigMapClient";
import { KubeSecretClient } from "./clients/KubeSecretClient";
import { KubeNamespaceClient } from "./clients/KubeNamespaceClient";

export class KubernetesClient {
    constructor(public stdout: Function) { }
    public Deployment: KubeDeploymentClient = new KubeDeploymentClient(this.stdout);
    public Service: KubeServiceClient = new KubeServiceClient(this.stdout);
    public StatefulSet: KubeStatefulSetClient = new KubeStatefulSetClient(this.stdout);
    public DaemonSet: KubeDaemonSetClient = new KubeDaemonSetClient(this.stdout);
    public Job: KubeJobClient = new KubeJobClient(this.stdout);
    public CronJob: KubeCronJobClient = new KubeCronJobClient(this.stdout);
    public Namespace: KubeNamespaceClient = new KubeNamespaceClient(this.stdout);
    public Secret: KubeSecretClient = new KubeSecretClient(this.stdout);
    public ConfigMap: KubeConfigMapClient = new KubeConfigMapClient(this.stdout);
    public PersistentVolume: KubePersistentVolumeClient = new KubePersistentVolumeClient(this.stdout);
    public PersistentVolumeClaim: KubePersistentVolumeClaimClient = new KubePersistentVolumeClaimClient(this.stdout);
    public Pod: KubePodClient = new KubePodClient(this.stdout);
    public ReplicationController: KubeReplicationControllerClient = new KubeReplicationControllerClient(this.stdout);
    public ReplicaSet: KubeReplicaSetClient = new KubeReplicaSetClient(this.stdout);
    public GetResourceClient(name: string): KubeResourceClient {
        return new KubeResourceClient(name, this.stdout);
    }
    public async ListResourceTypes(showOutput: boolean = false): Promise<KubeResourceType[]> {
        const stdout = showOutput ? this.stdout : () => { };
        var collected: KubeResourceType[] = [];
        await new ShellProcess({
            path: 'kubectl',
            args: ['api-resources', '-o', 'wide'],
        })
            .processHeaderList((match, line, isFirstLine) => {
                if (!isFirstLine) {
                    collected.push(new KubeResourceType({
                        Name: match[0],
                        ShortNames: match[1],
                        ApiVersion: match[2],
                        Namespaced: match[3],
                        Kind: match[4],
                        Verbs: match[5],
                    }));
                }
            })
            .run(stdout, stdout).catch(stdout as any);
        try {
            return collected;
        } catch (err) {
            return null;
        }
    }
}

