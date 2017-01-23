bookApp.factory('contact_service',function()
{   
    var contacts = [
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
            return contacts;
        },
        find: function(index){
            return contacts[index];
        },
        create: function(contact){
            contacts.push(contact);
        },
        destroy: function(index){
            contacts.splice(index, 1);
        }
    }
    
    
});

bookApp.value('author','andrea');



bookApp.factory('myContacts_service', function($resource){
    var Resource = $resource('http://localhost/public/contacts/:id', {id: '@id'}, {
        /*
         * questi sono quelli che sono già presenti in $resource
         * get: {method: 'GET'}
         * save: {method: 'POST'}
         * query: {method: 'GET', isArray:true}
         * remove: {method: 'DELETE'}
         * delete: {method: 'DELETE'}
         */
        update: {method: 'PUT'}
    });
    return {
        get: function(){
            return Resource.query();
        },
        find: function(id){
            return Resource.get({id: id});
        },
        create: function(){
            return new Resource();
        },
        destroy: function(id){
            Resource.delete({id: id})
        }
    };
})