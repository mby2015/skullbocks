define([
    'model/model',
    'itemView'
], function(Item, ItemView) {
    describe('ItemView', function() {
        var todo,
            todoView,
            element,
            click;

        beforeEach(function() {
            todo = new Item();
            todoView = new ItemView({
                model: todo
            });

            click = $.Event('click');
            todo.set({ title: 'apple kit', note: '- iphone', dueDate: '15/1/33', completed: false });
        });

        it('모델이 만들어 졌는지 확인한다', function() {
            expect(todo).toBeDefined();
        });

        it('아이템뷰가 만들어 졌는지 확인한다', function() {
            expect(todoView).toBeDefined();
        });

        it('아이템뷰에 모델을 넣는다.', function() {
            todo.set({ title: 'supermarket', note: '- carrot', dueDate: '15/1/29', completed: false });
            expect(todo.get('title')).toEqual('supermarket');
        });

        it('아이템이 클릭 되었을때, 완료 상태를 변경한다. ', function() {
            element = $('.item', todoView.el);
            element.trigger(click);
            expect(todo.get('completed')).toEqual(true);
        });

        it('삭제 버튼를 눌렀을때, 아이템을 제거 한다.', function() {
            element = $('.delete', todoView.el);
            element.trigger(click);
            expect(todo).toBeDefined();
        });
    });
});