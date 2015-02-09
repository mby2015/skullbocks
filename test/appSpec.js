define([
    'collection/collection',
    'model/model',
    'view/view'
], function(Todos, Todo, TodosView) {
    describe('TODO', function() {
        var items,
            view;

        beforeEach(function() {
            items = new Todos();
            view = new TodosView({
                collection: items
            });
            items.add([{ title: 'supermarket', note: '- carrot', dueDate: '15/1/29', completed: false }]);
        });

        it('TODO 리스트가 만들어 졌는지 확인한다', function() {
            expect(items).toBeDefined();
        });
        it('TODO 리스트 뷰가 만들어 졌는지 확인한다', function() {
            expect(view).toBeDefined();
        });
        it('TODO 모델를 추가한다', function() {
            items.add([{ title: 'book', note: '- backbone', dueDate: '15/1/26', completed: false }]);
            expect(items.size()).toEqual(2);
        });
        it('TODO 모델을 삭제한다. ', function() {

        });


    });
});