/**
 * Un reducer siempre recibe dos argumentos:
 * @param {*} state // Este no es el state de la aplicacion, es el de esta función, como si fuera recursivo, ese '= null' solo se asigna cuando State es undefined
 * @param {*} action 
 */

export default function(state = null, action){
    switch(action.type){
        case 'BOOK_SELECTED':
            return action.payload;
    }        
    return state
}