import { useState, useEffect } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";


const ItemListConteiner = () => {
  const {category} = useParams(); 
  const [data, setData] = useState([]);

  useEffect(() => {
    const db = getFirestore()

    const getData = async () => {

        const queryRef = !category
            ? collection(db , "wines")
            : query(
                collection(db , "wines"),
                where("categoria", "==", category)
            );
        const response = await getDocs(queryRef);
        const productos = response.docs.map((doc) => {
            const newProduct = {
                ...doc.data(),
                id: doc.id,
            };
            return newProduct;
        });
        setTimeout(() => {
            setData(productos);
        }, 2000)
    };
    getData();

}, [category])
  
  return (
    <div>
      {<ItemList items={data} /> }
    </div>
  )
}

export default ItemListConteiner