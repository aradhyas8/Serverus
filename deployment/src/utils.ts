import { exec, spawn } from 'child_process';
import path from 'path';
import fs from 'fs';

export function buildProject(id: string) {
    return new Promise((resolve, reject) => {

        const outputPath = path.join(__dirname, `dist/${id}`);
        const checkIfBuilt = () => fs.existsSync(outputPath);

        const executBuild = () => {
        const child = exec(`cd ${path.join(__dirname, `output/${id}`)} && npm install && npm run build`);

        child.stdout?.on('data', function(data) {
         console.log('stdout:' + data);            
        });
        child.stderr?.on('data', function(data) {
            console.log('stderr:' + data);
        });
        child.on('close', function(code) {
            if(checkIfBuilt()) {
                resolve("Build successful");
            } else {
                console.log("index.html not found. Building again...");
                executBuild();
            }
        });
    }

    if(!checkIfBuilt()) {
        executBuild();
    } else {
        console.log("Build already exists");
        resolve("Build already exists");
    }


    });
}