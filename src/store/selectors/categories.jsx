export const getCategories = (state) => state.categories.data;
export const getGifts = (state) =>
  state.gifts.data.filter((gift) => {
    console.log(state.chooseCategorie);
    return gift.categories.includes(state.chooseCategorie.data);
  });
