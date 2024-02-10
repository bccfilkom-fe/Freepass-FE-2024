import React from "react";
import { useEffect } from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";

export default function () {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="home-container">
      <div className="header-home">
        <h1>MyHome</h1>
      </div>
      <div className="website-home">
        <img src="/Mylist.svg" alt="My List" className="icon-home" />
        <p className="des-home">
          Selamat datang di situs kami yang menyediakan pengalaman terbaik dalam
          mencari dan menyimpan informasi tentang anime dan film favorit Anda.
          Temukan judul yang Anda cari dan kelola daftar personal Anda dengan
          mudah.
        </p>
      </div>
      <div className="website-home">
        <p className="des-home">
          Di MyMovieList, Anda dapat menemukan informasi tentang berbagai film
          dari beberapa genre. Jelajahi sinopsis, temukan rating untuk membantu
          Anda membuat keputusan tentang film yang ingin Anda saksikan.
          <Link to="/Movie">Ke Halaman</Link>
        </p>
        <h1>MyMovieList</h1>
      </div>
      <div className="website-home">
        <h1>MyAnimeList</h1>
        <p className="des-home">
          MyAnimeList adalah tempat di mana Anda dapat menelusuri katalog anime
          yang luas, membaca ringkasan cerita. Gunakan fitur pencarian kami
          untuk menemukan anime favorit Anda.<Link to="/Anime">Ke Halaman</Link>
        </p>
      </div>
      <div className="website-home">
        <p className="des-home">
          Pada MyListBook Anda dapat membuat dan mengelola ListBook pribadi
          Anda. Tambahkan film atau anime ke dalam list untuk menyimpan catatan
          pribadi, rekomendasi, atau proyeksi nonton Anda.
          <Link to="/ListBook">Ke Halaman</Link>
        </p>
        <h1>MyListBook</h1>
      </div>
    </div>
  );
}
