import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import { User } from '../_models';
import { AuthenticationService, UserService } from '../_services';
import { NgForm } from '@angular/forms';
import { AddClientService } from '../shared/add-client.service';
import { AddClient } from '../shared/add-client.model';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Component({ templateUrl: 'home.component.html' , selector: 'app-home'})
export class HomeComponent implements OnInit, OnDestroy {
  @Input() data: AddClient;
    items = [
        {
          id: 1,
          text: 'Ajouter un controle'
        }]
        lc = [
          {
            id: 1,
            text: 'Ajouter un controle'
          }]
          lo = [
            {
              id: 1,
              text: 'Ajouter un controle'
            }]
    currentUser: User;
    currentSynthese: AddClient;
    currentSyntheseSubscription:Subscription; 
    currentUserSubscription: Subscription;
    users: User[] = [];
    
   

    constructor(
        private authenticationService: AuthenticationService,
        public userService: UserService,
        public service: AddClientService,
        public tostr:ToastrService,
        public router: Router,
    ) {
        this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
            this.currentUser = user;
        });
       
     
        
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
    getById(id:number){
        this.userService.getById(id).toPromise().then(res =>this.currentUser= res as User);
      }
  resetForm(form?:NgForm){
  
        if (form!= null)
        form.resetForm();
        this.userService.fomData ={
          IdSynthese :0,
          Id:0,
          user: this.currentUser,
          NomControlA: '',
          MACIN : '',
          MACDN :'',
          MACD01 :'',
          MACD02 :'',
          MACD03 :'',
          MACD04 :'',
          MACD05 :'',
          MACD06 :'',
          MACI01 :'',
          MACI02 :'',
          MACI03 :'',
          MACI04 :'',
          MACI05 :'',
          MACI06 :'',
          NomControlO : '',
          MOCIN : '',
          MOCDN :'',
          MOCD01 :'',
          MOCD02 :'',
          MOCD03 :'',
          MOCI01 :'',
          MOCI02 :'',
          MOCI03 :'',
          NomControlC: '',
          MCCIN : '',
          MCCDN : '',
          MCCD01 :'',
          MCCD02 :'',
          MCCD03 :'',
          MCCD04 :'',
          MCCD05 :'',
          MCCI01 :'',
          MCCI02 :'',
          MCCI03 :'',
          MCCI04 :'',
          MCCI05 :'',
          Date:null,
          
        }
      } 
      onSubmit(form:NgForm)
        {
          this.userService.postAddClient(form.value).subscribe(
            res=>{this.resetForm(form);
              this.tostr.success('ajouté avec succès', 'Gestion des Process IT');
              
              this.router.navigate(['home/dashboard']);
              
          
          
          
      
          },
          err=>{console.log(err);
            this.tostr.error(err, 'Gestion des Process IT');
          }
      
          );
      
        }
        OnLogout(){
          localStorage.removeItem('currentUser');
          this.router.navigate(['/login']);
        }
    
}