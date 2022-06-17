import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, private router:Router) { }

  ngOnInit(): void {
  }
userModel = new User();

mensagem=""


 receberDados(){
  console.log(this.userModel)

  this.loginService.login(this.userModel).subscribe((Response) =>{
    console.log("Deu certo")
    localStorage.setItem("nomeUsuario", Response.body.user.nome)

    //this.router.navigateByUrl("/")

  }, (respostaErro) =>{
    console.log ("Deu erro")

   this.mensagem = respostaErro.error
    //alert(respostaErro.error)
    //alert("Erro")

    
  } )
 }
}
