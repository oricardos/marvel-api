import axios from "axios";
import md5 from "md5";
import { useEffect, useState } from "react";

export const Dashboard = () => {
    const privateKey = import.meta.env.VITE_PRIVATE_KEY;
  const publicKey = import.meta.env.VITE_PUBLIC_KEY;
  const baseUrl = import.meta.env.VITE_BASE_URL


  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      const ts = new Date().getTime();
      const hash = md5(ts + privateKey + publicKey);

      try {
        const response = await axios.get(`${baseUrl}/characters`, {
          params: {
            ts, 
            apikey: publicKey,
            hash,
            limit: 5
          },
        });
        setCharacters(response.data.data.results);
      } catch (error){
        console.error('Erro ao buscar personagens: ', error);
      }
    }

    fetchCharacters();  
  }, []);

  useEffect(() => {
    console.log({characters})
  }, [characters])
    return (
        <div className="flex">
            <div>
                <h1>Heroes</h1>
                <div className="flex gap-4">
                    {characters.map(character => (
                        <img key={character.id} title={character.name} className="w-48 h-auto object-cover rounded-xl aspect-square" src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name} />
                    ))}
                </div>
            </div>
        </div>
    )
}