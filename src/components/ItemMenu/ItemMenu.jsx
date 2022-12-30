import './ItemMenu.css';

export const ItemMenu = (props) =>{

    let iconJam = 'jam ' + props.jam;

    return(

        <a href={props.href}>
            <span className={iconJam}></span>
            {props.text}
        </a>

    );

};