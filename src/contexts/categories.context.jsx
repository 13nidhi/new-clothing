import { createContext, useState, useEffect } from 'react';

import { getCategoriesAndDocuments } from '../utils/firebase/firebase.utils.js';

export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  //we are using it as adding .js file data into firebase
/*useEffect(()=> {
    addCollectionAndDocuments('categories', SHOP_DATA);
  },[])
*/

useEffect(() => {
  const getCategoriesMap = async () => { 
    const categoryMap = await getCategoriesAndDocuments(); 
    setCategoriesMap(categoryMap);
}
getCategoriesMap()}
, []);

  const value = { categoriesMap };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};