const TREASUER_CHEST = createSimpleShopItem("Treasure chest", 100, chestInfo, chestTryBuy);
const PAY_TRIBUTE = createSimpleShopItem("Pay Tribute", 500, payTributeInfo, payTributeTryBuy);
const DOUBLE_PAY_TRIBUTE = createSimpleShopItem("Double Pay Tribute", 1000, payTributeInfo, doublePayTributeTryBuy);
const MOODBOOSTER = createDisabledShopItem("Moodbooster",1000, moodbosterInfo);
const ATONEMENT = createSimpleShopItem("Atonement", 2, atonementInfo, atonementTryBuy);
const UNLOCK_DENIAL = createDisabledShopItem("Unlock Denial", 2000, unlockDenialInfo);
const LOTTERY_TICKET = createDisabledShopItem("Lottery Ticket", 50, lotteryTicketInfo);

const CHASTITY_PACK1 = createPackShopItem("Chastity Pack", 500, VARIABLE_CHASTITY_PACK, 1, commonPackInfo);
const CHASTITY_PACK2 = createPackShopItem("Chastity Pack", 500, VARIABLE_CHASTITY_PACK, 2, commonPackInfo);
const CHASTITY_PACK3 = createPackShopItem("Chastity Pack", 500, VARIABLE_CHASTITY_PACK, 3, commonPackInfo);

const HUMILIATION_PACK1 = createPackShopItem("Humiliation Pack", 500, VARIABLE_HUMILIATION_PACK, 1, commonPackInfo);
const HUMILIATION_PACK2 = createPackShopItem("Humiliation Pack", 500, VARIABLE_HUMILIATION_PACK, 2, commonPackInfo);
const HUMILIATION_PACK3 = createPackShopItem("Humiliation Pack", 500, VARIABLE_HUMILIATION_PACK, 3, commonPackInfo);

const PAIN_PACK1 = createPackShopItem("Pain Pack", 500, VARIABLE_PAIN_PACK, 1, commonPackInfo);
const PAIN_PACK2 = createPackShopItem("Pain Pack", 500, VARIABLE_PAIN_PACK, 2, commonPackInfo);
const PAIN_PACK3 = createPackShopItem("Pain Pack", 500, VARIABLE_PAIN_PACK, 3, commonPackInfo);

const SLAVE_PACK1 = createPackShopItem("Slave Pack", 500, VARIABLE_SLAVE_PACK, 1, commonPackInfo);
const SLAVE_PACK2 = createPackShopItem("Slave Pack", 500, VARIABLE_SLAVE_PACK, 2, commonPackInfo);
const SLAVE_PACK3 = createPackShopItem("Slave Pack", 500, VARIABLE_SLAVE_PACK, 3, commonPackInfo);
																						
const TEASE_PACK1 = createPackShopItem("Tease Pack", 500, VARIABLE_TEASE_PACK, 1, commonPackInfo);
const TEASE_PACK2 = createPackShopItem("Tease Pack", 500, VARIABLE_TEASE_PACK, 2, commonPackInfo);
const TEASE_PACK3 = createPackShopItem("Tease Pack", 500, VARIABLE_TEASE_PACK, 3, commonPackInfo);
const TEASE_PACK4 = createPackShopItem("Tease Pack", 500, VARIABLE_TEASE_PACK, 4, commonPackInfo);
																						
const CHORE_PACK1 = createPackShopItem("Chore Pack", 500, VARIABLE_CHORE_PACK, 1, choresPackInfo);
const CHORE_PACK2 = createPackShopItem("Chore Pack", 500, VARIABLE_CHORE_PACK, 2, choresPackInfo);
const CHORE_PACK3 = createPackShopItem("Chore Pack", 500, VARIABLE_CHORE_PACK, 3, choresPackInfo);
const CHORE_PACK4 = createPackShopItem("Chore Pack", 500, VARIABLE_CHORE_PACK, 4, choresPackInfo);

const GLITTER_PACK1 = createPackShopItem("Chore Pack", 1500, VARIABLE_GLITTER_PACK, 4, choresPackInfo);

