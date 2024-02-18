import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core-module/auth-service/auth.service';
import { Router } from '@angular/router';

import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  ngOnInit(): void { }
  constructor(
    private auth: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) { }
  logout() {
    this.auth.logout();
  }

}
