import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Table from './common/Table';


class ProductsTable extends Component {
   
    columns = [
        {
            path: 'title', label: 'Title',
            content: product => <Link to={`/movies/${product._id}`}>{product.title}</Link>
        },
        {path: 'name', label: 'Name'},
        {path: 'sku', label: 'SKU'},
        {path: 'price', label: 'price'},

        {
            key: 'delete',
            content: product => (
                    <button 
                    onClick={ () => this.props.onDelete(product) }
                    className="btn btn-danger btn-sm">
                    Delete</button>
            )
        }
    ];

   
    render() { 
                const { product, onSort, sortColumn } = this.props;
            return (  
                <Table
                    columns={ this.columns}
                    data= { product}
                />
          );
    }
}
 
 
export default ProductsTable;