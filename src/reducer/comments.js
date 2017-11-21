import {normalizedComments as defaultComments} from '../fixtures';
import {arrToMap} from '../helpers';
import {ADD_COMMENT} from "../constants";
import {OrderedMap, Record} from 'immutable';

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

export default (commentsState = arrToMap(defaultState), action) => {
    const {type, payload, randomId} = action;

    switch (type) {


        case ADD_COMMENT:
            return commentsState.updateIn(randomId, comments => comments.concat(payload.comment));
    }

    return commentsState;
}