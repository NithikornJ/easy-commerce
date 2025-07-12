import axios from 'axios'

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL
export async function fetchFeaturedProducts() {
  try {
    const response = await axios.get(`${BASE_URL}/products?limit=4`)
    return response.data
  } catch (error) {
    console.log('error', error);
    return []
  }
}

export async function fetchProduct(){
  try {
    const response = await axios.get(`${BASE_URL}/products`)
    return response.data
  } catch (error) {
    console.log('error', error);
    return []
  }
}

export async function fetchProductById(id){
  try {
    const response = await axios.get(`${BASE_URL}/products/${id}`)
    return response.data
  } catch (error) {
    console.log('error', error);
    return []
  }
}