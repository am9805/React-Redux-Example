import React, { Component } from 'react'
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {


    renderList() {
        return this.props.books.map((book) => {
            return (
                <li 
                key={book.title} 
                onClick={()=> this.props.selectBook(book)}
                className="list-group-item" >{book.title}</li>
            );
        });
    }
    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

//EL proposito de esta funcion es tomar el estado de nuestra aplicacion
// como argumento
function mapStateToProps(state) {
    //lo que sea que se retorne aqui será mostrado como una propiedad
    // dentro de bookList
    return {
        books: state.books
    };
}

/**
 * 
 * Todo lo que sea retornado en esta funcion, se convertirá en un props
 * dentro de BookList
 */
function mapDispatchToProps(dispatch) {
    /**
    * Siempre que selectBook sea llamado, el resultado tendra que ser
    * pasado a todos los reducers, eso es lo que hace bindCreater con dispatch
    * 
    */
    return bindActionCreators({ selectBook: selectBook }, dispatch)

}


//Take this component and take this mapStateToProps and return a container 
// Promote BookList from a component to a container - it needs to knows about this new distpatch
// method, selectBook. Make it avaible as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);