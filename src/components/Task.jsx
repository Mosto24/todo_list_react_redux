import { useDispatch, useSelector } from "react-redux";
import { deleteTask, redactTask } from "../store/tasksReducer";
import { useState } from "react";
import '../styles/taskComponent.sass'
import Modal from "./Modal";

export const Task = (props) => {
    const languageReducer = useSelector(state => state.languageReducer)
    const dispatch = useDispatch();
    let [newName, setNewName] = useState(props.name);
    let [newText, setNewText] = useState(props.text);
    let [isRedactMode, setRedactMode] = useState(false);
    return (
        <div className="taskBlock" id={props.id}>
            <div className="taskName">
                <p>{props.name}</p>
                <div>
                <button className="changeText" onClick={() => setRedactMode(true)}>
                    <img src="/public/svg/icon_pencil_.svg" alt="" />
                </button>
                <button className="sucsess" onClick={() => dispatch(deleteTask({id: props.id}))}>
                    <img src="/public/svg/icon_check_.svg" alt="" />
                </button>
                </div>
            </div>
            <hr />
            <p>{props.text}</p>
            {
                isRedactMode ?
                <Modal onClose={() => {
                    setNewName(props.name);
                    setNewText(props.text);
                    setRedactMode(false);
                }}
                onOk={() => {
                    dispatch(redactTask({id: props.id, name: newName, text: newText}));
                    setRedactMode(false);
                }}
                >
                    <p>{languageReducer.language == 'ru' ? languageReducer.ru.taskName : languageReducer.eng.taskName}</p>
                    <input type="text" value={newName} onChange={(e) => setNewName(e.target.value)}/>
                    <p>{languageReducer.language == 'ru' ? languageReducer.ru.taskDescription : languageReducer.eng.taskDescription}</p>
                    <input type="text" value={newText} onChange={(e) => setNewText(e.target.value)}/>
                </Modal>
                :
                ''
            }
        </div>
    );
}