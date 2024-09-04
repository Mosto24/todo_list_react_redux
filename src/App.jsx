import { useDispatch, useSelector } from 'react-redux'
import { Task } from './components/Task.jsx';
import { addTask } from './store/tasksReducer';
import { useState } from 'react';
import './styles/button.sass'
import './styles/languages.sass'
import Modal from './components/Modal.jsx'
import { chooseLang } from './store/languageReducer.js';

function App() {
  let tasks = useSelector(state => state.tasks.tasksArray);
  let languageReducer = useSelector(state => state.languageReducer);
  let dispatch = useDispatch();
  let taskId = tasks.length > 0 ? tasks[tasks.length-1].id+1 : 1;
  let [name, setName] = useState();
  let [text, setText] = useState();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    dispatch(addTask({id: taskId, name: name, text: text}));
    setName('');
    setText('');
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setName('');
    setText('');
    setIsModalOpen(false);
  };

  return (
    <>
    <div className='languages'>
    <button onClick={() => dispatch(chooseLang({language: 'ru'}))} className={languageReducer.language == 'ru' ? 'active' : ''}>Ru</button>
    <button onClick={() => dispatch(chooseLang({language: 'eng'}))} className={languageReducer.language == 'eng' ? 'active' : ''}>Eng</button>
    </div>
    <div className='main'>
      <button className='addNewTask' onClick={() => {showModal()}}>
          {languageReducer.language == 'ru' ? languageReducer.ru.addNewTask : languageReducer.eng.addNewTask}
      </button>
      {isModalOpen ? <Modal onClose={handleCancel} onOk={handleOk}>
        <p>{languageReducer.language == 'ru' ? languageReducer.ru.taskName : languageReducer.eng.taskName}</p>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
        <p>{languageReducer.language == 'ru' ? languageReducer.ru.taskDescription : languageReducer.eng.taskDescription}</p>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
      </Modal>: ''}
      {tasks.map(i => {return <Task id={i.id} name={i.name} text={i.text}/>})}
    </div>
    </>
  )
}

export default App
