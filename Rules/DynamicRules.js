const AVAILABLE_RULES = [];

let RULE_ALWAYS_WEAR_COLLAR;

let RULE_ALWAYS_NAKED_SESSIONS;

let RULE_ALWAYS_HONORIFIC;

let RULE_NEVER_SWALLOW_SPIT;

let RULE_ALWAYS_THANK_FOR_ORGASM;

let RULE_ALWAYS_SWALLOW_CUM;

let RULE_DOMME_KEYHOLDER;

{
    let ruleId = 0;

    let rule = RULE_ALWAYS_WEAR_COLLAR = createRule(ruleId++, false);
    rule.getRulePrint = function () {
        return 'Whenever you are not in public you must wear your collar';
    };

    rule.checkRule = function () {
        if (this.isActive()) {
            sendMessage('%SlaveName%');

            if (sendYesOrNoQuestion('Are you wearing your collar?')) {
                sendMessage('%Good%');
                sendMessage('Because you must wear your collar whenever you are alone!');
                return true;
            } else {
                sendMessage('%EmoteSad%');
                sendMessage('You know you have to whenever you are alone');
                sendMessage('And not obeying rules will result in punishment points');

                //QUALITY: Ask to put on

                addPunishmentPoints(getPPRuleIgnored());
                changeMeritMedium(true);
            }
        }

        return false;
    };

    rule.canBeActivated = function () {
        return COLLAR_TOY.hasToy() && !this.isActive();
    };

    rule.sendIntroduction = function () {
        sendMessage('You know %SlaveName%...');
        sendMessage('I really like you collared');
        sendMessage('And I think it is a great sign of your submission to me and my ownership of you %Grin%');

        if(!COLLAR_TOY.isToyOn()) {
            if(!putOnCollar()) {
                sendMessage('...');
                sendMessage('Let\'s deal with this a different time');
                return;
            }

            sendMessage('Much better isn\'t it?');
        }

        sendMessage('I just like the symbolic feeling this gives me');
        sendMessage('%Moan%');
        sendMessage('I have been playing with this thought for a longer time now...');

        if(isEnforcingPersonality()) {
            sendMessage('And I want you to wear it whenever you can');
            sendMessage('So definitely during our sessions and additionally whenever you are home alone');
            sendMessage('You should always feel owned by me and this will remember you of that');
            sendMessage('So make sure to wear it whenever possible from now on %SlaveName%');
        } else {
            sendMessage('And I think you should wear it whenever you can');
            sendMessage('So definitely during our sessions and additionally whenever you are home alone');
            sendMessage('You should always feel owned by me and this will remember you of that');

            if(!sendYesOrNoQuestion('Would you do that for me %SlaveName%')) {
                changeMeritMedium(true);
                sendMessage('%EmoteSad%');
                sendMessage('I hope you will reconsider this %SlaveName%');
                return;
            }

            sendMessage('%Good%');
            sendMessage('You don\'t know how happy that makes me %EmoteHappy%');
            sendMessage('Knowing that you will always be remembered of me by that collar around your neck %Grin%');
            changeMeritMedium(false);
        }


        this.setActive(true);
        return true;
    };

    AVAILABLE_RULES.push(rule);


    //Honorific rule

    rule = RULE_ALWAYS_HONORIFIC = createRule(ruleId++, false);
    rule.getRulePrint = function () {
        return 'When you talk to your %DomHonorific% you must always address her as %DomHonorific%';
    };

    rule.sendIntroduction = function () {
        sendMessage('You know %SlaveName%...');
        sendMessage('I want to take the next small step with you towards being my and only MY slave %Grin%');
        sendMessage('So I think you should address me properly');
        sendMessage('From now on I will always be your %DomHonorific%');
        sendMessage('And you will treat me with respect and address me as such');
        sendMessage('So you will address me as your %DomHonorific% in all questions, begging or any answer to my questions');

        let honorific = replaceVocab('%DomHonorific%');
        let answer = sendInput('Is that understood?');

        while(true) {
            if(answer.isLike('Yes')) {
                if(answer.toLowerCase().indexOf(honorific.toLowerCase()) === -1) {
                    sendMessage('Sigh...');
                    sendMessage('What did I just tell you?');
                    sendMessage('You will address me PROPERLY %SlaveName% using %DomHonorific%');
                    registerForgetHonorific();
                    sendMessage('Is this understood %SlaveName%?');
                    answer.loop();
                } else {
                    sendMessage('%Good% %EmoteHappy%');
                    break;
                }
            } else if(answer.isLike('no')) {
                if(answer.toLowerCase().indexOf(honorific.toLowerCase()) === -1) {
                    sendMessage('Sigh...');
                    sendMessage('You really didn\'t understand did you?');
                    changeMeritMedium(true);
                } else {
                    sendMessage('Is it that hard to understand?');
                    sendMessage('I mean you already did it properly this time');
                }

                sendMessage('You will always address me as your %DomHonorific% from now on');
                sendMessage('So if you would answer "Yes" normally you will answer with "Yes %DomHonorific%" from now one. Same goes for "please", questions and basically everything else');
                sendMessage('Is this understood %SlaveName%?');
                answer.loop();
            } else {
                sendMessage('%YesOrNo%');
                answer.loop();
            }
        }

        sendMessage('Now that that\'s settled let\'s get back to where we\'ve been %Grin%');

        this.setActive(true);
        return true;
    };

    AVAILABLE_RULES.push(rule);

    //Naked rule

    rule = RULE_ALWAYS_NAKED_SESSIONS = createRule(ruleId++, false);

    rule.getRulePrint = function () {
        return 'You must be naked during sessions unless told otherwise';
    };

    rule.sendIntroduction = function () {
        sendMessage('You being naked means I have immediate access to your whole body');
        sendMessage('And furthermore there is no world where you would need your clothes right?');
        sendMessage('Heck, you don\'t even deserve to wear clothes when I am around');
        sendMessage('Which is why I want to see you naked from now on whenever you come and see me');
        sendMessage('Unless I tell you otherwise of course');
        sendMessage('If I see you wearing clothes around me at any point you will not like what awaits you %Grin%');
        sendMessage('So keep that in mind');

        this.setActive(true);
        return true;
    };

    rule.checkRule = function () {
        sendMessage('%SlaveName%');

        if (sendYesOrNoQuestion('Are you naked?')) {
            sendMessage('%Good%');

            if (this.isActive()) {
                sendMessage('Because as you know you must be naked during our sessions %Grin%');
            } else {
                changeMeritLow(false);
                sendMessage("Good, I like it when you're all exposed and vulnerable %EmoteHappy%");
            }

            return true;
        } else {
            if (this.isActive()) {
                sendMessage('%EmoteSad%');

                changeMeritMedium(true);
                sendMessage('%SlaveName%...');

                let answer = sendYesOrNoQuestionTimeout('You know the rule don\'t you?', 5);

                if (answer === ANSWER_YES) {
                    sendMessage('So there is no reason why you shouldn\'t follow it now!');
                } else if(answer === ANSWER_NO) {
                    sendMessage('No?');
                    sendMessage('Seems like I need to refresh your memory');
                    sendMessage('Whenever we meet you are to be completely naked unless I tell you otherwise');
                }

                addPunishmentPoints(getPPRuleIgnored());

                sendMessage('Go ahead and strip naked');
                sendMessage('Don\'t you dare report back to me before you are completely naked');
                waitForDone();
                sendMessage('I do not tolerate disobedience %SlaveName%');
                sendMessage('I\'ve added punishment points to your record');
                sendMessage('Don\'t dare to disobey me again!');
            } else {
                sendMessage("That's no good %SlaveName%");
                sendMessage("I want you naked from head to toe");

                let answer = sendInput("Can you do that for me?");

                while (true) {
                    if (answer.isLike("yes")) {
                        changeMeritLow(false);
                        sendMessage("%Good%");
                        sendMessage("Go ahead and take everything off");
                        lockImages();
                        sendMessage("I'll show you some pictures in the meantime", 0);
                        showCategoryImage("LESBIAN", 5);
                        sendMessage("Just to get you in the mood %EmoteHappy%", 0);
                        showCategoryImage("HARDCORE", 5);

                        if (isInChastity()) {
                            sendMessage("Even though you can't get hard inside that %ChastityCage% %Grin%", 0);
                        } else {
                            sendMessage("To make sure your %Cock% gets hard", 0);
                        }

                        showCategoryImage("BLOWJOB", 5);

                        sendMessage("To get your blood pumping", 0);
                        showCategoryImage("HARDCORE", 5);

                        if (isInChastity()) {
                            sendMessage("Is it getting tight in that little cage of yours? %Grin%");
                        }

                        unlockImages();
                        sendMessage("Put all your clothes in a neat pile beside you");
                        sendMessage("Or just throw them on the floor, what do I care %Lol%");
                        sendMessage("If I were with you right now");
                        sendMessage("I'd walk around you");
                        sendMessage("Checking out your naked body");
                        sendMessage("Every flaw and every quality");
                        sendMessage("I would point out the good...");
                        sendMessage("And scold you for the bad %lol%");
                        sendMessage("Not just your %Cock% is mine %SlaveName%");
                        sendMessage("Your whole body belongs to me");
                        sendMessage("Don't forget that");
                        return true;
                    } else if (answer.isLike("no")) {
                        changeMeritHigh(true);
                        sendMessage("Hm so that's how it's going to be huh...?");
                        sendMessage("I don't like disobedient slaves...");
                        sendMessage("Suit yourself %SlaveName%");
                        break;
                    } else {
                        sendMessage(YES_OR_NO);
                        answer.loop();
                    }
                }
            }

            return false;
        }
    };

    AVAILABLE_RULES.push(rule);

    //Never swallow spit

    rule = RULE_NEVER_SWALLOW_SPIT = createRule(ruleId++, false);

    rule.getRulePrint = function () {
        return 'Only swallow cum and never swallow spit';
    };

    rule.checkRule = function () {
        if (this.isActive()) {
            sendMessage('%SlaveName%');

            if (!sendYesOrNoQuestion('Did you swallow any spit?')) {
                sendMessage('%Good%');
                sendMessage('Because as you know you aren\'t allowed to swallow any spit %Grin%');
                return true;
            } else {
                sendMessage('%EmoteSad%');
                sendMessage('You know you aren\'t allowed to swallow spit!');
                sendMessage('And you should also know not obeying rules will result in punishment points');

                addPunishmentPoints(getPPRuleIgnored());
                changeMeritMedium(true);
            }
        }

        return false;
    };

    rule.sendIntroduction = function () {
        sendMessage('Now there is one very important rule that you should never forget');
        sendMessage('Good sissies never swallow their spit %Grin%');

        if (getSissyLimit() === LIMIT_NEVER) {
            sendMessage('Well you aren\'t a sissy but this rule applies to good slaves too')
        } else {
            if (getSissyLimit() === LIMIT_NEVER_ASKED || getSissyLimit() === LIMIT_ASKED_MAYBE) {
                sendMessage('Well you aren\'t a sissy yet but we will get there %Grin%');
                sendMessage('My little sissy bitch %Lol%');
            }
        }

        sendMessage('And because you want to please me and I want you to be one...');
        sendMessage('You will follow this rule from now on');

        this.setActive(true);

        return true;

    };

    AVAILABLE_RULES.push(rule);

    //Always thank for orgasm
    rule = RULE_ALWAYS_THANK_FOR_ORGASM = createRule(ruleId++, false);

    rule.getRulePrint = function () {
        return 'You must thank %DomHonorific% %DomName% for every single orgasm you have';
    };

    rule.sendIntroduction = function () {
        sendMessage('I own your orgasms %Grin%');
        sendMessage('And every single one of them is a rare gift');
        sendMessage('Which is why you will thank me for them from now on');
        sendMessage('Every single one %EmoteHappy%');
        sendMessage('No matter if it is a full orgasm or a ruined one');
        sendMessage('A ruined orgasm is still an orgasm %Lol%');

        this.setActive(true);
        return true;

    };

    AVAILABLE_RULES.push(rule);

    //Always swallow cum
    rule = RULE_ALWAYS_SWALLOW_CUM = createRule(ruleId++, false);

    rule.getRulePrint = function () {
        return 'You must swallow whatever cum you produce unless told otherwise';
    };

    rule.checkRule = function () {
        if (this.isActive()) {
            sendMessage('%SlaveName%');

            if (!sendYesOrNoQuestion('Did you swallow any spit?')) {
                sendMessage('%Good%');
                sendMessage('Because as you know you aren\'t allowed to swallow any spit %Grin%');
                return true;
            } else {
                sendMessage('%EmoteSad%');
                sendMessage('You know you aren\'t allowed to swallow spit!');
                sendMessage('And you should also know not obeying rules will result in punishment points');

                addPunishmentPoints(getPPRuleIgnored());
                changeMeritMedium(true);
            }
        }

        return false;
    };

    rule.sendIntroduction = function () {
        sendMessage('I own your orgasms %Grin%');
        sendMessage('And that is how it is supposed to be');
        sendMessage('But that nasty cum of yours is a problem');
        sendMessage('It stains stuff, it\'s disgusting and I think you should pay for your orgasm');
        sendMessage('So from now on there will be not even a single drop of cum that leaves your cock that\'s not gonna land in your dirty mouth');
        sendMessage('Which means unless I tell you otherwise you will always lick up and swallow your cum');
        sendMessage('I don\'t care whether you like it or not');
        sendMessage('It\'s just how things are gonna be if you want to cum ever again %lol%');

        this.setActive(true);
        return true;

    };

    AVAILABLE_RULES.push(rule);

    //Domme keyholder
    rule = RULE_DOMME_KEYHOLDER = createRule(ruleId++, false);

    rule.getRulePrint = function () {
        return '%DomHonorific% %DomName% is your keyholder and decides everything regarding chastity';
    };

    rule.canBeActivated = function () {
        //No cage, partner is keyholder, chastity level below 30 or training is still active
        if(!hasChastityCage() || getVar(VARIABLE.PARTNER_IS_KEYHOLDER, false) || getVar(VARIABLE.CHASTITY_LEVEL, 0) < 30 || getVar(VARIABLE.CHASTITY_TRAINING, false)) {
            return false;
        }

        return !isVar(VARIABLE.ASKED_FOR_KEYHOLDER) || getVar(VARIABLE.ASKED_FOR_KEYHOLDER).addDay(7).hasPassed();
    };

    rule.sendIntroduction = function () {
        if(!startLongTermChastityIntro()) {
            //Somehow didn't work (no, or partner keyholder)
            return false;
        }

        this.setActive(true);
        return true;

    };

    AVAILABLE_RULES.push(rule);

    //Update all existing rules
    for (let index = 0; index < AVAILABLE_RULES.length; index++) {
        //TODO: Notify rule ended?
        AVAILABLE_RULES[index].updateRule();
    }
}

