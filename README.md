# kryptokronaWebminer
A web miner for Kryptokrona

## How to include to your website
In order to implement the miner to your website you have to do the following, easy steps:

 - Download our script and add it to your website  
  `<script src='kryptokronaminer.js'></script>`  

 - Edit the configuration
  ```
const config = {
	pool: "pool.kryptokrona.se",	// pool url
	port: 11898,	// pool port
	wallet: "SEKReX2avthCKT4YUUKV3jgZ1Hderk9XbRciqp8vHVPoDSb9nA1dCV86Jia3TkD4jWgfxeh1AEYV3DKEAesSb7mSAvNqf6cB6kR", // your wallet address
	speed: 100,		// cpu speed/usage in %
	threads: 4,		// number of threads using for mining
	workerName: "WebMiner"	// the miner name also knows as 'password' for the pool, default 'x'
}
  ```

  - Initialize a new miner instance  
  `const miner = new KryptokronaMiner(minerConfig);`

  - Start mining whenever you want:  
  `miner.start();`

  - Stop mining whenever you want:  
  `miner.stop();`
