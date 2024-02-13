import { S3 } from 'aws-sdk';
import { dir } from 'console';
import fs from 'fs';
import path from 'path';

const s3 = new S3({
  accessKeyId: "f694c40b9fd70ad53b6734b17af34c84",
  secretAccessKey:
    "c6003326bc5faad7da3504b155858f226048952aa617383439df35a240a26ef0",
  endpoint: "https://4cf4007788e49411ce404afbe2a0e268.r2.cloudflarestorage.com",
});

export async function downloadS3Folder(prefix: string) {
  const allFiles = await s3.listObjectsV2({
    Bucket: "serverus",
    Prefix: prefix,
  }).promise(); 

  const allPromises = allFiles.Contents?.map(async ({Key}) => {
    return new Promise(async(resolve)=> {
      if(!Key) {
        resolve("");
        return;
      }

      const finalOutputPath = path.join(__dirname, Key);
      const dirName = path.dirname(finalOutputPath);
      if(!fs.existsSync(dirName)) {
        fs.mkdirSync(dirName, {recursive: true});
      }
      const outputFile = fs.createWriteStream(finalOutputPath);
      s3.getObject({
        Bucket: "serverus",
        Key }).createReadStream().pipe(outputFile).on("finish", () => {
          resolve("");
        });
    })
}) || [];
console.log("awaiting");
await Promise.all(allPromises?.filter((x) => x !== undefined));
}