const EXTRA_SPANKING_IMPLEMENT1 = createPackShopItem("Additional Spanking Implement", 500, VARIABLE_EXTRA_SPANKING_IMPLEMENT, 1, implementInfo);
const EXTRA_SPANKING_IMPLEMENT2 = createPackShopItem("Additional Spanking Implement", 500, VARIABLE_EXTRA_SPANKING_IMPLEMENT, 2, implementInfo);

const SPANKZCHOIR_SUBSCRIBTION = createBaseShopItem(
	"SpankzChoir Subscribtion", 
	250, 
	function () { return !this.isActive; },
	function () { return getDate(VARIABLE_SPANKZCHOIR_SUBSCRIBTION).hasPassed();},
	spankchoirInfo, 
	function () { 							
		if (getVar(VARIABLE_GOLD, 0) >= this.price) {
			setVar(VARIABLE_GOLD, getVar(VARIABLE_GOLD, 0) - this.price);
			setDate(variable).addDay(30);
			return true;
		}
		else {
			sendVirtualAssistantMessage(NOT_ENOUG_GOLD);
			return false;
		}
	},
	defaultMenu);

	
const ENDGAME_PACKS = createBaseShopItem(
		"End Game Packs", 
		750, 		
		function () { return true; },
		function () { return false; }, 			
		function () { showItemInfo(ENDGAME_PACKS_INFO);}, 
		function () { sendVirtualAssistantMessage("Unavailable for purchase."); return false;},
		endGamesMenu);

const ENDGAME_PACKS_INFO = [
		"In here you can buy denial games                                                       ",
		"Denial games are games played in the end                                               ",
		"Normally the domme simply decides based on different stuff if you get to cum or not    ",
		"When using a denial game it is the game that decides wether you cum or not             ",
		"Notice that games are for more experienced denial users - not recommended for beginners",
		"You can get information about the different end-games inside settings                  "];

const BEADS_DEEP_INFO = [
	"Beads deep is game                                                                                    ",
	"After every normal session you draw 1 bead                                                            ",
	"The bead can have a variety of different colors each representing different outcomes                  ",
	"Ultimately you have to draw x number of white beads before you may ejaculate                          ",
	"This games denial period ranges from medium to long depending on chosen number of white beads required"];

const VALLEY_OF_DARKNESS_INFO = [
	"Valley of Darkness is a mind game                                                      ",
	"A timer is set after which you may cum                                                 ",
	"The timer could be short or long                                                       ",
	"You won't know                                                                         ",
	"After each session you will be given the chance to say if this is your lucky day or not",
	"If you are correct you will be allowed to cum                                          ",
	"If the timer hasn't expired yet it will be prolonged by a secret amount                ",
	"This games denial period ranges from short to long                                     ",
	"But is considered a hard game only for those able to handle long term denial			"];
	
const EDGE_OF_DESPERATION_INFO = [	
	"This is a frustrating mind game                                                              ",
	"A secret goal of edges is set                                                                ",
	"Everytime you edge it gets counted                                                           ",
	"After each session you will be asked if you think you've done enough edges to get your orgasm",
	"If this is true you will get to cum                                                          ",
	"If not a secret number of edges is added to the goal                                         ",
	"The game is considered very hard                                                             ",
	"Only for tease and denial experts                                                            "];
	
const FREQUENT_FLYER_INFO = [	
	"This is a mind game                                                        ",
	"Where you have to do X regular sessions                                    ",
	"After each session you are asked if you think you have done enough sessions",
	"If true you will get to cum                                                ",
	"If false a secret number of sessions is added to the goal                  ",
	"This game is considered to be medium difficuilty                           "];

const TRAINING_MODE_INFO = [	
	"Taining mode is quite simple                                                                   ",
	"You will set the difficulty to either easy, normal or hard                                     ",
	"A new random date for your next orgasm will be set based on the difficulty you chose           ",
	"You will not know the date but your domme will give you some hints                             ",
    "The difficulty also determines how many orgasms you will need until the mode automatically ends"];
	
