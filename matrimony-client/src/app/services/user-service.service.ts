import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userEmail!: string;
  private userFullName!: string;

  constructor() { }

  // Store user's email and fullname
  storeUser(email: string, fullname: string) {
    this.userEmail = email;
    this.userFullName = fullname;
  }

  // Get user's email
  getUserEmail(): string {
    return this.userEmail;
  }

  // Get user's fullname
  getUserFullName(): string {
    return this.userFullName;
  }

  // Check if user is logged in
  isLoggedIn(): boolean {
    return !!this.userEmail && !!this.userFullName;
  }
}
