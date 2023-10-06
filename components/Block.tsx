import './Block.css'

interface BlockValueProps{
    value?: string;
    onClick?: () => void;
}

const Block: React.FC<BlockValueProps>= (props) =>{
    return(
        <>
        <div onClick={props.onClick} className='block-des'>{props.value}</div>
        </>
    )
}

export default Block