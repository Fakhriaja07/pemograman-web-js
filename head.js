import '../view/head.css';
import { Link } from 'react-router-dom';


function head(){
        return(
            <header>
        <h1>Haloo, Selamat Datang</h1>

     <nav>
        <a href="FAKHRIWEB.html">Home</a>
        <a href="Biodata.html">Biodata</a>
        <a href="Prestasi.html">Prestasi</a>
        <a href="Galeri.html">Galeri</a>
        <a href="Portofolio.html">Portofolio</a>
    </nav>
</header>


        );
}

export default head;