const ORGASM_ROULETTE_INFO = [	
	"Orgasm Roulette is a game of chance                      ",
	"After each session you are allowed to spin the wheel once",	
	"Each spin has multiple outcomes	                      ",
	"The different outcomes are for you to explore	          "];
	
const FINANCIAL_DOMINATION_INFO = [	
	"Financial Domination is a fictional game	                       ",
	"It's designed to bring you the feeling of lacking money and having",	
	"After each session you are given an offer for an ejaculation	   ",
	"You can take it or continue your denial	                       ",
	"Do notice that this is based on your gold	                       ",
	"Meaning you'll have less gold to spend in the shop	               "];
	
const TREASURE_HUNT_INFO = [	
	"Treasure Hunt isn't a game                                  ",
	"But a mode for those who craves extreme denial              ",
	"Your only way to get an ejaculation is through the shop     ",
	"Chests have a small chance of giving you an ejaculation pass",
	"These passes are the only way that you'll be allowed to cum "];
	
const AUTHORS_GAME_INFO = [	
	"Authors game is reserved for those writing scripts for Tease-AI                     ",
	"After each session you will be asked about the number of hours spent writing scripts",
	"So on day 1 you report having spent 2 hours                                         ",
	"Between day 1 and 2 you spent 1 hour                                                ",
	"On day 3 you didn't have a session                                                  ",
	"Between day 2 and 4 you spent 3 hours                                               ",
	"The #DomHonorific will count your total hours                                       ",
	"When she believes you've spent enough time 							             ",
	"You will be granted an ejaculation and your total count is reset to 0               "];
	
const WINDOW_OF_OPPORTUNITY_INFO = [	
	"Window of Opportunity is a dice game                                                 ",
    "You have a total number of strokes starting at 0                                     ",
    "After each session you will roll two 6 sided dices                                   ",
    "The number rolled gets added to your total number of strokes                         ",
    "Besides that you have windows of opportunity                                         ",
    "There is a 12 hour interval within an interval of 2 to 5 days                        ",
    "If you roll the dices in that interval you will be asked if you wish to try your luck",
    "If you try your luck you will stroke a number of times equal to your total number    ",
    "Fail to cum with the given number of strokes and you won't cum                       ",
    "You may not decide the stroking pace yourself                                        ",
    "If you try your luck you will roll a final die that decies the pace for you		  "];
	
	
const STANDARD_MODE_INFO = [ // TODO: find usage	
	"Standard mode is what was set the first time you started Tease-AI                                   ",
	"Standard isn't a game                                                                               ",
	"The #DomHonorific chooses wether you may ejaculate or not                                           ",
	"Your behaviour, actions, days since last ejaculation and denial experience is all carefully weighted"];
	

const ENDGAME_DENIAL_TRAINING 		=   createUniqueShopItem("Denial Training", 	  750, VARIABLE_ENDGAME_PACK1, ["It is obvious %SlaveName%."]);
const ENDGAME_BEADS_DEEP 			=   createUniqueShopItem("Beads Deep", 			  750, VARIABLE_ENDGAME_PACK2,  1, BEADS_DEEP_INFO           );
const ENDGAME_VALLEY_OF_DARKNESS 	=   createUniqueShopItem("Valley of Darkness", 	  750, VARIABLE_ENDGAME_PACK3,  1, VALLEY_OF_DARKNESS_INFO   );
const ENDGAME_EDGE_OF_DESPERATION 	=   createUniqueShopItem("Edge of Desperation",   750, VARIABLE_ENDGAME_PACK4,  1, EDGE_OF_DESPERATION_INFO  );
const ENDGAME_FREQUENT_FLYER		=   createUniqueShopItem("Frequent Flyer", 		  750, VARIABLE_ENDGAME_PACK5,  1, FREQUENT_FLYER_INFO       );
const ENDGAME_TRAINING_MODE 		=   createUniqueShopItem("Training Mode", 		  750, VARIABLE_ENDGAME_PACK6,  1, TRAINING_MODE_INFO        );
const ENDGAME_ORGASM_ROULETTE 		=   createUniqueShopItem("Orgasm Roulette", 	  750, VARIABLE_ENDGAME_PACK7,  1, ORGASM_ROULETTE_INFO      );
const ENDGAME_FINANCIAL_DOMINATION 	=   createUniqueShopItem("Financial Domination",  750, VARIABLE_ENDGAME_PACK8,  1, FINANCIAL_DOMINATION_INFO );
const ENDGAME_TREASURE_HUNT 		=   createUniqueShopItem("Treasure Hunt", 		  750, VARIABLE_ENDGAME_PACK9,  1, TREASURE_HUNT_INFO        );
const ENDGAME_AUTHORS_GAME 			=   createUniqueShopItem("Authors Game", 		  750, VARIABLE_ENDGAME_PACK10, 1, AUTHORS_GAME_INFO         );
const ENDGAME_WINDOW_OF_OPPORTUNITY =   createUniqueShopItem("Window Of Opportunity", 750, VARIABLE_ENDGAME_PACK11, 1, WINDOW_OF_OPPORTUNITY_INFO);

	
	
