import ShopActionTypes from './shop.types';

export const updateCollections = (CollectionsMap)=>({
    type: ShopActionTypes.UPDATE_COLLECTIONS,
    payload: collectionsMap
});