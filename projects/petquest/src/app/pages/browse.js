// pages/browse.js
import { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';

export default function Browse() {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    const fetchPets = async () => {
      const { data, error } = await supabase.from('pets').select('*');
      if (error) {
        console.error('Error fetching pets:', error);
      } else {
        setPets(data);
      }
    };
    fetchPets();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Browse Pets</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {pets.map((pet) => (
          <div key={pet.id} className="border p-4 rounded">
            <h2 className="text-xl">{pet.species}</h2>
            <p>Breed: {pet.breed}</p>
            <p>Age: {pet.age}</p>
            <p>Location: {pet.location}</p>
            <p>{pet.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
