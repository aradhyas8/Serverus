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
        const outputPath = path_1.default.join(__dirname, `dist/${id}`);
        const checkIfBuilt = () => fs_1.default.existsSync(outputPath);
        const executBuild = () => {
            var _a, _b;
            const child = (0, child_process_1.exec)(`cd ${path_1.default.join(__dirname, `output/${id}`)} && npm install && npm run build`);
            (_a = child.stdout) === null || _a === void 0 ? void 0 : _a.on('data', function (data) {
                console.log('stdout:' + data);
            });
            (_b = child.stderr) === null || _b === void 0 ? void 0 : _b.on('data', function (data) {
                console.log('stderr:' + data);
            });
            child.on('close', function (code) {
                if (checkIfBuilt()) {
                    resolve("Build successful");
                }
                else {
                    console.log("index.html not found. Building again...");
                    executBuild();
                }
            });
        };
        if (!checkIfBuilt()) {
            executBuild();
        }
        else {
            console.log("Build already exists");
            resolve("Build already exists");
        }
    });
}
exports.buildProject = buildProject;
