define(['underscore', 'backbone'], function(_, Backbone) {
    var Item = Backbone.Model.extend({
        default: {
            title: '',
            note: '',
            dueDate: '',
            completed: false
        },
        changeProperty: function(object) {
            if(_.isObject(object)) {
                _.each(object, function(value, key) {
                    var temp = {};
                    temp[key] = value;
                    if(this.has(key)) {
                        this.set(temp);
                    }
                }, this);
            }
        },
        toggle: function() {
            this.set({
                completed: !this.get('completed')
            });
        }
    });
    return Item;
});

