const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.RAPID_API_KEY}`,
  },
};

export const popular = async () => {
  const res = await fetch(
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
    options,{ cache: 'force-cache' }
  );
  const data = await res.json();
  return data;
};



export const recent = async () => {
  const res = await fetch(
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
    options,{ cache: 'force-cache' }
  );
  const data = await res.json();
  return data;
};


export const playing = async () => {
  const res = await fetch(
    "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
    options,{ cache: 'force-cache' }
  );
  const data = await res.json();
  return data;
};

export const upcoming = async () => {
  const res = await fetch(
    "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
    options,{ cache: 'force-cache' }
  );
  const data = await res.json();
  return data;
};

