import './style.css';

function Profile({ onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="my-profile">
          <span id='my-profile-span'>Мой профиль</span>
          <button className="close-btn" onClick={onClose}>
            X
          </button>
        </div>
  
        <div className="user-img">
          <img
            src="https://img.freepik.com/free-photo/teenager-suffering-from-hangover_23-2151186157.jpg?t=st=1745041207~exp=1745044807~hmac=b84efa03281c25945f64fadd077d167f8e9d433c53f592749010926db5de10de&w=740"
            alt="User"
          />
        </div>
        <div className="important">
          <svg id='important-icon' xmlns="http://www.w3.org/2000/svg" width="10" height="" viewBox="0 0 128 472"><path fill="#f46d25" d="M43 280h42q18 0 30.5-12.5T128 237V45q0-17-12.5-29.5T85 3H43Q25 3 12.5 15.5T0 45v192q0 18 12.5 30.5T43 280m0-235h42v192H43zM0 387q0 17 12.5 29.5T43 429h42q18 0 30.5-12.5T128 387v-22q0-17-12.5-29.5T85 323H43q-18 0-30.5 12.5T0 365zm43-22h42v22H43z"/></svg>
  
          <span id='phone'>Телефон: 123-456-7890</span>
        </div>
      </div>

      <div>
        
      </div>
    </div>
  );
}

export default Profile;
