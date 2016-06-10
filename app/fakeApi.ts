// get promises and hook this up here

var api = {
    getCRMContacts: function () {
        return [
            { name: 'neil tiwari', email: 'lel@email.com', info1: 'memes', info2: 'test info 2' }
        ];
    },

    getOutlookContacts: function () {
        return [
            { name: 'devan buggay', email: 'test@email.com', info1: 'test info 1', info2: 'test info 2' },
            { name: 'colby siebgay', email: 'lel@email.com', info1: 'test info 1', info2: 'test info 2' }
        ];
    }

}

export default api;