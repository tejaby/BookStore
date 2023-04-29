import { useState, useEffect, createContext, useContext } from "react";

const StoreContext = createContext();

export const StoreContextProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const createItems = (data) => {
    const temp = [...items];
    temp.push(data);

    setItems(temp);

    // setItems([...items, data]);
  };

  const getItem = (id) => {
    const item = items.find((item) => item.id === id);
    return item;
  };

  // const updateItem = (data) => {
  //   const index = items.findIndex((item) => item.id === item.id);
  //   const temp = [...items];
  //   temp[index] =
  // };

  return (
    <StoreContext.Provider
      value={{
        items,
        getItem,
        createItems,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(StoreContext);
};
