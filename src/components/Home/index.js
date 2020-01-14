import React from 'react';
import { NavLink } from 'react-router-dom';

import './home.scss';
import movies from '../../data/movie';
import shows from '../../data/show';

const Home = () => (
  <>
    <div className="home">
      {/* SECTION MOVIES */}
      <div className="title_category_movies">
        <h1 className="title_category">Films</h1>
      </div>
      <div className="section">
        <ul className="cover_movies">
          <ul className="cover_movies_list">
            {
              movies.map((movie) => (
                <div key={movie.id} className="container_movie">
                  <li className="cover_list">
                    <NavLink to="/details">
                      <img className="cover_img" alt="cover" title={movie.title} src={movie.src} />
                      <h2 className="title_image">{movie.title}</h2>
                    </NavLink>
                  </li>
                </div>
              ))
            }
          </ul>
        </ul>
      </div>
      {/* SECTION SHOWS */}
      <div className="title_category_shows">
        <h1 className="title_category">Séries</h1>
      </div>
      <div className="section">
        <div className="cover_shows">
          <ul className="cover_shows_list">
            {
              shows.map((show) => (
                <div key={show.id} className="container_movie">
                  <NavLink to="/details">
                    <li className="cover_list">
                      <img className="cover_img" alt="cover" title={show.title} src={show.src} />
                      <h2 className="title_image">{show.title}</h2>
                    </li>
                  </NavLink>
                </div>
              ))
            }
          </ul>
        </div>
      </div>
    </div>
    <footer>
      <div className="footer">
        <p className="text_footer">Tu trouves pas ?? Va là dessus : <a href="#" className="link_footer">Rechercher</a> &copy; - 2020</p>
      </div>
    </footer>
  </>
);

export default Home;