const SHOP_ITEMS = [
	TREASUER_CHEST, PAY_TRIBUTE, DOUBLE_PAY_TRIBUTE, MOODBOOSTER, ATONEMENT, UNLOCK_DENIAL, LOTTERY_TICKET, 
	CHASTITY_PACK1, CHASTITY_PACK2, CHASTITY_PACK3,                         
	HUMILIATION_PACK1, HUMILIATION_PACK2, HUMILIATION_PACK3,
	PAIN_PACK1, PAIN_PACK2, PAIN_PACK3,
	SLAVE_PACK1, SLAVE_PACK2, SLAVE_PACK3,
	TEASE_PACK1, TEASE_PACK2, TEASE_PACK3, TEASE_PACK4,
	CHORE_PACK1, CHORE_PACK2, CHORE_PACK3, CHORE_PACK4,
	ENDGAME_PACKS];
	
const ENDGAME_ITEMS = [
	ENDGAME_DENIAL_TRAINING,
	ENDGAME_BEADS_DEEP,
	ENDGAME_VALLEY_OF_DARKNESS,	
	ENDGAME_EDGE_OF_DESPERATION,
	ENDGAME_FREQUENT_FLYER,
	ENDGAME_TRAINING_MODE,
	ENDGAME_ORGASM_ROULETTE,
	ENDGAME_FINANCIAL_DOMINATION,
	ENDGAME_TREASURE_HUNT,
	ENDGAME_AUTHORS_GAME,
	ENDGAME_WINDOW_OF_OPPORTUNITY];


const NOT_ENOUG_GOLD = "You don't have the necessary gold to make the purchase %Slut%";

function createBaseShopItem(name, price, isAvailForSale, isActive, showInfo, tryBuy, showMenu) {
	   return {
        name: name, price: price, isAvailForSale: isAvailForSale, isActive: isActive, showInfo: showInfo, tryBuy: tryBuy, showMenu: showMenu,
	   };
}

function createDisabledShopItem(name, price, showInfo) {
	return createBaseShopItem(
		name, 
		price, 
		function () { return false; },  	    //isAvailForSale
		function () { return false; }, 			//isActive
		showInfo,
		function () {sendVirtualAssistantMessage("Currently unavailable for purchase");},		
		defaultMenu);
}


function createSimpleShopItem(name, price, showInfo, tryBuy) {
	return createBaseShopItem(
		name, 
		price, 
		function () { return true; },  			//isAvailForSale
		function () { return false; }, 			//isActive
		showInfo,
		tryBuy,		
		defaultMenu);
}

function tryBuyShopItem(price){
	if (trySpendGold(price)){
		return true;
	}
	else {
		sendVirtualAssistantMessage(NOT_ENOUG_GOLD);
		return false;
	}
}

