define(function (){
    return{
        rows:[
            {
                view: 'button',
                label: 'Главная',
                click: function () {
                    routie('')
                }
            },
            {
                view:'list',
                data:[
                    'кляча',
                    'тачка',
                    'груда металла'
                ]
            }
        ]
    }
})