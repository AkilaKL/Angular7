import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MOService } from 'src/app/shared/mo.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mo',
  templateUrl: './mo.component.html',
  styleUrls: ['./mo.component.css']
})
export class MOComponent implements OnInit {
  
  constructor(public service: MOService, public tostr:ToastrService, public router: Router) { }

  ngOnInit(): void {
    this.resetForm();
  }

resetForm(form?:NgForm){
  if (form!= null)
  form.resetForm();
  this.service.formData ={
    
    Clientname: '',
    
    IdMO:0,
    
    MOCD01 :'',
    MOCD02 :'',
    MOCD03 :'',
    MOCI01 :'',
    MOCI02 :'',
    MOCI03 :'',
    
  }
} 
  onSubmit(form:NgForm)
  {
    this.service.postMO(form.value).subscribe(
      res=>{this.resetForm(form);
        this.tostr.success('Client ajouté avec succès', 'Gestion des clients');
        

    },
    err=>{console.log(err);
    }

    );

  }
  


}
