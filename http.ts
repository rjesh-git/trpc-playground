export default {
    port: 4000,
    fetch(request) {
        console.log(`starting bun server..`);
        return new Response("Welcome to Bun!");
    },
};