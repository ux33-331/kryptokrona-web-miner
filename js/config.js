//kryptokronaWebMiner 
//2020 - ux33-331

const config = {
    pool: "pool.kryptokrona.se", // pool url
    port: 3333, // pool port
    wallet: "", // your wallet address
    speed: 100, // cpu speed/usage in %
    threads: 4, // number of threads using for mining
    workerName: "x" // the miner name also knows as 'password' for the pool, default 'x'
}

const miner = new kryptokronaMiner(config);
console.log(miner.dump());

miner.on("report", function (rep) {
    console.log(rep);
});

// updates values entered by user

function updateValues() {
    for (let i in config) {
        config[i] = document.getElementById(i).value;
        miner[i] = document.getElementById(i).value;
    }
}