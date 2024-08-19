import axios from 'axios';

// API function to fetch character data
export const fetchCharacterData = async (name) => {
  try {
    const response = await axios.get(`https://narutodb.xyz/api/character/search?name=${name}`);
    return response.data; // Return the character data
  } catch (error) {
    throw new Error('Character not found'); // Handle errors appropriately
  }
};
