import Categories from './components/categories/categories.component';

const App = () => {
  const categories = [
    { id: 1, title: "Hats", imageURL: 'https://images.unsplash.com/photo-1575428652377-a2d80e2277fc?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340' },
    { id: 2, title: "Shirts", imageURL: 'https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738' },
    { id: 3, title: "Pants", imageURL: 'https://images.unsplash.com/photo-1542272604-787c3835535d?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2226' },
    { id: 4, title: "Shoes", imageURL: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1412' },
    { id: 5, title: "Jackets", imageURL: 'https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740' },
  ];
  
  return (
    <Categories categories={categories} />
  );
}

export default App;
