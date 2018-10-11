import { SAVE_COMMENT } from "./types";

export const saveComment=(val)=>{
    return {type:SAVE_COMMENT,payload:val}
}