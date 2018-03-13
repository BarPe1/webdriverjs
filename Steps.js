//javascript using node.js 
//Script for All Steps
/**@Author: Bartosz Peta
Date: 13.03.2018*/



var step = require('./StiboDetails');
var mem = require('./memory');
var cp = require('./CPU');


//All steps in Chrome browser
function Steps(){

	step.step_1();
	step.step_2_3();
	step.step_4();
	step.step_5();
	step.step_6();
	step.step_7();
	step.step_8();
	step.step_9();
	step.step_10();
	step.step_11();
	step.step_12();
	step.step_13();
	step.step_14();
	step.step_15();
	step.step_16();
	step.step_17();
    mem.step_18();
    mem.step_19();
    cp.step_20();
	//driver.quit();
}

Steps();


