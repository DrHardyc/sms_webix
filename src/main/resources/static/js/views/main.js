define(function(){
    return {
        type: 'line',
        height:400,
        rows: [
            {
                view: 'button',
                label:'Машины',
                click: function (){
                    routie('cars')
                }
            },
            {template: "View 1"},
            {template: "View 2"}
        ]
    }
})

