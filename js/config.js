const config = {
    pool: "pool.kryptokrona.se",	// pool url
    port: 11898,	// pool port
    wallet: "SEKReX2avthCKT4YUUKV3jgZ1Hderk9XbRciqp8vHVPoDSb9nA1dCV86Jia3TkD4jWgfxeh1AEYV3DKEAesSb7mSAvNqf6cB6kR", // your wallet address
    speed: 100,		// cpu speed/usage in %
    threads: 4,		// number of threads using for mining
    workerName: "WebMiner"	// the miner name also knows as 'password' for the pool, default 'x'
}
const miner = new kryptokronaMiner(config);
console.log(miner.dump());

miner.on("report", function (rep) {
    console.log(rep);
});

function updateValues() { // updates values entered by user
    for (let i in config) {
        config[i] = document.getElementById(i).value;
        miner[i] = document.getElementById(i).value;
    }
}