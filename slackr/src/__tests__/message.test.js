import * as msg from '../message';

describe('message', () => {
  test('.getMessageText', () => {
    const message = msg.createMessage('an message');
    expect(msg.getMessageText(message)).toEqual('an message');
  });

  it('is initially unstarred', () => {
    const message = msg.createMessage('blah');
    expect(msg.getMessageStarState(message)).toEqual('unstarred');
  });

  it('can become starring', () => {
    const message = msg.createMessage('blah');
    const starredMessage = msg.startStarring(message);
    expect(msg.getMessageStarState(starredMessage)).toEqual('starring');
  });

  it('can become starred', () => {
    const message = msg.createMessage('blah');
    const starredMessage = msg.completeStarring(message);
    expect(msg.getMessageStarState(starredMessage)).toEqual('starred');
  });
});
