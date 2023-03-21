import { useState, useEffect } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore } from "firebase/firestore";


const ItemListConteiner = () => {
  const {category} = useParams(); 
  const [data, setData] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const winesCollection = collection(db, "wines");
    getDocs(winesCollection).then((querySnapshot) => {
      const wines = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setData(wines);
    });
  }, []);

  const catFilter = data.filter((item) => item.category === category);
  
  return (
    <div>
      {category ? <ItemList items={catFilter} /> : <ItemList items={data} /> }
    </div>
  )
}

export default ItemListConteiner
