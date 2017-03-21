import React, { Component } from 'react';

class Article extends Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            visible: false
        };
        this.readmoreClick = this.readmoreClick.bind(this);
    };

    readmoreClick(e) {
        e.preventDefault();
        this.setState({visible: true});
    }

    render() {
        var author = this.props.data.author,
            text = this.props.data.text,
            bigText = this.props.data.bigText,
            visible = this.state.visible;

        return (
            <div className='article'>
                <p className='news__author'>{author}:</p>
                <p className='news__text'>{text}</p>
                <a href="#" onClick={this.readmoreClick} className={'news__readmore ' + (visible ? 'none': '')}>Подробнее</a>
                <p className={'news__big-text ' + (visible ? '': 'none')}>{bigText}</p>
            </div>
        );
    }
}

Article.propTypes = {
    data: React.PropTypes.shape({
        author: React.PropTypes.string.isRequired,
        text: React.PropTypes.string.isRequired,
        bigText: React.PropTypes.string.isRequired

    })
};

export default Article;