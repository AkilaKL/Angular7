import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/shared/client.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Client } from 'src/app/shared/client.model';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: []
})

export class ClientComponent implements OnInit {

  constructor(public service: ClientService, public tostr:ToastrService, public router: Router, ) { }

  ngOnInit(): void {
    this.resetForm();
  }

resetForm(form?:NgForm){
  if (form!= null)
  form.resetForm();
  this.service.formData ={
    
    Clientname: '',
    Password: '',
    ERP:'',
    
    addNewRecord:true,
  }
} 
  onSubmit(form:NgForm)
  {
    if(this.service.formData.addNewRecord==true)
    this.insertRecord(form);
   else this.updateRecord(form) ;

  }
  insertRecord(form:NgForm){
    this.service.postClient(form.value).subscribe(
      res=>{this.resetForm(form);
        this.tostr.success('Client ajouté avec succès', 'Gestion des clients');
       
          this.router.navigateByUrl('/clientprocessit', Client["Clientname"])
          
        
       

    },
    err=>{console.log(err);
    }

    );

  }
 updateRecord(form:NgForm)
 {
   this.service.putClient(form.value).subscribe(
     res=>{this.resetForm(form);
      this.tostr.success('Client modifié avec succés!', 'Gestion des clients');
      this.router.navigateByUrl('/clientprocessit');
    this.service.formData.addNewRecord=true;
  },
  err=>{console.log(err);
    this.tostr.error(err, 'Gestion des clients');
      }
   )
 }

}
