import { KubeObject } from "../Implementations/KubeObject";
import { KubeObjectList } from "../Implementations/KubeObjectList";
import { ShellProcess } from "cmd-execute";


export class KubeObjectClient<TRESOURCE extends KubeObject> {
    public readonly name;
    constructor(public stdout: Function, name: string = null) {
        this.name = name;
    }

    public async create(resource: TRESOURCE, showOutput: boolean = false): Promise<TRESOURCE> {
        const stdout = showOutput ? this.stdout : () => { };
        var output: KubeObjectList<TRESOURCE>;
        await new ShellProcess({
            path: 'kubectl',
            args: ['create', '-f', '-'],
            stdin: JSON.stringify(resource)
        }).run(stdout, stdout).catch(stdout as any);

        await new ShellProcess({
            path: 'kubectl',
            args: ['get', '-o', 'json', '-f', '-'],
            stdin: JSON.stringify(resource)
        })
            .processJson((obj) => {
                output = obj;
            })
            .run(stdout, stdout).catch(stdout as any);
        try {
            return output.items[0];
        } catch (err) {
            return null;
        }
    }
    public async apply(resource: TRESOURCE, showOutput: boolean = false): Promise<TRESOURCE> {
        const stdout = showOutput ? this.stdout : () => { };
        var output: KubeObjectList<TRESOURCE>;
        await new ShellProcess({
            path: 'kubectl',
            args: ['apply', '-f', '-'],
            stdin: JSON.stringify(resource)
        }).run(stdout, stdout).catch(stdout as any);

        await new ShellProcess({
            path: 'kubectl',
            args: ['get', '-o', 'json', '-f', '-'],
            stdin: JSON.stringify(resource)
        })
            .processJson((obj) => {
                output = obj;
            })
            .run(stdout, stdout).catch(stdout as any);
        try {
            return output.items[0];
        } catch (err) {
            return null;
        }
    }
    public async delete(resource: TRESOURCE, showOutput: boolean = false): Promise<TRESOURCE> {
        const stdout = showOutput ? this.stdout : () => { };
        var output: KubeObjectList<TRESOURCE>;
        await new ShellProcess({
            path: 'kubectl',
            args: ['delete', '-f', '-'],
            stdin: JSON.stringify(resource)
        }).run(stdout, stdout).catch(stdout as any);

        await new ShellProcess({
            path: 'kubectl',
            args: ['get', '-o', 'json', '-f', '-'],
            stdin: JSON.stringify(resource)
        })
            .processJson((obj) => {
                output = obj;
            })
            .run(stdout, stdout).catch(stdout as any);
        try {
            return output.items[0];
        } catch (err) {
            return null;
        }
    }
    public async get(resource: TRESOURCE, showOutput: boolean = false): Promise<TRESOURCE> {
        const stdout = showOutput ? this.stdout : () => { };
        var output: KubeObjectList<TRESOURCE>;
        await new ShellProcess({
            path: 'kubectl',
            args: ['get', '-o', 'json', '-f', '-'],
            stdin: JSON.stringify(resource)
        })
            .processJson((obj) => {
                output = obj;
            })
            .run(stdout, stdout).catch(stdout as any);
        try {
            return output.items[0];
        } catch (err) {
            return null;
        }
    }
      public async getRaw(resource: string, showOutput: boolean = false): Promise<TRESOURCE> {
        const stdout = showOutput ? this.stdout : () => { };
        var output: KubeObjectList<TRESOURCE>;
        await new ShellProcess({
            path: 'kubectl',
            args: ['get', '-o', 'json', '-f', '-'],
            stdin: resource
        })
            .processJson((obj) => {
                output = obj;
            })
            .run(stdout, stdout).catch(stdout as any);
        try {
            return output.items[0];
        } catch (err) {
            return null;
        }
    }
    public async list(namespace?: string, showOutput: boolean = false): Promise<TRESOURCE[]> {
        const stdout = showOutput ? this.stdout : () => { };
        var output: KubeObjectList<TRESOURCE>;
        await new ShellProcess({
            path: 'kubectl',
            args: ['get', this.name, '-o', 'json', ...(namespace ? ['--namespace', namespace] : ['--all-namespaces'])],
        })
            .processJson((obj) => {
                output = obj;
            })
            .run(stdout, stdout).catch(stdout as any);
        try {
            return output.items;
        } catch (err) {
            return null;
        }
    }
    public async getByName(name: string, namespace: string = null, showOutput: boolean = false): Promise<TRESOURCE> {
        if (!namespace)
            namespace = "default";
        const stdout = showOutput ? this.stdout : () => { };
        var output: KubeObjectList<TRESOURCE>;
        await new ShellProcess({
            path: 'kubectl',
            args: ['get', this.name, '-o', 'json', name, '-n', namespace],
        })
            .processJson((obj) => {
                output = obj;
            })
            .run(stdout, stdout).catch(stdout as any);
        try {
            return output.items[0];
        } catch (err) {
            return null;
        }
    }
    public async getByLabels(labels: { [key: string]: string; }, namespace: string = null, showOutput: boolean = false): Promise<TRESOURCE[]> {
        if (!namespace)
            namespace = "default";
        const stdout = showOutput ? this.stdout : () => { };
        var output: KubeObjectList<TRESOURCE>;
        var combinedLabels = [];
        for (var k in labels) {
            combinedLabels.push("-l");
            combinedLabels.push(`${k}=${labels[k]}`);
        }
        await new ShellProcess({
            path: 'kubectl',
            args: ['get', this.name, '-o', 'json', ...combinedLabels, '-n', namespace],
        })
            .processJson((obj) => {
                output = obj;
            })
            .run(stdout, stdout).catch(stdout as any);
        try {
            return output.items;
        } catch (err) {
            return null;
        }
    }
}
