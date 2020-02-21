{
	let previousSender = getCurrentSender();
	setCurrentSender(SENDER_ASSISTANT);
	
	sendVirtualAssistantMessage("Welcome to the shop %SlaveName%");

	let wantExit = false;
	while (!wantExit) {
		wantExit = false;
		sendVirtualAssistantMessage("You have " + getVar(VARIABLE_GOLD, 0) + " gold");
		sendVirtualAssistantMessage("You can buy the following things %SlaveName%:");		
		sendVirtualAssistantMessages(getMainShopItemsMessages(), false);
		showMenuButtons(getMainShopItems());

		let correctInput = false;
		let shopAnswer = createInput();
		for (let i = 0; i < SHOP_ITEMS.length; i++){
			if (SHOP_ITEMS[i].isAvailForSale() && (shopAnswer.getAnswer() == SHOP_ITEMS[i].name)){
				correctInput = true;
				shopAnswer.clearOptions();
				SHOP_ITEMS[i].showMenu();
			}
		if (shopAnswer.isLike("Return"))
			wantExit = true;
		}
		if (!wantExit && !correctInput)
		{
			sendVirtualAssistantMessage("You have to make another choice");
			shopAnswer.loop();
		}
		shopAnswer.clearOptions();
	}  
    setCurrentSender(previousSender);	
}

function getMainShopItems()
{
	let items = [];
	for (let i = 0; i < SHOP_ITEMS.length; i++){
		if (SHOP_ITEMS[i].isAvailForSale()){
			items.push(SHOP_ITEMS[i].name);
		}
	}
	items.push("Return");
	return items;
}

function getMainShopItemsMessages()
{
	let messages = [];
	for (let i = 0; i < SHOP_ITEMS.length; i++){
		if (SHOP_ITEMS[i].isAvailForSale()){
			messages.push(SHOP_ITEMS[i].name + " --- " + SHOP_ITEMS[i].price +" gold");
		}
	}
	return messages;
}

function chestHelp(){
	sendVirtualAssistantMessages([
		"Treasure chests are divided into four different types",
		"Common, rare, epic and legendary",
		"Each time you but a chest it will be one of these four",
		"Treasure chests can contain a very large variety of items",
		"All for you to discover"]);
}

/*function payTributeMenu(){
}*/