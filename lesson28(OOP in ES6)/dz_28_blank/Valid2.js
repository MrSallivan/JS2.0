class Valid extends Valid2 {
	constructor(email, password, emailError = '', passwordError = '' ) {
		super( email, password )
		this.emailError = mailError,
		this.passwordError = passwordError
	}
	validate() {
		if ( (this.password.length) > 6 (&& this.email != '') ) {
		 	this.isValid = true 
		} else {
			this.isValid = false
			this.emailError = 'email empty'
			this.passwordError = 'min length 6'
		}
	}
}