
export const reducer = (state, action) => {
  switch (action.type) {
    case ACTION_ORDEN:   
      return { ...state, productosCurrent: handleChangeOrden(action.typeOrden, state.productosCurrent)};
    case ACTION_FILTER:
      return{ ...state, productosCurrent: handleChangeFilter(action.filter, state.productos)}
    case ACTION_SEARCH:
      return {  ...state, productosCurrent: handleChangeSearch(action.textSearch, state.productos) } 
    case ACTION_PAGE:
      return {  ...state, productosCurrent: handleChangePage(action.num, state.productosCurrent) }
    case ACTION_RESET:
      return {  ...state, productosCurrent: state.productos }
    default:
      return state;
  }
};

const handleChangeOrden = (typeOrden, productos) => { 
  if (typeOrden == 'mas_baratos') {
    productos.sort(function (a, b) { return a.cost - b.cost });
  }
  if (typeOrden == 'mas_caros') {
     productos.sort(function (a, b) { return b.cost - a.cost });
  }
  return productos
};

const handleChangeFilter = (filter, productos) => { 
  let newP = productos.filter(p => typeFilter(p.cost,filter));
  return  newP
};

const typeFilter = (precio, filter) => {
  return (precio >= filter.min || filter.min == 0 ) &&  (precio <= filter.max || filter.max == 0)  
}

const handleChangeSearch = (textSearch, productos) => {
  return productos
};

const handleChangePage = (num, list) => { 
  let fin = num * CANT_ITEM_PANT
  let inicio = fin - CANT_ITEM_PANT
  let newlist = list.slice(inicio, fin)
 return newlist
}

export const CANT_ITEM_PANT = 16;
export const ACTION_ORDEN = 'ORDEN'
export const ACTION_FILTER = 'FILTER'
export const ACTION_SEARCH = 'SEARCH'
export const ACTION_PAGE = 'PAGE'
export const ACTION_RESET = 'RESET'
