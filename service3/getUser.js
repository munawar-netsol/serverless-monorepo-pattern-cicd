const Responses = require('./API_Responses');

exports.handler = async event => {
    console.log('event', event);    
    if (!event.pathParameters || !event.pathParameters.ID) {
        return Responses._400({message: 'Missing the ID from Path!'});
    }
    let ID = event.pathParameters.ID;
    if (data[ID]) {
        // return data
        return Responses._200(data[ID]);
    }

    return Responses._400 ({message: 'No ID in Data'});
    // Failed as ID not in data.
}

const data = {
    2: { name: 'Ghulam Sarwar Khan', age: 25, job: 'Journalist' }
};