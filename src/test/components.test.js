import React from 'react';
import renderer from 'react-test-renderer';
import CommentList from '../components/CommentList';
import App from '../components/App';

describe('components',function(){
    describe('<App/>',function(){
        it('reneders correctly',function(){
            var domtree=renderer.create(<App></App>).toJSON();
            expect(domtree).toMatchSnapshot();
        });
    });
});