bookApp.factory('contatti',function()
{   
    var contatti = [
        {
            name: 'qwe',
            phone: '1111111',
            email: 'asd@asdasd.it',
            info: 'una parola  ancora'
        },
        {
            name: 'rty',
            phone: '222222',
            email: 'ewq@ewq.it',
            info: 'una parola ancora'
        },
        {
            name: 'asdasd',
            phone: '44444444',
            email: 'uio@ewq.it',
            info: 'una parola ancora'
        },
        {
            name: 'fghfgh',
            phone: '5555555',
            email: 'uyt@ewq.it',
            info: 'una parola ancora'
        },
        {
            name: 'zxczxc',
            phone: '66666666',
            email: 'hg@asdasd.it',
            info: 'una parola ancora'
        }
    ];
    
    return {
        get: function(){
            return contatti;
        },
        find: function(index){
            return contatti[index];
        }
    }
    
});


bookApp.value('author','andrea');
