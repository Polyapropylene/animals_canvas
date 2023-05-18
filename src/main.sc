require: scripts/funcs.js
require: scripts/wrong_texts_get.js
require: scripts/array.js

require: scenarios/scenario.sc


patterns:
    $continue = (Продолжить/Останься/Остаться/Отмени/Передумал/Случайно/Ой/Продолжай/Продолжить медитацию/не переходи/Стой)
    $goMenu = (Выбрать вид отдыха/Вернись в начало/Покажи список упражнений/Вернуться в начало/В меню/к Началу/в начало/Покажи разделы/Покажи все разделы/Другой вид отдыха)
    #$exit = (назад)
    #$slide = (Следующий/Вперед/Дальше/Еще)
    
theme: /

    state: closeAppState
        event!: closeApp
        script:
            var sessionKeys = Object.keys($session);
            for (var i = 0; i<sessionKeys.length; i++){
                if (sessionKeys[i] !== 'slot' || sessionKeys[i] !== 'contextPath' || sessionKeys[i] !== 'contextHistory' || sessionKeys[i] !== 'transitionsHistory' || sessionKeys[i] !== 'employeeId' || sessionKeys[i] !== 'deviceSurface'|| sessionKeys[i] !== 'platformType'){
                    delete $session[sessionKeys[i]];    
                }
            }
            $jsapi.stopSession();
            $response.endSession = true;