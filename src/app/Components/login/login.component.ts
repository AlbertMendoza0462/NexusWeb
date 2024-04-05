import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router'; // Importa el Router

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public myform!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.myform = this.createMyForm();
  }

  private createMyForm(): FormGroup {
    return this.fb.group({
      correo: [],
      Clave: []
    });
  }

  public submitFormulario() {
    alert("Se va enviar un formulario");
    console.log(this.myform.value);
  }

  // Función para redirigir a otra página
  public irAOtraPagina() {
    this.router.navigate(['/otra-pagina']); // Cambia 'otra-pagina' por el path de la página a la que quieres redirigir
  }

}
