import React from 'react';
import {Component} from 'react';
import {Link, browserHistory} from 'react-router';
import { Card } from 'antd';

export default class IngredientsCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentWillMount() {
        let category = this.props.params.category;
        this.props.getIngredientsCategoryItems(category);
    }

    renderCategoryDetailItems() {
        let items = this.props.ingredientsCategoryItems;
        let category = this.props.params.category;

        return items.map((item, index) => {
            return <Card bodyStyle={{ padding: 0 }} key={index}>
                <Link to={`/ingredients/detail/${item.name}`}>
                    <div className="custom-image">
                        <img alt="example" width="100%" src={item.url} />
                    </div>
                    <div className="custom-card">
                        <p>{item.name}</p>
                    </div>
                </Link>
             </Card>
        });
    }

    render() {
        let category = this.props.params.category;
        return (
            <div className="ingredients-category">
                {category}
                <div className="category-detail">
                    {this.renderCategoryDetailItems()}
                </div>
            </div>
        );
    }
}
