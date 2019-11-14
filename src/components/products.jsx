import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash'

import {Link } from 'react-router-dom';
import {toast} from 'react-toastify'; 
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { ProductAPI } from '../APIs/products';

class Products extends Component {
    state = {  
        products: [],
    }

    componentDidMount()
    {
        this.getProducts();
    }
    getProducts()
    {
        axios.get(ProductAPI.BASE + ProductAPI.LIST)
        .then(res => {
            const products = res.data.data;

            this.setState({ products });
        })
      
    }
    componentDidUpdate(){
        //this.getProducts();
    }

    handleDelete = (product) => {
        
    const productsOld = [...this.state.products];

    const products = productsOld.filter(p => p.id !== product.id) ;
    this.setState({products})
    try{
        axios.post(ProductAPI.BASE + ProductAPI.DELETE,
        
        {
            id: product.id
        })
      .then(res => {
        
      })
    }catch(e){
        this.setState({products: productsOld})
    }
        
    
        toast.success("Deleted successfully");
    }


    render() { 

        
        const { products} = this.state;
        return (  
                <div className="row">
                    <div className="col-2">
                       
                    </div>
                    <div className="col-8">
                    <h1> List of products</h1>
                        { products.length ? 
                        <Table responsive>
                        <thead>
                            <tr>
                            <th>Name</th>
                            <th>Slug</th>
                            <th>Price</th>
                            <th>Option</th>
                            </tr>
                        </thead>
                <tbody>
                    { products.map(product => (
                            <tr key={product.id}>
                                <td>{product.name}</td>
                                <td>{product.slug}</td>
                                <td>{product.price}</td>
                                <td>
                                <Link to={`/product/edit/${product.id}`} className="btn btn-primary">Edit</Link>  
                                <Button onClick={() => this.handleDelete(product)} variant="outline-danger">Delete</Button>
                                </td>
                            </tr>
                    ))}
                   
                </tbody>
                </Table>: <p>No product available </p>
                        }
                        
                       
                    </div>
                    <div className="col-2">
                       
                    </div>
                </div>
              
           
        );
    }
}
 
export default Products;