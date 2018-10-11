import { SAVE_COMMENT } from "../actions/types";

export const commentsreducer=(sate=[],action)=>{
    switch(action.type){
        case SAVE_COMMENT:
              state.push(action.payload);
              return state;
    }
}