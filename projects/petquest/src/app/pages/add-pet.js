// pages/add-pet.js
import { useState } from 'react';
import { supabase } from '../supabaseClient';
import { useUser } from '@clerk/clerk-react';

export default function AddPet() {
  const { user } = useUser();
  const [species, setSpecies] = useState('');
  const [breed, setBreed] = useState('');
  const [age, setAge] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error } = await supabase
      .from('pets')
      .insert([
        { user_id: user.id, species, breed, age, location, description },
      ]);
    if (error) {
      console.error('Error adding pet:', error);
    } else {
      alert('Pet added successfully!');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Add a Pet</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Species"
          value={species}
          onChange={(e) => setSpecies(e.target.value)}
          className="input"
        />
        <input
          type="text"
          placeholder="Breed"
          value={breed}
          onChange={(e) => setBreed(e.target.value)}
          className="input"
        />
        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="input"
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="input"
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="textarea"
        />
        <button type="submit" className="btn">Add Pet</button>
      </form>
    </div>
  );
}
