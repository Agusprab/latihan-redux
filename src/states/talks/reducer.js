/**
 * @TODO: Define the reducer for the talks state
 */
import { ActionType } from './action';

function talksReducer(talks = [], actions = {}) {
  switch (actions.type) {
    case ActionType.RECEIVE_TALKS:
      return actions.payload.talks;
    case ActionType.ADD_TALK:
      return [actions.payload.text, ...talks];
    case ActionType.TOGGLE_LIKE_TALK:
      // eslint-disable-next-line array-callback-return, consistent-return
      return talks.map((talk) => {
        if (talk.id === actions.payload.talkId) {
          return {
            ...talk,
            // eslint-disable-next-line max-len
            likes: talk.likes.includes(actions.payload.userId) ? talk.likes.filter((id) => id !== actions.payload.userId) : talk.likes.concat([actions.payload.userId]),
          };
        }
      });
    default:
      return talks;
  }
}

export default talksReducer;
