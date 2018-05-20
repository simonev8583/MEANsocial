import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {User} from '../models/user'; 
import {GLOBAL} from './global';

@Injectable()
export class UserService{
	public url:string;
	public identity;
	public token;

	constructor(public _http:HttpClient){
		this.url=GLOBAL.url;
	}
	register(user:User):Observable<any>{
		//convierte un objeto a JSON
		//let tipo de variable 
		let params=JSON.stringify(user);

		//configurar cabeceras
		let headers= new HttpHeaders().set('Content-Type','application/json');

		//peticion api
		// peticion por post
		return this._http.post(this.url+'register',params,{headers:headers});
	}

	singup(user,gettoken=null):Observable<any>{
		if(gettoken!=null){
			user.gettoken=gettoken;
		}
		let params=JSON.stringify(user);
		let headers=new HttpHeaders().set('Content-type','application/json');
		// login es metodo del api
		//params envia al api los datos 
		return this._http.post(this.url+'login',params,{headers:headers});
	}

	getIdentity(){
		let identity=JSON.parse(localStorage.getItem('identity'));

		if(identity != "undefined"){
			this.identity=identity;
		}
		else{
		this.identity=null;
		}
		return this.identity;
	}

	getToken(){
	let token=JSON.parse(localStorage.getItem('token'));

	if(token !="undefined"){
		this.token=token;
	}
	else{
		this.token=null;
	}
	return this.token;
	}
}