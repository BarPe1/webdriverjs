//javascript using node.js 
//Script for V8-profiler module for CPU
/**@Author: Bartosz Peta
Date: 13.03.2018*/

const fs = require('fs')
const profiler = require('v8-profiler')

profiler.startProfiling('probe', true)

module.exports = { 
	step_20: function cpu() {
     setTimeout(function () {
	 const profile = profiler.stopProfiling('probe')
	 profile.export(function(error, result) {
		fs.writeFileSync('node1.cpuprofile', result)
		console.log(result);
		//profile.delete()
		//process.exit()
	})
}, 2000)}
}