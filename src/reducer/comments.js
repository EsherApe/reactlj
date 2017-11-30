import {arrToMap} from '../helpers';
import {ADD_COMMENT} from "../constants";
import {OrderedMap, Record} from 'immutable';
import {LOAD_ARTICLE_COMMENTS, START, SUCCESS, FAIL} from '../constants'

const CommentRecord = Record({
    id: undefined,
    user: undefined,
    text: undefined,
});

const ReducerState = Record({
    entities: new OrderedMap({})
});

const defaultState = new ReducerState();

export default (commentsState = defaultState, action) => {
    const {type, payload, response, randomId} = action;

    switch (type) {

        case ADD_COMMENT:
            return commentsState.setIn(['entities', randomId], new CommentRecord({...payload.comment, id: randomId}));

        case LOAD_ARTICLE_COMMENTS + SUCCESS:
            return commentsState.update('entities', entities => entities.merge(arrToMap(response, CommentRecord)))
    }

    return commentsState;
}