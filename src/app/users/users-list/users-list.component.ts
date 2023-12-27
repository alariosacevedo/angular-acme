import { Component, OnInit, OnDestroy } from '@angular/core';
import { UsersService } from '../../shared/services/users.service';
import { Subscription } from 'rxjs';
import { UserDto } from '../../shared/dto/user-dto.model';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css',
  providers: [UsersService],
})

export class UsersListComponent implements OnInit, OnDestroy{
  public subscription!: Subscription;
  public errorMessage: string = '';
  public usersDtoList: UserDto[] = [];
  
  constructor(private usersService: UsersService) {}

  ngOnInit() {
  }

  ngOnDestroy() {
      this.subscription.unsubscribe();
  }
}