function checkRandomRule() {
    let runs = 0;
    let maxOption = 1;

    while (isChance(25) || runs <= maxOption) {
        runs++;

        let rule = null;

        switch (randomInteger(0, maxOption)) {
            case 0:
                rule = RULE_ALWAYS_WEAR_COLLAR;
                break;
            case 1:
                rule = RULE_ALWAYS_NAKED_SESSIONS;
                break;
        }

        if (rule.isActive()) {
            rule.checkRule();
            return;
        }
    }
}


function getPPRuleIgnored() {
    return 150;
}

function getRandomNewRule(permanent = true) {
    for (let index = 0; index < AVAILABLE_RULES.length; index++) {
        if (AVAILABLE_RULES[index].isPermanent() && permanent || !AVAILABLE_RULES[index].isPermanent() && !permanent) {
            if (!AVAILABLE_RULES[index].isActive()) {
                return AVAILABLE_RULES[index];
            }
        }
    }

    return null;
}

function shouldIntroduceNewRule(rule) {
    //No rules within the first 2 sessions. Get to know slave first
    if(!rule.canBeActivated() || getVar(VARIABLE.SESSION_COUNTER, 0) < 3) {
        sendDebugMessage('Rule ' + rule + ' cannot be activated or too few sessions');
        return false;
    }

    //After 12 hours this is 1 and before 0 so no two new rules in the same session
    let daysPassed = 10;

    if(isVar(VARIABLE.LAST_RULE_PASSED)) {
        daysPassed = millisToTimeUnit(getMillisSinecDate(getVar(VARIABLE.LAST_RULE_PASSED), TIME_UNIT_DAYS, 0));
    }


    sendDebugMessage('Calculating rule passed chance with last rule passed ' + daysPassed + ' days ago');
    setDate(VARIABLE.LAST_RULE_PASSED);

    return isChance(daysPassed*10);
}

