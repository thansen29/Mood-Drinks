import * as _ from 'lodash';

export const mergeDrinks = (drinks, genres) => {
    let merged = [];
    let newMerged;
    _.forEach(drinks, drink => {

        let count = _.intersection(drink.genres, genres).length
        
        if (count) {
          merged.push({ drink, count});
        }
      });
      
      newMerged = _.sortBy(merged, ['count']).reverse().slice(0, 4);
      if (!newMerged.length) {
          _.forEach(drinks, drink => {
            if (drink.name === "Sea of Clouds (negroni)") {
              newMerged = [{ drink: drink }];
            }
          });
      }

      return newMerged;
}