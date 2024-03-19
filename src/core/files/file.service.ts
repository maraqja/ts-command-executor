import { stat, unlink } from 'fs/promises';
import { dirname, isAbsolute, join } from 'path';

export class FileService {
    private async isExist(path: string) {
        try {
            await stat(path);
            return true;
        } catch {
            return false;
        }
    }

    public getFilePath(path: string, name: string, ext: string): string {
        if (!isAbsolute(path)) {
            path = join(__dirname, path);
        }
        return join(dirname(path), `${name}.${ext}`);
    }

    async deleteFileIfExists(path: string): Promise<void> {
        if (await this.isExist(path)) {
            unlink(path);
        }
    }
}

// E:\DISTR\PORTFOLIO\Video converter (Typescript with patterns)\dist\core\files\asserts\1.mp4
// E:\DISTR\PORTFOLIO\Video converter (Typescript with patterns)\asserts\1.mp4
