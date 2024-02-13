import { commandOptions, createClient } from 'redis';

const subscriber = createClient();

subscriber.connect().then(() => {main();});

async function main() {
    while(1) {
        const response = await subscriber.brPop('build-queue',0);

        console.log(response);
    }
}