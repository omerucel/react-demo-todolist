var React = require('react');

module.exports = React.createClass({
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
