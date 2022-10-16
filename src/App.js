
import './App.css';
import { Message } from './components/Message/Message';


export const App = () => {
  return <div className="App">
    <ul>
      <li>Развернуть новый проект с использованием create-react-a</li>
      <li>Создать компонент Message, отображающий переданный ему пропсом текст.</li>
      <li>Изменить компонент App так, чтобы тот рендерил Message и передавал ему пропсом текст</li>
      <li>Стилизовать компоненты через css (при желании можно использовать less или sass, однако для sass нужно дополнительно установить node-sass: документация CRA).</li>
      <li> Установить расширение React Devtools</li>
    </ul>
    <Message text={'render text'} />
  </div>
}

export default App;
