import { Component, OnInit } from '@angular/core';
import { MCService } from 'src/app/shared/mc.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-mc',
  templateUrl: './mc.component.html',
  styleUrls: ['./mc.component.css']
})
export class MCComponent implements OnInit {
  Clientname: string;

  constructor(public service: MCService, public tostr:ToastrService, public router: Router) { }

  ngOnInit(): void {
    this.resetForm();
    
  }

resetForm(form?:NgForm){
  if (form!= null)
  form.resetForm();
  this.service.formData ={
    
    Clientname: '',
  
    IdMC: 0,
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
  }
} 
  onSubmit(form:NgForm)
  {
    this.service.postMC(form.value).subscribe(
      res=>{this.resetForm(form);
        this.tostr.success('Client ajouté avec succès', 'Gestion des clients');
        
        

    },
    err=>{console.log(err);
    }

    );

  }

}
