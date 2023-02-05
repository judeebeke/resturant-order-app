import React, {useState} from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart'
import ContextProvider from './store/CartProvider';


const App = () => {
  const [modalView, setModalView] = useState(false);

  const showModalHandler = () => {
    return setModalView(true);
  }

  const hideModalHandler = () => {
    return setModalView(false);
  }

  return (
    <ContextProvider>
      <Header onShow={showModalHandler} />
      <main>
        {modalView && <Cart onClose={hideModalHandler} />}
        <Meals />
     </main>
    </ContextProvider>
  )
}

export default App

