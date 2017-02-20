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
            if (!item.name || !item.url) {
                return null;
            }
            return <Card bodyStyle={{ padding: 0 }} key={index}>
                <Link to={`/ingredients/${category}/${item.name}`}>
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
                <h3 className="crumbs"><Link to="/ingredients">全部分类</Link>
                    <span className="split-string">&gt;</span>
                    {category}
                </h3>
                <div className="category-detail">
                    {this.renderCategoryDetailItems()}
                </div>
            </div>
        );
    }
}