function createRule(id, punishment, minDays = -1, maxDays = -1) {
    let rule = {
        id: id, punishment: punishment, minDays: minDays, maxDays: maxDays,

        getVarName: function () {
            return 'rule' + this.id;
        },

        isActive: function () {
            return getVar(this.getVarName() + 'active', false);
        },

        setActive: function (active) {
            setVar(this.getVarName() + 'active', active);
        },

        getActiveUntil: function () {
            return getVar(this.getVarName() + 'activeUntil', setDate());
        },

        addActiveUntil: function (days) {
            setDate(this.getVarName() + 'activeUntil', this.getActiveUntil().addDay(days));
        },

        hasPassed: function () {
            return this.getActiveUntil().hasPassed();
        },

        updateRule: function () {
            if (minDays > 0 && maxDays > 0) {
                if (this.hasPassed() && this.isActive()) {
                    this.setActive(false);

                    //Delete date so it is reset next time activated
                    delVar(this.getVarName() + 'activeUntil');
                } else if (!this.hasPassed() && !this.isActive()) {
                    this.setActive(true);
                }
            }
        },

        canBeActivated: function () {
            return !this.isActive();
        },

        getRulePrint: function () {
            return 'default print';
        },

        checkRule: function () {
            sendMessage('Default rule check');
            return true;
        },

        sendIntroduction: function () {
            sendMessage('Default rule introduction');
            return true;
        },

        isPermanent: function () {
            return minDays == -1 && maxDays == -1;
        },
    };

    return rule;
}