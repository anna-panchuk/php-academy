import React, { Component } from 'react';
import Article from './Article';

class News extends Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            counter: 0
        };

    }

    render() {
        var data = this.props.data;
        var newsTemplate;
        var counter = this.state.counter;

        if (data.length > 0) {
            newsTemplate = data.map(function(item, index){
                return(
                    <Article data={item} key={index} />
                )
            });
        } else {
            newsTemplate = (
                <p>К сожалению, новостей нет!</p>
            );
        }

        return (
            <div className="news">
                {newsTemplate}
            <a href="#"
                className={'news__count ' + (data.length > 0 ? '':'none') }>
                Всего новостей: {data.length}
            </a>
            </div>
        );
    }
}
News.propTypes = {
    data: React.PropTypes.array.isRequired
};

export default News;