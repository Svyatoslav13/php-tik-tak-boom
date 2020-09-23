const tasks = `

    [
        {
            "question": "Откуда родом такие единоборства, как дзюдо, каратэ?",
            "answer1": { "result": false, "value": "Китай" },
            "answer2": { "result": true, "value": "Япония" }
        },
        {
            "question": "Самая важная фигура в шахматах — это ...",
            "answer1": { "result": false, "value": "королева" },
            "answer2": { "result": true, "value": "король" }
        },
        {
            "question": "Передача мяча другому игроку — это ...",
            "answer1": { "result": false, "value": "гол" },
            "answer2": { "result": true, "value": "пас" }
        },
        {
            "question": "Обувь для игры в футбол.",
            "answer1": { "result": false, "value": "кеды" },
            "answer2": { "result": true, "value": "бутсы" }
        },
        {
            "question": "В какую игру играет команда «Зенит»? ",
            "answer1": { "result": false, "value": "хоккей" },
            "answer2": { "result": true, "value": "футбол" }
        },
        {
            "question": "Назовите самого известного футболиста Англии.",
            "answer1": { "result": false, "value": "Месси" },
            "answer2": { "result": true, "value": "Бэкхем" }
        },
        {
            "question": "Назовите родину футбола.",
            "answer1": { "result": false, "value": "Бразилия" },
            "answer2": { "result": true, "value": "Англия" }
        },
        {
            "question": "В каком виде спорта известны: Братья Кличко?",
            "answer1": { "result": false, "value": "самбо" },
            "answer2": { "result": true, "value": "бокс" }
        },
        {
            "question": "Чем перебрасываются игроки в бадминтоне?",
            "answer1": { "result": false, "value": "мячом" },
            "answer2": { "result": true, "value": "воланом" }
        },
        {
            "question": "Какой музыкальный инструмент оповещает о начале и конце раунда в боксе?",
            "answer1": { "result": false, "value": "барабан" },
            "answer2": { "result": true, "value": "гонг" }
        },
        {
            "question": "Входят ли в программу Олимпийских игр гонки на мотоциклах?",
            "answer1": { "result": false, "value": "да" },
            "answer2": { "result": true, "value": "нет" }
        },
        {
            "question": "Если боксер не встает в течение десяти секунд — это... ",
            "answer1": { "result": false, "value": "нокдаун" },
            "answer2": { "result": true, "value": "нокаут" }
        },
        {
            "question": "Спортивная игра с мячом и ракеткой — это...",
            "answer1": { "result": false, "value": "волейбол" },
            "answer2": { "result": true, "value": "бадминтон" }
        },
        {
            "question": "Как называется сооружение для проведения спортивных соревнований?",
            "answer1": { "result": false, "value": "ипподром" },
            "answer2": { "result": true, "value": "стадион" }
        },
        {
            "question": "Какое наказание установлено за нарушение правил игры?",
            "answer1": { "result": false, "value": "штраф" },
            "answer2": { "result": true, "value": "удаление с поля" }
        },
        {
            "question": "В честь какого бога проводились Игры?",
            "answer1": { "result": false, "value": "Посейдон" },
            "answer2": { "result": true, "value": "Зевс" }
        },
        {
            "question": "Назовите талисман Олимпийских игр в Москве в 1980 году?",
            "answer1": { "result": false, "value": "заяц" },
            "answer2": { "result": true, "value": "медведь" }
        },
        {
            "question": "Какой вид спорта для одних может быть легким, а для других тяжелым?",
            "answer1": { "result": false, "value": "единоборства" },
            "answer2": { "result": true, "value": "атлетика" }
        },
        {
            "question": "В какой игре дамы больше всего следят за своими фигурами?",
            "answer1": { "result": false, "value": "аэробика" },
            "answer2": { "result": true, "value": "шахматы" }
        },
        {
            "question": "Какой стиль плавания люди позаимствовали у лягушки?",
            "answer1": { "result": false, "value": "баттерфляй" },
            "answer2": { "result": true, "value": "брасс" }
        },
        {
            "question": "Название какого вида единоборства с японского переводится как «мягкий путь»? ",
            "answer1": { "result": false, "value": "каратэ" },
            "answer2": { "result": true, "value": "дзюдо" }
        },
        {
            "question": "Как называется крупнейшая фирма в Германии, выпускающая спортивные товары?",
            "answer1": { "result": false, "value": "найк" },
            "answer2": { "result": true, "value": "адидас" }
        },
        {
            "question": "В какую игру первой из женщин стала играть шотландская королева Мэри?",
            "answer1": { "result": false, "value": "крикет" },
            "answer2": { "result": true, "value": "гольф" }
        },
        {
            "question": "Какой кубок ежегодно разыгрывают среди команд НХЛ?",
            "answer1": { "result": false, "value": "кубок Селебрити" },
            "answer2": { "result": true, "value": "кубок Стэнли" }
        },
        {
            "question": "В какой американской игре «ничьих» не бывает?",
            "answer1": { "result": false, "value": "бадминтон" },
            "answer2": { "result": true, "value": "бейсбол" }
        },
        {
            "question": "Назовите любимые соревнования настоящих ковбоев. ",
            "answer1": { "result": false, "value": "стрельба" },
            "answer2": { "result": true, "value": "родео" }
        },
        {
            "question": "Искусство боя рукой и ступней?",
            "answer1": { "result": false, "value": "тайский бокс" },
            "answer2": { "result": true, "value": "таэквондо" }
        },
        {
            "question": "Вид водного спорта, соревнования на скорость, дальность, продолжительность передвижения по большим прибойным волнам, стоя на специальной доске без паруса.",
            "answer1": { "result": false, "value": "дайвинг" },
            "answer2": { "result": true, "value": "серфинг" }
        },
        {
            "question": "Восхождение на труднодоступные горные вершины.",
            "answer1": { "result": false, "value": "парашютизм" },
            "answer2": { "result": true, "value": "альпинизм" }
        },
        {
            "question": "Большие кольцевые гонки на болидах. ",
            "answer1": { "result": false, "value": "картинг" },
            "answer2": { "result": true, "value": "Формула-1" }
        }
    ]
`;
