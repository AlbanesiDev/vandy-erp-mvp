import { Injectable, inject, signal } from "@angular/core";
import {
  Auth,
  AuthProvider,
  GoogleAuthProvider,
  UserCredential,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  signInWithRedirect,
  signOut,
  updateProfile,
  user,
} from "@angular/fire/auth";
import { UserInterface } from "../models/auth.model";
import { Observable, from } from "rxjs";
import { DeviceDetService } from "../services/device-det.service";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  firebaseAuth = inject(Auth);
  deviceDetector = inject(DeviceDetService);
  user$ = user(this.firebaseAuth);
  currentUserSig = signal<UserInterface | null | undefined>(undefined);
  userAuthSig = signal<boolean>(false);

  public registerWithEmail(username: string, email: string, password: string): Observable<void> {
    try {
      const promise = createUserWithEmailAndPassword(this.firebaseAuth, email, password).then((response) =>
        updateProfile(response.user, { displayName: username }),
      );
      return from(promise);
    } catch (error) {
      throw error;
    }
  }
  public loginWithEmail(email: string, password: string): Observable<void> {
    try {
      const promise = signInWithEmailAndPassword(this.firebaseAuth, email, password).then(() => {});
      return from(promise);
    } catch (error) {
      throw error;
    }
  }
  public signInWithGoogle(): Promise<UserCredential> {
    const provider = new GoogleAuthProvider();
    return this.deviceDetector.isMobile() ? this.#callRedirect(provider) : this.#callPopUp(provider);
  }

  public async signOut(): Promise<void> {
    try {
      const auth = getAuth();
      await signOut(auth);
    } catch (error) {
      throw error;
    }
  }

  async #callRedirect(provider: AuthProvider): Promise<UserCredential> {
    try {
      const auth = getAuth();
      return signInWithRedirect(auth, provider);
    } catch (error: any) {
      return error;
    }
  }

  async #callPopUp(provider: AuthProvider): Promise<UserCredential> {
    try {
      const result = await signInWithPopup(getAuth(), provider);
      return result;
    } catch (error: any) {
      return error;
    }
  }
}
