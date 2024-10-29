import * as process from 'node:process';

/**
 * Create os-native arguments for a spawn function
 * @param resource The resource to open
 * @returns Arguments to pass into spawn
 */
export default function createNativeCommand(resource: string): {
    command: string;
    args: string[];
} {
    let command: string;
    const args: string[] = [];
    const os = process.platform;
    if (os === 'win32') {
        command = 'explorer';
    } else if (os === 'darwin') {
        command = 'open';
    } else {
        // assume it is the same as linux
        command = 'xdg-open';
    }
    args.push(resource);
    return {
        command,
        args,
    };
}
