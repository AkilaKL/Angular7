import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/shared/client.model';
import { ClientService } from 'src/app/shared/client.service';
import { UserService, AuthenticationService } from 'src/app/_services';
import { User } from 'src/app/_models';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.css']
})
export class ListClientComponent implements OnInit {
  clients: Client[];
  Clientname:string;
  search;
  currentUserSubscription: Subscription;
  currentUser: User;
  users: User[] = [];
      
 

 

    constructor(
        private authenticationService: AuthenticationService,
        private userService: UserService
    ) {
        
    }

    ngOnInit() {
        this.loadAllUsers();
    }

    ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
        this.currentUserSubscription.unsubscribe();
    }

    deleteUser(id: number) {
        this.userService.delete(id).pipe(first()).subscribe(() => {
            this.loadAllUsers()
        });
    }

    private loadAllUsers() {
      this.userService.getAll().pipe(first()).subscribe(users => {
          this.users = users;
      });
  }
  
  populateForm(e:User)
  {
    
    this.userService.formData = Object.assign({},e);
    
  }
  
    


}
