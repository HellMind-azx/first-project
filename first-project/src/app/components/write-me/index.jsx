import './WriteToMe.css'

function WriteToMe({onClose}) {
  return(
    <div>
      <div className='form'>
        <div className='form-content'>
          <button id='close' onClick={onClose}>X</button>
          <form>
            <label name="email" id="email">E-mail</label>
            <input type="email" placeholder='E-mail'/>
            <label name="password" id="password">Password</label>
            <input type="password" placeholder='Password'/>
            <label name="phone" id="phone">Phone</label>
            <input type="number" placeholder='Your Phone'/>
            <label name='info' id="info">Write about</label>
            <input name='info' type="textarea" placeholder='Напишите о себе'/>
            <button id='submit' type='submit'>Отправить</button>
            </form>
        </div>
      </div>
    </div>
  )
}
export default WriteToMe