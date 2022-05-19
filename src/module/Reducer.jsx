
export const reducer = (state, action) => {
  switch (action.type) {
    case ACTION_ORDEN:   
      return { ...state, all: handleChangeOrden(action.typeOrden, state.productosCurrent)};
    case ACTION_FILTER:
      return{ ...state, all: handleChangeFilter(action.filter, state.productos)}
    case ACTION_SEARCH:
      return {  ...state, all: handleChangeSearch(action.textSearch, state.productosCurrent) } 
    case ACTION_PAGE:
      return {  ...state, all: handleChangePage(action.num, state.productosCurrent) }
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
  return handleChangePage(1, productos)
};

const handleChangeFilter = (filter, productos) => { 
  let newP = productos.filter(p => typeFilter(p.cost,filter));
  return handleChangePage(1, newP)
};

const typeFilter = (precio, filter) => {
  return (precio >= Number(filter.min) || Number(filter.min) == 0 ) &&  (precio <= Number(filter.max) || Number(filter.max) == 0)  
}

const handleChangeSearch = (textSearch, productos) => {
  return handleChangePage(1, productos)
};

const handleChangePage = (num, list) => { 
 
  let fin = num * CANT_ITEM_PANT
  let inicio = fin - CANT_ITEM_PANT
  let newlist = list.slice(inicio, fin)
  console.log(inicio, fin, newlist)
 return newlist
}

export const CANT_ITEM_PANT = 16;

export const ACTION_ORDEN = 'ORDEN'
export const ACTION_FILTER = 'FILTER'
export const ACTION_SEARCH = 'SEARCH'
export const ACTION_PAGE = 'PAGE'