function createPackShopItem(name, price, variable, numInPack, showInfo) {
	return createBaseShopItem(
		name, 
		price, 
		function () { return getVar(variable, 0) == (numInPack - 1); },  	//isAvailForSale
		function () { return getVar(variable, 0) >= numInPack; }, 			//isActive
		showInfo, 
		function () { 														//tryBuy
			if (getVar(VARIABLE_GOLD, 0) >= this.price) {
				setVar(VARIABLE_GOLD, getVar(VARIABLE_GOLD, 0) - this.price);
				setVar(variable, numInPack);
				sendVirtualAssistantMessage("Transaction complete");
				return true;
			}
			else {
				sendVirtualAssistantMessage(NOT_ENOUG_GOLD);
				return false;
			}
		},
		defaultMenu);
}

function createUniqueShopItem(name, price, variable, InfoMessages) {
		return createBaseShopItem(
		name, 
		price, 
		function () { return !this.isActive },  			//isAvailForSale
		function () { return !getVar(variable, false); }, 	//isActive
		function () { showItemInfo(InfoMessages);}, 		//showInfo
		function () { 														//tryBuy
			if (getVar(VARIABLE_GOLD, 0) >= this.price) {
				setVar(VARIABLE_GOLD, getVar(VARIABLE_GOLD, 0) - this.price);
				setVar(variable, true);
				return true;
			}
			else {
				sendVirtualAssistantMessage(NOT_ENOUG_GOLD);
				return false;
			}
		},
		defaultMenu);
}


function defaultMenu(){
	sendVirtualAssistantMessage(this.name + " costs " + this.price + " gold");
	sendVirtualAssistantMessage("Do you wish to make a purchase, get some information or exit?");
    while (true) {
		let shopAnswer = createInput("Buy", "Info", "Return");
		shopAnswer.clearOptions();	
		if (shopAnswer.isLike("Buy")) {
			this.tryBuy();
        } else if (shopAnswer.isLike("Info")) {
			this.showInfo();
		} else if (shopAnswer.isLike("Return")){
			break;
        } else {
            sendVirtualAssistantMessage("Choose something else %SlaveName%");
        }
		shopAnswer.clearOptions();		
	}
}


function showDefaultInfo(){
	sendVirtualAssistantMessage("It is obvious %SlaveName%.");
}

function showItemInfo(info){
	sendVirtualAssistantMessages(info);
}


function chestInfo(){
	sendVirtualAssistantMessages([
		"Treasure chests are divided into four different types",
		"Common, rare, epic and legendary",
		"Each time you but a chest it will be one of these four",
		"Treasure chests can contain a very large variety of items",
		"All for you to discover",
		"The price is " + this.price + " gold"]);
}

function chestTryBuy(){
	sendVirtualAssistantMessage("Chest\'s are currently unavailable for purchase");
	return false;
}

function payTributeInfo(){
	sendVirtualAssistantMessages([
		"If you wish to boost your score with your domme",
		"Try paying her a tribute",
		"Willingly donating gold to her sends a powerfull message about wanting to serve",
		"The price is " + this.price + " gold"]);
}

function payTributeTryBuy(){
	sendVirtualAssistantMessage("Paying tribute..");
	if (tryBuyShopItem(this.price)){
		changeMeritHigh(false);
		changeMeritHigh(false);
		sendVirtualAssistantMessage("Payment succesfull");
	}
}
function doublePayTributeTryBuy(){
	sendVirtualAssistantMessage("Paying tribute..");
	if (tryBuyShopItem(this.price)){
		changeMeritHigh(false);
		changeMeritHigh(false);
		changeMeritHigh(false);
		changeMeritHigh(false);
		sendVirtualAssistantMessage("Payment succesfull");
	}
}

function moodbosterInfo(){
	sendVirtualAssistantMessages([
		"Moodbooster is a 7 day system",
		"For 7 days the likeliness of your domme to be in a good mood is higher",
		"Willingly donating gold to her sends a powerfull message about wanting to serve",
		"The price is " + this.price + " gold"]);
}

function atonementInfo(){
	sendVirtualAssistantMessages([
		"If you wish to have your punishment points reduced by paying gold",
		"This is possible",
		"The price is " + this.price + " gold per punishment point", 
		"You must at least spend a minimum of 100 gold"]);
}

