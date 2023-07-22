import React from 'react';
import styles from "@/app/styles/common.module.css"
import Image from "next/image";



const page = async ({params}) => {


    const id = params.id

    // const url = `https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=ids=${id}&lang=en`

    const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`;

    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "2d237d0b50mshce49231198d11abp168711jsnba7367361cd0",
        "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
      },
    };
  
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      var movies_data = data[0].details;
  
  
      console.log(data);
  
    } catch (error) {
      
      console.error(error);
    }
  return (
    <div className={styles.container}>
    <h2 className={styles.movie_title}>   Netflix \ <span> {movies_data.type} </span> </h2>
    <div className={styles.card_section}>
        <div>
            <Image src={movies_data.backgroundImage.url} alt={movies_data.title} width={600} height={300} />
        </div>
        <div>
            <h1>{movies_data.title}</h1>
            <p>{movies_data.synopsis}</p>
        </div>
    </div>
</div>
  )
}

export default page