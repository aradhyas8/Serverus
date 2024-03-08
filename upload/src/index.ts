import { exec } from "child_process";
import path from "path";
import fs from "fs";

export function buildProject(id: string) {
  return new Promise((resolve, reject) => {
    const outputPath = path.join(__dirname, `output/${id}/dist`);
    const projectPath = path.join(__dirname, `output/${id}`);
    let attempts = 0; // Counter to track the number of build attempts

    const checkIfBuilt = () => fs.existsSync(outputPath);

    const executeBuild = () => {
      if (attempts >= 3) {
        // Set a maximum number of attempts
        console.error("Failed to build after multiple attempts");
        reject("Build failed");
        return;
      }
      attempts++; // Increment the attempt counter

      const child = exec(
        `cd ${projectPath} && npm install && npm run build`,
        (error) => {
          if (error) {
            console.error("Build command failed", error);
            console.log("Build output not found. Building again...");
            executeBuild();
          }
        }
      );

      child.on("close", function (code) {
        if (checkIfBuilt()) {
          resolve("Build successful");
        } else {
          console.log("Build output not found. Attempting to build again...");
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
