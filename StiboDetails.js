//javascript using node.js 
//Script for Selenium Webdriver
/**@Author: Bartosz Peta
Date: 13.03.2018*/

var webdriver = require('selenium-webdriver');
//var assert = require('assert');
var until = webdriver.until;
var driver = new webdriver.Builder().forBrowser('chrome').build();

//Go to Google website
module.exports = {
	step_1: function goToGoogle(){
		driver.manage().window().maximize();
		driver.get('http://www.google.com');},


//Go to Stibo Systems website
	step_2_3: function goStibo(){

    	driver.findElement(webdriver.By.name('q')).sendKeys('Stibo Systems' + webdriver.Key.ENTER);
    	driver.findElement(webdriver.By.linkText('Stibo Systems - Business-first data management solutions')).click();},
	
//Set energy in Search box
	step_4: function search(){

	driver.findElement(webdriver.By.className('search')).click();
	driver.sleep(2000);
	driver.findElement(webdriver.By.id('search-input')).sendKeys('energy');
	driver.sleep(2000);
},
	
//Count result from Search box
	step_5: function countSearch(){

	var res = driver.findElement(webdriver.By.className('ais-root ais-stats')).getText();
	console.log("Search results of energy are: " + res);
},

//Go to About Us
	step_6: function aboutUs(){

	driver.findElement(webdriver.By.id('search-close')).click();  //close Search box
	driver.sleep(1000);  
	driver.findElement(webdriver.By.className('search')).click(); //click search button to close search field
	driver.sleep(1000); 
	driver.findElement(webdriver.By.xpath('//*[@id="hs_menu_wrapper_my_menu"]/ul/li[5]/a')).click(); // click About Us in bar
	driver.wait(until.elementLocated(webdriver.By.xpath('//*[@class="hs-menu-item hs-menu-depth-2 hs-item-has-children"]/ul/li[1]/a')), 2000); // check About Us in pop up
		

	/** the oldest xpaths
		driver.findElement(webdriver.By.xpath('//*[@id="hs_menu_wrapper_my_menu"]/ul/li[5]/ul/li/ul/li/a')).click();
		driver.wait(until.elementLocated(webdriver.By.xpath('//*[@class="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_header')), 2000);
		driver.wait(until.elementLocated(webdriver.By.xpath('//h1[text()="About Us"]')), 2000);
	*/
},

//check title About Us 
	step_7: function clickAbout(){

	driver.findElement(webdriver.By.xpath('//*[@id="hs_menu_wrapper_my_menu"]/ul/li[5]/ul/li/ul/li/a')).click(); //click About Us in pop up
	driver.wait(until.elementLocated(webdriver.By.xpath('//h1[text()="About Us"]')), 5000);
	var actualTitle = driver.getTitle();
    console.log(actualTitle);
},

//Check icon FB is displayed
	step_8: function checkFB(){

	driver.wait(until.elementLocated(webdriver.By.xpath('//*[@class="icon-facebook"]/img')), 4000);
	//var fb = driver.getElementByClassName('//*[@class="icon-facebook"]/img');
},

//Go to Blog
	step_9: function goToBlog(){

	driver.findElement(webdriver.By.linkText('Blog')).click();
	driver.wait(until.elementLocated(webdriver.By.xpath('//*[@class="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_blog_subscribe"]')), 8000);
	driver.sleep(3000);
	var actualT = driver.getTitle();
	actualT.then(function(title) {console.log("Blog title is " + title);});
},

//Set up incorrect email address

	step_10: function setIncorrectEmail(){

	 driver.findElement(webdriver.By.name('email')).sendKeys('qwe.pl'+ webdriver.Key.ENTER);
	 var er = driver.findElement(webdriver.By.xpath('//div[1][@class="hs_email hs-email hs-fieldtype-text field hs-form-field"]/ul/li/label')).getText();
     console.log("Incorrect email message is" + er);
},



//Set up correct email address
	step_11: function setCorrectEmail(){

	driver.findElement(webdriver.By.name('email')).clear();    //clear email field
	driver.sleep(1500);
    driver.findElement(webdriver.By.name('email')).sendKeys('sejahan@op.pl'); //set up correct email
    driver.sleep(1500);
    driver.findElement(webdriver.By.xpath('//*[@type="submit"]')).click();
    driver.sleep(1500);

},

//check submitted email message
	step_12: function checkSub(){
		
	var sub = driver.findElement(webdriver.By.xpath('//*[@class="submitted-message"]')).getText();
	sub.then((text) => {console.log(text);});
	driver.sleep(5000);
},

//var tab = require('./Tab');
//var driver = new webdriver.Builder().build();


//click Linkedin
	step_13: function linkedin(){

	driver.findElement(webdriver.By.xpath('//*[@class="fa fa-linkedin-square"]')).click();
	driver.sleep(6000);

},
/**switch to linkedin tab
	step_switchTab: function tabPage() {

	var handle = driver.getAllWindowHandles();
	handle.then(function (handles){var popUpWindow = handles[1];driver.switchTo().window(popUpWindow);})
},*/



//Go to next tab on browser
	step_14: function tablinked(){

	//driver.findElement(webdriver.By.className('upsell_cta upsell_cta--primary')).click() it depends which window will be opened
	var handle = driver.getAllWindowHandles();
	handle.then(function (handles){var popUpWindow = handles[1];driver.switchTo().window(popUpWindow);})
	driver.sleep(1500);
	driver.findElement(webdriver.By.xpath('//*[@class="join submit-button" or @class="upsell_cta upsell_cta--primary"]')).click()
	driver.sleep(1500);

},


//Get title form Linkedin
	step_15: function getTitleLink(){

	var form = driver.getTitle();
	form.then(function(title) {console.log("Title of " + title);});
},

//Change tab window with Linkedin
	step_16: function changeTab(){

	var handle = driver.getAllWindowHandles();
	handle.then(function (handles){var popUpWindow = handles[0];driver.switchTo().window(popUpWindow);})

	},

//Go to Customer Master Data Management
	step_17: function goCMDM(){

		driver.get('https://www.stibosystems.com/');
		driver.sleep(3000);
		driver.findElement(webdriver.By.xpath('//*[@id="hs_menu_wrapper_my_menu"]/ul/li[2]/a')).click(); // click Customer Master Data Management Us in bar
		driver.sleep(1500);
		driver.findElement(webdriver.By.xpath('//*[@id="hs_menu_wrapper_my_menu"]/ul/li[2]/ul/li/ul/li[3]/a')).click(); //click Customer Master Data Management in pop up
		driver.sleep(2000);
		driver.wait(until.elementLocated(webdriver.By.xpath('//*[@class="hs-menu-item hs-menu-depth-2 hs-item-has-children"]/ul/li[1]/a')), 2000);	
		var form = driver.getTitle();
		form.then(function(title) {console.log("Step_17 Title is " + title);});
		//driver.quit();
	}
};
