export function selectBook(book){
    return{
        // selectBook is an actionCreator, it needs to return an action, an object with type property
        type: 'BOOK_SELECTED',
        payload: book
    };
}