function atonementTryBuy(){
	
	sendVirtualAssistantMessage("You have " + getVar(VARIABLE_GOLD, 0) + " gold");
	
	let BuyOff = createIntegerInput("How much gold do you wish to buy for?", 100, 100000, 'That\'s not a number. Try again %SlaveName%', 'You must at least spend a minimum of 100 gold. Try again %SlaveName%');
	if (BuyOff <= 0)
		return false;
	if (BuyOff > getVar(VARIABLE_GOLD, 0)){
		sendVirtualAssistantMessage("You can't spend more gold than you have.")
		return false;
	}
	sendVirtualAssistantMessage("Making the purchase...")
	setVar(VARIABLE_GOLD, getVar(VARIABLE_GOLD, 0) - BuyOff);
	setVar(VARIABLE_PUNISHMENT_POINTS, getVar(VARIABLE_PUNISHMENT_POINTS, 0) - BuyOff/this.price);
	return true;
}

function commonPackInfo(){
	sendVirtualAssistantMessages([
		"Module pack unlocking features within your " + this.name.replace(' Pack','') + " modules",
        "The price per pack is " + this.price + " gold"]);
}

function choresPackInfo(){
	sendVirtualAssistantMessages([
		"If you wish to expand your variety of chores",
        "You need to buy a chore pack",
		"Each pack unlocking several different chores",
        "Also giving you additional ways of earning gold",
		"The price per pack is " + this.price + " gold"]);
}

function implementInfo() {
	sendVirtualAssistantMessages([
		"If you're into spanking you might wish for a bit more variety          ",
		"By default you have 3 spankings implements                             ",
		"But you can buy a fourth and fifth each costing " + this.price + " gold"]);
}

function spankchoirInfo() {
	sendVirtualAssistantMessages([
		"SpankzChoir is a place where you can sell your ass for a spanking",
		"A 30 day subscribtion is " + this.price + " gold                 "]);
}

function  unlockDenialInfo() {
	sendVirtualAssistantMessages([
		"If you have locked yourself from changing your denial settings",
		"And can't wait for them to unlock again                       ",
		"You can pay " + this.price + " gold to have them unlocked	   "]);
}

function  lotteryTicketInfo() {
	sendVirtualAssistantMessages([
		"Every friday a lottery number is picked			",
		"If you have a winning ticket you earn a lot of gold",
		"The price for a ticket is " + this.price + " gold	"]);
}

function getEndGameShopItems()
{
	let items = [];
	for (let i = 0; i < ENDGAME_ITEMS.length; i++){
		if (!ENDGAME_ITEMS[i].isActive()){
			items.push(ENDGAME_ITEMS[i].name);
		}
	}
	items.push("Return");
	return items;
}

function getEndGameShopItemsMessages()
{
	let messages = [];
	for (let i = 0; i < ENDGAME_ITEMS.length; i++){
		if (ENDGAME_ITEMS[i].isActive()){
			messages.push(this.name + " --- sold");
		} else {
			messages.push(ENDGAME_ITEMS[i].name + " --- " + price +" gold");
		}
	}
	return messages;
}


function endGamesMenu(){
	this.info();
	
	let buttons = [];
	

    while (true) {
		sendVirtualAssistantMessages(getEndGameShopItemsMessages(), false);
		showMenuButtons(getEndGameShopItems());
		
		let correctInput = false;
		let shopAnswer = createInput();
		for (let i = 0; i < ENDGAME_ITEMS.length; i++){
			if (!ENDGAME_ITEMS[i].isActive() && (shopAnswer.getAnswer() == ENDGAME_ITEMS[i].name)){
				correctInput = true;
				shopAnswer.clearOptions();
				ENDGAME_ITEMS[i].menu();
			}
		}
		if (shopAnswer.isLike("Return")){
			break;
        } 
		if (!correctInput){
            sendVirtualAssistantMessage("Choose something else %SlaveName%");
        }
		shopAnswer.clearOptions();		
	}
}
