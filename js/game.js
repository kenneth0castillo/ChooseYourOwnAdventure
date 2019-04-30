// NOTE - You must have a level with the name "start".  This is used as the first level in the game.

var game = {
    music: "98_Lost_Mine.mp3",
    background_image: "intro-bg.jpg",
    levels: {

        start: {
            message: "An asteroid is going to hit earth",
            choices: [
                {

                    text:"family first",
                    nextLevel:"family",
                },

                {
                    text: "take your family to find a bunker",
                    nextLevel: "field",
                },
                {
                    text: "go into space",
                    nextLevel: "space",
                },
            ]
        },
        family:{
            message:"you and your family have a last supper before the world is consumed by fire",
            choices:[
                {
                    text:"after accepting your fate you have a peaceful transition with your family to a better place",
                    nextLevel:"start",
                },
            ]
        },

        space: {
            background_image: "fire.gif",
            music: "Final-Fantasy-7-Boss-Battle.mp3",
            message: "You abandoned your family but you survived",
            choices: [
                {
                    text: "explore space",
                    nextLevel: "explore",
                },
                {
                    text: "Stay in the ISS",
                    nextLevel: "ISS",
                }
            ]
        },
        explore:{
            message: "You find an alien shuttle",
            choices:[
                {
                    text: "run away",
                    nextLevel: "run",
                },
                {
                    text: "you try to fix it ",
                    nextLevel:"fix"
                },
            ]
        },
        run:{
            message:"you run out of air in your shuttle",
            choices:[
                {
                    text:'death',
                    nextLevel:'start',
                },
            ]
        },
        fix:{
            message:'huzzah! It works you can now use it',
            choices:[
                {
                    text:'go to an alien planet',
                    nextLevel:'planet',
                },
                {
                    text:'stay in there for a while',
                    nextLevel:'stay',
                },
            ]
        },
        planet:{
            message:"you get there and it's the most amazing thing you've ever seen",
            choices:[
                {
                    text:'fight them',
                    nextLevel:'fight',
                },
                {
                    text:'try and communicate with them',
                    nextLevel:'talk',
                },
            ]
        },
        fight:{
            message:'They overpower you in an instant',
            choices:[
                {
                    text:'death',
                    nextLevel:'start',
                },
            ]
        },
        talk:{
            message:"they don't understand english, they are aliens after all",
            choices:[
                {
                    text:'death',
                    nextLevel:'start',
                },
            ]
        },
        stay:{
            message:'you run out of oxygen, it is an alien space craft after all',
            choices:[
                {
                    text:'death',
                    nextLevel:'start',
                },
            ]
        },
        
        ISS:{
            message: 'you begin to have mental breakdowns out of fear of what you did',
            choices:[
                {
                    text:"Live off of what's there",
                    nextLevel:'live',
                },
            
            ]
        },
        live:{
            message:'you ran out of food',
            choices:[
                {
                    text:'death',
                    nextLevel:'start',
                },
            ]
        },

        field: {
            message: "You make it to a bunker just in time too, but time passes and you run out of food",
            choices: [
                {
                    text: "go outside and try to find some food",
                    nextLevel: "outside",
                },
                {
                    text:'stay inside with your family and accept your fate',
                    nextLevel:'inside',
                },
            ]
        },
        outside:{
            message:"you go outside, you only last for about an hour, no oxygen",
            choices:[
                {
                    text:"death",
                    nextLevel:"start",
                },
            ]
        },
        inside:{
            message:"you stay inside but the hunge got the better of you, without even thinking you began to eat those you've loved",
            choices:[
                {
                    text:"there's a special place in hell for people like you, death",
                    nextLevel:"start",
                },
            ]
        },

    }
};
