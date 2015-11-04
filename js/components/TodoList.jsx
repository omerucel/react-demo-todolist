var _ = require('underscore');
var React = require('react');
var TodoItem = require('./TodoItem');

module.exports = React.createClass({
    render: function () {
        var that = this;
        var todoItemNodes = _.map(this.props.data, function (item) {
            return <TodoItem key={item.id} item={item} onCheckbox={that.props.onCheckbox} />;
        });
        return (
            <div className="row">
                <div className="col-sm-12">
                    {todoItemNodes}
                </div>
            </div>
        );
    }
});
