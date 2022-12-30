
import './Button.css';


export const Button = (props) => {

    return(
        <a className='button' href={props.href}>
            {props.text}
        </a>
    );
};

export const ButtonIcon = (props) => {

    let iconJam = 'jam ' + props.jam;

    return(
        <a className='button-icon' href={props.href}>
            <span className={iconJam} ></span>
            {props.text}
        </a>
    )
}

export const ButtonGhost = (props) => {

    return(
        <a className='button ghost' href={props.href}>
            {props.text}
        </a>
    )
}