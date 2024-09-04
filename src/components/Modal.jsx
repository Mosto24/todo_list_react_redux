import { useSelector } from 'react-redux';
import '../styles/modal.sass'

const Modal = (props) => {
    const languageReducer = useSelector(state => state.languageReducer)

    return (
        <div className="modalBackgroundWindow" onClick={() => props.onClose()}>
            <div className="modal" onClick={e => e.stopPropagation()}>
                {props.children}
                <div>
                    <button onClick={() => props.onClose()}>{languageReducer.language == 'ru' ? languageReducer.ru.cancel : languageReducer.eng.cancel}</button>
                    <button onClick={() => props.onOk()}>{languageReducer.language == 'ru' ? languageReducer.ru.ok : languageReducer.eng.ok}</button>
                </div>
            </div>
        </div>
    );
}

export default Modal