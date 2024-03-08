"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildProject = void 0;
const child_process_1 = require("child_process");
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
function buildProject(id) {
    return new Promise((resolve, reject) => {
        const outputPath = path_1.default.join(__dirname, `output/${id}`);
        const projectPath = path_1.default.join(__dirname, `output/${id}`);
        let attempts = 0; // Counter to track the number of build attempts
        const checkIfBuilt = () => fs_1.default.existsSync(outputPath);
        const executeBuild = () => {
            if (attempts >= 3) {
                // Set a maximum number of attempts
                console.error("Failed to build after multiple attempts");
                reject("Build failed");
                return;
            }
            attempts++; // Increment the attempt counter
            const child = (0, child_process_1.exec)(`cd ${projectPath} && npm install && npm run build`, (error) => {
                if (error) {
                    console.error("Build command failed", error);
                    console.log("Build output not found. Building again...");
                    executeBuild();
                }
            });
            child.on("close", function (code) {
                if (checkIfBuilt()) {
                    resolve("Build successful");
                }
                else {
                    console.log("Build output not found. Attempting to build again...");
                    executeBuild();
                }
            });
        };
        if (!checkIfBuilt()) {
            executeBuild();
        }
        else {
            console.log("Build already exists");
            resolve("Build already exists");
        }
    });
}
exports.buildProject = buildProject;
