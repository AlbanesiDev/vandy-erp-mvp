import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MessageService } from "primeng/api";
import { ButtonModule } from "primeng/button";
import { ToastModule } from "primeng/toast";
import { InputTextModule } from "primeng/inputtext";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { PasswordModule } from "primeng/password";
import { AutoFocusModule } from "primeng/autofocus";
import { TooltipModule } from "primeng/tooltip";
import { SpeedDialModule } from "primeng/speeddial";
import { AuthService } from "../auth.service";

@Component({
  selector: "app-login",
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ToastModule,
    ButtonModule,
    InputTextModule,
    PasswordModule,
    AutoFocusModule,SpeedDialModule,
    TooltipModule,
  ],
  templateUrl: "./login.component.html",
  styleUrl: "./login.component.scss",
  providers: [MessageService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  formLogin: FormGroup;
  fb = inject(FormBuilder);
  authService = inject(AuthService);

  constructor() {
    this.formLogin = this.fb.group({
      email: ["UsuarioTest@example.com", [Validators.required, Validators.email]],
      password: ["12345678", [Validators.required, Validators.minLength(8)]],
    });
  }

  emailAuth(){
    const form = this.formLogin.value;
    if(this.formLogin.valid){
      this.authService.loginWithEmail(form.email, form.password);
    }
  }

  googleAuth(){
    this.authService.signInWithGoogle();
  }
}
