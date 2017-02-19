import React from 'react';
import {Component} from 'react';
import {Link, browserHistory} from 'react-router';
import { Collapse } from 'antd';
import {ingredientsCategory} from './config';
const Panel = Collapse.Panel;

export default class Ingredients extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    renderCategoryItems(categoryIndex) {
        return ingredientsCategory[categoryIndex].subCategory.map((item, index) => {
            return <Link to={`/ingredients/${item}`} key={index} className="category-label">
                {item}
            </Link>;
        });
    }

    renderIngredients() {
        return ingredientsCategory.map((item, index) => {
            return <Panel header={item.title} className="ingredients-list-item" key={index}>
                {this.renderCategoryItems(index)}
            </Panel>
        });
    }
    render() {
        return (
            <div className="ingredients">
                <Collapse bordered={false} className="ingredients-list">
                    {this.renderIngredients()}
                </Collapse>
            </div>
        );
    }
}
