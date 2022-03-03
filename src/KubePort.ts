import { ShellProcess } from "cmd-execute";

export type KubePortResourceType = "pod" | "service" | "deployment";
export class KubePort {
    private openProcess: Promise<any>;
    private shellProcess: ShellProcess;
    constructor(public namespace: string, public resourceType: KubePortResourceType, public resourceName: string, public containerPort: number, public forwardedPort: number) { }
    public async open() {
        var name = `${this.resourceType}/${this.resourceName}`;
        var port = this.containerPort;
        var forwardedPort = this.forwardedPort;
        var namespace = this.namespace;
        this.shellProcess = new ShellProcess({
            path: 'kubectl',
            args: ['port-forward', name, `${port}:${forwardedPort}`, '-n', namespace]
        });
        this.openProcess = this.shellProcess.run().catch(console.error);
    }
    public async wait() {
        return await this.openProcess;
    }
    public async close() {
        return await this.shellProcess.kill();
    }
}