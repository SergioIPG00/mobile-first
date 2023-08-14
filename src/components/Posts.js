import './Posts.css';

function Posts(props){
    return(
        <div>
            <div class="card">
                <img src={props.image}/>
                    <span>Categoria: {props.category}</span>
                    <span>Nombre: {props.name}</span>
                    <span>Compañia: {props.company}</span>
            </div>
        </div>

    );
}

export default Posts;