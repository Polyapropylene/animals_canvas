theme: /
    state: start
        intent: /fury_antidepressant
        script: 
            sendToFront({list: images()}, {}) 
            

    state: Continue
        event!: PRESS_CONTINUE
        q!: $continue
        script:
            log("goBackEvent1");
            sendToFront("hidePopUp", {})
            sendAnswer_Speech(".")
            
    state: nextSlide
        intent!: /next
        script:
            log("FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF");
            sendToFront("nextSlide", {})   

    state: prevSlide
        intent!: /back
        script:
            log("BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB");
            sendToFront({}, {goBack: 'goBack'});     
            
    state: goBackMenu
        event!: FINISH_FROM_CANVAS_GO_MENU
        q!: $goMenu
        script:
            log("goBackEvent2");
            var sessionKeys = Object.keys($session);
            for (var i = 0; i<sessionKeys.length; i++){
                if (sessionKeys[i] !== 'slot' || sessionKeys[i] !== 'contextPath' || sessionKeys[i] !== 'contextHistory' || sessionKeys[i] !== 'transitionsHistory' || sessionKeys[i] !== 'employeeId' || sessionKeys[i] !== 'deviceSurface'|| sessionKeys[i] !== 'platformType'){
                    delete $session[sessionKeys[i]];    
                }
            }
            closeApp($context)
            var body = finish_canvas("SM_Minuta_otdyha", "FINISH_FROM_CANVAS_GO_MENU")
            runAppNew(body)
            $jsapi.stopSession();
            $response.endSession = true;
            
                
    state: goBackEventVoiced
        intent!: /exitVoiced
        script:
            log("go to goBackEvent WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW");
            //sendToFront("shutDownCanvas", {})  
            
            //this is the state to transit to after the finish
            //go!: /StartNode/relaxationTypesCellsListGet
            var body = getBodyForSkill();
            runApp2(body);
            
            
            //another alternative
            //$session.fromCanvas = false
            //$reactions.transition("/goBackEvent")

    state: noMatchEvent
        event: noMatch
        script:
            sendAnswer_Speech("Извините, запутался. Повторите, хотите продолжить медитацию или выбрать другой вид отдыха?")
            sendToFront("showPopUp", {upperText: "Извините, запутался.", lowerText: "Повторите, хотите продолжить медитацию или выбрать другой вид отдыха?", buttons: [ {text: "Другой вид отдыха", eventName: "FINISH_FROM_CANVAS_GO_MENU"}, {text: "Продолжить", eventName: "PRESS_CONTINUE"},]});