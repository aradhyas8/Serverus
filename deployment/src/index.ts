import { commandOptions, createClient } from 'redis';
import { copyFinalDist, downloadS3Folder } from './aws';
import { buildProject } from './utils';


const redisHost = process.env.REDIS_HOST || "localhost"; 
const redisPort = process.env.REDIS_PORT
  ? parseInt(process.env.REDIS_PORT, 10)
  : 6379; 

const subscriber = createClient({
  socket: {
    host: redisHost,
    port: redisPort,
  },
});
subscriber.connect().then(() => {
  main();
});

const publisher = createClient({
  socket: {
    host: redisHost,
    port: redisPort,
  },
});
publisher.connect();

async function main() {
    while(1) {
        const res = await subscriber.brPop('build-queue',0);

        //@ts-ignore;
        const id = res.element


        await downloadS3Folder(`output/${id}`)
        console.log('downloaded');
        await buildProject(id);
         copyFinalDist(id);
         publisher.hSet("status", id, "deployed");
    }
}