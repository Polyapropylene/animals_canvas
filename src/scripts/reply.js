function reply(body, response) {
    var replyData = {
        type: "raw",
        body: body
    };    
    response.replies = response.replies || [];
    response.replies.push(replyData);
}

function deleteReplies(context){
    if (context !== undefined && context.response !== undefined && context.response.replies !== undefined && context.response.replies.length > 0){
        delete context.response.replies;
    }
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


function addSuggestions(suggestions, context) {
    var buttons = [];
    
    suggestions.forEach(function(suggest) {
        buttons.push(
            {
                action: {
                    text: suggest,
                    type: "text"
                },
                title: suggest
            }
        );
    });
    
    reply({"suggestions": {"buttons": buttons}}, context.response);
}

function makeTextReply(text, pronounceText, context){
    var body = {
        items:[{
                bubble:{
                    type: "text",
                    text: text
                }
            }],
        pronounceText: pronounceText
    }
    reply(body, context.response);
}

function getBodyForRunApp(){
    var systemName = $jsapi.context().injector.system_name;
    var body = {
        server_action: {
                app_info: {
                    systemName: "SberfriendGeneralBase"
                },
                parameters:{
                    scenario_id: systemName
                }
        }
    }
    return body;
}
