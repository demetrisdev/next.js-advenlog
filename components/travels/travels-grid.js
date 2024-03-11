"use client"

import { useState } from 'react';
import TravelItem from './travel-item';
import classes from './travel-grid.module.css';

export default function TravelGrid({ travels }) {
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredTravels = travels.filter((travel) => {
    return (
      travel.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      travel.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      travel.instructions.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  const handleSearchClose = () => {
    setSearchQuery('');
  };

  const handleInputBlur = () => {
    if (searchQuery === '') {
      setSearchQuery(''); 
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.inputContainer}>
        <input 
          type="text"
          placeholder="Search travels..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onBlur={handleInputBlur}
        />
        <div className={classes.search} onClick={handleSearchClose}></div>
      </div>
      <ul className={classes.travels}>
        {filteredTravels.map((travel) => (
          <li key={travel.id}>
            <TravelItem {...travel} />
          </li>
        ))}
      </ul>
    </div>
  );
}
