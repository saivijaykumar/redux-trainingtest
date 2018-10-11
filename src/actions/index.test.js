import { SAVE_COMMENT } from "./types";
import { saveComment } from ".";

describe('actions',()=>{
    describe('savecomment',()=>{
        it('has the correct type',()=>{
            const action=saveComment();
            expect(action.type).toBe(SAVE_COMMENT);
        });
        
        it('has the correct type',()=>{
            const action=saveComment('new comment');
            expect(action.payload).toBe('new comment');
        });
    })
});