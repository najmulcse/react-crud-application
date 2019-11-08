import React, {Component } from 'react';
import axios from 'axios';



class CreateProduct extends Component {
    
    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeSlug = this.onChangeSlug.bind(this);
        this.onChangeDesciption = this.onChangeDesciption.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
  
        this.state = {
            name: '',
            Slug: '',
            description:'',
            price: 0
        }
    }
    onChangeName(e) {
      this.setState({
        name: e.target.value
      });
    }
    onChangeSlug(e) {
      this.setState({
        slug: e.target.value
      })  
    }
    onChangeDesciption(e) {
      this.setState({
        description: e.target.value
      })
    }
  
    onChangePrice(e) {
        this.setState({
          price: Number(e.target.value)
        })
      }
    
    onSubmit(e) {
      e.preventDefault();
      try{

       let  data = 
        {
            name: this.state.name,
            slug: this.state.slug,
            price: this.state.price,
            description: this.state.description
        }
        console.log(data);
        axios.post(`http://localhost/question1_backend_api/products/create.php`,data,{
         headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    }
    })
      .then(res => {
        console.log(res);
        console.log(res.data);
        this.props.history.push('/products');
      })
    }catch(e){

    }
    }
     
      componentDidMount()
      {
      }
     
    render() { 
        return ( 
        
            <div className="row">
                    <div className="col-2">
                       
                    </div>
                    <div className="col">
                    <h2> Create Product</h2>
                    <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label> Name:  </label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    value={this.state.name}
                                    onChange={this.onChangeName}
                                    />
                            </div>
                            <div className="form-group">
                                <label> Slug: </label>
                                <input type="text" 
                                    className="form-control"
                                    value={this.state.slug || ''}
                                    onChange={this.onChangeSlug}
                                    />
                            </div>
                            <div className="form-group">
                                <label>Price: </label>
                                <input type="number" 
                                    className="form-control"
                                    value={this.state.price}
                                    onChange={this.onChangePrice}
                                    />
                            </div>
                            <div className="form-group">
                                <label>Description: </label>
                                <textarea type="textarea" 
                                    className="form-control"
                                    value={this.state.description}
                                    onChange={this.onChangeDesciption}
                                    ></textarea>
                            </div>
                            <div className="form-group">
                                <input type="submit" value="Save" className="btn btn-primary"/>
                            </div>
                        </form>
                    </div>
            </div>
         );
    }
}
 
export default CreateProduct;