var React = require('react');

module.exports = React.createClass({
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
