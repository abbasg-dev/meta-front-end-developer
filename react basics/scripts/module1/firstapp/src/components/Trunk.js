import Bag from './Bag';
import Apples from './Apples';
import Pears from './Pears';

function Trunk() {
    return (
        <>
            <Bag children="Abbas"/>
            <Bag children={<Apples color="Red" number="5" />} />
            <Bag children={<Pears friend="Ahmad" />} />
        </>
    )
}
export default Trunk