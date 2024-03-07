import { exec, spawn } from "child_process";
import path from "path";
import fs from "fs";

export function buildProject(id: string) {
  return new Promise((resolve, reject) => {
    // Correct the outputPath to match the correct structure
    // Assuming the build output should indeed be checked in a 'dist' directory within the project folder
    const outputPath = path.join(__dirname, `../../upload/output/${id}/dist`);

    const checkIfBuilt = () => fs.existsSync(outputPath);

    const executeBuild = () => {
      // Update the directory path to match the correct location
      const projectPath = path.join(__dirname, `../../upload/output/${id}`);
      const child = exec(`cd ${projectPath} && npm install && npm run build`);

      child.stdout?.on("data", function (data) {
        console.log("stdout: " + data);
      });
      child.stderr?.on("data", function (data) {
        console.log("stderr: " + data);
      });
      child.on("close", function (code) {
        if (checkIfBuilt()) {
          resolve("Build successful");
        } else {
          console.log("Build output not found. Building again...");
          executeBuild();
        }
      });
    };

    if (!checkIfBuilt()) {
      executeBuild();
    } else {
      console.log("Build already exists");
      resolve("Build already exists");
    }
  });
}
