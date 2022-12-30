
import transmision from '../../assets/images/transmision.png';
import './Header.css'

export function Header() {
    return(
        <header className="main-header">
            <div className="content-wrapper">
                {/* <!-- Logo --> */}
                <a href="http://localhost:3000">
                    <img src={transmision} alt='Logo de la página Peliz'></img>
                </a>
                <p>
                    Streaming online PELIZ
                </p>

                {/* <!-- Menu de navegacion --> */}
                <span id="open-menu-button" class="jam jam-menu" ></span>
                <nav id="main-menu" class="main-menu" >
                <span id="close-menu-button" class="jam jam-close" > </span>
                <ul id="ul-menu" >
                    <li>
                    <a id="btn-home" >
                        <span id="img-home" class="jam jam-home"></span>
                        Inicio</a>
                    </li>
                    <li>
                    <a id="btn-movie" >
                        <span id="img-movie" class="jam jam-movie"></span>
                        Películas</a>
                    </li>
                    <li>
                    <a id="btn-tv" >
                        <span id="img-tv"  class="jam jam-camera-alt"></span>
                        Programas de televisión</a>
                    </li>
                    <li> 
                    <a id="btn-genres" >
                        <span id="img-genres"  class="jam jam-folder-open"></span>
                        Generos</a>
                    </li>
                    <li>
                    <a id="btn-trending" >
                        <span id="img-trending" class="jam jam-flashlight-on"></span>
                        Tendencias</a>
                    </li>
                </ul>
                </nav>
            </div>
        </header>
    );
}