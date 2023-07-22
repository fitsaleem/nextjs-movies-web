import MovieCard from "../components/movieCard";
import styles from "@/app/styles/common.module.css"

const MoviesPage = async () => {

  // this promise is just for showing loader
  await new Promise(resolve => setTimeout(resolve, 2000));

  const url = process.env.RAPID_KEY;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "2d237d0b50mshce49231198d11abp168711jsnba7367361cd0",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };

 


  
    const response = await fetch(url, options);
    const data = await response.json();


    console.log(data);

 

  const movies_data = data.titles;
  
  return (
    <section className={styles.movieSection}>

      <div className={styles.container}>

        <h1>Series & Movies</h1>

        <div className={styles.card_section}>

          {movies_data.map((value) => {
            return <MovieCard key={value.id} {...value} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default MoviesPage;
