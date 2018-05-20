import {Component,OnInit} from '@angular/core';
import {Router,ActivatedRoute, Params} from '@angular/router';
//importa modelo User
import {User} from '../../models/user';
//importa el servicio
import {UserService} from '../../services/user.service';
@Component({
	selector: 'login',
	templateUrl:'./login.Component.html',
	providers:[UserService]
})

export class LoginComponent implements OnInit{
	public title:string;
	public user:User;
	public status:string;
	public identity;
	public token;

	constructor(
		private _route:ActivatedRoute,
		private _router: Router,
		private _userService:UserService
	){
	this.title='Identificate';
	this.user=new User("","","","","","","ROLE_USER","");

	}

	ngOnInit(){
		console.log('Componente de login cargado...');
	}

	onSubmit(){
		//Loguear al usuario y conseguir sus datos
		this._userService.singup(this.user).subscribe(
			response=>{
			this.identity=response.user;
			console.log(this.identity);
			if(!this.identity || !this.identity._id){
				this.status="error";
			}
			else{
				this.status="success";
				//Persistir datos del usuario
				//usar el local storage 
				//almacena informacion en memoria y se puede usar en toda la pagina. no guarda objetos de javascript, solo strings o numeros

				localStorage.setItem('identity',JSON.stringify(this.identity));

				//Conseguir el token
				this.gettoken()
			}
			this.status="success";
				console.log(response.user);
			},
			error=>{
				var errorMessage=<any>error;
				console.log(errorMessage);
				if(errorMessage != null){
					this.status="error";
				}
			}
		);
	}

	gettoken(){

		this._userService.singup(this.user,'true').subscribe(
			response=>{
			this.token=response.token;
			console.log(this.token);
			if(this.token.length<=0){
				this.status="error";
			}
			else{
				this.status="success";
				//Persistir el token del usuario
				localStorage.setItem('token',this.token);

				//Conseguir los contadores o estadisticas del usuario

			}
			this.status="success";
			},
			error=>{
				var errorMessage=<any>error;
				console.log(errorMessage);
				if(errorMessage != null){
					this.status="error";
				}
			}
		);
	}
}
