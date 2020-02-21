function addGold(amount) {
    const gold = getGold();

    if(gold + amount > 0) {
        setVar(VARIABLE_GOLD, gold + amount);
    } else {
        setVar(VARIABLE_GOLD, 0);
    }
}

function trySpendGold(amount) {
	const gold = getGold();
	
	if (gold >= price) {
		setVar(VARIABLE_GOLD, gold - price);
		return true;
	}
	else {
		return false;
	}
}
}

function rewardGoldHigh() {
	switch (getMood()) {
		case VERY_PLEASED_MOOD:
			addGold(randomInteger(70, 120));
			break;
		case PLEASED_MOOD:
			addGold(randomInteger(50, 100));
			break;
		case NEUTRAL_MOOD:
			addGold(randomInteger(40, 80));
			break;
		case ANNOYED_MOOD:
			addGold(randomInteger(30, 60));
			break;
		case VERY_ANNOYED_MOOD:
			addGold(randomInteger(20, 50));
			break;
	}
}

function rewardGoldMedium() {
	switch (getMood()) {
		case VERY_PLEASED_MOOD:
			addGold(randomInteger(30, 60));
			break;
		case PLEASED_MOOD:
			addGold(randomInteger(20, 50));
			break;
		case NEUTRAL_MOOD:
			addGold(randomInteger(10, 40));
			break;
		case ANNOYED_MOOD:
			addGold(randomInteger(5, 30));
			break;
		case VERY_ANNOYED_MOOD:
			addGold(randomInteger(1, 20));
			break;
	}
}

function rewardGoldLow() {
	switch (getMood()) {
		case VERY_PLEASED_MOOD:
			addGold(randomInteger(30, 40));
			break;
		case PLEASED_MOOD:
			addGold(randomInteger(20, 30));
			break;
		case NEUTRAL_MOOD:
			addGold(randomInteger(10, 20));
			break;
		case ANNOYED_MOOD:
			addGold(randomInteger(5, 15));
			break;
		case VERY_ANNOYED_MOOD:
			addGold(randomInteger(1, 10));
			break;
	}
}

function getGold() {
	return getVar(VARIABLE_GOLD, 0);
}