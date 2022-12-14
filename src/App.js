import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import OrderReview from './components/OrderReview/OrderReview';
import Products from './components/Products/Products';
import Main from './layouts/Main';



function App() {
  const router = createBrowserRouter([
    {
      path: '/',

      element: <Main></Main>,

      children: [
        {
          path: '/',
          loader: async () => fetch('products.json'),



          element: <Products></Products>

        },
        {
          path: '/shop',
          loader: async () => {
            return fetch('products.json')
          },
          element: < Products ></Products >
        },
        {
          path: '/order-review',

          loader: async () => {
            return fetch('products.json')
          },
          element: <OrderReview></OrderReview>
        }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
