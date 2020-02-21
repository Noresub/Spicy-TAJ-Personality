{
    if (!isVar(VARIABLE.NEXT_PUNISHMENT_DAY)) {
        sendVirtualAssistantMessage("Today is thursday");
        sendVirtualAssistantMessage("Thursdays are special");
        sendVirtualAssistantMessage("Thursdays are punishment days");
        sendVirtualAssistantMessage("Since you're full time it is required that you at least launch TAJ for a weekly punishment check up");
        sendVirtualAssistantMessage("It's expected that you've brought your level of punishment points sufficiently low");
        sendVirtualAssistantMessage("If you haven't I'm adding more");
        sendVirtualAssistantMessage("A lot more!");
    } else {
        sendVirtualAssistantMessage("%SlaveName% it's thursday");
        sendVirtualAssistantMessage("Which means it's punishment day");
    }

    //Only continue if we haven't check this today
    if (!isVar(VARIABLE.NEXT_PUNISHMENT_DAY) || getDate(VARIABLE.NEXT_PUNISHMENT_DAY).hasPassed()) {
        if (isVar(VARIABLE.NEXT_PUNISHMENT_DAY) && !getDate(VARIABLE.NEXT_PUNISHMENT_DAY).sameDay(setDate())) {
            sendVirtualAssistantMessage("You've been skipping punishment day %SlaveName%!");
            sendVirtualAssistantMessage("I've added a healthy dose of punishment points for that!");
            addPunishmentPoints(300);
            sendVirtualAssistantMessage("You are expected to report on tuesdays!");
        }

        //Set the date to the next thursday
        setDate(VARIABLE.NEXT_PUNISHMENT_DAY, setDate(VARIABLE.NEXT_PUNISHMENT_DAY).addDay(7).setHour(0).setMinute(0).setSecond(0));

        sendVirtualAssistantMessage("You have " + getVar(VARIABLE.PUNISHMENT_POINTS) + " punishment points");

        if (getVar(VARIABLE.PUNISHMENT_POINTS) >= 100) {
            sendVirtualAssistantMessage("Which isn't good enough!");
            sendVirtualAssistantMessage("So I'm adding more!");
            sendVirtualAssistantMessage("Make sure you report for punishment!");
            addPunishmentPoints(250);
        }
    }
}