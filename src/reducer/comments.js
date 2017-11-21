import {arrToMap} from '../helpers';
import {ADD_COMMENT} from "../constants";
import {OrderedMap, Record} from 'immutable';
import {LOAD_ALL_COMMENTS, START, SUCCESS, FAIL} from '../constants'

const CommentRecord = Record({
    id: undefined,
    user: undefined,
    text: undefined,
});

const ReducerState = Record({
    loading: false,
    loaded: false,
    entities: new OrderedMap({})
});

const defaultState = new ReducerState();

export default (commentsState = defaultState, action) => {
    const {type, payload, response, randomId} = action;

    switch (type) {

        case LOAD_ALL_COMMENTS + START:
            return commentsState.set('loading', true);

        case LOAD_ALL_COMMENTS + SUCCESS:
            return commentsState
                .set('entities', arrToMap(response, CommentRecord))
                .set('loading', false)
                .set('loaded', true);

        case ADD_COMMENT:
            return commentsState.updateIn(randomId, comments => comments.concat(payload.comment));
    }

    return commentsState;
}