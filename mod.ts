import createNativeCommand from './create-command.ts';
import { spawn } from 'node:child_process';

/**
 * Open a resource, such as a URL
 * @param resource The resource to open
 */
export default function open(resource: string): Promise<void> {
    const command = createNativeCommand(resource);
    return new Promise(resolve => {
        const cmd = spawn(command.command, command.args, {
            stdio: 'inherit',
        });
        cmd.on('exit', () => {
            resolve();
        });
    });
}
