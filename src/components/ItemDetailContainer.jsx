import { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {
  
  const { id } = useParams();
  const [data, setData] = useState(null);
  useEffect(() => {
    const db = getFirestore();
    const wineDoc = doc(db, "wines",id);
    getDoc(wineDoc).then((docSnapshot) => {
      console.log(docSnapshot.data())
      
      setData({...docSnapshot.data()})
    });
  }, []);
  console.log(data)
  if (!data)
  return (<p>Cargando...</p> )
  return <ItemDetail item={data} />;
  
};

export default ItemDetailContainer;
