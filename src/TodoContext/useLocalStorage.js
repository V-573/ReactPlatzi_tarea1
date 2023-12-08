import React from 'react';


function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false); 
  
  
  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
  
        let parsedItem;
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem);
        }
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    }, 2000);

  });


  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };
  
  return {
    item,
    saveItem,
    loading,
    error,
  };
}

export { useLocalStorage }; 



// const defaultTodos = [
//   {
//     text: "Cortar Cebolla",
//     completed: true,
//   },
//   {
//     text: "Cortar Cebolla 2",
//     completed: true,
//   },
//   {
//     text: "tomar el curso",
//     completed: false,
//   },
//   {
//     text: "tomar el curso2",
//     completed: false,
//   },
// ];

// localStorage.setItem('TODOS_V1', defaultTodos);

// localStorage.removeItem('TODOS_V1');
