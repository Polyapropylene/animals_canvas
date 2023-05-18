  function images() {
       
          return [
        
          'https://cdn.sberdevices.ru/temp/sberfriend/RestMinutes/1Cat1.jpg',
          'https://cdn.sberdevices.ru/temp/sberfriend/RestMinutes/1Cat2.jpg', 
          'https://cdn.sberdevices.ru/temp/sberfriend/RestMinutes/1Cat3.jpg',   
          'https://cdn.sberdevices.ru/temp/sberfriend/RestMinutes/1Cat4.jpg', 
          'https://cdn.sberdevices.ru/temp/sberfriend/RestMinutes/1Cat5.jpg',
          'https://cdn.sberdevices.ru/temp/sberfriend/RestMinutes/1Cat6.jpg',
          'https://cdn.sberdevices.ru/temp/sberfriend/RestMinutes/1Cat7.jpg',
          'https://cdn.sberdevices.ru/temp/sberfriend/RestMinutes/1Cat8.jpg',    
          'https://cdn.sberdevices.ru/temp/sberfriend/RestMinutes/1Cat9.jpg',
          'https://cdn.sberdevices.ru/temp/sberfriend/RestMinutes/1Cat10.jpg',
          'https://cdn.sberdevices.ru/temp/sberfriend/RestMinutes/1Cat11.jpg',
          'https://cdn.sberdevices.ru/temp/sberfriend/RestMinutes/1Cat12.jpg',
          'https://cdn.sberdevices.ru/temp/sberfriend/RestMinutes/1Cat13.jpg',
          'https://cdn.sberdevices.ru/temp/sberfriend/RestMinutes/1Cat14.jpg',
          'https://cdn.sberdevices.ru/temp/sberfriend/RestMinutes/1Cat15.jpg',
          'https://cdn.sberdevices.ru/temp/sberfriend/RestMinutes/1Cat16.jpg',
          'https://cdn.sberdevices.ru/temp/sberfriend/RestMinutes/1Cat17.jpg',
          'https://cdn.sberdevices.ru/temp/sberfriend/RestMinutes/1Cat18.jpg',
          'https://cdn.sberdevices.ru/temp/sberfriend/RestMinutes/1Cat19.jpg',
          'https://cdn.sberdevices.ru/temp/sberfriend/RestMinutes/1Cat20.jpg',
          'https://cdn.sberdevices.ru/temp/sberfriend/RestMinutes/1Cat21.jpg',
          'https://cdn.sberdevices.ru/temp/sberfriend/RestMinutes/1Cat22.jpg',
          'https://cdn.sberdevices.ru/temp/sberfriend/RestMinutes/1Cat23.jpg',
          'https://cdn.sberdevices.ru/temp/sberfriend/RestMinutes/1Cat24.jpg',
          'https://cdn.sberdevices.ru/temp/sberfriend/RestMinutes/1Cat25.jpg'
      
      ];
  }
 
 
 function getBodyForSkill(){
    var body = {};
    var sysName = "";
    var startEvent = ""; 
    
    sysName = $jsapi.context().injector.system_name_minute;
    startEvent = "RELAXATION_TYPES";

    body = {
        server_action:{
            app_info: {
                systemName: sysName
            },
            action_id: startEvent,
            parameters: {
                system_name_caller: $jsapi.context().injector.system_name_caller,
                action_caller: $jsapi.context().injector.caller_start
            }
        }
    }
    return body;
}

function runApp2(body){
    delete $jsapi.context().response.replies;
    $jsapi.context().response.replies = [];
    $jsapi.context().response.replies.push({
        type: "raw",
        messageName: "POLICY_RUN_APP",
        body: body
    })
}