import './style.css'

function WriteToMe(props) {
  return(
    <div>
    <Form>
    <label name="email" id="email">Email</label>
    <input type="email"/>
    <label name='info' id="email">Email</label>
    <input name='info' type="textarea"/>
    <button type='submit'>Отправить</button>
    </Form>
    </div>
  )
}
export default writeToMe