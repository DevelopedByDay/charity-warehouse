export const getSavedCharityIds = () => {
    const savedCharityIds = localStorage.getItem('saved_charities')
      ? JSON.parse(localStorage.getItem('saved_charities'))
      : [];
  
    return savedCharityIds;
  };
  
  export const saveCharityIds = (charityIdArr) => {
    if (charityIdArr.length) {
      localStorage.setItem('saved_Charitys', JSON.stringify(charityIdArr));
    } else {
      localStorage.removeItem('saved_Charitys');
    }
  };
  
  export const removeCharityId = (charityId) => {
    const savedCharityIds = localStorage.getItem('saved_charities')
      ? JSON.parse(localStorage.getItem('saved_charities'))
      : null;
  
    if (!savedCharityIds) {
      return false;
    }
  
    const updatedSavedCharityIds = savedCharityIds?.filter((savedCharityId) => savedCharityId !== CharityId);
    localStorage.setItem('saved_charities', JSON.stringify(updatedSavedCharityIds));
  
    return true;
  };
  