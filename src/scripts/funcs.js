function openScreen(data, context){
    addAction({
        type: "init",
        data:data
    }, context, "udovolstvie")
}

function randomElement(answer){
    return answer[Math.floor(Math.random() * answer.length)]
}

function getTextMeditation(){
    var array = ["Остановитесь. Проведите эту минуту осознанно. смотрите на экран.", "Прислушайтесь к внутреннему голосу. Дышите глубоко и спокойно. внимание на экран.", "Расслабьтесь. Дышите. Смотрите на экран.", "Сосредоточьтесь на дыхании и взгляните на экран.", "Минутка осознанности начинается. Сосредоточьтесь на дыхании и посмотрите на экран."]
    return randomElement(array)
}

function sendAnswer_Speech(speech) {
    var reply = {
        type: "raw",
        body: {
            "pronounceText": speech
        }
    };
    $jsapi.context().response.replies = $jsapi.context().response.replies || [];
    $jsapi.context().response.replies.push(reply);
}


function addAction(action, context, emotion_type) {
    var command = {
        type: "smart_app_data",
        smart_app_data: action
    };
    var emotion = {
        emotionId: emotion_type
    };


    for (var index = 0; context.response.replies && index < context.response.replies.length; index ++) {
        if (context.response.replies[index].type === "raw" &&
            context.response.replies[index].body &&
            context.response.replies[index].body.items
        ) {
            context.response.replies[index].body.items.push({command: command});
            context.response.replies[index].body["emotion"] = emotion;
            return;
        }
    }
    
    return reply({emotion: emotion, items: [{command: command}]}, context.response);
}


function closeApp(context){
    addAction({
        commandName: "closeApp",
        commandParams:{}
    },context, "udovolstvie");
}



function send_to_front_comply(name, val){
    $jsapi.context().response.replies = $jsapi.context().response.replies || [];
    $jsapi.context().response.replies.push(
        {
            type: "raw",
            body: {
                items: [
                        {
                            "command": {
                                "type":"smart_app_data",
                                "smart_app_data": {
                                    commandName: name,
                                    commandParams: val
                                }
                            }
                        }
                    ]
            }
        }
    )
}




function getParametersForEvent(){
    var parameters = {
        timeStamp: 0,
        timeOffset: 0
    }
    var timeData = getTimeDataFromMessage();
    parameters = {
        timeStamp: timeData.timeStamp,
        timeOffset: timeData.timeOffset
    }
    return parameters;
}


function getAppInfoBody(systemNameKey, actionId, parameters){
    var body = {
                    server_action: {
                            app_info: {
                                systemName: systemNameKey
                            },
                            action_id: actionId,
                            parameters: parameters
                        }
                    
    }
    return body;
}


                       
function runApp(systemNameKey, actionId, body){
    delete $jsapi.context().response.replies;
    $jsapi.context().response.replies = [];
    $jsapi.context().response.replies.push({
        type: "raw",
        finished: true,
        messageName: "POLICY_RUN_APP",
        body: body,
    })
}



function getTimeDataFromMessage(){
    var timeData = {
        timeStamp: (new Date()).getTime(),
        timeOffset: 0
    };
    var request = $jsapi.context().request;
    if (request.rawRequest !== undefined && request.rawRequest.payload !== undefined && request.rawRequest.payload.meta !== undefined && request.rawRequest.payload.meta.time !== undefined && request.rawRequest.payload.meta.time.timestamp !== undefined && request.rawRequest.payload.meta.time.timezone_offset_sec !== undefined){
        timeData.timeStamp = request.rawRequest.payload.meta.time.timestamp;
        timeData.timeOffset = request.rawRequest.payload.meta.time.timezone_offset_sec;
    }
    return timeData;
}

function reply(body, response) {
    var replyData = {
        type: "raw",
        body: body
    };    
    response.replies = response.replies || [];
    response.replies.push(replyData);
}


function sendToFront(name, val){
    $jsapi.context().response.replies = $jsapi.context().response.replies || [];
    $jsapi.context().response.replies.push(
        {
            type: "raw",
            body: {
                items: [
                        {
                            "command": {
                                "type":"smart_app_data",
                                "smart_app_data": {
                                    commandName: name,
                                    commandParams: val
                                }
                            }
                        }
                    ]
            }
        }
    )
}



function finish_canvas(system_name, action){
    var body = {
                    server_action: {
                            app_info: {
                                systemName: system_name
                            },
                            action_id: action
                    }
                    
    }
    return body;
}


function runAppNew(body){
    delete $jsapi.context().response.replies;
    $jsapi.context().response.replies = [];
    $jsapi.context().response.replies.push({
        type: "raw",
        finished: true,
        messageName: "RUN_APP",
        body: body
    })
}

function makeTextReply(text, speakText) {
    if (!text) {
        return;
    }
    if (typeof speakText === 'undefined'){
        speakText = text;
    }
    $jsapi.context().response.replies = $jsapi.context().response.replies || [];
    $jsapi.context().response.replies.push({
        "type": "text",
        "text": text,
        auto_listening: true,
        "ssml": "<speak>" + speakText + "</speak>"
    });
}