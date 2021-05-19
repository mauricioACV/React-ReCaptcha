import React, {useRef, useState} from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const App = () => {

	const [captchaValido, cambiarCaptchaValido] = useState(null);
	const [usuarioValido, cambiarUsuarioValido] = useState(false);

	const captcha = useRef(null);

	const onChange = () => {
		if(captcha.current.getValue()){
			console.log('Usuario no es Robot')
			cambiarCaptchaValido(true);
		}
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		if(captcha.current.getValue()){
			cambiarUsuarioValido(true);
			cambiarCaptchaValido(true);
		} else {
			cambiarUsuarioValido(false);
			cambiarCaptchaValido(false);
		}
	}

	return (
		<div className="contenedor">
			{!usuarioValido &&
				<div className="registrate">
					<h1>Registrate</h1>
					<form className="formulario" action="" onSubmit={handleSubmit}>
						<input type="text" name="usuario" id="usuario" placeholder="Usuario" />
						<input type="password" name="password" id="password" placeholder="Contraseña" />
						<input type="password" name="password2" id="password2" placeholder="Repetir Contraseña" />
						<div className="recaptcha">
							<ReCAPTCHA
								ref={captcha}
								sitekey="aqui inserto la key de google"
								onChange={onChange}
							/>
						</div>
						{captchaValido === false && <div className="error-captcha">Por favor haz click en el captcha</div>}
						<button type="submit">Iniciar Sesion</button>
					</form>
				</div>
			}
			{usuarioValido &&
				<div>
					<h1>Bienvenido</h1>
				</div>
			}
		</div>
	);
}
 
export default App;