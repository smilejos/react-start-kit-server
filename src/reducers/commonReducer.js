"use strict";
import { SET_HERO } from '../constants/commonActionTypes'
import assignIn from 'lodash/assignIn'

export default function common(state = {
        heros: []
    }, action) {
	switch (action.type) {
        case SET_HERO:
            return assignIn({}, state, {
                heros: action.heros
            });
		default:
			return state;
	}
}
