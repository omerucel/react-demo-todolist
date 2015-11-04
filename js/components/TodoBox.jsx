var _ = require('underscore');
var React = require('react');
var TodoForm = require('./TodoForm');
var TodoList = require('./TodoList');

module.exports = React.createClass({
    getInitialState: function () {
        return {data: {}};
    },
    handleTodoSubmit: function (item) {
        item.id = _.size(this.state.data) + 1;
        this.state.data[item.id] = item;
        this.setState({data: this.state.data});
    },
    handleCheckbox: function (id, checkStatus) {
        this.state.data[id].checked = checkStatus;
        this.setState({data: this.state.data});
    },
    render: function () {
        return (
            <div className="container">
                <TodoForm onTodoSubmit={this.handleTodoSubmit} />
                <TodoList data={this.state.data} onCheckbox={this.handleCheckbox} />
            </div>
        );
    }
});
