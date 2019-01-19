
var expect = require('expect');
var {generateMessage} = require('./../utils/message');

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        var from = 'Jen';
        var text = 'some message';
        var message = generateMessage(from, text);

        expect(message.createAt).toBeA('number');
        expect(message).toInclude({from, text});
    })
})