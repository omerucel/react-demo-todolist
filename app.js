var TodoForm = React.createClass({
    handleSubmit: function(e) {
        e.preventDefault();
        var text = this.refs.text.value.trim();
        if (!text) {
            return;
        }
        this.props.onTodoSubmit({text: text, checked: false});
        this.refs.text.value = '';
        return;
    },
    render: function () {
        return (
            <div className="row">
                <div className="col-sm-12">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <input className="form-control" type="text" ref="text" placeholder="Add a task!" />
                        </div>
                    </form>
                </div>
            </div>
        );
    }
});

var TodoItem = React.createClass({
    handleCheckbox: function (e) {
        this.props.onCheckbox(this.props.item.id, e.target.checked);
    },
    render: function () {
        var text = this.props.item.text;
        if (this.props.item.checked) {
            text = <del>{text}</del>;
        }
        return (
            <div className="checkbox">
                <label>
                    <input type="checkbox" checked={this.props.item.checked ? 'checked' : ''} onChange={this.handleCheckbox} /> {text}
                </label>
            </div>
        );
    }
});

var TodoList = React.createClass({
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

var TodoBox = React.createClass({
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
ReactDOM.render(<TodoBox />, document.getElementById('app'));
