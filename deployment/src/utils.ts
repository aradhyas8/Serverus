import { exec, spawn } from "child_process";
import path from "path";
import fs from "fs";

export function buildProject(id: string) {
  return new Promise((resolve, reject) => {
    // Adjust the output path to point to the correct directory under the 'upload' folder
    const outputPath = path.join(__dirname, `../upload/${id}/dist`); // Assuming the build output is expected in a 'dist' subdirectory
    const checkIfBuilt = () => fs.existsSync(outputPath);

    const executeBuild = () => {
      // Make sure the command is executed in the correct directory within the 'upload' folder
      const child = exec(
        `cd ${path.join(
          __dirname,
          `../upload/${id}`
        )} && npm install && npm run build`
      );

      child.stdout?.on("data", function (data) {
        console.log("stdout:" + data);
      });
      child.stderr?.on("data", function (data) {
        console.log("stderr:" + data);
      });
      child.on("close", function (code) {
        if (checkIfBuilt()) {
          resolve("Build successful");
        } else {
          console.log("index.html not found. Building again...");
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
