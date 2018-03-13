//javascript using node.js 
//Script for V8-profiler module
/**@Author: Bartosz Peta
Date: 13.03.2018*/

const fs = require('fs')
const profile = require('v8-profiler')

const snapshot = profiler.takeSnapshot()

module.exports = { 
step_18: function memoryEx() {
snapshot.export(function(error, result1) {
	fs.writeFileSync('node.heapsnapshot', result1)
	console.log(result);
	//snapshot.delete()
})},

step_19: function memoryTime(){
 setTimeout(function () {
	const snapshotAfter = profiler.takeSnapshot()

	snapshotAfter.export(function(error, result2) {
		fs.writeFileSync('node2.heapsnapshot', result2)
		console.log(result2);
		//snapshotAfter.delete()
		//process.exit()
	})	
}, 2000)}
}